import fs from "fs";
import ConfigHelper from "../utils/ConfigHelper";
import Document from "../documentation/Document";
import path from "path";
import App from "../App";

/*
:::danger Make sure to add the cache file (default is .codenarrator\cache.json) to git, so you don't have to query GPT on each run.
 */
export default class DocumentationCache {

    static Documents : Document[] | null = null;
    static cacheFilePath = '';
    private constructor() {
        let project_path = ConfigHelper.get('project_path');
        let cache_file = ConfigHelper.CacheFilePath;
        DocumentationCache.cacheFilePath = path.join(project_path, cache_file);
        if (fs.existsSync(DocumentationCache.cacheFilePath)) {
            let str = fs.readFileSync(DocumentationCache.cacheFilePath).toString();
            DocumentationCache.Documents = JSON.parse(str) as Document[];
        } else {
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
        return DocumentationCache.Documents[idx];
    }
    static remove(document : Document) {
        let idx = DocumentationCache.getIndex(Document.getId(document.path))
        if (idx != -1 && DocumentationCache.Documents) {
            delete DocumentationCache.Documents[idx];
        }
        let docPath = App.Project.documentation_path;
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
        fs.writeFileSync(this.cacheFilePath, content);
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
}