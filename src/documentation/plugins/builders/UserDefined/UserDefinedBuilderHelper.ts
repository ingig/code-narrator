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

    public async getAssistantMessages(build: IBuilder) {
        let assistantMessages: string[] = []
        let predefinedQuestions = this.getPredefinedQuestion(build.type);
        if (predefinedQuestions) assistantMessages.push(predefinedQuestions);
        let files = build.files;
        for (let i = 0; files && i < files.length; i++) {
            let content = FileStructure.getContent(path.join(process.cwd(), files[i].path));
            let extraInfo = '';
            if (files[i].JSONPath && files[i].path.indexOf('.json') != -1) {
                let obj = JSON.parse(content);
                for (let b = 0; b < files[i].JSONPath.length; b++) {
                    let result = jsonpath.query(obj, files[i].JSONPath[b]);
                    for (let c = 0; c < result.length; c++) {
                        extraInfo += `${files[i].JSONPath[b]}:${JSON.stringify(result[c])}\n`;
                    }
                }
            } else if (files[i].extract) {
                let extractContent = Array.isArray(files[i].extract) ? files[i].extract.join(', ') : files[i].extract;
                let question = `Extract following from file content:
                     ${extractContent} 
                     This is the file:
                     ${content}`

                let result = await this.openAIRepository.queryQuestions([question], 0, ConfigHelper.config.gptModel, ['Return JSON format'])
                let jsons = Helper.getJsons(result.answer);
                if (jsons.length > 0) {
                    extraInfo = `Content to help: ${JSON.stringify(jsons[0])}`
                }
            } else if (files[i].path.indexOf(ConfigHelper.config.document_file_extension) != -1) {
                if (files[i].path.indexOf('*') != -1) {
                    let dirFiles = this.findFiles(files[i].path);
                    dirFiles.forEach(file => {
                        let overview = this.extractContentBetweenHeaders(file.documentation);
                        extraInfo += `This is first paragraph from file "${path.basename(files[i].path)}"
                         ${overview}
                         `
                    })
                } else {
                    let overview = this.extractContentBetweenHeaders(content);
                    extraInfo = `Here is overview for ${files[i].path}\n${overview}`
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
        if (type == 'howto') {
            return `I want you to create a detailed How To guide from the user input.
            It should have Title, Introduction, Step-by-Step Instructions`
        } else if (type == 'readme') {
            return `I want you to create a detail README file for this project. Here is a description:`
        }

    }


    public extractContentBetweenHeaders(markdown: string): string {
        if (markdown.length < 350) return markdown;
        return markdown.substring(0, 350) + "...";

    }

    public findFiles(patternString: string) {
       const dir = patternString.split('/')[0];
        return DocumentationCache.getByFolderPath(dir)
    }

}