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
		if (!input) return null;

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
        if (!this.hasTemplateChanged(document, builder, templatePath)) return;

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


    private hasTemplateChanged(document: Document | undefined, builder : IBuilder, templatePath: string) {
        if (!document) return true;

        let filePaths = this.getAffectedFilePaths(builder) ?? [];
        filePaths.push(templatePath + '.liquid');
        for (let i=0;i<filePaths.length;i++) {
            let stats = fs.statSync(templatePath + '.liquid');
            if (stats.mtime.getTime() >= new Date(document.updated.toString()).getTime()) return true;
        }
        return false;

    }

    private getAffectedFilePaths(builder: IBuilder) {

        let filePaths = []
        if (builder.args) {
            let argKeys = Object.getOwnPropertyNames(builder.args);
            for (let i = 0; i < argKeys.length; i++) {
                filePaths.push(this.extractPathFromContent(builder.args[argKeys[i]]));
            }
        }
        for (let i = 0;builder.files && i < builder.files.length; i++) {
            filePaths.push(path.join(process.cwd(), builder.files[i].path));
        }
        return filePaths;

    }
}
