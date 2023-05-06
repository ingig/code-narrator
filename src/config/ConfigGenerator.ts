import ICodeNarratorConfig from "./ICodeNarratorConfig";
import DefaultSettings from "./DefaultSettings";
import ConfigQuestion from "./ConfigQuestion";
import ConfigHelper from "./ConfigHelper";
import ConfigFileSerializer from "./ConfigFileSerializer";

export default class ConfigGenerator {

    public static async generate(projectConfig: Partial<ICodeNarratorConfig> = {}): Promise<Partial<ICodeNarratorConfig>> {
        console.log('Understanding project and auto generating code-narrator.config.js')
        let config = {
            ...DefaultSettings.get(),
            ...projectConfig,
        };
        let configQuestion = new ConfigQuestion(config);
        let result = await configQuestion.getProjectSetup();
        config.gptModel = DefaultSettings.gptModel;
        config.project_file = result.project_file ?? config.project_file;
        config.source_path = result.source_path ?? config.source_path;
        config.documentation_path = this.getDocPath(config, result);
        config.test_path = result.test_path ?? config.test_path;
        try {
            result = await configQuestion.getProjectDetails(config);

            config.entry_file = result.entry_file ?? config.entry_file;
            config.cli_file = result.cli_file ?? config.cli_file;
            config.project_name = result.project_name ?? config.project_name;
            config.config_files = result.config_files ?? config.config_files;
            config.repository_url = result.repository_url ?? config.repository_url
        } catch (e) {

        }
        config.include = [...config.config_files, config.source_path + "/**/*"]
        config.builders = ConfigHelper.getUserDefinedExamples(config);

        let serializer = new ConfigFileSerializer();
        await serializer.serialize(config);
        return config;
    }

    private static getDocPath(config: ICodeNarratorConfig, json: any) {
        if (json.documentation_path?.indexOf('.') != -1) return config.documentation_path;
        return json.documentation_path ?? config.documentation_path
    }

}