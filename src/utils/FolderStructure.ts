import fs, {existsSync, readdirSync} from "fs";
import FileStructure from "./FileStructure";
import path, {resolve} from "path";
import ConfigHelper from "../config/ConfigHelper";
import * as fg from 'fast-glob';

export default class FolderStructure {

    name = '';
    path = '';
    entry : any;
    files : FileStructure[];
    folders : FolderStructure[];
    depth : number;
    constructor(folderPath : string, depth = 0) {
        let project_path = process.cwd();
        this.path = path.relative(project_path, folderPath);

        this.name = path.basename(this.path);

        this.files = this.getFiles(folderPath, depth);
        this.folders = this.getStructure(folderPath, ++depth);
        this.depth = depth
    }

    public getHierarchicalTree() {
        let str = ' '.repeat(this.depth) + '+' + this.path + '\n';
        for (let i=0;i<this.folders.length;i++) {
            str += this.folders[i].getHierarchicalTree() + '\n';
        }
        for (let i=0;i<this.files.length;i++) {
            str += ' '.repeat(this.depth) + '-' + this.files[i].name + '\n';
        }
        return str;
    }

    public static getFiles(dir : string, depth : number) {
        const entries = readdirSync(dir, {withFileTypes: true});
        let files :FileStructure[] = [];
        for (const entry of entries) {
            if (!entry.isDirectory() && FolderStructure.shouldDocument(path.join(dir, entry.name), entry.isDirectory())) {
                files.push(new FileStructure(dir, entry, depth))
            }
        }
        return files;
    }

    public static exists(dir : string) : boolean {
        return existsSync(dir);
    }
    public getFiles(dir: string, depth : number): FileStructure[] {
        return FolderStructure.getFiles(dir, depth);
    }

    private getStructure(folderPath: string,depth : number) : FolderStructure[] {
        let folders : FolderStructure[] = [];
        const entries = readdirSync(folderPath, {withFileTypes: true});
        for (const entry of entries) {
            const res = resolve(folderPath, entry.name);
            if (entry.isDirectory() && FolderStructure.shouldDocument(path.join(folderPath, entry.name), entry.isDirectory())) {
                folders.push(new FolderStructure(res, depth));
            }
        }
        return folders;
    }


    public static shouldDocument(fileOrFolderPath: string, isDirectory: boolean): boolean {
        let include = ConfigHelper.config.include ?? ['*/**']

        // Concatenate exclude patterns with a '!' prefix to indicate exclusion
        const patterns = [
            ...include,
            ...ConfigHelper.config.exclude.map((pattern) => `!${pattern}`)
        ];

        // If the path is absolute, make it relative to the current working directory
        const relativePath = path.isAbsolute(fileOrFolderPath)
            ? path.relative(process.cwd(), fileOrFolderPath)
            : fileOrFolderPath;

        // Find all matching paths for the patterns
        const allMatches = fg.sync(patterns, { onlyFiles: false });

        // Filter the matches to only include paths that match the input fileOrFolderPath
        const matches = allMatches.filter((match) => {
            if (isDirectory) {
                return path.dirname(match) === relativePath.replaceAll('\\', '/')
            }
            return path.normalize(match) === path.normalize(relativePath)
        });
        let isIncluded = matches.length > 0;

        return isIncluded;
    }
    public static isAncestorOrParentPath(parentPath : string, childPath: string) {
        const relativePath = path.relative(parentPath, childPath);
        return (
            relativePath &&
            !relativePath.startsWith('..') &&
            !path.isAbsolute(relativePath)
        );
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

    static getFoldersAndFiles(path: string) {
        return fs.readdirSync(path)
    }
}