import FileStructure from "../../../../utils/FileStructure";
import path from "path";
import BaseBuilder from "../BaseBuilder";
import IBuilder from "../../../../config/IBuilder";
import jsonpath from "jsonpath";
import ConfigHelper from "../../../../config/ConfigHelper";
import Helper from "../../../../utils/Helper";
import OpenAIRepository from "../../../../repositories/OpenAIRepository";
import fs from "fs";
import DocumentationCache from "../../../DocumentationCache";

export default class UserDefinedBuilderHelper {

    openAIRepository: OpenAIRepository;

    constructor() {
        this.openAIRepository = new OpenAIRepository();
    }

    public extractPathFromContent(input: string): string | null {
        if (!input) return null;

        const regex = /content\(([^)]+)\)/;
        const match = input.match(regex);

        return match ? match[1] : null;
    }

    public loadArgs(build: IBuilder, project_path: string) {
        if (build.args) {
            let argKeys = Object.getOwnPropertyNames(build.args);
            for (let i = 0; i < argKeys.length; i++) {
                let filePath = this.extractPathFromContent(build.args[argKeys[i]])
                if (filePath) {
                    let content = FileStructure.getContent(path.join(project_path, filePath))
                    if (content == '') {
                        console.warn(`Content is empty for file ${filePath}`)
                    }
                    build.args[argKeys[i]] = content;
                }
            }
        }
    }

    public async getAssistantMessages(builder: IBuilder) {
        let assistantMessages: string[] = []
        let predefinedQuestions = this.getPredefinedQuestion(builder.type);
        if (predefinedQuestions) assistantMessages.push(predefinedQuestions);
        let files = builder.files ?? [];
        for (let i = 0;i < files.length; i++) {
            let content = FileStructure.getContent(path.join(process.cwd(), files[i].path));
            let extraInfo = '';
            if (files[i].path.indexOf('.json') != -1) {
                if (files[i].JSONPath) {
                    let obj = JSON.parse(content);
                    files[i].JSONPath?.forEach((path: string) => {
                        jsonpath.query(obj, path).forEach((result: any) => {
                            extraInfo += `${path}:${JSON.stringify(result)}\n`;
                        });
                    });
                } else {
                    extraInfo += `\n### start ${path.basename(files[i].path)} ###\n${content}\n### end file ###\n`
                }
            } else if (files[i].extract) {
                let extractContent = Array.isArray(files[i].extract) ? files[i].extract!.join(', ') : files[i].extract;
                let question = `Extract following from file content. You MUST return as JSON:
                     ${extractContent} 
                     This is the file:
                     ${content}`
                let result = await this.openAIRepository.queryQuestions([question], 0, ConfigHelper.config.gptModel, ['Return JSON format'])
                let jsons = Helper.getJsons(result.answer);
                if (jsons.length > 0) {
                    extraInfo += `Content to help:\n`
                    for(let b=0;b<jsons.length;b++) {
                        extraInfo += `${JSON.stringify(jsons[b])}\n`
                    }
                }
            } else if (files[i].path.indexOf(ConfigHelper.config.document_file_extension) != -1) {
                builder.args = builder.args ?? {};
                builder.args.directoryName = path.dirname(files[i].path);
                if (files[i].path.indexOf('*') != -1) {
                    let dirFiles = this.findFiles(files[i].path);
                    dirFiles.forEach(file => {
                        if (file.name.toLowerCase() != 'readme') {
                            let overview = this.extractContentBetweenHeaders(file.documentation);
                            extraInfo += `
### 1st paragraph of "${file.name}" ###
${overview}
### file ends ###
                         `
                        }
                    })
                } else {
                    let overview = this.extractContentBetweenHeaders(content);
                    extraInfo = `### 1st paragraph of "${files[i].path}" ### \n${overview}\n### file ends ###`
                }
            } else {
                extraInfo = `File Content for ${files[i].path}\n${content}`
            }
            if (extraInfo) {
                assistantMessages.push(extraInfo)
            }

        }
        return assistantMessages;
    }

    private getPredefinedQuestion(type: string) {
        type = type.toLowerCase();
        if (type == 'howto') {
            return `I want you to create a detailed How To guide from the user input.
            It should have Title, Introduction, Step-by-Step Instructions`
        } else if (type == 'readme') {
            return `I want you to create a detail README file for this project. Here is a description:`
        } else if (type == 'tutorial') {
            return `I want you to create a detailed Tutorial from the user input.
            Define the target audience, Set clear learning objectives,Provide a brief introduction,Prerequisites and system requirements,Step-by-step instructions,Include code samples`
        }

    }


    public extractContentBetweenHeaders(markdown: string): string {
        let regex = new RegExp(/^(?!#).*$/gm)
        let match = markdown.match(regex);
        for (let i=0;match && i < match.length;i++) {
            if (match[i].trim() != '') return match[i];
        }

        if (markdown.length < 350) return markdown;
        return markdown.substring(0, 350) + "...";

    }

    public findFiles(patternString: string) {
       const dir = patternString.split('/')[0];
        return DocumentationCache.getByFolderPath(dir)
    }

}