import IBuilder, {ISitemap} from "./IBuilder";

export default interface ICodeNarratorConfig {
    project_name : string;
    repository_url : string;
    project_file: string;
    config_files: string[]; //if you have specific app config file, e.g. for code-narrator, "code-narrator.config.ts" is the app config file
    entry_file: string;
    cli_file: string;
    project_path: string;
    source_path: string;
    documentation_path: string;
    test_path: string;
    exclude : string[];
    readmeRoot: boolean;
    builderPlugins: any[]
    generatorPlugin: any[]
    gptSystemCommands: string[]
    documentation_type: string
    document_file_extension: string
    rootFileName : string;
    cache_file: string;
    gptModel : string;
    builders : IBuilder[]
    include : string[];
    sitemap : ISitemap;
}