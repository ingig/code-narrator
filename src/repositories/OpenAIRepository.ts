import {ChatCompletionRequestMessage, Configuration, CreateCompletionResponseChoicesInner, OpenAIApi} from 'openai';
import ConfigHelper from "../utils/ConfigHelper";
import { setTimeout } from 'timers/promises';
import {CreateChatCompletionResponseChoicesInner} from "openai/api";
export default class OpenAIRepository {
    openai: OpenAIApi;
    constructor() {
        const configuration = new Configuration({
            apiKey: ConfigHelper.get('OPENAI_API_KEY')
        });
        this.openai = new OpenAIApi(configuration);
    }

    public async query(text : string) : Promise<CreateCompletionResponseChoicesInner[]> {
        return this.queryQuestions([text]);
    }
    public async queryQuestions(questions : string[], errorCount = 0, model = 'gpt-4'): Promise<CreateChatCompletionResponseChoicesInner[]> {
        console.log('Start query ' + questions.length + ' questions.');
        console.log(questions[0]);
        try {
            await setTimeout(2 * 1000);

            let messages : ChatCompletionRequestMessage[] = []
            let messageLength = 0;
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
            console.log('Done query')
            return completion.data.choices;
        } catch (e : any) {
            if (e && this.retryStatuses.includes(e.response?.status) && errorCount < 3) {
                console.log('Sleep 5 sec')
                await setTimeout(5 * 1000);
                return this.queryQuestions(questions, ++errorCount, model);
            }
            console.error('OpenAI error:', e.response.data.error.message)
            console.error('Error doing OpenAI query:', questions);
            console.error(e);
            throw e;
        }
    }

    retryStatuses = [429, 500, 503]
}