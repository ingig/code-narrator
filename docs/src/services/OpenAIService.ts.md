# OpenAIService.ts

This TypeScript file defines the `OpenAIService` class, which is responsible for interacting with the OpenAI API to perform queries and receive responses. The class implements the `IGenericAIService` interface.

## Table of Contents

- [Class: OpenAIService](#class-openaiservice)
  - [Constructor](#constructor)
  - [Methods](#methods)
    - [query](#query)
    - [queryQuestions](#queryquestions)
- [Examples](#examples)

## Class: OpenAIService

The `OpenAIService` class is responsible for managing the interaction with the OpenAI API. It provides methods to query the API and handle responses.

### Constructor

The constructor initializes the `OpenAIService` instance with the necessary configuration for the OpenAI API. It sets up the `openai` object using the API key from the `ConfigHelper`.

### Methods

#### query

```typescript
public async query(questions: string[], assistantMessages?: string[]): Promise<GenericAIResponse>
```

This method takes an array of `questions` and an optional array of `assistantMessages`. It returns a `Promise` that resolves to a `GenericAIResponse` object.

The method first retrieves the configuration and the GPT model to use. Then, it calls the `queryQuestions` method to perform the actual query.

#### queryQuestions

```typescript
private async queryQuestions(questions: string[], errorCount = 0, model: string, assistantMessages?: string[]): Promise<GenericAIResponse>
```

This private method takes an array of `questions`, an `errorCount` (default 0), a `model` string, and an optional array of `assistantMessages`. It returns a `Promise` that resolves to a `GenericAIResponse` object.

The method constructs the `messages` array, which includes system commands, user questions, and assistant messages. It then calls the OpenAI API with the constructed `messages` array and handles the response.

If an error occurs, the method retries the query up to 3 times, depending on the error status. If the error persists, it returns an empty `GenericAIResponse`.

## Examples

To use the `OpenAIService` class, you can create an instance and call the `query` method with an array of questions:

```typescript
import OpenAIService from './OpenAIService';

const openAIService = new OpenAIService();
const questions = ['What is the capital of France?', 'What is the largest mammal?'];

openAIService.query(questions).then((response) => {
  console.log(response.answer);
});
```

If you want to include assistant messages in the query, you can pass an array of messages as the second argument:

```typescript
const assistantMessages = ['The user is looking for information about animals.'];

openAIService.query(questions, assistantMessages).then((response) => {
  console.log(response.answer);
});
```