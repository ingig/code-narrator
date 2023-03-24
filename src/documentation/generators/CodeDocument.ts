import Document from "../Document";
import BaseDocument from "./BaseDocument";
import {CodeOverview} from "../plugins/code/CodeOverviewDto";

export default class CodeDocument extends BaseDocument {
    summary : string;
    methods = new Map<string, any>();

    constructor(suggestion : Document) {
        super(suggestion);

        this.summary = this.getSummary(this.document)
        let codeOverview = this.getPlugin('Code').answer as CodeOverview;
        if (!codeOverview || !Array.isArray(codeOverview.methods)) {
            this.summary += '\n```\n' + this.getPlugin('Code').answer + '```';
            return;
        }

        if (codeOverview) {

            for (let i = 0; i < codeOverview.methods.length; i++) {
                this.methods.set(codeOverview.methods[i].name, {
                    description: codeOverview.methods[i].description
                })
            }
        }
        let flowChart = this.getPlugin('FlowChart');
        let methods = flowChart.answer;
console.log('file', suggestion.name);
        for (let i=0;typeof methods != 'string' && i<methods.length;i++) {
            let m = this.methods.get(methods[i].name);
            if (m) {
                m.flow = methods[i].flow;
            }
        }

        methods = this.getPlugin('Naming').answer;

        for (let i=0;typeof methods != 'string' && i<methods.length;i++) {
            let m = this.methods.get(methods[i].name);
            if (m) {
                m.suggested_name = methods[i].suggested_name;
            }
        }
    }

    public getMyContent(): string {
        let content = this.summary + '\n\n'
        for (let [key, method] of this.methods) {
            content += '## ' + key + '\n' + method.description;
            if (method.suggested_name) {
                content += '\n:::tip\n\n' + method.suggested_name.replaceAll('\n', '\n>');
            }
            if (method.flow) {
                content += '\n### Flowchart\n'
                content += '\n```mermaid\n' + method.flow + '\n```'
            }

            content += '\n---\n'
        }
        return content;
    }


}