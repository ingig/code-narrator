import Suggestion from "../suggestions/Suggestion";

export default abstract class BaseDocument {
    suggestion : Suggestion;
    protected constructor(suggestion : Suggestion) {
        this.suggestion = suggestion;
    }
    abstract getContent() : string;

    protected getSummary(suggestion: Suggestion) {
        for (let i=0; i<suggestion.pluginDtos.length; i++) {
            if (suggestion.pluginDtos[i].type == 'FileSummary') {
                return suggestion.pluginDtos[i].answer;
            }
        }
        return '';
    }

    protected getPlugin(type : string) {
        for (let i=0; i<this.suggestion.pluginDtos.length; i++) {
            if (this.suggestion.pluginDtos[i].type == type) {
                return this.suggestion.pluginDtos[i];
            }
        }
        return {answer:{text:'', methods:[]}};
    }
}