import Document from "../../../Document";
import FolderStructure from "../../../../utils/FolderStructure";
import Helper from "../../../../utils/Helper";
import FileStructure from "../../../../utils/FileStructure";
import DocumentationCache from "../../../DocumentationCache";
import BaseBuilder from "../BaseBuilder";
import path from "path";
import ConfigHelper from "../../../../config/ConfigHelper";

export default class ConfigurationBuilder extends BaseBuilder {

    configFiles: string[] = []
    appSpecificConfigFiles: string[] = []
    updateSummary = false;

    constructor() {
        super('Configuration');
    }


    public async generate() {
        if (ConfigHelper.config.config_files?.length == 0) return;
return;
        await this.prepareSummary();
        await this.generateAppConfigFiles();
        await this.generateGeneralConfigFiles();
        await this.generateSummary();
    }

    private async prepareSummary() {
        let document = DocumentationCache.get('Configuration');
        if (document) {

            if (document.data && this.appSpecificConfigAndCacheSameSize(document)) {
                if (document.data.appSpecificConfigFiles) this.appSpecificConfigFiles = document.data.appSpecificConfigFiles;
                if (document.data.configFiles) this.configFiles = document.data.configFiles;
            }
        }

        if (document && !this.haveConfigFilesChanged()) {
            return;
        }
        this.updateSummary = true;
        let config = ConfigHelper.config;
        let appName = config.project_name;
        let listOfFilesAndFolders = '';
        let project_path = process.cwd();
        let files = FolderStructure.getFiles(project_path, 0);

        let configPath = path.join(project_path, 'config');
        if (FolderStructure.exists(configPath)) {
            let configFiles = FolderStructure.getFiles(configPath, 0);
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

        let response = await super.getAnswer('Configuration', {
            appName,
            listOfFilesAndFolders
        }, 'what_are_config_files');
        let jsons = Helper.getJsons(response.answer)
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
            configFiles: this.configFiles,
            has_children : true
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
                args: args, name: 'Configuration', saveToPath: './Configuration',
                pathToFile: './Configuration', folderPath: './Configuration',
                sidebarPosition: 3, data: data
            }
        )
    }

    private haveConfigFilesChanged() {
        let needsUpdate = false;
        if (this.appSpecificConfigFiles.length != ConfigHelper.config.config_files.length) return true;

        for (let i = 0; i < this.appSpecificConfigFiles.length; i++) {
            let configDoc = DocumentationCache.get(this.appSpecificConfigFiles[i]);
            if (this.hasChanged(configDoc)) {
                needsUpdate = true;
                i = this.appSpecificConfigFiles.length;
            }
        }

        for (let i = 0; !needsUpdate && i < this.configFiles.length; i++) {
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

            let data : any = {
                parent : 'Configuration'
            }
            let args = {configFile: content, fileName: this.appSpecificConfigFiles[i]}
            await super.generateDocumentationAndCache({
                    args: args,
                    template: 'app_config',
                    name: this.appSpecificConfigFiles[i],
                    pathToFile: './' + this.appSpecificConfigFiles[i],
                    folderPath: './',
                    sidebarPosition: i,
                    saveToPath: './Configuration/',
                    data : data,
                prevDocument : document
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


    private appSpecificConfigAndCacheSameSize(document: Document) {
        if (!document.data) return false;
        return (document.data.appSpecificConfigFiles?.length == ConfigHelper.config.config_files.length)
    }
}