import Document from "../../../Document";
import DocumentationCache from "../../../DocumentationCache";
import FolderStructure from "../../../../utils/FolderStructure";
import App from "../../../../App";
import FileStructure from "../../../../utils/FileStructure";
import BaseBuilder from "../Base/../BaseBuilder";
import ProjectStructure from "../../../../utils/ProjectStructure";
import path from "path";


export default class FoldersBuilder extends BaseBuilder {

    constructor(project : any) {
        super('Folders', project);
    }

    public async generate() {
        let structure = new ProjectStructure();
        let folder = await structure.getStructure();
        await this.queryForFolder(folder, 30);
    }

    public async queryForFolder(folder: FolderStructure, position: number) {
        //start on the last folder, so we can later build summary of each folder
        for (let i = 0; i < folder.folders.length; i++) {
            await this.queryForFolder(folder.folders[i], i+30);
        }
        let folderName =folder.name;
        if (folder.name = '') {
            folderName = 'Project folder'
        }

        let document = DocumentationCache.get(folder.path);
        if (!document) {
            let fileAndFolderInfo: any = [];
            folder.files.map(file => {
                fileAndFolderInfo.push({
                    name: file.name,
                    path: file.path,
                    fileOrFolder: 'file',
                    summary: this.getFileSummary(file)
                })
            })
            folder.folders.map((folder) => {
                fileAndFolderInfo.push({
                    name: folder.name,
                    path: folder.path,
                    fileOrFolder: 'folder',
                    summary: this.getFolderSummary(folder)
                })
            })

            let mdFileName = folderName;
            if (mdFileName == 'src') {
                mdFileName = "Code";
            }
            let args = {
                mdFileName,
                repositoryUrl: App.repositoryUrl,
                path: folder.path.replaceAll('\\', '/'),
                fileAndFolderInfo: JSON.stringify(fileAndFolderInfo)
            }
            await super.generateDocumentationAndCache({
                    args: args,
                    name: folder.name,
                    pathToFile: folder.path,
                    folderPath: folder.path,
                    saveToPath : folder.path,
                    sidebarPosition: position,
                    sidebarLabel : mdFileName
                }
            )
        }


    }

    public async render(document: Document): Promise<string> {
        return document.documentation;
    }


    private getFileSummary(file: FileStructure) {
        let cache = DocumentationCache.get(file.path);
        if (!cache) return '';

        const regex = /^# .+[\s\S]*?^## .+/m;
        const match = regex.exec(cache.documentation);

        if (match && match[0]) {
            return match[0].trim();
        }
        if (cache.documentation.length> 350) {
            return cache.documentation.substring(0, 350) + '...';
        }

        return cache.documentation;

    }


    private getFolderSummary(folder: FolderStructure) {
        let cache = DocumentationCache.get(folder.path);
        if (!cache) return '';

        const regex = /^# .+[\s\S]*?^## .+/m;
        const match = regex.exec(cache.documentation);

        if (match && match[0]) {
            return match[0].trim();
        }
        return '';
    }

}