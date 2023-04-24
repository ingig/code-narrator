import Document from "../../../Document";
import DocumentationCache from "../../../DocumentationCache";
import FolderStructure from "../../../../utils/FolderStructure";
import FileStructure from "../../../../utils/FileStructure";
import BaseBuilder from "../Base/../BaseBuilder";
import ProjectStructure from "../../../../utils/ProjectStructure";
import ConfigHelper from "../../../../config/ConfigHelper";


export default class FoldersBuilder extends BaseBuilder {

    constructor() {
        super('Folders');
    }

    public async generate() {
        let structure = new ProjectStructure();
        let folder = await structure.getStructure();
        await this.queryForFolder(folder, 30);
    }

    public async queryForFolder(folder: FolderStructure, position: number) {
        //start on the last folder, so we can later build summary of each folder
        for (let i = 0; i < folder.folders.length; i++) {
            await this.queryForFolder(folder.folders[i], i + 30);
        }
        let folderName = folder.name;
        if (folder.name == '') {
            return;
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

            let args = {
                folderName,
                repositoryUrl: ConfigHelper.config.repository_url,
                path: folder.path.replaceAll('\\', '/'),
                fileAndFolderInfo: JSON.stringify(fileAndFolderInfo)
            }

            await super.generateDocumentationAndCache({
                    args: args,
                    name: "README",
                    pathToFile: folder.path,
                    folderPath: folder.path,
                    saveToPath: folder.path,
                    sidebarPosition: position,
                    sidebarLabel: folderName,
                    data: {has_children: true},
                    prevDocument: document

                }
            )
        }


    }



    private getFileSummary(file: FileStructure) {
        let cache = DocumentationCache.get(file.path);
        if (!cache) return '';

        const regex = /^# .+[\s\S]*?^## .+/m;
        const match = regex.exec(cache.documentation);

        if (match && match[0]) {
            return match[0].trim();
        }
        if (cache.documentation.length > 350) {
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