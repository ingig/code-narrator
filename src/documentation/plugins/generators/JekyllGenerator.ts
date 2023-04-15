import BaseGenerator from "./BaseGenerator";
import Document from '../../Document'
import path from "path";
import ConfigHelper from "../../../config/ConfigHelper";
import DocumentationCache from "../../DocumentationCache";

export default class JekyllGenerator extends BaseGenerator {

    public process(document: Document) {

        ConfigHelper.config.rootFileName = 'index';
        let sidebar_label = (document.sidebar_label) ? document.sidebar_label : document.name;
        let position = document.sidebar_position ?? 1;
        let parent = '';
        let has_children = '';
        if (document.name != 'README') {
            let parentName = (document.data && document.data.parent) ? document.data.parent : ''
            if (parentName == '') {
                let folderDocument = DocumentationCache.getFolderByFolderPath(document.folderPath);

                if (folderDocument) {
                    parentName = folderDocument.path
                }
            }
            if (parentName != '') {
                parent = `parent: ${parentName}`
            }
        } else if (document.name == 'README' && document.path != '.') {
            has_children = 'has_children: true'
        }

        if (document.data && document.data.has_children) {
            has_children = 'has_children: true';
        }
        let permalink = '';
        if (document.isFolder && document.path != '.') {
           permalink = `permalink: docs/${document.folderPath.replaceAll('\\', '/')}/index${ConfigHelper.config.document_file_extension}`
        } else if (document.path != '.') {
            permalink = `permalink: docs/${document.path.replaceAll('\\', '/')}${ConfigHelper.config.document_file_extension}`
        }
        document.documentation = `---
nav_order: ${position}
title: ${sidebar_label}
${parent}
${has_children}
${permalink}
---

` + document.documentation;
        return document;
    }

}