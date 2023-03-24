import FileStructure from "../../../utils/FileStructure";
import FolderStructure from "../../../utils/FolderStructure";
import Document from "../../Document";
import BaseCodePlugin from "./BaseCodePlugin";

export default class Code extends BaseCodePlugin {
    constructor(suggestion: Document) {
        super('Code', suggestion);
    }

    public async getPluginQuestion(text: string, folder: FolderStructure, file: FileStructure): Promise<string> {
        //generate question for gpt
        return `Generate a json text with description property that describes this class, array with list of methods in the
                class with description of those methods.
                give me numbers for how complex in relation to condition, called functions, number of lines, and loops each method is, 
                give it a complexity number on the scale 1-100. 
                You response should be valid json format and replace content in {{ }}: 
                {
                    "name": "{{ClassName}}",
                    "description": "{{ClassDescription}}",
                    "methods": [
                    {
                        "name": "{{methodName}}"
                        "description": "{{methodDescription}}",
                        "src": "{{sourceCodeForMethod}}",
                        "complexity": {{complexity}},
                        "conditions": {{numberOfConditions}},
                        "number_of_lines": {{numberOfLines}},
                        "loops": {{numberOfLoops}},
                        "called_functions": {{calledFunctions}}
                    }, {
                        ... //next method
                    }]
                }
        This is the code:${text}`;
    }

    public processPluginAnswer() {

    }


}