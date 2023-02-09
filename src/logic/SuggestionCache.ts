
import fs from "fs";
import ConfigHelper from "../utils/ConfigHelper";
import Suggestion from "../suggestions/Suggestion";
import PluginDto from "../suggestions/PluginDto";

export default class SuggestionCache {

    static Suggestions : Suggestion[] | null = null;
    static cacheFilePath = '';
    private constructor() {
        let project_path = ConfigHelper.get('project_path');
        SuggestionCache.cacheFilePath = project_path + '\\.codenarrator\\cache.json';
        if (fs.existsSync(SuggestionCache.cacheFilePath)) {
            let str = fs.readFileSync(SuggestionCache.cacheFilePath).toString();
            SuggestionCache.Suggestions = JSON.parse(str) as Suggestion[];
        } else {
            SuggestionCache.Suggestions = [];
        }
    }

    public static load() {
        new SuggestionCache();
    }
    public static getIndex(filePath : string) : number {
        for (let i=0; SuggestionCache.Suggestions && i<SuggestionCache.Suggestions.length; i++) {
            if (SuggestionCache.Suggestions[i].path == filePath) {
                return i;
            }
        }
        return -1;
    }
    public static get(filePath : string) : Suggestion | undefined {
        let idx = this.getIndex(filePath);
        if (!SuggestionCache.Suggestions || idx == -1) return;
        return SuggestionCache.Suggestions[idx];
    }


    static set(suggestion: Suggestion) {
        let idx = this.getIndex(suggestion.path);
        if (idx == -1) {
            SuggestionCache.Suggestions?.push(suggestion);
        } else {
            SuggestionCache.Suggestions![idx] = suggestion;
        }
        let content = JSON.stringify(SuggestionCache.Suggestions, null,'\t');
        fs.writeFileSync(this.cacheFilePath, content);
    }

    static getByFolderPath(path: string) {
        let suggestions : Suggestion[] = [];
        for (let i=0; SuggestionCache.Suggestions && i<SuggestionCache.Suggestions.length; i++) {
            if (SuggestionCache.Suggestions[i].folderPath == path) {
                suggestions.push(SuggestionCache.Suggestions[i])
            }
        }
        return suggestions;
    }
}