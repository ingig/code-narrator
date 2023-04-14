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
            let document = DocumentationCache.get('README');
            if (document) {
                fs.writeFileSync(path.join(config.project_path, 'README.md'), document.documentation);
            }
        }
        let project_path = process.cwd();

        let plugins = config.generatorPlugin;
        for (let i = 0; i < documents.length; i++) {
            let document = documents[i]
            if (!document) continue;

            let folderPath = document.folderPath.replace(project_path, '');
            if (folderPath == '.\\' || folderPath == './') folderPath = ''

            let filePath = path.join(config.documentation_path, documents[i].saveToPath, documents[i].name + ConfigHelper.DocumentExtension);
            if (document.lastTouch < App.StartTime) {
                fs.rmSync(filePath)
                DocumentationCache.remove(document);
                continue;
            }

            fs.mkdirSync(path.join(config.documentation_path, documents[i].saveToPath), {recursive: true})

            for (let i = 0; i < plugins.length; i++) {
                let tmp = new plugins[i]() as BaseGenerator;
                tmp.process(document)
            }

            fs.writeFileSync(filePath, document.documentation);
        }


    }
}