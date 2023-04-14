import * as dotnet from "dotenv";
import ICodeNarratorConfig from "./ICodeNarratorConfig";
import DefaultSettings from "./DefaultSettings";
import ConfigGenerator from "./ConfigGenerator";

/*
ref: ICodeNarratorConfig.ts
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
        if (!ConfigHelper.env['OPENAI_API_KEY']) {
            console.error('Missing OPENAI_API_KEY in .env file. Make sure to create .env file in your root and include OPENAI_API_KEY=Your_OpenAI_Key')
            throw new Error('Missing OpenAI API key')
        }
        ConfigHelper.OpenAiKey = ConfigHelper.env['OPENAI_API_KEY']
        this.config = DefaultSettings.get();

        if (!projectConfig.project_file) {
            projectConfig = await ConfigGenerator.generate(projectConfig);
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

        ConfigHelper.CacheFilePath = this.config.cache_file ?? '.code-narrator/cache.json';
    }


}