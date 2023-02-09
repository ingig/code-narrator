import {SuggestionType} from "./SuggestionType";
import PluginDto from "./PluginDto";

export default class Suggestion {

    name = '';
    path = '';
    folderPath = '';
    pluginDtos: PluginDto[] = []
    isFolder = false;
    updated : Date = new Date();

    init = false;
    postInit = false;

    constructor(name: string, path: string, folderPath : string, isDirectory : boolean, updated : Date) {
        this.name = name;
        this.path = path;
        this.folderPath = folderPath;
        this.isFolder = isDirectory;
        this.updated = updated;
    }

    getSummary() {

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