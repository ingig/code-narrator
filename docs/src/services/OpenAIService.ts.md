# OpenAIService.ts

This TypeScript file defines the `OpenAIService` class, which is responsible for interacting with the OpenAI API to generate responses based on user input. The class implements the `IGenericAIService` interface.

## Table of Contents

- [Class Description](#class-description)
- [Constructor](#constructor)
- [Methods](#methods)
  - [query](#query)
  - [queryQuestions](#queryquestions)
- [Examples](#examples)

## Class Description

The `OpenAIService` class is designed to interact with the OpenAI API using the `openai` package. It provides methods to send queries to the API and receive responses. The class also handles error handling and retries for certain error statuses.

## Constructor

The constructor initializes the `OpenAIService` instance with the following properties:

- `openai`: An instance of the `OpenAIApi` class, configured with the API key from `ConfigHelper.OpenAiKey`.
- `models`: A `Map` containing the available GPT models and their respective token limits.

## Methods

### query

```typescript
public async query(questions: string[], assistantMessages?: string[]): Promise<GenericAIResponse>
```

This method takes an array of `questions` and an optional array of `assistantMessages`. It returns a `Promise` that resolves to a `GenericAIResponse` object containing the generated answer and the request messages.

The method first retrieves the configuration settings and the GPT model to use. Then, it calls the `queryQuestions` method to send the queries to the OpenAI API.

### queryQuestions

```typescript
private async queryQuestions(questions: string[], errorCount = 0, model: string, assistantMessages?: string[]): Promise<GenericAIResponse>
```

This private method is responsible for sending the queries to the OpenAI API and handling errors and retries. It takes the following parameters:

- `questions`: An array of strings containing the questions to ask the API.
- `errorCount`: An optional integer representing the number of errors encountered so far (default is 0).
- `model`: A string representing the GPT model to use.
- `assistantMessages`: An optional array of strings containing previous assistant messages.

The method constructs the `messages` array, which includes system commands, user questions, and assistant messages. It then sends the request to the OpenAI API and processes the response. If an error occurs, the method handles retries and downgrades the GPT model if necessary.

## Examples

To use the `OpenAIService` class, first create an instance of the class:

```typescript
const openAIService = new OpenAIService();
```

Then, call the `query` method with an array of questions:

```typescript
const questions = ["What is the capital of France?", "How many planets are in the solar system?"];
const response = await openAIService.query(questions);
console.log(response.answer);
```

If you want to include previous assistant messages, pass them as a second argument:

```typescript
const questions = ["What is the capital of France?", "How many planets are in the solar system?"];
const assistantMessages = ["Hello, I am an AI assistant."];
const response = await openAIService.query(questions, assistantMessages);
console.log(response.answer);
```

The `response` object will contain the generated answer and the request messages:

```typescript
{
  answer: "The capital of France is Paris. There are 8 planets in the solar system.",
  requestMessages: [
    // ...system commands, user questions, and assistant messages
  ]
}
```