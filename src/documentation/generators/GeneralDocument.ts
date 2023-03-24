import Document from "../Document";
import BaseDocument from "./BaseDocument";

export default class GeneralDocument extends BaseDocument {

    summary : string;
    constructor(suggestion : Document) {
        super(suggestion)
        this.summary = this.getSummary(this.document);
    }
    getMyContent(): string {
        return this.summary;
    }


}