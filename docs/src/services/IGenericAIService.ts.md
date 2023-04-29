# IGenericAIService.ts

IGenericAIService.ts is a TypeScript interface file that defines the structure for a generic AI service. This interface is used to implement AI services that can handle queries and return responses in a standardized format.

## Table of Contents

- [Overview](#overview)
- [Usage](#usage)
- [Methods](#methods)
  - [query](#query)
- [Technical Concepts](#technical-concepts)

## Overview

The IGenericAIService interface contains a single method, `query`, which takes an array of questions and an optional array of assistant messages as input and returns a Promise that resolves to a `GenericAIResponse` object.

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
- `assistantMessages?: string[]`: An optional array of assistant messages that can be used to provide additional context or information to the AI service.

#### Example

```typescript
const aiService = new MyAIService();
const questions = ["What is the weather like today?"];
const assistantMessages = ["The user is located in San Francisco."];

aiService.query(questions, assistantMessages).then((response: GenericAIResponse) => {
  console.log(response);
});
```

## Technical Concepts

- **TypeScript**: TypeScript is a superset of JavaScript that adds optional static types to the language. It is designed for the development of large applications and transcompiles to JavaScript.
- **Interfaces**: In TypeScript, an interface is a way to define a contract on a function or an object that specifies the shape of the properties and methods that the function or object should have.
- **Promise**: A Promise is a JavaScript object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. A Promise is said to be "settled" if it is either fulfilled or rejected.