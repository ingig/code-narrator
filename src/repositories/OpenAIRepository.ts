import {ChatCompletionRequestMessage, Configuration, CreateCompletionResponseChoicesInner, OpenAIApi} from 'openai';
import { setTimeout } from 'timers/promises';
import {CreateChatCompletionResponseChoicesInner} from "openai/api";
import ConfigHelper from "../config/ConfigHelper";
import OpenAIResponse from "../model/OpenAIResponse";

export default class OpenAIRepository {
    openai: OpenAIApi;
    constructor() {
        const configuration = new Configuration({
            apiKey: ConfigHelper.OpenAiKey
        });
        this.openai = new OpenAIApi(configuration);
    }


    public async query(text : string) : Promise<OpenAIResponse> {
        return this.queryQuestions([text]);
    }
    public async queryQuestions(questions : string[], errorCount = 0, model? : string, assistantMessages? : string[]): Promise<OpenAIResponse> {
        let messages : ChatCompletionRequestMessage[] = []
        try {
            await setTimeout(1 * 500);

            let config = ConfigHelper.config;
            if (!model) model = config.gptModel;


            let messageLength = 0;

            for (let i=0;config.gptSystemCommands && i<config.gptSystemCommands.length;i++) {
                messageLength += config.gptSystemCommands[i][i].length;
                messages.push({role:'system', content:config.gptSystemCommands[i].replace('{DocumentationType}', ConfigHelper.DocumentationType)})
            }

            let maxTokens = (model.indexOf('gpt-4') != -1) ? 8192 : 4096;
            for (let i=0;i<questions.length;i++){
                let q = questions[i]
                if (messageLength + q.length> maxTokens) {
                    let length = parseInt(((maxTokens - messageLength)/0.80).toString());
                    q = q.substring(0, length);
                    console.warn(`Warning - Content to long: I had to trim a file, only using first ${length} character`)
                }
                messages.push({role:'user', content:q})
                messageLength += q.length;
            }
            for (let i=0;assistantMessages && i<assistantMessages.length;i++) {
                messageLength += assistantMessages[i].length;
                messages.push({role:'assistant', content: assistantMessages[i]});
            }

            maxTokens = maxTokens - messageLength;
            if (maxTokens < 0) {
                console.error(`Message is to long (${messageLength}). Will not query gpt`)
                return {answer:'', requestMessages:messages} as OpenAIResponse;
            }
            const completion = await this.openai.createChatCompletion({
                model: model,
                messages : messages,
                temperature: 0.1,
                max_tokens: parseInt(maxTokens.toString()),
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0

            });
            if (completion.data.choices.length == 0) {
                throw new Error(`Did not get answer. ChatGPT is down. Run again. `)
            }
            let response : OpenAIResponse = {
                answer : completion.data.choices[0].message!.content,
                requestMessages : messages
            }

            return response;
        } catch (e : any) {
            if (e?.response?.data?.error && e.response.data.error.message.indexOf('You exceeded your current quota') != -1) {
                throw new Error(e.response.data.error.message);
            }

            if (e && this.retryStatuses.includes(e.response?.status) && errorCount < 3) {
                console.log('Sleep 3 sec')
                await setTimeout(3 * 1000);
                return this.queryQuestions(questions, ++errorCount, model);
            }

            console.error('OpenAI error:', e.response?.data?.error?.message)
            console.error('Error doing OpenAI query:', questions);
            //console.error(e);
            return  {answer:'', requestMessages: messages} as OpenAIResponse;
            //throw e;
        }
    }

    retryStatuses = [429, 500, 503]
}