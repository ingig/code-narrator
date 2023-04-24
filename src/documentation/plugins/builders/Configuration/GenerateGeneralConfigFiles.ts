import ConfigurationBuilder from "./ConfigurationBuilder";
import DocumentationCache from "../../../DocumentationCache";
import FileStructure from "../../../../utils/FileStructure";

export default class GenerateGeneralConfigFiles {
    configurationBuilder : ConfigurationBuilder;
    constructor(configurationBuilder : ConfigurationBuilder) {
        this.configurationBuilder = configurationBuilder;
    }


    public async generateGeneralConfigFiles() {
        for (let i = 0; i < this.configurationBuilder.configFiles.length; i++) {
            let document = DocumentationCache.get(this.configurationBuilder.configFiles[i])
            if (!this.configurationBuilder.hasChanged(document)) {
                continue;
            }
            this.configurationBuilder.updateSummary = true;
            let content = FileStructure.getContent(this.configurationBuilder.configFiles[i])
            let args = {configFile: content}
            await this.configurationBuilder.generateDocumentationAndCache({
                    args: args,
                    template: 'general_config',
                    name: this.configurationBuilder.configFiles[i], pathToFile: './' + this.configurationBuilder.configFiles[i], folderPath: './', sidebarPosition: i,
                    saveToPath: './Configuration/'
                }
            )
        }
    }

}