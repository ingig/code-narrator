import {Configuration, CreateCompletionResponseChoicesInner, OpenAIApi} from 'openai';
import ConfigHelper from "../utils/ConfigHelper";
import { setTimeout } from 'timers/promises';
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
    public async queryQuestions(questions : string[], errorCount = 0): Promise<CreateCompletionResponseChoicesInner[]> {
        console.log('Start query ' + questions.length + ' questions');
        try {
            const completion = await this.openai.createCompletion({
                model: "text-davinci-003",
                prompt: questions,
                temperature: 0.7,
                max_tokens: 2500,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0

            });
            console.log('Done query')
            return completion.data.choices;
        } catch (e : any) {
            if (e && this.retryStatuses.includes(e.response.status) && errorCount < 3) {
                console.log('Sleep 5 sec')
                await setTimeout(5 * 1000);
                return this.queryQuestions(questions, ++errorCount);
            }
            console.error('OpenAI error:', e.response.data.error.message)
            console.error('Error doing OpenAI query:', questions);
            console.error(e);
            throw e;
        }
    }

    retryStatuses = [429, 500]
}