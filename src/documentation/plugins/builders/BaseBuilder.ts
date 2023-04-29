import IGenericAIService from "../../../services/OpenAIService";
import Document from "../../Document";
import DocumentationCache from "../../DocumentationCache";
import {Liquid} from "liquidjs";
import path from "path";
import fs from "fs";
import {GenerateOptions} from "../GenerateOptions";
import ConfigHelper from "../../../config/ConfigHelper";
import ICodeNarratorConfig from "../../../config/ICodeNarratorConfig";
import * as process from "process";
import GenericAIResponse from "../../../model/GenericAIResponse";
import DocumentationGenerator from "../../DocumentationGenerator";

/*
This is the Base class for Builder plugins. Builder plugins are used to generate questions for GPT
and then parse the response and loading it into the document object that is later cached.
 */
export default abstract class BaseBuilder {
    aiService: IGenericAIService;
    generator: string;
    config: ICodeNarratorConfig;

    protected constructor(generator: string) {
        this.aiService = ConfigHelper.config.aiService;
        this.generator = generator;
        this.config = ConfigHelper.config;
    }

    public async generateUsingPlugin() {
        await this.generate();
    }
    abstract generate(): Promise<any>;

    public async getAnswer(name: string, args: any = {}, template = 'template', assistantMessages?: string[]): Promise<GenericAIResponse> {
        const engine = new Liquid({
            extname: '.liquid'
        });
        if (!args.projectName) {
            args.projectName = ConfigHelper.config.project_name;
        }
        if (!args.fileName && name) {
            args.fileName = name
        }

        let template_path = path.join(__dirname, `${this.generator}/${template}`);
        if (this.generator == 'UserDefined') {
            template_path = path.join(process.cwd(), template);
        }
        if (!fs.existsSync(template_path + '.liquid')) {
            throw new Error(`Cannot find path ${template_path}`)
        }
        let question = await engine.renderFile(template_path, args)

        console.log(`${new Date().toLocaleTimeString()} - Asking about ${name} using template ${template} for builder ${this.generator}`)
        let response = await this.aiService.query([question!], assistantMessages);
        console.log(`${new Date().toLocaleTimeString()} - Received answer for ${name}`)
        return response;
    }

    public async generateDocumentation({
                                           args = {},
                                           template = 'gpt_question',
                                           name,
                                           pathToFile,
                                           folderPath,
                                           sidebarPosition,
                                           assistantMessages,
                                           sidebarLabel, saveToPath, data
                                       }: GenerateOptions) {
        if (!name) {
            throw new Error(`name is missing when trying to generate ${template} for ${pathToFile}`)
        }

        let response = await this.getAnswer(name, args, template, assistantMessages)
        let document = new Document(name, pathToFile, folderPath, new Date(), sidebarPosition, sidebarLabel)
        document.documentation = response.answer;
        document.requestMessages = response.requestMessages;
        document.documentation_type = ConfigHelper.DocumentationType;
        document.generator = this.generator;
        document.saveToPath = (saveToPath) ? saveToPath : path.dirname(pathToFile);
        document.data = data;
        return document;
    }

    /*
        This is where the magic happens. Retrieve the question from liquid file, input the args, ask GPT, create the document and store it in cache
    */
    public async generateDocumentationAndCache({
                                                   args = {},
                                                   template = 'gpt_question',
                                                   name,
                                                   pathToFile,
                                                   folderPath,
                                                   sidebarPosition,
                                                   sidebarLabel,
                                                   saveToPath,
                                                   assistantMessages,
                                                   data, prevDocument
                                               }: GenerateOptions) {

        let document = await this.generateDocumentation({
            args,
            template,
            name,
            pathToFile,
            folderPath,
            sidebarPosition,
            assistantMessages,
            sidebarLabel, saveToPath, data
        })

        DocumentationCache.set(document);

        let documentGenerator = new DocumentationGenerator();
        documentGenerator.make(document);
    }

    public hasChanged(document?: Document) {
        if (!document) return true;

        let project_path = process.cwd();
        let filePath = path.join(project_path, document.path);
        if (!fs.existsSync(filePath)) {
            DocumentationCache.remove(document)
            return false;
        }
        if (document.documentation_type && document.documentation_type != ConfigHelper.DocumentationType) return true;

        let stats = fs.statSync(filePath);
        return (stats.mtime.getTime() >= new Date(document.updated.toString()).getTime());

    }
}