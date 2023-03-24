import BasePlugin from "../BasePlugin";
import Document from "../../Document";
import FolderStructure from "../../../utils/FolderStructure";
import fs from "fs";
import path from "path";
import ConfigHelper from "../../../utils/ConfigHelper";

export default class BehaviourSummary extends BasePlugin {
    constructor(document : Document) {
        super('BehaviourSummary', document);
    }

    //generate question for gpt
    public async getQuestion(content : string, folder : FolderStructure) : Promise<string | undefined> {
        const indexFile = fs.readFileSync(path.join(process.cwd(), ConfigHelper.get('start_file')));

        let question = `
Give a deep in-depth description of the behavior of the application. 
I provide you with high-level description of what the application does 
and the source for starting the application
Do not describe the code in this file in your writing, only use it as a reference to help you write about the application's behavior.

File with application description comment:

        ${indexFile}
        `

        return question;
    }
    processPluginAnswer(): void {
    }
}
