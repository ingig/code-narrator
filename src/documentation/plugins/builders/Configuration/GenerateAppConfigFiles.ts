import DocumentationCache from "../../../DocumentationCache";
import FileStructure from "../../../../utils/FileStructure";
import ConfigurationBuilder from "./ConfigurationBuilder";

export default class GenerateAppConfigFiles {
    configurationBuilder : ConfigurationBuilder;
    constructor(configurationBuilder : ConfigurationBuilder) {
        this.configurationBuilder = configurationBuilder;
    }
    public async generateAppConfigFiles() {
        for (let i = 0; i < this.configurationBuilder.appSpecificConfigFiles.length; i++) {
            let document = DocumentationCache.get(this.configurationBuilder.appSpecificConfigFiles[i])
            if (!this.configurationBuilder.hasChanged(document)) {
                continue;
            }
            this.configurationBuilder.updateSummary = true;
            let content = FileStructure.getContent(this.configurationBuilder.appSpecificConfigFiles[i])
            if (content == '') continue;

            let data : any = {
                parent : 'Configuration'
            }
            let args = {configFile: content, fileName: this.configurationBuilder.appSpecificConfigFiles[i]}
            await this.configurationBuilder.generateDocumentationAndCache({
                    args: args,
                    template: 'app_config',
                    name: this.configurationBuilder.appSpecificConfigFiles[i],
                    pathToFile: './' + this.configurationBuilder.appSpecificConfigFiles[i],
                    folderPath: './',
                    sidebarPosition: i,
                    saveToPath: './Configuration/',
                    data : data,
                    prevDocument : document
                }
            )
        }
    }

}