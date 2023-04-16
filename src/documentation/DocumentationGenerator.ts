import fs from "fs";
import DocumentationCache from "./DocumentationCache";
import path from "path";
import BaseGenerator from "./plugins/generators/BaseGenerator";
import ConfigHelper from "../config/ConfigHelper";
import App from "../App";

export default class DocumentationGenerator {

    public make() {
        let documents = DocumentationCache.Documents;
        if (!documents) return;

        let config = ConfigHelper.config;
        if (config.readmeRoot) {
            let documents = DocumentationCache.getByFolderPath('')
            documents = documents.filter(doc => doc.name.toUpperCase() == 'README');
            if (documents.length > 0) {
                fs.writeFileSync(path.join(config.project_path, 'README.md'), documents[0].documentation);
            }
        }
        let project_path = process.cwd();


        let plugins = config.generatorPlugin;
        for (let i = 0; i < documents.length; i++) {
            let document = documents[i]
            if (!document) continue;

            for (let i = 0;plugins && i < plugins.length; i++) {
                let tmp = new plugins[i].default() as BaseGenerator;
                tmp.process(document)
            }

            let folderPath = document.folderPath.replace(project_path, '');
            if (folderPath == '.\\' || folderPath == './') folderPath = ''
            let fileName = documents[i].name;
            if (fileName.toLowerCase() == 'readme') fileName = ConfigHelper.config.rootFileName;

            let filePath = path.join(config.documentation_path, documents[i].saveToPath, fileName + ConfigHelper.config.document_file_extension);
            if (document.lastTouch < App.StartTime) {
                fs.rmSync(filePath)
                DocumentationCache.remove(document);
                continue;
            }

            fs.mkdirSync(path.join(config.documentation_path, documents[i].saveToPath), {recursive: true})
            fs.writeFileSync(filePath, document.documentation);
        }


    }
}