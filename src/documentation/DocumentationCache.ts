import fs from "fs";
import Document from "../documentation/Document";
import path from "path";
import App from "../App";
import ConfigHelper from "../config/ConfigHelper";
import DocumentationGenerator from "./DocumentationGenerator";

/*
:::danger Make sure to add the cache file (default is .codenarrator\cache.json) to git, so you don't have to query GPT on each run.
 */
export default class DocumentationCache {

    static Documents : Document[] | null = null;

    private constructor() {
        if (fs.existsSync(ConfigHelper.CacheFilePath)) {
            let str = fs.readFileSync(ConfigHelper.CacheFilePath).toString();
            DocumentationCache.Documents = JSON.parse(str) as Document[];
        } else {
            fs.mkdirSync(path.dirname(ConfigHelper.CacheFilePath), {recursive: true})
            fs.writeFileSync(ConfigHelper.CacheFilePath, "[]");
            DocumentationCache.Documents = [];
        }
    }

    public static load() {
        new DocumentationCache();
    }
    public static getIndex(id : string) : number {
        for (let i=0; DocumentationCache.Documents && i<DocumentationCache.Documents.length; i++) {
            if (DocumentationCache.Documents[i] && DocumentationCache.Documents[i].id == id) {
                return i;
            }
        }
        return -1;
    }
    public static get(path: string) : Document | undefined {
        let id = Document.getId(path);
        let idx = this.getIndex(id);
        if (!DocumentationCache.Documents || idx == -1) return;

        let doc = DocumentationCache.Documents[idx];
        doc.lastTouch = App.StartTime;
        DocumentationCache.set(doc);
        return doc;
    }
    static remove(document : Document) {
        let idx = DocumentationCache.getIndex(Document.getId(document.path))
        if (idx != -1 && DocumentationCache.Documents) {
            delete DocumentationCache.Documents[idx];
        }
        let docPath = ConfigHelper.config.documentation_path;
        let filePath = path.join(docPath, document.path);
        if (fs.existsSync(filePath)) {
            fs.rmSync(filePath)
        }

    }

    static set(document: Document) {
        let idx = this.getIndex(document.id);
        if (idx == -1) {
            DocumentationCache.Documents?.push(document);
        } else {
            DocumentationCache.Documents![idx] = document;
        }
        let content = JSON.stringify(DocumentationCache.Documents, null,'\t');

        fs.writeFileSync(ConfigHelper.CacheFilePath, content);
    }

    static getByFolderPath(path: string) {
        let suggestions : Document[] = [];
        for (let i=0; DocumentationCache.Documents && i<DocumentationCache.Documents.length; i++) {
            if (DocumentationCache.Documents[i] && DocumentationCache.Documents[i].folderPath == path) {
                suggestions.push(DocumentationCache.Documents[i])
            }
        }
        return suggestions;
    }

    static getFolderByFolderPath(path: string) {

        for (let i=0; DocumentationCache.Documents && i<DocumentationCache.Documents.length; i++) {
            if (DocumentationCache.Documents[i] && DocumentationCache.Documents[i].generator == 'Folders'
                    && DocumentationCache.Documents[i].folderPath == path) {
                return DocumentationCache.Documents[i]
            }
        }

    }
}