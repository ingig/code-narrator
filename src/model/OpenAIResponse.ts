import {ChatCompletionRequestMessage} from "openai";

export default interface OpenAIResponse {
    answer : string;
    requestMessages :  ChatCompletionRequestMessage[];
}