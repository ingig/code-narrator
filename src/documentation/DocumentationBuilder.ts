import OpenAIRepository from "../repositories/OpenAIRepository";
import BaseBuilder from "./plugins/builders/BaseBuilder";
import App from "../App";
import ConfigHelper from "../config/ConfigHelper";

export default class DocumentationBuilder {
    openAIRepository: OpenAIRepository;
    projectPath : string;
    constructor() {
        this.openAIRepository = new OpenAIRepository();
        this.projectPath = __dirname;
    }

    public async build() {
        let plugins = ConfigHelper.BuilderPlugins;
        for (let i=0;i<plugins.length;i++) {
            let generator = new plugins[i]() as BaseBuilder;
            await generator.generate();
        }
    }

}