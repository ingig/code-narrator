import FolderStructure from "../utils/FolderStructure";
import process from "process";
import OpenAIService from "../services/OpenAIService";
import Helper from "../utils/Helper";
import FileStructure from "../utils/FileStructure";
import ICodeNarratorConfig from "./ICodeNarratorConfig";
import ConfigHelper from "./ConfigHelper";
import IGenericAIService from "../services/IGenericAIService";

export default class ConfigQuestion {
    aiService : IGenericAIService;
    constructor(config : ICodeNarratorConfig) {
        this.aiService = config.aiService;
    }
    public async getProjectSetup() {
        let foldersAndFiles = FolderStructure.getFoldersAndFiles(process.cwd()).join('\n');

        let question = `From the folder & file structure define for the project file, source path (where code is located), documentation folder path, test folder path. 
        DO NOT makeup value for JSON property 
        Return JSON scheme
        {
        project_file: string,
        source_path: string,
        documentation_path: string
        test_path: string
        }
        Folders structure and files in root folder are
        ###
        ${foldersAndFiles}
        ###
        `

        let response = await this.aiService.query([question]);
        let jsons = Helper.getJsons(response.answer);
        if (jsons.length == 0) {
            throw new Error('Could not determine the project. You should set the config when calling ConfigHelper.load')
        }

        return jsons[0];
    }

    public async getProjectDetails(config : ICodeNarratorConfig) {
        let foldersAndFiles = FolderStructure.getFoldersAndFiles(process.cwd()).join('\n');
        let projectFile = FileStructure.getContent(config.project_file)
        let projectDetailQuestion = `Following is the project file (${config.project_file}). 
From the file determine the project name, entry file, cli file, repository url.

        ### project file starts ###
        ${projectFile}
        ### project file ends ###       
         
From project name, try to identify app-specific config files from the file list.
This does NOT include project config files(e.g. package.json), environment files or configs for dependencies. 
The app-specific config file should be something like project_name.config, project_name.json, project_name.xml. 
DO NOT makeup value for JSON property, set the value as empty if you cannot determine it
           
        ### folders and files starts ###
        ${foldersAndFiles}
        ### folders and files ends ###
        
        Return json 
        {
        project_name: string,
        entry_file: string,
        cli_file: string,
        config_files: string[]
        repository_url : string
        }
        `
        let projectDetailAnswer = await this.aiService.query([projectDetailQuestion]);

        let jsons = Helper.getJsons(projectDetailAnswer.answer);
        if (jsons.length == 0) {
            throw new Error(`Could not get project info. GPT answer:
            ${projectDetailAnswer.answer}`)
        }
        return jsons[0];
    }
}