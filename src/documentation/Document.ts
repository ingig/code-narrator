import fs from "fs";
import Helper from "../utils/Helper";
import ConfigHelper from "../utils/ConfigHelper";
import * as path from 'path';

export default class Document {

    id : string;
    name = '';
    path = '';
    folderPath = '';
    fileContent = '';
    documentation = '';
    isFolder = false;
    updated : Date = new Date();
    sidebar_position? : number = undefined;
    sidebar_label? : string = undefined;
    init = false;
    postInit = false;
    generator: string = '';
    saveToPath = '';
    data : any;
    documentation_type = 'md'
    question = '';

    constructor(name: string, filePath: string, folderPath : string, updated : Date, sidebar_position? : number, sidebar_label? : string) {
        this.name = name;
        let project_path = ConfigHelper.get('project_path')
        this.path = path.relative(project_path, filePath);
        this.saveToPath = this.path;
        this.id = (this.path) ? Document.getId(this.path) : Document.getId(name);
        this.folderPath = folderPath;
        this.isFolder = (filePath == folderPath);
        this.updated = updated;
        this.sidebar_position = sidebar_position;
        this.sidebar_label = sidebar_label ?? Helper.upperFirstLetter(name);
        if (!this.isFolder) {
            this.fileContent = fs.readFileSync(filePath).toString();
        }
    }

    public static getId(path: string) {
        return path;
    }


}