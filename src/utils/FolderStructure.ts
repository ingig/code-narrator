import fs, {existsSync, readdirSync} from "fs";
import FileStructure from "./FileStructure";
import ConfigHelper from "./ConfigHelper";
import path, {resolve} from "path";

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

    public static getFiles(dir : string) {
        const entries = readdirSync(dir, {withFileTypes: true});
        let files :FileStructure[] = [];
        for (const entry of entries) {
            if (!entry.isDirectory() && !FolderStructure.isInIgnoreList(entry.name, dir)) {
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
            if (entry.isDirectory() && !FolderStructure.isInIgnoreList(entry.name, path)) {
                folders.push(new FolderStructure(res));
            }
        }
        return folders;
    }



    public static isInIgnoreList(fileName: string, path: string): boolean {
        let ignoreList: string[] = ['node_modules', 'docs', '.env', '.idea', '.git', 'classic', '.codenarrator', 'build', 'package-lock.json'];
        if (ignoreList.indexOf(fileName) != -1) return true;
        let isIgnore = false
        ignoreList.forEach((value, idx) => {
            if (!isIgnore) {
                isIgnore = (path.indexOf(value) != -1)
            }
        })
        return isIgnore;
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