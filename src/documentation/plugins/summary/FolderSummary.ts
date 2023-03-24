import Document from "../../Document";
import BasePlugin from "../BasePlugin";
import DocumentationCache from "../../../logic/DocumentationCache";
import FolderStructure from "../../../utils/FolderStructure";
import App from "../../../App";
import FileStructure from "../../../utils/FileStructure";


export default class FolderSummary extends BasePlugin {

    constructor(document: Document) {
        super('FolderSummary', document);
    }

    //generate question for gpt
    public async getQuestion(content: string, folder: FolderStructure): Promise<string | undefined> {
        let documents = DocumentationCache.getByFolderPath(folder.path);

        let fileAndFolderInfo : any = [];
        let filesInFolder = ''
        folder.files.map(file => {
            fileAndFolderInfo.push({
                name : file.name,
                path : file.path,
                fileOrFolder:'file',
                summary : this.getFileSummary(file)
            })
        })
        folder.folders.map((folder) => {
            fileAndFolderInfo.push({
                name : folder.name,
                path : folder.path,
                fileOrFolder:'file',
                summary : this.getFolderSummary(folder)
            })
        })

        let mdFileName = folder.name;
        if (mdFileName == 'src') {
            mdFileName = "Code";
        }
        let question = `Act as a documentation expert. 
Write in-depth documentation about the content of this folder. 

Divide the document into sections with clear headings and subheadings.
Your response should be in .md format. Header of the .md file should be "${mdFileName}".
List each file and folder into it's own section. 

Write high level information in each section, DO NOT generate code examples.
Link each section to it's own documentation. The format of the link is simply the name of the folder or file.

At the end of the file add link to repository, the url is ${App.repositoryUrl}/${folder.path}

Here is json of the data your need
${JSON.stringify(fileAndFolderInfo)}
`
/*
        let question = `Act as a documentation expert. Write in-depth documentation about following folder. 
            Return .md in format. Header of the .md file should be "${mdFileName}". ${extra}
            DO NOT provide usage examples as you do not have the code to build examples on.
            ${subFolders}
            ${filesInFolder}
            Provide link to original source file on github, repository is located at ${App.repositoryUrl}
            Explain files and folders in detailed terms and give key features. 
            Divide the document into sections with clear headings and subheadings.
            `
        question += '=== info begin ==='
        for (let i = 0; i < documents.length; i++) {
            let summary = this.getSummaryWithoutExample(documents[i])
            question += `\nFileName:[${documents[i].name}]\nFileSummary:${summary}\n`;
        }
        question += '=== info ends ===';
*/
        return question;
    }
    private getFileSummary(file: FileStructure) {
        let cache = DocumentationCache.get(file.name, file.path);
        if (!cache) return '';

        const regex = /^# .+[\s\S]*?^## .+/m;
        const match = regex.exec(cache.pluginDtos[0].answer);

        if (match && match[0]) {
            return match[0].trim();
        }
        return '';

    }


    private getFolderSummary(folder: FolderStructure) {
        let cache = DocumentationCache.get(folder.name, folder.path);
        if (!cache) return '';

        const regex = /^# .+[\s\S]*?^## .+/m;
        const match = regex.exec(cache.pluginDtos[0].answer);

        if (match && match[0]) {
            return match[0].trim();
        }
        return '';
    }

    processPluginAnswer(): void {

    }



}