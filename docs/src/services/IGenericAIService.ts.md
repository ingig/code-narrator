# IGenericAIService.ts

IGenericAIService.ts is a TypeScript interface file that defines the structure for a generic AI service. This interface is designed to be implemented by various AI services, providing a consistent way to interact with different AI implementations.

## Table of Contents

- [Description](#description)
- [Usage](#usage)
- [Methods](#methods)
  - [query](#query)
- [Technical Concepts](#technical-concepts)

## Description

The IGenericAIService interface contains a single method called `query`, which takes an array of questions and an optional array of assistant messages as input, and returns a Promise that resolves to a `GenericAIResponse` object.

## Usage

To use the IGenericAIService interface, you need to create a class that implements this interface. Here's an example of how to create a class that implements the IGenericAIService interface:

```typescript
import IGenericAIService from "./IGenericAIService";
import GenericAIResponse from "../model/GenericAIResponse";

class MyAIService implements IGenericAIService {
  async query(questions: string[], assistantMessages?: string[]): Promise<GenericAIResponse> {
    // Your implementation here
  }
}
```

## Methods

### query

The `query` method is used to send an array of questions and an optional array of assistant messages to the AI service. The method returns a Promise that resolves to a `GenericAIResponse` object.

#### Parameters

- `questions: string[]`: An array of questions to be sent to the AI service.
- `assistantMessages? : string[]`: An optional array of assistant messages to be sent to the AI service.

#### Example

```typescript
const aiService = new MyAIService();
const questions = ["What is the weather like today?", "How old are you?"];
const assistantMessages = ["Hello, I am your assistant."];

aiService.query(questions, assistantMessages).then((response: GenericAIResponse) => {
  console.log(response);
});
```

## Technical Concepts

- **TypeScript**: TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds optional types, classes, and modules to JavaScript, making it easier to write and maintain large JavaScript applications.
- **Interfaces**: In TypeScript, an interface is a way to define a contract for a class to follow. It specifies the shape of an object, ensuring that the class implementing the interface adheres to the defined structure.
- **Promise**: A Promise is a JavaScript object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to associate handlers with an asynchronous action's eventual success or failure.