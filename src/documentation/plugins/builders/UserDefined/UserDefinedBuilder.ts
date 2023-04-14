import Document from "../../../Document";
import path from "path";
import BaseBuilder from "../BaseBuilder";
import DocumentationCache from "../../../DocumentationCache";
import FileStructure from "../../../../utils/FileStructure";
import ConfigHelper from "../../../../config/ConfigHelper";
import fs from "fs";
import jsonpath from "jsonpath";
import Helper from "../../../../utils/Helper";
import UserDefinedBuilderHelper from "./UserDefinedBuilderHelper";

export default class UserDefinedBuilder extends BaseBuilder {
    constructor() {
        super('UserDefined');
    }

    public extractPathFromContent(input: string): string | null {
        const regex = /content\(([^)]+)\)/;
        const match = input.match(regex);

        return match ? match[1] : null;
    }

    public async generate() {
        let project_path = process.cwd();
        for (let i = 0; this.config.builders && i < this.config.builders.length; i++) {
            let build = this.config.builders[i];

            let templatePath = build.template;
            templatePath = `.code-narrator/gpt_questions/${templatePath}`;

            if (!fs.existsSync(path.join(process.cwd(), `${templatePath}.liquid`))) {
                console.log(path.join(process.cwd(), templatePath))
                throw new Error(`Could not find ${build.template}.liquid template. You can create it at ${templatePath}.liquid`)

            }
            let saveToPath = build.path ?? '';
            if (saveToPath == '' && build.type == 'howto') {
                saveToPath = 'howto'
            }


            let docId = path.join(saveToPath, build.template);
            let document = DocumentationCache.get(docId)
            if (!document) {
                docId = docId + ConfigHelper.config.document_file_extension
                document = DocumentationCache.get(docId)
            }
            if (!this.hasTemplateChanged(document, templatePath)) continue;

            let helper = new UserDefinedBuilderHelper();
            helper.loadArgs(build, project_path)
            let assistantMessages = await helper.getAssistantMessages(build);


            await super.generateDocumentationAndCache({
                args: build.args ?? {},
                name: build.name,
                template: templatePath,
                pathToFile: path.join(saveToPath, build.template + ConfigHelper.config.document_file_extension),
                folderPath: saveToPath,
                saveToPath: saveToPath,
                sidebarPosition: build.sidebarPosition ?? (i + 10),
                sidebarLabel: build.sidebarLabel ?? build.name,
                assistantMessages: assistantMessages
            })

        }
    }

    public async render(document: Document) {
        return document.documentation;
    }


    private hasTemplateChanged(document: Document | undefined, templatePath: string) {
        if (!document) return true;

        let stats = fs.statSync(templatePath + '.liquid');
        return (stats.mtime.getTime() >= new Date(document.updated.toString()).getTime());

    }
}
