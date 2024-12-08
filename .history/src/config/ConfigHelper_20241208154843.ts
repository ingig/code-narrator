import * as dotnet from "dotenv";
import ICodeNarratorConfig from "./ICodeNarratorConfig";
import DefaultSettings from "./DefaultSettings";
import ConfigGenerator from "./ConfigGenerator";
import IBuilder from "./IBuilder";
import OpenAICompatibleService from "../services/OpenAIService";

export interface APIKeys {
    openai?: string;
    mistral?: string;
    groq?: string;
}

export default class ConfigHelper {
    static env: any;
    static apiKeys: APIKeys = {};
    static DocumentingProject: any;
    static BuilderPlugins: any[] = [];
    static DocumentationType = 'md';
    static DocumentExtension = '.md';
    static CacheFilePath = '.code-narrator/cache.json';
    static config: ICodeNarratorConfig;

    // Getter methods for API keys with proper typing
    static get OpenAiKey(): string {
        return this.apiKeys.openai || '';
    }

    static get MistralApiKey(): string {
        return this.apiKeys.mistral || '';
    }

    static get GroqApiKey(): string {
        return this.apiKeys.groq || '';
    }

    public static async load(projectConfig: Partial<ICodeNarratorConfig> = {}) {
        dotnet.config();
        ConfigHelper.env = process.env;
        
        // Load all API keys from environment
        ConfigHelper.apiKeys = {
            openai: ConfigHelper.env['OPENAI_API_KEY'],
            mistral: ConfigHelper.env['MISTRAL_API_KEY'],
            groq: ConfigHelper.env['GROQ_API_KEY']
        };

        // Check for at least one valid API key
        const hasValidKey = Object.values(ConfigHelper.apiKeys).some(key => key);
        if (!hasValidKey) {
            console.error(`
Missing API keys in .env file. Please include at least one of:
OPENAI_API_KEY=Your_OpenAI_Key
MISTRAL_API_KEY=Your_Mistral_Key
GROQ_API_KEY=Your_Groq_Key
            `);
            throw new Error('Missing API keys');
        }

        if (!(projectConfig as any).fromFile) {
            projectConfig = await ConfigGenerator.generate(projectConfig);
            console.log(`
============ Config generated =====================================
Config file has been generated in project root, code-narrator.config.js. 

Please read through it and see if it maps correctly to your project. You can modify it. 
The important properties to look at are "source_path", "include" and "config_files" if you have some app specific config files.

Next time you run the CLI it will start generating documentation
===================================================================`);
            process.exit(1);
        }

        this.config = {
            ...DefaultSettings.get(),
            ...projectConfig,
        };

        if (!this.config.exclude.includes(`*${this.config.document_file_extension}`)) {
            this.config.exclude.push(`*${this.config.document_file_extension}`);
        }

        ConfigHelper.DocumentingProject = this.config.documentation_path;
        ConfigHelper.BuilderPlugins = this.config.builderPlugins;
        ConfigHelper.DocumentExtension = this.config.document_file_extension ?? '.md';
        ConfigHelper.DocumentationType = this.config.documentation_type ?? 'md';
        
        if (ConfigHelper.DocumentExtension.indexOf('.') != 0) {
            ConfigHelper.DocumentExtension = '.' + ConfigHelper.DocumentExtension;
        }

        // Initialize AI service with default or specified provider
        if (projectConfig.aiService) {
            this.config.aiService = new projectConfig.aiService();
        } else {
            // Determine default provider based on available API keys
            let defaultProvider = 'openai';
            if (!this.OpenAiKey) {
                if (this.MistralApiKey) defaultProvider = 'mistral';
                else if (this.GroqApiKey) defaultProvider = 'groq';
            }
            this.config.aiService = new OpenAICompatibleService(defaultProvider);
        }

        ConfigHelper.CacheFilePath = this.config.cache_file ?? '.code-narrator/cache.json';
    }

    public static getUserDefinedExamples(config: ICodeNarratorConfig) {
        let readMeBuilder: IBuilder = {
            name: "README",
            type: "README",
            template: "README",
            sidebarPosition: 1,
            args: {
                entryFileContent: `content(${config.project_file ?? ''})`
            }
        };

        let howToPage: IBuilder = {
            name: "HowTo Example",
            type: "howto",
            template: "howto_create_howto"
        };

        let howToBuilder: IBuilder = {
            name: "HowTo Overview",
            type: "README",
            template: 'overview_readme',
            path: 'howto',
            files: [
                {
                    path: 'howto/*.md'
                }
            ],
            pages: [
                howToPage
            ]
        };

        return [readMeBuilder, howToBuilder];
    }
}