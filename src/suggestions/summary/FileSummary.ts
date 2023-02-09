import Suggestion from "../Suggestion";
import FileStructure from "../../utils/FileStructure";
import BasePlugin from "../BasePlugin";
import SuggestionCache from "../../logic/SuggestionCache";
import PluginDto from "../PluginDto";
import FolderStructure from "../../utils/FolderStructure";
import {CreateCompletionResponseChoicesInner} from "openai";


export default class FileSummary extends BasePlugin {

    constructor(suggestion : Suggestion) {
        super('FileSummary', suggestion);
    }

    public async getQuestion(text: string, folder : FolderStructure, file: FileStructure) : Promise<string | undefined> {
        let question = 'Write a summary for the content of this file in .md format. Name of file is ' + file.name + '. '
        question += this.getByFilename(text, file);
        question += " \nThis is the content of the file:\n\n" + text;

        return question;
    }

    processPluginAnswer(): void {
        /*
        This can be left empty, but if you want work with the answer you can do it here.
        The answer is provided in the this.answer variable.
        If you expected json from the question, this.answer will be an object if json parsing was successfully

         */
    }

    private getByFilename(text : string, file: FileStructure) {
        if (file.name == '.gitignore') {
            return 'This is a gitignore file. Write general description of what gitignore file does. Do not list any of the content. That could cause a security risk.'
        } else if (file.name == 'tsconfig.json') {
            return 'This is tsconfig file, can you describe the properties that are set. '
        } else if (file.name.indexOf('.ts') != -1) {
            return 'Act as a documentation expert and a co-developer, write summary for the code, for each method write a description of it. List out the parameters in methods (only if there are any) and write a description for each paramater. Explain technical concepts in simple terms. Divide the document into sections with clear headings and subheadings. Add an example of the usage of the code.\n' +
                'When responding, use a mix of the writing styles of Andrej Karpathy, Francois Chollet, Jeremy Howard, and Yann LeCun. Give me multiple different examples of how to use this  class'
            //return 'Act as a documentation expert and a co-developer, write summary for the code, for each method write a description and provide line number in () behind the name. Create a list of incoming parameters and explain them. Explain technical concepts in simple terms. Divide the document into sections with clear headings and subheadings. Write in active voice to make sentences more engaging and easier to follow'
        }
        return '\n\nAdd a smiley emoji at the end of your suggested response. '
    }


}