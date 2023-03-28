import path, {resolve} from "path";
import fs from "fs";
import ConfigHelper from "./ConfigHelper";

export default class FileStructure {
    name = '';
    path = '';
    entry : any;

    constructor(dir : string, entry : any) {
        this.name = entry.name;
        let project_path = ConfigHelper.get('project_path');
        this.path = path.relative(project_path, resolve(dir, entry.name));
        this.entry = entry;
    }

    public static isCodeFile(fileName: string) {
        return path.extname(fileName).indexOf('.ts') != -1;
    }


    static getContent(path: string) : string {
        if (!fs.existsSync(path)) return '';

        return fs.readFileSync(path).toString();
    }
}