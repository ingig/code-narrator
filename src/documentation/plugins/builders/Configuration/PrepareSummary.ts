import ConfigurationBuilder from "./ConfigurationBuilder";
import DocumentationCache from "../../../DocumentationCache";
import ConfigHelper from "../../../../config/ConfigHelper";
import FolderStructure from "../../../../utils/FolderStructure";
import path from "path";
import Helper from "../../../../utils/Helper";
import Document from "../../../Document";

export default class PrepareSummary {
    configurationBuilder : ConfigurationBuilder;
    constructor(configurationBuilder : ConfigurationBuilder) {
        this.configurationBuilder = configurationBuilder;
    }


    public async prepareSummary() {
        let document = DocumentationCache.get('Configuration');
        if (document) {

            if (document.data && this.appSpecificConfigAndCacheSameSize(document)) {
                if (document.data.appSpecificConfigFiles) this.configurationBuilder.appSpecificConfigFiles = document.data.appSpecificConfigFiles;
                if (document.data.configFiles) this.configurationBuilder.configFiles = document.data.configFiles;
            }
        }

        if (document && !this.haveConfigFilesChanged()) {
            return;
        }
        this.configurationBuilder.updateSummary = true;
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

        let response = await this.configurationBuilder.getAnswer('Configuration', {
            appName,
            listOfFilesAndFolders
        }, 'what_are_config_files');
        let jsons = Helper.getJsons(response.answer)
        if (jsons.length > 0) {
            let fileResults = jsons[0];
            this.configurationBuilder.appSpecificConfigFiles = [];
            this.configurationBuilder.configFiles = [];

            fileResults.forEach((file: any) => {
                if (file.isAppSpecific) {
                    this.configurationBuilder.appSpecificConfigFiles.push(file.path);
                } else if (file.isConfig) {
                    this.configurationBuilder.configFiles.push(file.path)
                }
            })
        }
    }

    private haveConfigFilesChanged() {
        let needsUpdate = false;
        if (this.configurationBuilder.appSpecificConfigFiles.length != ConfigHelper.config.config_files.length) return true;

        for (let i = 0; i < this.configurationBuilder.appSpecificConfigFiles.length; i++) {
            let configDoc = DocumentationCache.get(this.configurationBuilder.appSpecificConfigFiles[i]);
            if (this.configurationBuilder.hasChanged(configDoc)) {
                needsUpdate = true;
                i = this.configurationBuilder.appSpecificConfigFiles.length;
            }
        }

        for (let i = 0; !needsUpdate && i < this.configurationBuilder.configFiles.length; i++) {
            let configDoc = DocumentationCache.get(this.configurationBuilder.configFiles[i]);
            if (this.configurationBuilder.hasChanged(configDoc)) {
                needsUpdate = true;
                i = this.configurationBuilder.configFiles.length;
            }
        }
        return needsUpdate;
    }
    private appSpecificConfigAndCacheSameSize(document: Document) {
        if (!document.data) return false;
        return (document.data.appSpecificConfigFiles?.length == ConfigHelper.config.config_files.length)
    }
}