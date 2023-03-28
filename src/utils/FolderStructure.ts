import fs, {existsSync, readdirSync} from "fs";
import FileStructure from "./FileStructure";
import ConfigHelper from "./ConfigHelper";
import path, {resolve} from "path";
import Ignore from 'ignore';
import App from "../App";
export default class FolderStructure {

    name = '';
    path = '';
    entry : any;
    files : FileStructure[];
    folders : FolderStructure[];

    constructor(folderPath : string) {
        let project_path = ConfigHelper.get('project_path');
        this.path = path.relative(project_path, folderPath);

        this.name = path.basename(this.path);

        this.files = this.getFiles(folderPath);
        this.folders = this.getStructure(folderPath);
    }

    public static getFiles(dir : string) {
        const entries = readdirSync(dir, {withFileTypes: true});
        let files :FileStructure[] = [];
        for (const entry of entries) {
            if (!entry.isDirectory() && !FolderStructure.isInIgnoreList(entry.name)) {
                files.push(new FileStructure(dir, entry))
            }
        }
        return files;
    }

    public static exists(dir : string) : boolean {
        return existsSync(dir);
    }
    public getFiles(dir: string): FileStructure[] {
        return FolderStructure.getFiles(dir);
    }

    private getStructure(path: string) : FolderStructure[] {
        let folders : FolderStructure[] = [];
        const entries = readdirSync(path, {withFileTypes: true});
        for (const entry of entries) {
            const res = resolve(path, entry.name);
            if (entry.isDirectory() && !FolderStructure.isInIgnoreList(res)) {
                folders.push(new FolderStructure(res));
            }
        }
        return folders;
    }



    public static isInIgnoreList(fileOrFolderPath : string): boolean {
        let relativePath = path.relative(App.Project.project_path, fileOrFolderPath)
        if (relativePath == '') return false;

        const ignore = Ignore();
        const excludedPatterns = ConfigHelper.get('exclude') as string[];
        ignore.add(excludedPatterns);
        return ignore.ignores(relativePath);
    }

    public static searchForStringInFiles(root: string, search: string): string {
        const files = fs.readdirSync(root);

        for (const file of files) {
            const fullPath = path.join(root, file);
            const stats = fs.statSync(fullPath);

            if (stats.isDirectory()) {
                return FolderStructure.searchForStringInFiles(fullPath, search);
            } else {
                if (path.extname(fullPath) === '.ts' || path.extname(fullPath) === '.js') {
                    const content = fs.readFileSync(fullPath, 'utf-8');
                    if (content.includes(search)) {
                        console.log(`${fullPath} contains the search string '${search}'`);
                        return content;
                    }
                }
            }
        }
        return '';
    }
}