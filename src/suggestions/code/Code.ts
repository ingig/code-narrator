import FileStructure from "../../utils/FileStructure";
import FolderStructure from "../../utils/FolderStructure";
import BasePlugin from "../BasePlugin";
import PluginDto from "../PluginDto";
import Suggestion from "../Suggestion";
import Helper from "../../utils/Helper";
import BaseCodePlugin from "./BaseCodePlugin";
import {CreateCompletionResponseChoicesInner} from "openai";

export default class Code extends BaseCodePlugin {
    constructor(suggestion : Suggestion) {
        super('Code', suggestion);
    }
    public async getPluginQuestion(text: string, folder : FolderStructure, file: FileStructure) {
       let q = 'Generate a json text with description property that describes this class, array with list of methods in the' +
            ' class with description of those methods.' +
            ' give me numbers for how complex in relation to condition, called functions, number of lines, and loops each method is, ' +
           'give it a complexity number on the scale 1-100. '
            q += 'You response should be valid json format and replace content in {{ }}: {\n' +
                '    "name": "{{ClassName}}",\n' +
                '    "description": "{{ClassDescription}}",\n' +
                '    "methods": [\n' +
                '        {\n' +
                '            "name": "{{methodName}}",\n' +
                '            "description": "{{methodDescription}}",\n' +
                '            "src": "{{sourceCodeForMethod}}",\n' +
                '            "complexity": {{complexity}},\n' +
                '            "conditions": {{numberOfConditions}},\n' +
                '            "number_of_lines": {{numberOfLines}},\n' +
                '            "loops": {{numberOfLoops}},\n' +
                '            "called_functions": {{calledFunctions}}\n' +
                '        }]}'
        q += '\n\nThis is the code:\n' + text;
        return q;
    }

    public processPluginAnswer() {

    }


}