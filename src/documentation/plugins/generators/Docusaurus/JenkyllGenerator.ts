import BaseGenerator from "../BaseGenerator";
import Document from '../../../Document'
import path from "path";
import ConfigHelper from "../../../../config/ConfigHelper";
export default class JenkyllGenerator extends BaseGenerator {

    public process(document : Document) {

        ConfigHelper.config.rootFileName = 'index';
        ConfigHelper.config.document_file_extension = '.html'
        let sidebar_label = (document.sidebar_label) ? document.sidebar_label : document.name;
        let position = document.sidebar_position ?? 1;
        let parent = path.basename(document.folderPath)
        document.documentation = `---
nav_order: ${position}
title: ${sidebar_label}
parent: ${parent}
---

` + document.documentation;
        return document;
    }

}