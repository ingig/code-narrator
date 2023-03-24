---
sidebar_label: OpenAIRepository
sidebar_position: 0
---
# OpenAIRepository

The `OpenAIRepository` class is a wrapper around the OpenAI API for querying GPT-4 models. It provides methods to send text queries and receive generated responses. This class uses the `openai` package to interact with the OpenAI API.

## Usage

To use the `OpenAIRepository` class, first import it and create an instance:

```javascript
import OpenAIRepository from './path/to/OpenAIRepository';

const openAIRepo = new OpenAIRepository();
```

Then, you can use the `query` or `queryQuestions` methods to send text queries and receive generated responses:

```javascript
// Single question
const question = 'What is the capital of France?';
const response = await openAIRepo.query(question);
console.log(response);

// Multiple questions
const questions = ['What is the capital of France?', 'What is the largest planet in our solar system?'];
const responses = await openAIRepo.queryQuestions(questions);
console.log(responses);
```

## Methods

### constructor()

The constructor initializes the `OpenAIApi` instance with the API key from the configuration.

### query(text: string): Promise<CreateCompletionResponseChoicesInner[]>

This method sends a single text query to the OpenAI API and returns a Promise that resolves to an array of `CreateCompletionResponseChoicesInner` objects.

- `text`: The text query to send to the OpenAI API.

### queryQuestions(questions: string[], errorCount = 0): Promise<CreateChatCompletionResponseChoicesInner[]>

This method sends multiple text queries to the OpenAI API and returns a Promise that resolves to an array of `CreateChatCompletionResponseChoicesInner` objects.

- `questions`: An array of text queries to send to the OpenAI API.
- `errorCount`: (Optional) The number of times the method has been called recursively due to errors. Default is 0.

## Error Handling

The `queryQuestions` method handles errors by checking the response status code. If the status code is one of the retryStatuses (429, 500, 503) and the errorCount is less than 3, the method will wait for 5 seconds and then retry the query. If the error persists after 3 retries, the method will throw an error.

## Configuration

The `OpenAIRepository` class uses the `ConfigHelper` utility to get the OpenAI API key from the environment variables. Make sure to set the `OPENAI_API_KEY` environment variable with your OpenAI API key before using this class.