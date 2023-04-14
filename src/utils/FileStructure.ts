import path, {resolve} from "path";
import fs from "fs";

export default class FileStructure {
    name = '';
    path = '';
    entry : any;
    depth : number;
    constructor(dir : string, entry : any, depth : number) {
        this.name = entry.name;
        let project_path = process.cwd();
        this.path = path.relative(project_path, resolve(dir, entry.name));
        this.entry = entry;
        this.depth = depth;
    }

    public static isCodeFile(fileName: string) {
        return path.extname(fileName).indexOf('.ts') != -1;
    }


    static getContent(path: string) : string {
        if (!fs.existsSync(path)) return '';

        return fs.readFileSync(path).toString();
    }
}