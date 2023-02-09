import OpenAIRepository from "../repositories/OpenAIRepository";
import FileStructure from "../utils/FileStructure";
import Suggestion from "./Suggestion";
import PluginDto from "./PluginDto";
import FolderStructure from "../utils/FolderStructure";
import {CreateCompletionResponseChoicesInner} from "openai";
import {Method} from "./code/CodeOverviewDto";
import Helper from "../utils/Helper";

export default abstract class BasePlugin {
    name: string;
    suggestion: Suggestion;
    pluginDto : PluginDto;
    query = '';
    protected openAIRepository: OpenAIRepository;

    protected constructor(name: string, suggestion: Suggestion) {
        this.openAIRepository = new OpenAIRepository();
        this.name = name;
        this.suggestion = suggestion;
        this.pluginDto = this.getPluginDtoByName();
    }

    abstract getQuestion(content: string, folder: FolderStructure, file?: FileStructure): Promise<string | undefined>;
    abstract processPluginAnswer() : void;

    public processAnswer(question : string, answer : CreateCompletionResponseChoicesInner) {
        answer.text = this.cleanResponseText(answer.text);

        this.pluginDto.finish_reason = answer.finish_reason ?? '';
        this.pluginDto.query = question;
        if (this.pluginDto.answer) {
            this.pluginDto.prev_data = this.pluginDto.answer;
        }
        this.pluginDto.answer = Helper.tryParse(answer.text, question) ?? answer.text;

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
        if (this.suggestion) {
            let oldPluginContent = this.suggestion.getPluginDto(this.name);
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
        for (let i=0; i<this.suggestion.pluginDtos.length; i++) {
            if (this.suggestion.pluginDtos[i].type == plugin.type) {
                this.suggestion.pluginDtos[i] = plugin;
                return;
            }
        }
        this.suggestion.pluginDtos.push(plugin);
    }


    private getPluginDtoByName() {
        for (let i=0; i<this.suggestion.pluginDtos.length; i++) {
            if (this.suggestion.pluginDtos[i].type == this.name) {
                this.pluginDto = this.suggestion.pluginDtos[i];
            }
        }
        let pluginDto = new PluginDto(this.name);
        this.suggestion.pluginDtos.push(pluginDto);
        return pluginDto;
    }
}