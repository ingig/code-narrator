import OpenAIRepository from "../repositories/OpenAIRepository";
import FolderStructure from "../utils/FolderStructure";
import * as fs from "fs";
import DocumentationCache from "./DocumentationCache";
import Document from "../documentation/Document";
import DocumentPlugins from "../documentation/plugins/DocumentPlugins";
import BasePlugin from "../documentation/plugins/BasePlugin";
import FileStructure from "../utils/FileStructure";
import GetStartedSummary from "../documentation/plugins/summary/GetStartedSummary";
import BehaviourSummary from "../documentation/plugins/summary/BehaviourSummary";
import Helper from "../utils/Helper";
import ProjectLogic from "./ProjectLogic";
import ConfigHelper from "../utils/ConfigHelper";
import ConfigSummary from "../documentation/plugins/summary/ConfigSummary";

export default class DocumentationBuilder {
    openAIRepository: OpenAIRepository;
    projectPath : string;
    constructor() {
        this.openAIRepository = new OpenAIRepository();
        this.projectPath = ConfigHelper.get('project_path');
    }


    public async createGetStarted() {
        let name = 'GetStarted';
        let document = DocumentationCache.get(name, this.projectPath)

        if (document) {
            return;
        }

        document = new Document(name, this.projectPath, this.projectPath, new Date(), 1, 'Get started');

        // Query GPT for project description
        let plugin = new GetStartedSummary(document);
        let question = await plugin.getQuestion('', new FolderStructure('./'))
        if (!question) return;

        let answers = await this.openAIRepository.queryQuestions([question])
        plugin.processAnswer(question, answers[0])

        DocumentationCache.set(document);

    }

    public async createBehaviour() {
        let document = DocumentationCache.get('Behaviour', this.projectPath)
        if (document) {
            return;
        }

        document = new Document('Behaviour', this.projectPath, this.projectPath, new Date(), 2);
        // Query GPT for project description
        let plugin = new BehaviourSummary(document);
        let question = await plugin.getQuestion('', new FolderStructure('./'))
        if (!question) return;

        let answers = await this.openAIRepository.queryQuestions([question])
        plugin.processAnswer(question, answers[0])
        DocumentationCache.set(document);
    }
    async createConfig() {
        let document = DocumentationCache.get('Configuration', this.projectPath)
        if (document) {
            return;
        }

        document = new Document('Configuration', this.projectPath, this.projectPath, new Date(), 3);
        let plugin = new ConfigSummary(document);
        await plugin.prepare();

        let question = await plugin.getQuestion('', new FolderStructure('./'))
        if (!question) return;

        let answers = await this.openAIRepository.queryQuestions([question])
        plugin.processAnswer(question, answers[0])
        DocumentationCache.set(document);
    }
    async createApi() {
        let fileStructureLogic = new ProjectLogic();
        let folder = await fileStructureLogic.getStructure();
        await this.queryForFolder(folder);
    }



    public async queryForFolder(folder: FolderStructure) {
        console.log('Folder:' + folder.name);
        let files = folder.files;

        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            let stats = fs.statSync(files[i].path);
            let mtime = stats.mtime;
            let name = Helper.removeExtension(file.name);

            let document = DocumentationCache.get(name, files[i].path)
            if (document && mtime.getTime() <= new Date(document.updated.toString()).getTime()) {
                continue;
            }
            document = new Document(name, file.path, folder.path, mtime, i) as Document;

            console.log('file', files[i].name);

            await this.processPlugins(document, DocumentPlugins.InitPlugins, files[i], folder);
            document.init = true;
            DocumentationCache.set(document);
            if (DocumentPlugins.PostInitPlugins.length > 0) {
                await this.processPlugins(document, DocumentPlugins.PostInitPlugins, files[i], folder);
                document.postInit = true;
            }

            DocumentationCache.set(document);
        }

        for (let i = 0; i < folder.folders.length; i++) {
            await this.queryForFolder(folder.folders[i]);
            await this.summariesFolder(folder.folders[i], i);
        }
        return DocumentationCache.Documents;
    }


    private async processPlugins(document: Document, pluginProcessors: any[], file: FileStructure, folder: FolderStructure) {


        let usedPlugins: BasePlugin[] = [];
        let questions: string[] = [];
        for (let b = 0; b < pluginProcessors.length; b++) {
            let plugin = new pluginProcessors[b](document);

            let question = await plugin.getQuestion(document.fileContent, folder, file);
            if (question) {
                usedPlugins.push(plugin)
                questions.push(question);
            }
        }

        if (questions.length == 0) {
            console.warn('Questions are empty for ' + file.name + ' path:' + file.path)
            return document;
        }

        let answers = await this.openAIRepository.queryQuestions(questions)
        for (let i = 0; i < answers.length; i++) {
            let plugin = usedPlugins[i];
            plugin.processAnswer(questions[i], answers[i])
        }
        return document;
    }

    private async summariesFolder(folder: FolderStructure, counter : number) {
        let document = DocumentationCache.get(folder.name, folder.path)
        if (document) {
            return;
        }

        let plugins: BasePlugin[] = [];
        let questions: string[] = [];
        document = new Document(folder.name, folder.path, folder.path, new Date(), 100 + counter);
        for (let b = 0; b < DocumentPlugins.FolderPlugins.length; b++) {
            let plugin = new DocumentPlugins.FolderPlugins[b](document);
            let question = await plugin.getQuestion('', folder);
            if (question) {
                questions.push(question);
                plugins.push(plugin)
            }
        }

        let answers = await this.openAIRepository.queryQuestions(questions)
        for (let i = 0; i < answers.length; i++) {
            let plugin = plugins[i];
            plugin.processAnswer(questions[i], answers[i])
        }

        DocumentationCache.set(document);
    }

    private getPluginByName(pluginName: string, suggestion: Document) {
        for (let b = 0; b < DocumentPlugins.FolderPlugins.length; b++) {
            if (DocumentPlugins.FolderPlugins[b].name == pluginName) return new DocumentPlugins.FolderPlugins[b](suggestion)

        }
        return;
    }


}