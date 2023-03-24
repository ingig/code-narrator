import BasePlugin from "../BasePlugin";
import Document from "../../Document";
import FolderStructure from "../../../utils/FolderStructure";
import fs from "fs";
import path from "path";
import App from "../../../App";
import ConfigHelper from "../../../utils/ConfigHelper";

export default class GetStartedSummary extends BasePlugin {
    constructor(document : Document) {
        super('GetStartedSummary', document);
    }

    //generate question for gpt
    public async getQuestion(content : string, folder : FolderStructure) : Promise<string | undefined> {
        let projectFile = ConfigHelper.get('project_file');
        const packageJsonRaw = fs.readFileSync(path.join(process.cwd(), projectFile));

        const projectName = ConfigHelper.get('name');
        App.repositoryUrl = ConfigHelper.get('repository.url')

        const question = `Create a "Get started" guide for the project, named "${projectName}". 
        From the description of the project file describe the purpose of the project and the idea of it.
        Show how to install the project.
        Show how to configure the project, using the config property in package.json
        Show how to run the project.
        Show how to run tests for the project 
        Show where to post bugs, what the homepage of the project is and link to repository (${App.repositoryUrl}), if available. Do not repeat the same url.
        List the dependencies at the end of file.
        Return your answer in a .md format.
        This is the package.json file:
        ${packageJsonRaw.toString()}`;
        return question;
    }

    processPluginAnswer(): void {


    }
}