import Suggestion from "../suggestions/Suggestion";
import BaseDocument from "./BaseDocument";

export default class FolderDocument extends BaseDocument {

    summary : string;
    constructor(suggestion : Suggestion) {
        super(suggestion)

        this.summary = this.getSummary(this.suggestion);
    }

    getContent(): string {
        return this.summary + '\n\nThis summary is for the folder ' + this.suggestion.path;
    }
}