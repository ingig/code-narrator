const extract = require('extract-json-from-string');

export default class Helper {

    public static removeExtension(fileName : string) {
        if (fileName.lastIndexOf(".") == -1) return fileName;

        let name = fileName.substring(0, fileName.lastIndexOf("."));
        if (name == '') return fileName;
        return name;
    }

    static upperFirstLetter(name: string) {
        if (!name) return '';
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    static getJsons(content : string) : any[] {
        return extract(content)
    }
}