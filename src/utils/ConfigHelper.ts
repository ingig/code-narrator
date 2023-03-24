import * as dotnet from "dotenv";
import fs from "fs";
import path from "path";
import App from "../App";
export default class ConfigHelper {
    static env : any;
    static cn : any;
    static projectFile : any;
    public static async load() {
        dotnet.config()
        ConfigHelper.env = process.env;
        if (fs.existsSync(path.join(process.cwd(), 'code-narrator.json'))) {
            let fileContent = fs.readFileSync(path.join(process.cwd(), 'code-narrator.json'));
            ConfigHelper.cn = JSON.parse(fileContent.toString());
        }

        let projectFile = ConfigHelper.get('project_file');
        const packageJsonRaw = fs.readFileSync(path.join(process.cwd(), projectFile));
        ConfigHelper.projectFile = JSON.parse(packageJsonRaw.toString());
        if (ConfigHelper.projectFile['repository']) {
            App.repositoryUrl = ConfigHelper.projectFile['repository']['url']
        }
    }
    public static get(key : string) : string {
        let value = ConfigHelper.env[key];
        if (value) return value;
        value = ConfigHelper.cn[key] ?? '';
        if (value) return value;
        return ConfigHelper.projectFile[key] ?? '';
    }

}