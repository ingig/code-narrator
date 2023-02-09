import * as dotnet from "dotenv";
export default class ConfigHelper {
    static env : any;

    public static async load() {
        dotnet.config()
        ConfigHelper.env = process.env;
    }
    public static get(key : string) {
        return ConfigHelper.env[key];
    }

}