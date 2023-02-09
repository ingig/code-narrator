import path, {resolve} from "path";

export default class FileStructure {
    name = '';
    path = '';
    entry : any;

    constructor(dir : string, entry : any) {
        this.name = entry.name;
        this.path = resolve(dir, entry.name);
        this.entry = entry;
    }

    public static isCodeFile(fileName: string) {
        return path.extname(fileName).indexOf('.ts') != -1;
    }
}