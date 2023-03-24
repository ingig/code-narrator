import Document from "../../Document";
import FileStructure from "../../../utils/FileStructure";
import BasePlugin from "../BasePlugin";
import FolderStructure from "../../../utils/FolderStructure";
import Helper from "../../../utils/Helper";


export default class FileSummary extends BasePlugin {

    constructor(document: Document) {
        super('FileSummary', document);
    }

    //generate question for gpt
    public async getQuestion(text: string, folder: FolderStructure, file: FileStructure): Promise<string | undefined> {
        let fileName = Helper.removeExtension(file.name) ?? file.name;
        let question = `Act as a documentation expert. Write in-depth documentation about following file. 
        Return answers in .md format. 
        Headline of md file should be "${fileName}"
        ${this.getByFilename(text, file)}
        This is the content of the file:
        ${text}`

        return question;
    }

    processPluginAnswer(): void {
        /*
        This can be left empty, but if you want work with the answer you can do it here.
        The answer is provided in the this.answer variable.
        If you expected json from the question, this.answer will be an object if json parsing was successfully

         */
    }

    private getByFilename(text: string, file: FileStructure): string {
        if (file.name == '.gitignore') {
            return 'This is a gitignore file. Write general description of what gitignore file does. Do not list any of the content. That could cause a security risk.'
        } else if (file.name == 'tsconfig.json') {
            return 'This is tsconfig file, can you describe the properties that are set. '
        } else if (file.name.indexOf('.ts') != -1) {
            return `
                    Write detailed description for the code that will follow. 
                    Give multiple examples of how to use this class before listing each method
                    Create a description for each method in the code. 
                    List out the parameters in methods (only if there are any) and write a description for each parameter.
                    Explain technical concepts that are not standard but come apparent in the code. Example of a standard concept is JSON.
                    Divide the document into sections with clear headings and subheadings.
                    `

            //return 'Act as a documentation expert and a co-developer, write summary for the code, for each method write a description and provide line number in () behind the name. Create a list of incoming parameters and explain them. Explain technical concepts in simple terms.
            // Divide the document into sections with clear headings and subheadings. Write in active voice to make sentences more engaging and easier to follow'
        } else if (file.name.indexOf('.json') != -1) {
            return `Write description and summary for the json that will follow. 
            Describe each property in the json file and give example of how to set it up. 
            Display the path where the json file should be located.`
        }
        return '\n\nAdd a smiley emoji at the end of your suggested response. '
    }


}