import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from 'openai';
import { setTimeout } from 'timers/promises';
import ConfigHelper from "../config/ConfigHelper";
import GenericAIResponse from "../model/GenericAIResponse";
import DefaultSettings from "../config/DefaultSettings";
import IGenericAIService from "./IGenericAIService";

interface ModelConfig {
    endpoint: string;
    apiKey: string;
    models: Map<string, number>;
}

export default class OpenAICompatibleService implements IGenericAIService {
    private openai!: OpenAIApi; // Add the ! operator to tell TypeScript this will be initialized
    private modelConfigs: Map<string, ModelConfig> = new Map([
        ['openai', {
            endpoint: 'https://api.openai.com/v1',
            apiKey: ConfigHelper.OpenAiKey,
            models: new Map([
                ['gpt-3.5-turbo', 4096],
                ['gpt-4', 8192],
                ['gpt-4-32k', 32768],
            ])
        }],
        ['mistral', {
            endpoint: 'https://api.mistral.ai/v1',
            apiKey: ConfigHelper.MistralApiKey,
            models: new Map([
                ['mistral-tiny', 4096],
                ['mistral-small', 8192],
                ['mistral-medium', 32768],
            ])
        }],
        ['groq', {
            endpoint: 'https://api.groq.com/v1',
            apiKey: ConfigHelper.GroqApiKey,
            models: new Map([
                ['llama2-70b-4096', 4096],
                ['mixtral-8x7b-32768', 32768],
            ])
        }]
    ]);

    private currentProvider: string;
    
    constructor(provider: string = 'openai') {
        this.currentProvider = provider;
        this.initializeClient(); // This will initialize this.openai
    }

    private initializeClient() {
        const config = this.modelConfigs.get(this.currentProvider);
        if (!config) {
            throw new Error(`Provider ${this.currentProvider} not supported`);
        }

        const configuration = new Configuration({
            apiKey: config.apiKey,
            basePath: config.endpoint
        });
        this.openai = new OpenAIApi(configuration);
    }

    public async query(questions: string[], assistantMessages?: string[]): Promise<GenericAIResponse> {
        let config = ConfigHelper.config;
        if (!config) config = DefaultSettings.get();
        let model = config.gptModel;

        // Auto-select appropriate model if current one isn't available
        const providerConfig = this.modelConfigs.get(this.currentProvider);
        if (!providerConfig?.models.has(model)) {
            model = Array.from(providerConfig?.models.keys() ?? [])[0];
            console.warn(`Model ${config.gptModel} not available for ${this.currentProvider}, using ${model}`);
        }

        return this.queryQuestions(questions, 0, model, assistantMessages);
    }

    private async queryQuestions(questions: string[], errorCount = 0, model: string, assistantMessages?: string[]): Promise<GenericAIResponse> {
        let messages: ChatCompletionRequestMessage[] = [];
        const providerConfig = this.modelConfigs.get(this.currentProvider);
        
        try {
            await setTimeout(500);

            let config = ConfigHelper.config;
            if (!config) config = DefaultSettings.get();

            let messageLength = 0;

            // Add system messages
            for (let i = 0; config.gptSystemCommands && i < config.gptSystemCommands.length; i++) {
                messageLength += config.gptSystemCommands[i].length;
                messages.push({
                    role: 'system',
                    content: config.gptSystemCommands[i].replace('{DocumentationType}', ConfigHelper.DocumentationType)
                });
            }

            // Calculate max tokens based on provider and model
            const maxTokens = providerConfig?.models.get(model) ?? 4096;

            // Add user messages
            for (let question of questions) {
                if (messageLength + question.length > maxTokens) {
                    const length = Math.floor((maxTokens - messageLength) / 1.2);
                    question = question.substring(0, length);
                    console.warn(`Warning - Content too long: trimmed to ${length} characters`);
                }
                messages.push({ role: 'user', content: question });
                messageLength += question.length;
            }

            // Add assistant messages
            if (assistantMessages) {
                for (const msg of assistantMessages) {
                    messageLength += msg.length;
                    messages.push({ role: 'assistant', content: msg });
                }
            }

            const remainingTokens = maxTokens - messageLength;
            if (remainingTokens < 0) {
                console.error(`Message is too long (${messageLength}). Will not query API`);
                return { answer: '', requestMessages: messages } as GenericAIResponse;
            }

            const completion = await this.openai.createChatCompletion({
                model: model,
                messages: messages,
                temperature: 0.1,
                max_tokens: remainingTokens,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0
            });

            if (!completion.data.choices.length) {
                throw new Error(`Did not get answer. API is down. Run again.`);
            }

            return {
                answer: completion.data.choices[0].message?.content ?? '',
                requestMessages: messages
            };

        } catch (e: any) {
            const message = e.response?.data?.error?.message ?? '';
            
            // Handle quota exceeded
            if (message.includes('exceeded your current quota')) {
                throw new Error(message);
            }

            // Handle model availability
            if (message.includes('does not exist')) {
                console.warn(`Model ${model} not available, trying alternative model`);
                const alternativeModel = Array.from(providerConfig?.models.keys() ?? [])[0];
                return this.queryQuestions(questions, errorCount, alternativeModel, assistantMessages);
            }

            // Handle retries
            if (e?.response?.status && this.retryStatuses.includes(e.response.status) && errorCount < 3) {
                console.log('Sleep 3 sec');
                await setTimeout(3000);
                return this.queryQuestions(questions, ++errorCount, model, assistantMessages);
            }

            console.error(`${this.currentProvider} API error:`, message);
            console.error('Error doing API query:', questions);

            return { answer: '', requestMessages: messages } as GenericAIResponse;
        }
    }

    private retryStatuses = [429, 500, 503];

    // Method to switch providers at runtime
    public switchProvider(provider: string) {
        if (!this.modelConfigs.has(provider)) {
            throw new Error(`Provider ${provider} not supported`);
        }
        this.currentProvider = provider;
        this.initializeClient();
    }
}