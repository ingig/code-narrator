import {ChatCompletionRequestMessage, Configuration, CreateCompletionResponseChoicesInner, OpenAIApi} from 'openai';
import ConfigHelper from "../utils/ConfigHelper";
import { setTimeout } from 'timers/promises';
import {CreateChatCompletionResponseChoicesInner} from "openai/api";
import config from '../../code-narrator.config'

export default class OpenAIRepository {
    openai: OpenAIApi;
    constructor() {
        const configuration = new Configuration({
            apiKey: ConfigHelper.get('OPENAI_API_KEY')
        });
        this.openai = new OpenAIApi(configuration);
    }


    public async query(text : string) : Promise<CreateCompletionResponseChoicesInner[] | undefined> {
        return this.queryQuestions([text]);
    }
    public async queryQuestions(questions : string[], errorCount = 0, model = 'gpt-4'): Promise<CreateChatCompletionResponseChoicesInner[] | undefined> {
        try {
            await setTimeout(1 * 1000);

            let messages : ChatCompletionRequestMessage[] = []
            let messageLength = 0;
            for (let i=0;config.gptSystemCommands && i<config.gptSystemCommands.length;i++) {
                messages.push({role:'system', content:config.gptSystemCommands[i].replace('{DocumentationType}', ConfigHelper.DocumentationType)})
            }
            for (let i=0;i<questions.length;i++){
                messages.push({role:'user', content:questions[i]})
                messageLength += questions[i].length;
            }
            let maxTokens = (model.indexOf('gpt-4') != -1) ? 8000 : 4000;
            const completion = await this.openai.createChatCompletion({
                model: model,
                messages : messages,
                temperature: 0.1,
                max_tokens: maxTokens - messageLength,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0

            });
            return completion.data.choices;
        } catch (e : any) {
            if (e?.response?.data?.error && e.response.data.error.message.indexOf('You exceeded your current quota') != -1) {
                throw new Error(e.response.data.error.message);
            }

            if (e && this.retryStatuses.includes(e.response?.status) && errorCount < 3) {
                console.log('Sleep 3 sec')
                await setTimeout(3 * 1000);
                return this.queryQuestions(questions, ++errorCount, model);
            }

            console.error('OpenAI error:', e.response.data.error.message)
            console.error('Error doing OpenAI query:', questions);
            console.error(e);
            return;
            //throw e;
        }
    }

    retryStatuses = [429, 500, 503]
}