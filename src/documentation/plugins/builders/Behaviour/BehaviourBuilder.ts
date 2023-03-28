import Document from "../../../Document";
import fs from "fs";
import path from "path";
import ConfigHelper from "../../../../utils/ConfigHelper";
import BaseBuilder from "../BaseBuilder";
import DocumentationCache from "../../../DocumentationCache";

export default class BehaviourBuilder extends BaseBuilder {
    constructor(project : any) {
        super('Behaviour', project);
    }

    public async generate() {
        let document = DocumentationCache.get('Behaviour')
        if (document) return;

        let project_path = ConfigHelper.get('project_path')
        let entry_file = ConfigHelper.get('entry_file');
        const entryFile = fs.readFileSync(path.join(project_path, entry_file));

        let args = {entryFile};
        await super.generateDocumentationAndCache({
            args,
            name: "Behaviour",
            pathToFile: './',
            folderPath: './',
            sidebarPosition: 2,
            sidebarLabel: 'Behaviour'
        })

    }

    public async render(document: Document) {
        return document.documentation;
    }
}
