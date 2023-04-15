import Document from "../../../Document";
import FileStructure from "../../../../utils/FileStructure";
import BaseBuilder from "../BaseBuilder";
import ProjectStructure from "../../../../utils/ProjectStructure";
import fs from "fs";
import DocumentationCache from "../../../DocumentationCache";
import path from "path";

export default class HowToBuilder extends BaseBuilder {


    constructor() {
        super('HowTo');
    }


    public async generate() {
        const regex = /:::\s*howto\s+(.*)/;
        let projectStructure = new ProjectStructure();
        let files = projectStructure.getAllFiles();
        for (let i = 0; i < files.length; i++) {

            let content = fs.readFileSync(files[i].path).toString()
            const match = content.match(regex);
            if (match) {

                await this.makeHowTo(files[i], content, match[1])
            }
        }
    }

    public async render(document: Document): Promise<string> {
        return document.documentation;
    }


    private async makeHowTo(fileStructure: FileStructure, content: string, name : string) {
        let document = DocumentationCache.get(path.join('howto', name))
        if (document) return;

        let regex = /ref:\s*([A-Z0-9a-z\.\/]*)/gm;
        let match;
        let assistantMessages : string[] = [];
        while ((match = regex.exec(content)) !== null) {
            let content = FileStructure.getContent(match[1]);
            let assistantFiles = `This is the ref document. ${match[1]}`
            if (content != '') {
                assistantFiles += `
                    ## ${match[1]} start ##
                    ${content}
                    ## ${match[1]} ends ##`
            }
            assistantMessages.push(assistantFiles)
        }


        await super.generateDocumentationAndCache({
            args: {fileContent: content},
            name: name,
            pathToFile: `howto/${name}`,
            folderPath: `howto`,
            saveToPath: `howto/`,
            assistantMessages : assistantMessages,
            prevDocument : document
        })
    }
}