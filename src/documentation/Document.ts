import PluginDto from "./plugins/PluginDto";
import fs from "fs";
import Helper from "../utils/Helper";

export default class Document {

    id : string;
    name = '';
    path = '';
    folderPath = '';
    fileContent = '';
    pluginDtos: PluginDto[] = []
    isFolder = false;
    updated : Date = new Date();
    sidebar_position? : number = undefined;
    sidebar_label? : string = undefined;
    init = false;
    postInit = false;

    constructor(name: string, path: string, folderPath : string, updated : Date, sidebar_position? : number, sidebar_label? : string) {
        this.name = name;
        this.path = path;
        this.id = Document.getId(name, path);
        this.folderPath = folderPath;
        this.isFolder = (path == folderPath);
        this.updated = updated;
        this.sidebar_position = sidebar_position;
        this.sidebar_label = sidebar_label ??Helper.upperFirstLetter(name);
        console.log('path:"' + path + '"')
        if (!this.isFolder) {
            this.fileContent = fs.readFileSync(path).toString();
        }
    }

    public static getId(name : string, path : string) {
        return path + '_' + name;
    }


    getPluginDto(type: string) {
        for (let i = 0; i < this.pluginDtos.length; i++) {
            if (this.pluginDtos[i].type == type) return this.pluginDtos[i];
        }
        return new PluginDto(type);
    }

    getPluginIdx(type: string) {
        for (let i = 0; i < this.pluginDtos.length; i++) {
            if (this.pluginDtos[i].type == type) return i;
        }
        return -1;
    }

    public upsertPlugin(plugin : PluginDto) {
        let idx = this.getPluginIdx(plugin.type)
        if (idx == -1) {
            this.pluginDtos.push(plugin)
        } else {
            this.pluginDtos[idx] = plugin;
        }
    }
}