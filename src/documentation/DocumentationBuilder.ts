import OpenAIRepository from "../repositories/OpenAIRepository";
import ConfigHelper from "../utils/ConfigHelper";
import BaseBuilder from "./plugins/builders/BaseBuilder";

export default class DocumentationBuilder {
    openAIRepository: OpenAIRepository;
    projectPath : string;
    constructor() {
        this.openAIRepository = new OpenAIRepository();
        this.projectPath = ConfigHelper.get('project_path');
    }

    public async build(project : any) {
        let plugins = ConfigHelper.BuilderPlugins;
        for (let i=0;i<plugins.length;i++) {
            let generator = new plugins[i](project) as BaseBuilder;
            await generator.generate();
        }
    }

}