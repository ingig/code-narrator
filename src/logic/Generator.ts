import Suggestion from "../suggestions/Suggestion";
import fs from "fs";
import ConfigHelper from "../utils/ConfigHelper";
import PluginDto from "../suggestions/PluginDto";
import SuggestionPlugins from "../suggestions/SuggestionPlugins";
import DocumentFactory from "../document/DocumentFactory";

export default class Generator {

    public make(suggestions: Suggestion[]) {
        let docusaurus = ConfigHelper.get('docusaurus_path');
        let project_path = ConfigHelper.get('project_path');

        for (let i=0;i<suggestions.length;i++) {
            let path = suggestions[i].folderPath.replace(project_path, '');
            let document = DocumentFactory.getDocument(suggestions[i]);


           // if (path != '') path + '\\'
            let filePath = docusaurus + path + '\\' + suggestions[i].name + '.md';
            fs.mkdirSync(docusaurus + path + '\\', {recursive: true})
            fs.writeFileSync(filePath, document.getContent());
        }



    }
}