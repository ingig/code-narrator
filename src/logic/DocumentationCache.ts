import fs from "fs";
import ConfigHelper from "../utils/ConfigHelper";
import Document from "../documentation/Document";

/*
:::danger Add .codenarrator\cache.json to git
Make sure to add .codenarrator\cache.json to git so you don't have to query GPT on each run.
 */
export default class DocumentationCache {

    static Documents : Document[] | null = null;
    static cacheFilePath = '';
    private constructor() {
        let project_path = ConfigHelper.get('project_path');
        DocumentationCache.cacheFilePath = project_path + '\\.codenarrator\\cache.json';
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
            if (DocumentationCache.Documents[i].id == id) {
                return i;
            }
        }
        return -1;
    }
    public static get(name : string, path : string) : Document | undefined {
        let idx = this.getIndex(Document.getId(name, path));
        if (!DocumentationCache.Documents || idx == -1) return;
        return DocumentationCache.Documents[idx];
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
            if (DocumentationCache.Documents[i].folderPath == path) {
                suggestions.push(DocumentationCache.Documents[i])
            }
        }
        return suggestions;
    }
}