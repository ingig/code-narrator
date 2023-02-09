import OpenAIRepository from "../repositories/OpenAIRepository";
import FolderStructure from "../utils/FolderStructure";
import * as fs from "fs";
import SuggestionCache from "./SuggestionCache";
import Suggestion from "../suggestions/Suggestion";
import SuggestionPlugins from "../suggestions/SuggestionPlugins";
import BasePlugin from "../suggestions/BasePlugin";
import FileStructure from "../utils/FileStructure";

export default class SuggestionBuilder {
    openAIRepository: OpenAIRepository;

    constructor() {
        this.openAIRepository = new OpenAIRepository();
    }

    public async queryForFolder(folder: FolderStructure) {
        console.log('Folder:' + folder.name);
        let files = folder.files;

        for (let i = 0; i < files.length; i++) {
            let stats = fs.statSync(files[i].path);
            let mtime = stats.mtime;

            let suggestion = SuggestionCache.get(files[i].path)
            // if (suggestion?.postInit && suggestion.init /* && new Date(suggestion.updated).toISOString() == mtime.toISOString()*/) {
            if (suggestion) {
                continue;
            }
            console.log('file', files[i].name);
            const text = fs.readFileSync(files[i].path).toString();

            if (!suggestion) {
                suggestion = await this.processPlugins(suggestion, SuggestionPlugins.InitPlugins, files[i], folder, mtime, text);
                suggestion.init = true;
                SuggestionCache.set(suggestion);
            }

            suggestion = await this.processPlugins(suggestion, SuggestionPlugins.PostInitPlugins, files[i], folder, mtime, text);
            suggestion.postInit = true;
            SuggestionCache.set(suggestion);
        }

        for (let i = 0; i < folder.folders.length; i++) {
            await this.queryForFolder(folder.folders[i]);
            await this.summariesFolder(folder);
        }
        return SuggestionCache.Suggestions;
    }

    private async processPlugins(suggestion: Suggestion | undefined, pluginProcessors: any[], file: FileStructure, folder: FolderStructure, mtime: Date, text: string) {
        if (!suggestion) {
            suggestion = new Suggestion(file.name, file.path, folder.path, false, mtime);
        }

        let usedPlugins: BasePlugin[] = [];
        let questions: string[] = [];
        for (let b = 0; b < pluginProcessors.length; b++) {
            let plugin = new pluginProcessors[b](suggestion);

            let question = await plugin.getQuestion(text, folder, file);
            if (question) {
                usedPlugins.push(plugin)
                questions.push(question);
            }
        }

        if (questions.length == 0) {
            console.warn('Questions are empty for ' + file.name + ' path:' + file.path)
            return suggestion;
        }

        let answers = await this.openAIRepository.queryQuestions(questions)
        for (let i = 0; i < answers.length; i++) {
            let plugin = usedPlugins[i];
            plugin.processAnswer(questions[i], answers[i])
        }
        return suggestion;
    }

    private async summariesFolder(folder: FolderStructure) {
        let suggestion = SuggestionCache.get(folder.path)
        if (suggestion) {
            return;
        }

        let plugins: BasePlugin[] = [];
        let questions: string[] = [];
        suggestion = new Suggestion(folder.name, folder.path, folder.path, true, new Date());
        for (let b = 0; b < SuggestionPlugins.FolderPlugins.length; b++) {
            let plugin = new SuggestionPlugins.FolderPlugins[b](suggestion);
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

        SuggestionCache.set(suggestion);
    }

    private getPluginByName(pluginName: string, suggestion: Suggestion) {
        for (let b = 0; b < SuggestionPlugins.FolderPlugins.length; b++) {
            if (SuggestionPlugins.FolderPlugins[b].name == pluginName) return new SuggestionPlugins.FolderPlugins[b](suggestion)

        }
        return;
    }
}