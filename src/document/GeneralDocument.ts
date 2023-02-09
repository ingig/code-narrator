import Suggestion from "../suggestions/Suggestion";
import BaseDocument from "./BaseDocument";

export default class GeneralDocument extends BaseDocument {

    summary : string;
    constructor(suggestion : Suggestion) {
        super(suggestion)
        this.summary = this.getSummary(this.suggestion);
    }
    getContent(): string {
        return this.summary;
    }


}