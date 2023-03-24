import BasePlugin from "../BasePlugin";
import Document from "../../Document";
import FolderStructure from "../../../utils/FolderStructure";
import ConfigHelper from "../../../utils/ConfigHelper";
import path from "path";
import Helper from "../../../utils/Helper";
import FileStructure from "../../../utils/FileStructure";
import DocumentationCache from "../../../logic/DocumentationCache";

export default class ConfigSummary extends BasePlugin {

    configFiles: string[] = []
    appSpecificConfigFiles: string[] = []

    constructor(document: Document) {
        super('ConfigSummary', document);
    }

    //generate question for gpt
    public async getQuestion(content: string, folder: FolderStructure): Promise<string | undefined> {

        let appSpecificConfigContent = '';
        for (let i = 0; i < this.appSpecificConfigFiles.length; i++) {
            appSpecificConfigContent += `--- Start ${this.appSpecificConfigFiles[0]} ---
            ${FileStructure.getContent(this.appSpecificConfigFiles[0])}
            --- End ${this.appSpecificConfigFiles[0]} ---
            `
        }


        let q = `Return in .md format
These are the app-specific config files. Give me a detailed description of them, and what their purpose is in the application if you can decide. Give an example of usage for the app-specific configs
${this.appSpecificConfigFiles.join('\n')}

These are other configuration files, give short general information about each of them, but only if you recognize them, if you do not recognize them, then don't mention the config
${this.configFiles.join('\n')}

${appSpecificConfigContent}`

        return q;

    }

    processPluginAnswer(): void {
        this.appSpecificConfigFiles.forEach(fileName => {
            if (fileName.indexOf('config/')) fileName = fileName.replace('config/', '')
            let files = FolderStructure.searchForStringInFiles(ConfigHelper.get('source_path'), fileName);


        })
    }

    public async prepare() {
        let document = DocumentationCache.get('Configuration', './');
        if (document) {
            await this.parseAnswer(cache.pluginDtos[0].answer)
            return;
        }

        document = new Document('Configuration', './', './', new Date());

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

        let prepareQuestions = `The name of the app is "${appName}", of this list of files and folders, what do you consider as being config files

${listOfFilesAndFolders}

return this information in JSON. In the json there should be a property, isConfig: true or false. Find one or more config that is the applications specific config file then add property isAppSpecific: true, else false. This is the json scheme

[ { "path":""folder/fileName"", "isConfig":bool, "isAppSpecific": bool }, { ... } ]`
        let answers = await this.openAIRepository.queryQuestions([prepareQuestions], 0, 'gpt-3.5-turbo-0301');


        await this.parseAnswer(answers[0].message.content);

        DocumentationCache.set(document);
    }

    private async parseAnswer(content: string) {
        let jsons = Helper.getJsons(content)
        if (jsons.length > 0) {
            let fileResults = jsons[0];
            fileResults.forEach((file: any) => {
                if (file.isAppSpecific) {
                    this.appSpecificConfigFiles.push(file.path);
                } else if (file.isConfig) {
                    this.configFiles.push(file.path)
                }
            })
        }

    }
}