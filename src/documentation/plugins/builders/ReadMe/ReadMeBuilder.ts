import Document from "../../../Document";
import fs from "fs";
import path from "path";
import App from "../../../../App";
import ConfigHelper from "../../../../utils/ConfigHelper";
import BaseBuilder from "../BaseBuilder";
import DocumentationCache from "../../../DocumentationCache";
import FileStructure from "../../../../utils/FileStructure";

export default class ReadMeBuilder extends BaseBuilder {
    constructor(project : any) {
        super('ReadMe', project);
    }

    public async generate() {
        let document = DocumentationCache.get('ReadMe');
        if (document) {
            return;
        }
        let projectPath = this.project.project_path;
        let projectFilePath = this.project.project_file;
        const projectFile = FileStructure.getContent(path.join(projectPath, projectFilePath));
        const projectName = ConfigHelper.get('name');

        let configFilePath = this.project.config_file;
        const configFile = FileStructure.getContent((path.join(projectPath), configFilePath));

        let entryFile = this.project.entry_file;
        const entryFileContent = FileStructure.getContent((path.join(projectPath), entryFile));

        let args = {projectName, projectFile, entryFileContent, configFile, repositoryUrl: App.repositoryUrl}
        await super.generateDocumentationAndCache({
            args : args,
            name : 'ReadMe',
            pathToFile: './',
            folderPath: './',
            sidebarPosition : 1,
            sidebarLabel:'Read Me'
        })
    }

    public async render(document: Document) {
        return document.documentation;
    }

}