---
sidebar_position: 0
sidebar_label: OpenAIRepository.ts
---

# OpenAIRepository.ts

This TypeScript file defines the `OpenAIRepository` class, which is responsible for interacting with the OpenAI API. The class provides methods to query the API using the GPT-4 model and handle errors and retries.

## Usage

To use the `OpenAIRepository` class, first import it and create an instance:

```typescript
import OpenAIRepository from './OpenAIRepository';

const openAIRepo = new OpenAIRepository();
```

Then, you can use the `query` or `queryQuestions` methods to interact with the OpenAI API:

```typescript
const response = await openAIRepo.query('What is the meaning of life?');
```

## Class Methods

### constructor()

The constructor initializes the `OpenAIRepository` instance by creating a new `OpenAIApi` object with the provided API key from the configuration.

### query(text: string): Promise<CreateCompletionResponseChoicesInner[] | undefined>

This method takes a single question as a string and returns a Promise that resolves to an array of `CreateCompletionResponseChoicesInner` objects or `undefined` if an error occurs. It internally calls the `queryQuestions` method with the provided question.

### queryQuestions(questions: string[], errorCount = 0, model = 'gpt-4'): Promise<CreateChatCompletionResponseChoicesInner[] | undefined>

This method takes an array of questions, an optional error count, and an optional model name (defaulting to 'gpt-4'). It returns a Promise that resolves to an array of `CreateChatCompletionResponseChoicesInner` objects or `undefined` if an error occurs.

The method handles retries in case of specific error statuses (429, 500, 503) and sleeps for a certain amount of time before retrying. It also throws an error if the quota for the API is exceeded.

## Technical Concepts

### OpenAIApi and Configuration

The `OpenAIApi` and `Configuration` classes are imported from the `openai` package. They are used to create an instance of the OpenAI API with the provided API key and configuration.

### ConfigHelper

The `ConfigHelper` class is a utility class that helps in fetching configuration values from the `code-narrator.config` file.

### setTimeout

The `setTimeout` function is imported from the `timers/promises` package and is used to create a delay before retrying the API call in case of specific error statuses.

### CreateCompletionResponseChoicesInner and CreateChatCompletionResponseChoicesInner

These types are imported from the `openai` package and represent the response choices returned by the OpenAI API.