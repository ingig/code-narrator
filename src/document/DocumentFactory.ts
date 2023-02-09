import Suggestion from "../suggestions/Suggestion";
import FolderDocument from "./FolderDocument";
import CodeDocument from "./CodeDocument";
import GeneralDocument from "./GeneralDocument";
import FileStructure from "../utils/FileStructure";
import BaseDocument from "./BaseDocument";

export default class DocumentFactory {

    static getDocument(suggestion : Suggestion) {
        if (suggestion.isFolder) {
            return new FolderDocument(suggestion)
        }

        if (FileStructure.isCodeFile(suggestion.name)) {
            return new CodeDocument(suggestion)
        }

        return new GeneralDocument(suggestion);
    }

}