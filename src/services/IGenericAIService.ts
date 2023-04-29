import GenericAIResponse from "../model/GenericAIResponse";

export default interface IGenericAIService {
    query(questions : string[], assistantMessages? : string[]): Promise<GenericAIResponse>;
}