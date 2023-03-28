import fs from "fs";
import ConfigHelper from "../utils/ConfigHelper";
import DocumentationCache from "./DocumentationCache";
import path from "path";
import config from "../../code-narrator.config";
import BaseGenerator from "./plugins/generators/BaseGenerator";

export default class DocumentationGenerator {

    public make() {
        let documents = DocumentationCache.Documents;
        if (!documents) return;

        let documentationPath = ConfigHelper.get('documentation_path');
        let project_path = ConfigHelper.get('project_path');

        for (let i=0;i<config.projects.length;i++) {
            if (config.projects[i].readmeRoot) {
                let document = DocumentationCache.get('ReadMe');
                if (document) {
                    fs.writeFileSync('../ReadMe.md', document.documentation);
                }
            }
        }

        let plugins = config.generatorPlugin;
        for (let i=0;i<documents.length;i++) {
            if (!documents[i]) continue;

            let folderPath = documents[i].folderPath.replace(project_path, '');
            let document = documents[i]

            if (folderPath == '.\\' || folderPath == './') folderPath = ''

            let filePath = path.join(documentationPath, documents[i].saveToPath, documents[i].name + ConfigHelper.DocumentExtension);
            fs.mkdirSync(path.join(documentationPath, documents[i].saveToPath), {recursive: true})

            for (let i=0;i<plugins.length;i++) {
                let tmp = new plugins[i]() as BaseGenerator;
                tmp.process(document)
            }

            fs.writeFileSync(filePath, document.documentation);
        }





    }
}