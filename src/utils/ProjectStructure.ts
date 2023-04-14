import FolderStructure from "../utils/FolderStructure";
import App from "../App";
import FileStructure from "./FileStructure";

export default class ProjectStructure {
    folderStructure : FolderStructure;
    constructor() {
        let projectPath = process.cwd();
        this.folderStructure = new FolderStructure(projectPath);
    }
    public async getStructure() {
        return this.folderStructure;
    }

    public getAllFiles() {
        let files : FileStructure[] = this.folderStructure.files;
        for (let i=0;i<this.folderStructure.folders.length;i++) {
            files.push(...this.getSubfiles(this.folderStructure.folders[i]))
        }
        return files;
    }

    private getSubfiles(folder : FolderStructure) {
        let files : FileStructure[] = folder.files;
        for (let i=0;i<folder.folders.length;i++) {
            files.push(...this.getSubfiles(folder.folders[i]))
        }
        return files;
    }

}