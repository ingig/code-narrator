import Document from "../../../Document";
import FolderStructure from "../../../../utils/FolderStructure";
import ConfigHelper from "../../../../utils/ConfigHelper";
import Helper from "../../../../utils/Helper";
import FileStructure from "../../../../utils/FileStructure";
import DocumentationCache from "../../../DocumentationCache";
import BaseBuilder from "../BaseBuilder";
import path from "path";

export default class ConfigurationBuilder extends BaseBuilder {

    configFiles: string[] = []
    appSpecificConfigFiles: string[] = []
    updateSummary = false;

    constructor(project : any) {
        super('Configuration', project);
    }


    public async generate() {
        await this.prepareSummary();
        await this.generateAppConfigFiles();
        await this.generateGeneralConfigFiles();
        await this.generateSummary();
    }

    private async prepareSummary() {
        let document = DocumentationCache.get('Configuration');
        if (document) {
            if (document.data) {
                if (document.data.appSpecificConfigFiles) this.appSpecificConfigFiles = document.data.appSpecificConfigFiles;
                if (document.data.configFiles) this.configFiles = document.data.configFiles;
            }
        }

        if (document && !this.haveConfigFilesChanged()) {
            return;
        }
        this.updateSummary = true;
        let appName = ConfigHelper.get('name');
        let listOfFilesAndFolders = '';

        let files = FolderStructure.getFiles(ConfigHelper.get('project_path'));

        let configPath = path.join(ConfigHelper.get('project_path'), 'config');
        if (FolderStructure.exists(configPath)) {
            let configFiles = FolderStructure.getFiles(configPath);
            configFiles.forEach(configFile => {
                files.push(configFile);
            })
        }
        files.forEach(file => {
            if (file.path.indexOf('/config') != -1) {
                listOfFilesAndFolders += 'config/' + file.name + '\n';
            } else {
                listOfFilesAndFolders += file.name + '\n'
            }
        })

        let [answer, question] = await super.getAnswer('Configuration', {appName, listOfFilesAndFolders}, 'what_are_config_files');
        let jsons = Helper.getJsons(answer)
        if (jsons.length > 0) {
            let fileResults = jsons[0];
            this.appSpecificConfigFiles = [];
            this.configFiles = [];

            fileResults.forEach((file: any) => {
                if (file.isAppSpecific) {
                    this.appSpecificConfigFiles.push(file.path);
                } else if (file.isConfig) {
                    this.configFiles.push(file.path)
                }
            })
        }
    }
    private async generateSummary() {
        if (!this.updateSummary) {
            return;
        }

        let data: any = {
            appSpecificConfigFiles: this.appSpecificConfigFiles,
            configFiles: this.configFiles
        }

        let appSpecificConfigContent = '';
        for (let i = 0; i < this.appSpecificConfigFiles.length; i++) {
            appSpecificConfigContent += `--- Start ${this.appSpecificConfigFiles[0]} ---
            ${FileStructure.getContent(this.appSpecificConfigFiles[0])}
            --- End ${this.appSpecificConfigFiles[0]} ---
            `
        }

        let args = {
            appSpecificConfigFiles: this.appSpecificConfigFiles.join('\n'),
            appSpecificConfigContent,
            configFiles: this.configFiles.join('\n')
        }
        await super.generateDocumentationAndCache({
                args: args, name: 'Configuration', saveToPath:'./Configuration', pathToFile: './Configuration', folderPath: './Configuration', sidebarPosition: 3, data: data
            }

        )
    }

    private haveConfigFilesChanged() {
        let needsUpdate = false;
        for (let i=0;i<this.appSpecificConfigFiles.length;i++) {
            let configDoc = DocumentationCache.get(this.appSpecificConfigFiles[i]);
            if (this.hasChanged(configDoc)) {
                needsUpdate = true;
                i = this.appSpecificConfigFiles.length;
            }
        }

        for (let i=0;!needsUpdate && i<this.configFiles.length;i++) {
            let configDoc = DocumentationCache.get(this.configFiles[i]);
            if (this.hasChanged(configDoc)) {
                needsUpdate = true;
                i = this.configFiles.length;
            }
        }
        return needsUpdate;
    }

    private async generateAppConfigFiles() {
        for (let i = 0; i < this.appSpecificConfigFiles.length; i++) {
            let document = DocumentationCache.get(this.appSpecificConfigFiles[i])
            if (!this.hasChanged(document)) {
                continue;
            }
            this.updateSummary = true;
            let content = FileStructure.getContent(this.appSpecificConfigFiles[i])
            if (content == '') continue;

            let args = {configFile: content, fileName : this.appSpecificConfigFiles[i]}
            await super.generateDocumentationAndCache({
                    args: args,
                    template: 'app_config',
                    name: this.appSpecificConfigFiles[i],
                    pathToFile: './' + this.appSpecificConfigFiles[i],
                    folderPath: './',
                    sidebarPosition: i,
                    saveToPath: './Configuration/'
                }
            )
        }
    }

    private async generateGeneralConfigFiles() {
        for (let i = 0; i < this.configFiles.length; i++) {
            let document = DocumentationCache.get(this.configFiles[i])
            if (!this.hasChanged(document)) {
                continue;
            }
            this.updateSummary = true;
            let content = FileStructure.getContent(this.configFiles[i])
            let args = {configFile: content}
            await super.generateDocumentationAndCache({
                    args: args,
                    template: 'general_config',
                    name: this.configFiles[i], pathToFile: './' + this.configFiles[i], folderPath: './', sidebarPosition: i,
                    saveToPath: './Configuration/'
                }
            )
        }
    }

    public async render(document: Document): Promise<string> {
        return document.documentation;
    }



}