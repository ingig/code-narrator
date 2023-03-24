import FileStructure from "../../../utils/FileStructure";
import FolderStructure from "../../../utils/FolderStructure";
import Document from "../../Document";
import BaseCodePlugin from "./BaseCodePlugin";

export default class NewCode extends BaseCodePlugin {
    constructor(suggestion: Document) {
        super('NewCode', suggestion);
    }

    public async getPluginQuestion(text: string, folder: FolderStructure, file: FileStructure): Promise<string> {
        let q = 'Act as a Code reviewer and provide feedback on the readability, efficiency, and performance of this code. ';
        let template = 'Would you rewrite {methodName} if you would rewrite, give me the rewritten code.\n'
        let question = q;

        for (let i = 0; i < this.methods.length; i++) {
            question += template.replaceAll('{methodName}', this.methods[i].name) + '\nCode:' + this.methods[i].src + '\n\n';
        }

        question += `You response MUST be valid json format, here is schema
            {"name":"{{nameOfMethod}}", "description":"{{descriptionOfChange}}", "src":"{{suggestedSourceChange}}"}, replace the {{ }} with your content. 
            if there are multiple methods, return JSON array response
            You can provide max 1 suggestion for each method. You dont need to provide suggestion for all methods`;


        return question;
    }

    public processPluginAnswer() {
        let methodsSuggestions = this.pluginDto.answer;

        for (let i=0;methodsSuggestions && i< methodsSuggestions.length;i++) {
            let method = super.getMethodByName(methodsSuggestions[i].name)
            if (method) method.new_code_suggestion = methodsSuggestions[i].description;
        }
    }


}