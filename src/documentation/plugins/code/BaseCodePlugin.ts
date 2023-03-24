import BasePlugin from "../BasePlugin";
import {CodeOverview, Method} from "./CodeOverviewDto";
import Document from "../../Document";
import FileStructure from "../../../utils/FileStructure";
import FolderStructure from "../../../utils/FolderStructure";
import PluginDto from "../PluginDto";
import {CreateCompletionResponseChoicesInner} from "openai";

export default abstract class BaseCodePlugin extends BasePlugin {

    protected constructor(name : string, suggestion : Document) {
        super(name, suggestion);
    }


    //generate question for gpt
    public abstract getPluginQuestion(text: string, folder : FolderStructure, file: FileStructure) : Promise<string | undefined>;

    plugin! : PluginDto;
    codeOverview! : CodeOverview;
    methods! : Method[];
    public async getQuestion(content: string, folder : FolderStructure, file: FileStructure) : Promise<string | undefined> {
        if (!this.isCodeFile(file)) return;

        let codePlugin = this.document.getPluginDto('Code');
        if (codePlugin && codePlugin.processed) {
            this.codeOverview = codePlugin.answer as CodeOverview || {} as CodeOverview;
            this.methods = this.codeOverview.methods || [];
        }

        let q = this.getPluginQuestion(content, folder, file)
        return q;

    }


    public isCodeFile(file: FileStructure) {
        return file && FileStructure.isCodeFile(file.name);
    }

    getMethodByName(name : string) {
        for (let i=0;i<this.methods.length;i++) {
            if (this.methods[i].name == name) {
                return this.methods[i];
            }
        }
        let method = {name:name} as Method;
        this.methods.push(method);
        return method;

    }
}