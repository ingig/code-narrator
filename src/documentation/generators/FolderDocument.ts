import Document from "../Document";
import BaseDocument from "./BaseDocument";

export default class FolderDocument extends BaseDocument {

    summary : string;
    constructor(suggestion : Document) {
        super(suggestion)

        this.summary = this.getSummary(this.document);
    }

    getMyContent(): string {
        let content = this.summary;
        if (this.document.path) content += '\n\n##### This overview\nis for the folder ' + this.document.path;
        return content;
    }
}