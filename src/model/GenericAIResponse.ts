import {ChatCompletionRequestMessage} from "openai";

export default interface GenericAIResponse {
    answer : string;
    requestMessages :  ChatCompletionRequestMessage[];
}