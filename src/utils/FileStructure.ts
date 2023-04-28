import path, {resolve} from "path";
import fs from "fs";

export default class FileStructure {
    name = '';
    path = '';
    entry : any;
    depth : number;
    constructor(dir : string, entry : any, depth : number) {
        this.name = entry.name;
        let project_path = process.cwd();
        this.path = path.relative(project_path, resolve(dir, entry.name));
        this.entry = entry;
        this.depth = depth;
    }

    static getContent(path: string) : string {

        if (path.indexOf(',') != -1) {
            let from = 0;
            let to = 999999;
            let lineNumbers = path.split(',')[1].trim();
            if (lineNumbers.indexOf('-') != -1) {
                from = parseInt(lineNumbers.split('-')[0].trim());
                to = parseInt(lineNumbers.split('-')[1].trim());
            } else {
                from = parseInt(lineNumbers)
            }
            path = path.split(',')[0];
            if (!fs.existsSync(path)) {
                console.warn(`path:${path} not found, returning empty string`)
                return '';
            }

            return this.readFileFromLine(path, from, to)
        }

        if (!fs.existsSync(path)) {
            console.warn(`path:${path} not found, returning empty string`)
            return '';
        }

        let stat = fs.statSync(path);
        if (stat.isDirectory()) return '';

        return fs.readFileSync(path).toString();
    }

    static readFileFromLine(filename: string, startLine: number, endLine : number): string {
        const content = fs.readFileSync(filename, 'utf-8');
        const lines = content.split('\n');
        if (endLine > lines.length) endLine = lines.length;

        return lines.slice(startLine - 1, endLine).join('\n');
    }
}