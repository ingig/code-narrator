import FileStructure from "../../../utils/FileStructure";
import FolderStructure from "../../../utils/FolderStructure";
import Document from "../../Document";
import BaseCodePlugin from "./BaseCodePlugin";
import {CreateCompletionResponseChoicesInner} from "openai";

export default class Naming extends BaseCodePlugin {
    constructor(suggestion : Document) {
        super('Naming', suggestion);
    }
    public async getPluginQuestion(text: string, folder : FolderStructure, file: FileStructure) {

        let q = 'How well does the name {methodName} describe the method? If it is good, do no suggestion alternative. If it not good can you list 3 options that better describe what {methodName} (methodName in json schema) does in camelCase format.'
        let questions = ''
        for (let i=0;i<this.methods.length;i++) {
            if (this.methods[i].name == 'constructor') continue;
            questions += q.replaceAll('{methodName}', this.methods[i].name) + '\nCode:' + this.methods[i].src + '\n\n';
        }
        if (questions == '') return;

        questions +=  `You response MUST be valid json format, here scheme
             [{"name":"{{methodName}}", "new_names":["{{newMethodName}}", "{{newMethodName2}}"]}]`;

        return questions;
    }

    public processPluginAnswer() {
        let methodsSuggestions = this.pluginDto.answer;
        for (let i=0;methodsSuggestions && i< methodsSuggestions.length;i++) {
            let method = super.getMethodByName(methodsSuggestions[i].name)
            if (method) method.name = methodsSuggestions[i].new_name;
        }
    }

}