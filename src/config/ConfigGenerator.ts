import ICodeNarratorConfig from "./ICodeNarratorConfig";
import FolderStructure from "../utils/FolderStructure";
import OpenAIRepository from "../repositories/OpenAIRepository";
import Helper from "../utils/Helper";
import FileStructure from "../utils/FileStructure";
import fs from "fs";
import path from "path";
import DefaultSettings from "./DefaultSettings";
import * as process from "process";

export default class ConfigGenerator {

    public static async generate(projectConfig: Partial<ICodeNarratorConfig> = {}): Promise<Partial<ICodeNarratorConfig>> {
        console.log('Understanding project and auto generating code-narrator.config.js')
        let config = {
            ...DefaultSettings.get(),
            ...projectConfig,
        };
        let foldersAndFiles = FolderStructure.getFoldersAndFiles(process.cwd()).join('\n');

        let question = `Following is the folder structure. 
        Determine the type of project this is, code language and framework. 
        From that define for the project file, source path (where code is located), documentation path, test folder path
        Return as json
        {
        project_file: string,
        source_path: string,
        documentation_path: string
        test_path: string
        }
         Folders and files in root folder are
        ###
        ${foldersAndFiles}
        `
        let openAiRepository = new OpenAIRepository();
        let response = await openAiRepository.queryQuestions([question]);
        let jsons = Helper.getJsons(response.answer);
        if (jsons.length == 0) {
            throw new Error('Could not determine the project. You should set the config when calling ConfigHelper.load')
        }

        let json = jsons[0];
        config.project_file = json.project_file ?? config.project_file;
        config.source_path = json.source_path ?? config.source_path;
        config.documentation_path = this.getDocPath(config, json);
        config.test_path = json.test_path ?? config.test_path;

        let projectFile = FileStructure.getContent(config.project_file)
        let projectDetailQuestion = `Following is the project file (${config.project_file}). 
From the file determine the project name, entry file, cli file, repository url.
        DO NOT makeup value for JSON property        
        
        ### project file starts ###
        ${projectFile}
        ### project file ends ###       
         
        Now that you know the project name, try to identify app-specific config files from the file list.
        This does NOT include project config files(e.g. package.json) or configs for dependencies. 
        The app-specific config file should be something like project_name.config or project_name.json. 
        Do not include folders and DO NOT makeup value for JSON property
           
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
        let projectDetailAnswer = await openAiRepository.queryQuestions([projectDetailQuestion]);

        jsons = Helper.getJsons(projectDetailAnswer.answer);
        if (jsons.length == 0) {
            throw new Error(`Could not get project info. GPT answer:
            ${projectDetailAnswer.answer}`)
        }
        json = jsons[0];
        config.entry_file = json.entry_file ?? config.entry_file;
        config.cli_file = json.cli_file ?? config.cli_file;
        config.project_name = json.project_name ?? config.project_name;
        config.config_files = json.config_files ?? config.config_files;
        config.repository_url = json.repository_url ?? config.repository_url
        config.include = [...config.config_files, config.source_path + "/**/*"]

        let defaultConfig = {
            entry_file: config.entry_file,
            cli_file: config.cli_file,
            project_name: config.project_name,
            config_files: config.config_files,
            repository_url: config.repository_url,
            project_file: config.project_file,
            source_path: config.source_path,
            documentation_path: config.documentation_path,
            test_path: config.test_path,
            gptModel: config.gptModel,
            include: config.include,
            exclude: config.exclude
        }
        fs.writeFileSync(path.join(process.cwd(), 'code-narrator.json'), JSON.stringify(defaultConfig))

        let questions = {
            question1: question,
            question2: projectDetailQuestion
        }
        if (!fs.existsSync(path.join(process.cwd(), '.code-narrator'))) {
            fs.mkdirSync(path.join(process.cwd(), '.code-narrator'))
        }

        fs.writeFileSync(path.join(process.cwd(), '.code-narrator/config_questions.json'), JSON.stringify(questions))
        return config;
    }


    private static getDocPath(config: ICodeNarratorConfig, json: any) {
        if (json.documentation_path?.indexOf('.') != -1) return config.documentation_path;
        return json.documentation_path ?? config.documentation_path
    }
}