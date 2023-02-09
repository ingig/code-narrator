import Suggestion from "../Suggestion";
import FileStructure from "../../utils/FileStructure";
import BasePlugin from "../BasePlugin";
import SuggestionCache from "../../logic/SuggestionCache";
import PluginDto from "../PluginDto";
import FolderStructure from "../../utils/FolderStructure";
import {CreateCompletionResponseChoicesInner} from "openai";


export default class FolderSummary extends BasePlugin {

    constructor(suggestion : Suggestion) {
        super('FolderSummary', suggestion);
    }

    public async getQuestion(content : string, folder : FolderStructure) : Promise<string | undefined> {
        let suggestions = SuggestionCache.getByFolderPath(folder.path);

        let question = 'Following is summary of the files included in the folder ' + folder.name + '. Make summary of what is in the folder and create a list format of files with short description in .md format:\n';
        for (let i=0;i<suggestions.length;i++) {
            question += 'Filename:' + suggestions[i].name + '\nFile summary:' + this.getSummary(suggestions[i]) + '\n\n';
        }

       return question;
    }
    processPluginAnswer(): void {

    }
    private getSummary(suggestion: Suggestion) {
        for (let i=0; i<suggestion.pluginDtos.length; i++) {
            if (suggestion.pluginDtos[i].type == 'FileSummary') return suggestion.pluginDtos[i].answer;
        }
        return '';
    }


}