import {readdirSync} from "fs";
import FileStructure from "./FileStructure";
import ConfigHelper from "./ConfigHelper";
import {resolve} from "path";

export default class FolderStructure {

    name = '';
    path = '';
    entry : any;
    files : FileStructure[];
    folders : FolderStructure[];

    constructor(path : string) {
        let projectPath = ConfigHelper.get('project_path')!;
        let folderPath = path.replace(projectPath, '');
        this.name = folderPath.substring(folderPath.lastIndexOf('\\') + 1);
        this.path = path;

        this.files = this.getFiles(path);
        this.folders = this.getStructure(path);
    }

    public getFiles(dir: string): FileStructure[] {
        const entries = readdirSync(dir, {withFileTypes: true});
        let files :FileStructure[] = [];
        for (const entry of entries) {
            if (!entry.isDirectory() && !this.isGitIgnore(entry.name, dir)) {
                files.push(new FileStructure(dir, entry))
            }
        }
        return files;
    }

    private getStructure(path: string) : FolderStructure[] {
        let folders : FolderStructure[] = [];
        const entries = readdirSync(path, {withFileTypes: true});
        for (const entry of entries) {
            const res = resolve(path, entry.name);
            if (entry.isDirectory() && !this.isGitIgnore(entry.name, path)) {
                folders.push(new FolderStructure(res));
            }
        }
        return folders;
    }



    private isGitIgnore(fileName: string, path: string): boolean {
        let ignoreList: string[] = ['node_modules', '.env', '.idea', '.git', 'classic', '.codenarrator', 'build', 'package.json', 'package-lock.json'];
        if (ignoreList.indexOf(fileName) != -1) return true;
        let isIgnore = false
        ignoreList.forEach((value, idx) => {
            if (!isIgnore) {
                isIgnore = (path.indexOf(value) != -1)
            }
        })
        return isIgnore;
    }
}