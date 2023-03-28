import Document from "../../../Document";
import FileStructure from "../../../../utils/FileStructure";
import FolderStructure from "../../../../utils/FolderStructure";
import BaseBuilder from "../BaseBuilder";
import DocumentationCache from "../../../DocumentationCache";
import ProjectStructure from "../../../../utils/ProjectStructure";


export default class FilesBuilder extends BaseBuilder {


    constructor(project : any) {
        super('Files', project);
    }


    public async generate() {
        let structure = new ProjectStructure();
        let folder = await structure.getStructure();
        await this.queryForFolder(folder);
    }

    public async render(document: Document) {
        return document.documentation;
    }


    public async queryForFolder(folder: FolderStructure) {
        this.cleanDeletedFilesFromCache(folder);


        let files = folder.files;

        for (let i = 0; i < files.length; i++) {
            let file = files[i];

            let document = DocumentationCache.get(file.path)
            if (document && document.generator != "Files") continue;
            if (!this.hasChanged(document)) {
                continue;
            }
            let fileName = file.name;
            let fileContent = FileStructure.getContent(file.path);
            let args = {fileName, fileContent}

            await super.generateDocumentationAndCache({
                args: args,
                name: fileName,
                pathToFile: file.path,
                folderPath: folder.path,
                sidebarPosition: i,
                sidebarLabel: fileName
            })
        }

        for (let i = 0; i < folder.folders.length; i++) {
            await this.queryForFolder(folder.folders[i]);
        }
    }



    private cleanDeletedFilesFromCache(folder: FolderStructure) {
        let cachedFiles = DocumentationCache.getByFolderPath(folder.path);
        for (let i=0;i<cachedFiles.length;i++) {
            if (cachedFiles[i].isFolder) continue;

            let fileExists = false;
            for (let b=0;b<folder.files.length;b++) {
                if (cachedFiles[i].path == folder.files[b].path) {
                    b = folder.files.length;
                    fileExists = true;
                }
            }
            if (!fileExists) {
                console.warn(`Remove file ${cachedFiles[i].path} from cache`)
                DocumentationCache.remove(cachedFiles[i]);
            }

        }

    }
}