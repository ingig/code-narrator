import OpenAIRepository from "../../src/repositories/OpenAIRepository";
import {CreateCompletionResponse, OpenAIApi} from "openai";
import {AxiosResponse} from "axios";

describe('Test OpenAIRepository', () => {

    it('should test queryQuestions', async () => {
        let questions = ['How are you?', 'What are you doing?']

        let spyOpenAIApi = jest.spyOn(OpenAIApi.prototype, 'createCompletion')
            .mockImplementation((args : any) => {
                return {data : {
                    choices : ['hello man', 'yes man']
                    }} as any
            })

        let openAIRepository = new OpenAIRepository();
        let answers = await openAIRepository.queryQuestions(questions)

        expect(spyOpenAIApi).toBeCalledTimes(1);
    })

    it('Should Throw Error on OpenAI Api Query if Retry Exceeds Limit', async () => {

    })

})