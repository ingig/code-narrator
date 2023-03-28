import OpenAIRepository from "../../../repositories/OpenAIRepository";
import Document from "../../Document";
import DocumentationCache from "../../DocumentationCache";
import {Liquid} from "liquidjs";
import path from "path";
import ConfigHelper from "../../../utils/ConfigHelper";
import fs from "fs";
import {GenerateOptions} from "../GenerateOptions";

/*
This is the Base class for Builder plugins. Builder plugins are used to generate questions for GPT
and then parse the response and loading it into the document object that is later cached.
 */
export default abstract class BaseBuilder {
    openAIRepository: OpenAIRepository;
    generator: string;
    project : any;

    protected constructor(generator: string, project : any) {
        this.openAIRepository = new OpenAIRepository();
        this.generator = generator;
        this.project = project;
    }

    abstract generate() : any;

    abstract render(document: Document): Promise<string>;

    public async getAnswer(name: string, args: any, template = 'template') : Promise<[string, string]> {
        const engine = new Liquid({
            extname: '.liquid'
        });
        if (!args.projectName) {
            args.projectName = this.project.projectName;
        }
        if (!args.fileName) {
            args.fileName = name
        }

        let project_path = ConfigHelper.get('project_path');
        let pathToTemplate = path.join(project_path, `src/documentation/plugins/builders/${this.generator}/${template}`);
        let question = await engine.renderFile(pathToTemplate, args)
        console.log(`Asking about ${name} using template ${template}`)
        let response = await this.openAIRepository.queryQuestions([question]);
        if (!response) return ['', question];
        console.log(`Received answer for ${name}`)
        return [response[0].message!.content, question]
    }

    public async generateDocumentation({
                                           id,
                                           args,
                                           template = 'gpt_question',
                                           name,
                                           pathToFile,
                                           folderPath,
                                           sidebarPosition,
                                           sidebarLabel, saveToPath, data
                                       }: GenerateOptions) {

        let [answer, question] = await this.getAnswer(name, args, template)
        let document = new Document(name, pathToFile, folderPath, new Date(), sidebarPosition, sidebarLabel)
        document.documentation = answer;
        document.question = question;
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
                                                   id,
                                                   args,
                                                   template = 'gpt_question',
                                                   name,
                                                   pathToFile,
                                                   folderPath,
                                                   sidebarPosition,
                                                   sidebarLabel,
                                                   saveToPath,
                                                   data
                                               }: GenerateOptions) {
        let document = await this.generateDocumentation({
            id, args,
            template,
            name,
            pathToFile,
            folderPath,
            sidebarPosition,
            sidebarLabel, saveToPath, data
        })
        DocumentationCache.set(document);
    }

    public hasChanged(document?: Document) {
        if (!document) return true;

        let project_path = ConfigHelper.get('project_path')
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