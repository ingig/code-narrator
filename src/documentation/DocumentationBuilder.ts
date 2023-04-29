import OpenAIService from "../services/OpenAIService";
import BaseBuilder from "./plugins/builders/BaseBuilder";
import App from "../App";
import ConfigHelper from "../config/ConfigHelper";
import IGenericAIService from "../services/IGenericAIService";

export default class DocumentationBuilder {
    aiService: IGenericAIService;
    projectPath: string;

    constructor() {
        this.aiService = ConfigHelper.config.aiService;
        this.projectPath = __dirname;
    }

    public async build() {
        let plugins = ConfigHelper.BuilderPlugins;
        for (let i = 0; i < plugins.length; i++) {
            let generator: BaseBuilder;
            if (plugins[i].default) {
                generator = new plugins[i].default() as BaseBuilder;
            } else {
                generator = new plugins[i]() as BaseBuilder;
            }
            let userDefined = (ConfigHelper.config as any)?.userDefined;
            if (userDefined && generator.generator != 'UserDefined') {
                continue;
            }

            await generator.generateUsingPlugin();
        }
    }

}