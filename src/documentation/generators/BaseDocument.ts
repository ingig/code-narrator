import Document from "../Document";

export default abstract class BaseDocument {
    document : Document;
    protected constructor(document : Document) {
        this.document = document;
    }

    public getContent() : string {
        let str = `---
sidebar_label: ${this.document.sidebar_label}
sidebar_position: ${this.document.sidebar_position}
---
`
        return str + this.getMyContent()
    }
    abstract getMyContent() : string;

    protected getSummary(suggestion: Document) {
        for (let i=0; i<suggestion.pluginDtos.length; i++) {
            //if (suggestion.pluginDtos[i].type == 'FileSummary')
            {
                return suggestion.pluginDtos[i].answer;
            }
        }
        return '';
    }

    protected getPlugin(type : string) {
        for (let i=0; i<this.document.pluginDtos.length; i++) {
            if (this.document.pluginDtos[i].type == type) {
                return this.document.pluginDtos[i];
            }
        }
        return {answer:{text:'', methods:[]}};
    }
}