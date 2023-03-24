import fs from "fs";
import ConfigHelper from "../utils/ConfigHelper";
import DocumentFactory from "../documentation/generators/DocumentFactory";
import DocumentationCache from "./DocumentationCache";

export default class DocumentationGenerator {

    public make() {
        let suggestions = DocumentationCache.Documents;
        if (!suggestions) return;

        let documentationPath = ConfigHelper.get('documentation_path');
        let project_path = ConfigHelper.get('project_path');

        for (let i=0;i<suggestions.length;i++) {
            let path = suggestions[i].folderPath.replace(project_path, '');
            let document = DocumentFactory.getDocument(suggestions[i]);


            if (path == '.\\') path = ''
            let filePath = documentationPath + path + '\\' + suggestions[i].name + '.md';
            fs.mkdirSync(documentationPath + path + '\\', {recursive: true})
            fs.writeFileSync(filePath, document.getContent());
        }



    }
}