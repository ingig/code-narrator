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
import IBuilder from "../../../../config/IBuilder";

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

        for (let i = 0; this.config.builders && i < this.config.builders.length; i++) {
            let builder = this.config.builders[i];
            let saveToPath = builder.path ?? '';
            if (saveToPath == '' && builder.type == 'howto') {
                saveToPath = 'howto'
            }

            for (let b=0;builder.pages && b<builder.pages.length;b++) {
                await this.generateFromBuilder(builder.pages[b], saveToPath, (b+2), {parent:builder.name})
            }
            await this.generateFromBuilder(builder, saveToPath, 1, {has_children:true});
        }
    }

    public async generateFromBuilder(builder : IBuilder, saveToPath : string, position : number, data : any) {
        let project_path = process.cwd();
        let templatePath = builder.template;
        templatePath = `.code-narrator/gpt_questions/${templatePath}`;

        if (!fs.existsSync(path.join(process.cwd(), `${templatePath}.liquid`))) {
            console.log(path.join(process.cwd(), templatePath))
            throw new Error(`Could not find ${builder.template}.liquid template. You can create it at ${templatePath}.liquid`)
        }

        let docId = path.join(saveToPath, builder.template);
        let document = DocumentationCache.get(docId)
        if (!document) {
            docId = docId + ConfigHelper.config.document_file_extension
            document = DocumentationCache.get(docId)
        }
        if (!this.hasTemplateChanged(document, templatePath)) return;

        let helper = new UserDefinedBuilderHelper();
        helper.loadArgs(builder, project_path)
        let assistantMessages = await helper.getAssistantMessages(builder);

        await super.generateDocumentationAndCache({
            args: builder.args ?? {},
            name: builder.name,
            template: templatePath,
            pathToFile: path.join(saveToPath, builder.template + ConfigHelper.config.document_file_extension),
            folderPath: saveToPath,
            saveToPath: saveToPath,
            sidebarPosition: builder.sidebarPosition ?? (position + 10),
            sidebarLabel: builder.sidebarLabel ?? builder.name,
            assistantMessages: assistantMessages,
            data : data,
            prevDocument : document
        })
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
