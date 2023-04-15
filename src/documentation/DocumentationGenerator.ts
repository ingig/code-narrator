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

            for (let i = 0; i < plugins.length; i++) {
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

        if (ConfigHelper.config.sitemap.enable) {
            let url = ConfigHelper.config.sitemap.url;
            let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`
            for (let i = 0; i < documents.length; i++) {
                let document = documents[i]
                if (!document) continue;

                let path = (document.path.indexOf('.') != -1) ? document.path : document.path + '/' + ConfigHelper.config.rootFileName;
                path = path.replaceAll('\\', '/');
                path += ConfigHelper.config.document_file_extension;
                sitemap += `<url>
      <loc>${url}${path}</loc>
      <lastmod>${document.updated.toISOString().split('T')[0]}</lastmod>
   </url>`
            }
            sitemap += `</urlset>`;
            fs.writeFileSync(path.join(ConfigHelper.config.documentation_path, 'sitemap.xml'), sitemap);
        }

    }
}