import Document from "../../../Document";
import FolderStructure from "../../../../utils/FolderStructure";
import Helper from "../../../../utils/Helper";
import FileStructure from "../../../../utils/FileStructure";
import DocumentationCache from "../../../DocumentationCache";
import BaseBuilder from "../BaseBuilder";
import path from "path";
import ConfigHelper from "../../../../config/ConfigHelper";
import GenerateAppConfigFiles from "./GenerateAppConfigFiles";
import PrepareSummary from "./PrepareSummary";
import GenerateGeneralConfigFiles from "./GenerateGeneralConfigFiles";

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
        let prepareSummary = new PrepareSummary(this);
        await prepareSummary.prepareSummary();

        let generateAppConfigFiles = new GenerateAppConfigFiles(this);
        await generateAppConfigFiles.generateAppConfigFiles();

        let generateGeneralConfigFiles = new GenerateGeneralConfigFiles(this);
        await generateGeneralConfigFiles.generateGeneralConfigFiles();
        await this.generateSummary();
    }


    private async generateSummary() {
        if (!this.updateSummary) {
            return;
        }

        let data: any = {
            appSpecificConfigFiles: this.appSpecificConfigFiles,
            configFiles: this.configFiles,
            has_children: true
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



}