# OpenAIRepository.ts

This TypeScript file defines the `OpenAIRepository` class, which is responsible for interacting with the OpenAI API to query GPT models. The class provides methods for querying single or multiple questions and handles error scenarios, retries, and message length limitations.

## Usage

To use the `OpenAIRepository` class, first import it and create an instance:

```typescript
import OpenAIRepository from './OpenAIRepository';

const openAIRepo = new OpenAIRepository();
```

Then, you can use the `query` and `queryQuestions` methods to interact with the GPT models:

```typescript
// Query a single question
const response = await openAIRepo.query('What is the capital of France?');
console.log(response.answer);

// Query multiple questions
const responses = await openAIRepo.queryQuestions([
  'What is the capital of France?',
  'What is the capital of Germany?'
]);
console.log(responses.answer);
```

## Methods

### constructor()

The constructor initializes the `OpenAIRepository` instance by setting up the OpenAI API configuration using the API key from `ConfigHelper`.

### async query(text: string): Promise<OpenAIResponse>

This method takes a single question as a string and returns a Promise that resolves to an `OpenAIResponse` object. It internally calls the `queryQuestions` method with an array containing the single question.

### async queryQuestions(questions: string[], errorCount = 0, model?: string, assistantMessages?: string[]): Promise<OpenAIResponse>

This method takes an array of questions, an optional error count, an optional model name, and an optional array of assistant messages. It returns a Promise that resolves to an `OpenAIResponse` object.

The method handles message length limitations, retries on specific error statuses, and constructs the request messages for the OpenAI API. It also trims the questions if the total message length exceeds the model's token limit.

## Properties

### openai: OpenAIApi

An instance of the `OpenAIApi` class, which is used to interact with the OpenAI API.

### models: Map<string, number>

A map of supported GPT models and their respective token limits.

## Error Handling

The `queryQuestions` method handles various error scenarios, such as exceeding the API quota, retrying on specific error statuses (429, 500, 503), and trimming questions if the total message length exceeds the model's token limit. If an error occurs, the method returns an `OpenAIResponse` object with an empty answer and the request messages.

## Technical Concepts

- `OpenAIResponse`: A custom object that represents the response from the OpenAI API. It contains the answer and the request messages.
- `ChatCompletionRequestMessage`: A type from the `openai` package that represents a message in the chat completion request.
- `CreateCompletionResponseChoicesInner`: A type from the `openai` package that represents a choice in the chat completion response.
- `Configuration`: A type from the `openai` package that represents the API configuration.
- `OpenAIApi`: A class from the `openai` package that provides methods for interacting with the OpenAI API.
- `ConfigHelper`: A helper class for managing the application's configuration.
- `DefaultSettings`: A class that provides default settings for the application.