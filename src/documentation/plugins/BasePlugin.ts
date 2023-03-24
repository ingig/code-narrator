import OpenAIRepository from "../../repositories/OpenAIRepository";
import FileStructure from "../../utils/FileStructure";
import Document from "../Document";
import PluginDto from "./PluginDto";
import FolderStructure from "../../utils/FolderStructure";
import {CreateCompletionResponseChoicesInner} from "openai";
import Helper from "../../utils/Helper";
import {CreateChatCompletionResponseChoicesInner} from "openai/api";

export default abstract class BasePlugin {
    name: string;
    document: Document;
    pluginDto : PluginDto;
    query = '';
    protected openAIRepository: OpenAIRepository;

    protected constructor(name: string, suggestion: Document) {
        this.openAIRepository = new OpenAIRepository();
        this.name = name;
        this.document = suggestion;
        this.pluginDto = this.getPluginDtoByName();
    }

    //generate question for gpt
    abstract getQuestion(content: string, folder: FolderStructure, file?: FileStructure): Promise<string | undefined>;
    //Processes the answer from gpt
    abstract processPluginAnswer() : void;

    public processAnswer(question : string, answer : CreateChatCompletionResponseChoicesInner) {
        if (!answer.message) return;

        answer.message.content = this.cleanResponseText(answer.message.content);
        this.pluginDto.finish_reason = answer.finish_reason ?? '';
        this.pluginDto.query = question;
        if (this.pluginDto.answer) {
            this.pluginDto.prev_data = this.pluginDto.answer;
        }
        this.pluginDto.answer = answer.message.content;

        this.processPluginAnswer();

        this.pluginDto.processed = true;
        this.addPlugin(this.pluginDto)

    }
    protected cleanResponseText(text: string | undefined) {
        if (!text) return '';
        return text.replaceAll('</code>', '').trim();
    }

    protected isEmptyResult(result: CreateCompletionResponseChoicesInner[]) {
        return (result[0].text!.trim() == '')
    }

    createPlugin(result: CreateCompletionResponseChoicesInner[], query : string) {
        if (this.isEmptyResult(result)) return;

        let plugin = new PluginDto(this.name);
        if (this.document) {
            let oldPluginContent = this.document.getPluginDto(this.name);
            if (oldPluginContent && oldPluginContent.answer && oldPluginContent.answer.text) {
                plugin.answer.old_text = oldPluginContent.answer.text.trim();
            }
        }
        plugin.answer = this.cleanResponseText(result[0].text);
        plugin.finish_reason = result[0].finish_reason!;
        plugin.query = query;
        return plugin;
    }


    public async question(content: string, q: string) {
        let result = await this.openAIRepository.query(q + '\n\n' + content)
        return this.createPlugin(result, q);
    }


    private addPlugin(plugin: PluginDto) {
        for (let i=0; i<this.document.pluginDtos.length; i++) {
            if (this.document.pluginDtos[i].type == plugin.type) {
                this.document.pluginDtos[i] = plugin;
                return;
            }
        }
        this.document.pluginDtos.push(plugin);
    }


    private getPluginDtoByName() {
        for (let i=0; i<this.document.pluginDtos.length; i++) {
            if (this.document.pluginDtos[i].type == this.name) {
                this.pluginDto = this.document.pluginDtos[i];
            }
        }
        let pluginDto = new PluginDto(this.name);
        this.document.pluginDtos.push(pluginDto);
        return pluginDto;
    }

    protected getJsonsFromAnswer() : any[] {
        try {
            const extract = require('extract-json-from-string');
            return extract(this.pluginDto.answer);
        } catch (e : any) {
            console.error('Error getting json from answer');
            console.error(e);
            console.log(this.pluginDto.answer)
            return [];
        }
    }
}