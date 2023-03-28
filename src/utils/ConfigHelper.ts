import * as dotnet from "dotenv";
import fs from "fs";
import path from "path";
import App from "../App";

export default class ConfigHelper {
    static env : any;
    static cn : any;
    static projectFile : any;
    static BuilderPlugins : any[] = [];
    static DocumentationType = 'md';
    static DocumentExtension = '.md';
    static CacheFilePath = '.code-narrator/cache.json';
    public static async load(config : any, project : any) {
        dotnet.config()
        ConfigHelper.env = process.env;
        ConfigHelper.cn = project;
        ConfigHelper.BuilderPlugins = config.builderPlugins;
        ConfigHelper.DocumentExtension = config.document_file_extension ?? '.md';
        ConfigHelper.DocumentationType = config.documentation_type ?? 'md'
        if (ConfigHelper.DocumentExtension.indexOf('.') != 0) ConfigHelper.DocumentExtension = '.' + ConfigHelper.DocumentExtension;

        ConfigHelper.CacheFilePath = config.cache_file ?? '.code-narrator/cache.json';

        let projectFile = ConfigHelper.get('project_file');
        const projectFileRaw = fs.readFileSync(path.join(process.cwd(), projectFile));
        ConfigHelper.projectFile = JSON.parse(projectFileRaw.toString());
        if (ConfigHelper.projectFile['repository']) {
            App.repositoryUrl = ConfigHelper.projectFile['repository']['url']
        }
    }
    public static get(key : string) {
        let value = ConfigHelper.env[key];
        if (value) return value;
        value = ConfigHelper.cn[key] ?? '';
        if (value) return value;
        return ConfigHelper.projectFile[key] ?? '';
    }

}