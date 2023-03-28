import OpenAIRepository from "../../src/repositories/OpenAIRepository";
import {CreateCompletionResponse, OpenAIApi} from "openai";
import {AxiosResponse} from "axios";
import {describe, expect, test} from '@jest/globals';
import ConfigHelper from "../../src/utils/ConfigHelper";

describe('Test OpenAIRepository', () => {

    it('should test queryQuestions', async () => {
        let questions = ['How are you?', 'What are you doing?']

        let spyOpenAIApi = jest.spyOn(OpenAIApi.prototype, 'createCompletion')
            .mockImplementation(() => {
                return {data : {
                    choices : ['hello man', 'yes man']
                    }} as any
            })

        let openAIRepository = new OpenAIRepository();
        let answers = await openAIRepository.queryQuestions(questions)

        expect(spyOpenAIApi).toBeCalledTimes(1);
    })


})