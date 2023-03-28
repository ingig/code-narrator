import Document from "../../../Document";
import fs from "fs";
import path from "path";
import ConfigHelper from "../../../../utils/ConfigHelper";
import BaseBuilder from "../BaseBuilder";
import DocumentationCache from "../../../DocumentationCache";
import FileStructure from "../../../../utils/FileStructure";

export default class UsageBuilder extends BaseBuilder {
    constructor(project : any) {
        super('Usage', project);
    }

    public async generate() {
        let document = DocumentationCache.get('Usage')
        if (document) return;

        let project_path = this.project.project_path;
        const projectFile = FileStructure.getContent(path.join(project_path, this.project.project_file));
        const cliFile = FileStructure.getContent(path.join(project_path, this.project.cli_file ?? this.project.entry_file));
        const configFile = FileStructure.getContent(path.join(project_path, this.project.config_file));

        let args = {projectName : this.project.project_name, projectFile, cliFile, configFile};
        await super.generateDocumentationAndCache({
            args,
            name: "Usage",
            pathToFile: './',
            folderPath: './',
            sidebarPosition: 5,
            sidebarLabel: 'Usage'
        })

    }

    public async render(document: Document) {
        return document.documentation;
    }
}
