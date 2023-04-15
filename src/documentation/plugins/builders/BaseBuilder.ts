import OpenAIRepository from "../../../repositories/OpenAIRepository";
import Document from "../../Document";
import DocumentationCache from "../../DocumentationCache";
import {Liquid} from "liquidjs";
import path from "path";
import fs from "fs";
import {GenerateOptions} from "../GenerateOptions";
import ConfigHelper from "../../../config/ConfigHelper";
import ICodeNarratorConfig from "../../../config/ICodeNarratorConfig";
import * as process from "process";
import OpenAIResponse from "../../../model/OpenAIResponse";

/*
This is the Base class for Builder plugins. Builder plugins are used to generate questions for GPT
and then parse the response and loading it into the document object that is later cached.
 */
export default abstract class BaseBuilder {
    openAIRepository: OpenAIRepository;
    generator: string;
    config: ICodeNarratorConfig;

    protected constructor(generator: string) {
        this.openAIRepository = new OpenAIRepository();
        this.generator = generator;
        this.config = ConfigHelper.config;
    }

    abstract generate(): any;

    abstract render(document: Document): Promise<string>;

    public async getAnswer(name: string, args: any = {}, template = 'template', assistantMessages?: string[]): Promise<OpenAIResponse> {
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

        console.log(`Asking about ${name} using template ${template} for builder ${this.generator}`)
        let response = await this.openAIRepository.queryQuestions([question!], 0, ConfigHelper.config.gptModel, assistantMessages);
        console.log(`Received answer for ${name}`)
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
        let document : Document;
        if (!prevDocument) {
            document = await this.generateDocumentation({
                args,
                template,
                name,
                pathToFile,
                folderPath,
                sidebarPosition,
                assistantMessages,
                sidebarLabel, saveToPath, data
            })
        } else {
            document= prevDocument;
            document.data = data;
        }
        DocumentationCache.set(document);
    }

    public hasChanged(document?: Document) {
        return true;
        /*
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

         */
    }
}