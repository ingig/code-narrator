import Document from "../../../Document";
import fs from "fs";
import path from "path";
import ConfigHelper from "../../../../utils/ConfigHelper";
import BaseBuilder from "../BaseBuilder";
import DocumentationCache from "../../../DocumentationCache";
import FileStructure from "../../../../utils/FileStructure";

export default class PrerequisitesBuilder extends BaseBuilder {
    constructor(project : any) {
        super('Prerequisites', project);
    }

    public async generate() {
        let document = DocumentationCache.get('Prerequisites')
        if (document) return;

        let project_path = this.project.project_path;
        const projectFile = FileStructure.getContent(path.join(project_path, this.project.project_file));

        let args = {projectName : this.project.project_name, projectFile};
        await super.generateDocumentationAndCache({
            args,
            name: "Prerequisites",
            pathToFile: './',
            folderPath: './',
            sidebarPosition: 4,
        })

    }

    public async render(document: Document) {
        return document.documentation;
    }
}
