import * as dotnet from "dotenv";
import ICodeNarratorConfig from "./ICodeNarratorConfig";
import DefaultSettings from "./DefaultSettings";
import ConfigGenerator from "./ConfigGenerator";
import IBuilder from "./IBuilder";
import OpenAIService from "../services/OpenAIService";


/*
ref: src/config/ICodeNarratorConfig.ts
 */
export default class ConfigHelper {
    static env: any;
    static OpenAiKey : string;
    static DocumentingProject: any;
    static BuilderPlugins: any[] = [];
    static DocumentationType = 'md';
    static DocumentExtension = '.md';
    static CacheFilePath = '.code-narrator/cache.json';
    static config: ICodeNarratorConfig;

    public static async load(projectConfig: Partial<ICodeNarratorConfig> = {}) {
        dotnet.config()
        ConfigHelper.env = process.env;
        ConfigHelper.OpenAiKey = ConfigHelper.env['OPENAI_API_KEY']

        if (!ConfigHelper.OpenAiKey) {
            console.error('Missing OPENAI_API_KEY in .env file. Make sure to create .env file in your root and include OPENAI_API_KEY=Your_OpenAI_Key')
            throw new Error('Missing OpenAI API key')
        }

        if (!(projectConfig as any).fromFile) {
            projectConfig = await ConfigGenerator.generate(projectConfig);
            console.log(`
============ Config generated =====================================
Config file has been generated in project root, code-narrator.config.js. 
            
Please read through it and see if it maps correctly to your project. You can modify it. 
The important properties to look at are "source_path", "include" and "config_files" if you have some app specific config files.

Next time you will run the CLI it will start generating documentation
===================================================================`)
            process.exit(1);
        }

        this.config = {
            ...DefaultSettings.get(),
            ...projectConfig,
        };

        if (!this.config.exclude.includes(`*${this.config.document_file_extension}`)) {
            this.config.exclude.push(`*${this.config.document_file_extension}`)
        }

        ConfigHelper.DocumentingProject = this.config.documentation_path;
        ConfigHelper.BuilderPlugins = this.config.builderPlugins;
        ConfigHelper.DocumentExtension = this.config.document_file_extension ?? '.md';
        ConfigHelper.DocumentationType = this.config.documentation_type ?? 'md'
        if (ConfigHelper.DocumentExtension.indexOf('.') != 0) ConfigHelper.DocumentExtension = '.' + ConfigHelper.DocumentExtension;
        if (projectConfig.aiService) {
            this.config.aiService = new projectConfig.aiService()
        } else {
            this.config.aiService = new OpenAIService();
        }
        ConfigHelper.CacheFilePath = this.config.cache_file ?? '.code-narrator/cache.json';
    }

    public static getUserDefinedExamples(config : ICodeNarratorConfig) {
        let readMeBuilder: IBuilder = {
            name: "README",
            type: "README",
            template: "README",
            sidebarPosition: 1,
            args:
                {
                    entryFileContent: `content(${config.project_file ?? ''})`
                }
        }
        let howToPage : IBuilder = {
            name : "HowTo Example",
            type : "howto",
            template : "howto_create_howto"
        }
        let howToBuilder : IBuilder = {
            name : "HowTo Overview",
            type : "README",
            template : 'overview_readme',
            path : 'howto',
            files : [
                {
                    path: 'howto/*.md'

                }
            ],
            pages : [
                howToPage
            ]
        }
        return [readMeBuilder, howToBuilder]
    }
}