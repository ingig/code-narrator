# OpenAIRepository.ts

This is a TypeScript code file that defines the `OpenAIRepository` class. The class is responsible for interacting with the OpenAI API to perform chat-based completions using various GPT models. It handles querying the API, managing the configuration, and processing the responses.

## Usage

To use the `OpenAIRepository` class, you need to import it and create an instance:

```typescript
import OpenAIRepository from './OpenAIRepository';

const openAIRepo = new OpenAIRepository();
```

Then, you can call the `query` or `queryQuestions` methods to interact with the OpenAI API:

```typescript
const response = await openAIRepo.query('What is the capital of France?');
console.log(response.answer);
```

## Class Methods

### constructor()

The constructor initializes the `OpenAIRepository` instance by setting up the OpenAI API configuration and creating an instance of the `OpenAIApi` class.

### async query(text: string): Promise<OpenAIResponse>

This method takes a single question as a string and returns a Promise that resolves to an `OpenAIResponse` object. It internally calls the `queryQuestions` method with the provided question.

### async queryQuestions(questions: string[], errorCount = 0, model?: string, assistantMessages?: string[]): Promise<OpenAIResponse>

This method takes an array of questions, an optional error count, an optional model name, and an optional array of assistant messages. It returns a Promise that resolves to an `OpenAIResponse` object. The method handles querying the OpenAI API, managing the configuration, and processing the responses.

#### Parameters

- `questions`: An array of strings containing the questions to be asked.
- `errorCount`: (Optional) A number representing the current error count. Default is 0.
- `model`: (Optional) A string representing the GPT model to be used. If not provided, the default model from the configuration will be used.
- `assistantMessages`: (Optional) An array of strings containing previous assistant messages.

## Error Handling

The `queryQuestions` method handles various error scenarios, such as exceeding the quota, using a non-existent model, or encountering API errors. It retries the query up to 3 times in case of specific error statuses (429, 500, 503).

## Example

```typescript
import OpenAIRepository from './OpenAIRepository';

const openAIRepo = new OpenAIRepository();
const questions = ['What is the capital of France?', 'What is the largest mammal?'];

(async () => {
  const response = await openAIRepo.queryQuestions(questions);
  console.log(response.answer);
})();
```

This example demonstrates how to use the `OpenAIRepository` class to query multiple questions at once.