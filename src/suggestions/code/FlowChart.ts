import FileStructure from "../../utils/FileStructure";
import FolderStructure from "../../utils/FolderStructure";
import Suggestion from "../Suggestion";
import BaseCodePlugin from "./BaseCodePlugin";
import {CreateCompletionResponseChoicesInner} from "openai";

export default class FlowChart extends BaseCodePlugin {
    constructor(suggestion : Suggestion) {
        super('FlowChart', suggestion);
    }
    public async getPluginQuestion(text: string, folder : FolderStructure, file: FileStructure) {
        let q = 'Give me flowchart of {methodName} method in a mermaid format. '
        let question = '';
        for (let i=0;i<this.methods.length;i++) {
            if (this.methods[i].complexity < 3) continue;
            question += q.replaceAll('{methodName}', this.methods[i].name) + '\nCode:' + this.methods[i].src;
        }
        if (!question) return;

        question += 'You response should be valid json format, here is scheme' +
            '[{"name":"{{methodName}}, "flow":"{{flow}}"}]';
        return question;
    }

    public processPluginAnswer() {
        let flows = this.pluginDto.answer;
        for (let i=0;flows && i< flows.length;i++) {
            let method = super.getMethodByName(flows[i].name)
            if (method) method.flow = flows[i].flow;
        }
    }

}