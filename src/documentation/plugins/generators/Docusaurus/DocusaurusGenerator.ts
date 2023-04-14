import BaseGenerator from "../BaseGenerator";
import Document from '../../../Document'
export default class DocusaurusGenerator extends BaseGenerator {

    public process(document : Document) {
        //docusaurus does not like to have Promise<> in its headers, so let's remove them
        document.documentation = document.documentation
            .replaceAll(/: Promise<[a-zA-Z]*>/gm, '')
            .replaceAll(/: Partial<[a-zA-Z]*>/gm, '')
            .trim();

        let sidebar_label = (document.sidebar_label) ? document.sidebar_label : document.name;
        let position = document.sidebar_position ?? 1;
        document.documentation = `---
sidebar_position: ${position}
sidebar_label: ${sidebar_label}
---

` + document.documentation;
        return document;
    }

}