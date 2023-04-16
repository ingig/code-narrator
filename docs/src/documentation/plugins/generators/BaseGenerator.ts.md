---
nav_order: 0
title: BaseGenerator.ts
parent: generators

permalink: src/documentation/plugins/generators/BaseGenerator.ts.md
---

# BaseGenerator.ts

The `BaseGenerator.ts` file is a TypeScript code file that defines the base class for Generator plugins. Generator plugins are used to parse the documentation and modify it for the build tool you are using to build the documentation.

The default plugin with code-narrator is Docusaurus since it fails to build when a function contains a `Promise<>` in return. This plugin clears that Promise from the function name so it can build. It also creates sidebar information.

## Usage

To use this class, you need to create a new class that extends the `BaseGenerator` class and implement the `process` method.

```typescript
import BaseGenerator from "./BaseGenerator";
import Document from "../../Document";

class CustomGenerator extends BaseGenerator {
    process(document: Document): Document {
        // Your custom implementation here
    }
}
```

## Methods

### process(document: Document): Document

This is an abstract method that should be implemented by the derived class. It takes a `Document` object as input and returns a modified `Document` object.

#### Parameters

- `document` (Document): The input `Document` object that needs to be processed.

#### Returns

- `Document`: The modified `Document` object after processing.

## Technical Concepts

### Document

The `Document` class is a custom class that represents the documentation structure. It contains information about the documentation, such as the content, metadata, and other relevant details.

### Promise

A `Promise` is a standard JavaScript concept that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. In this context, the `BaseGenerator` class is designed to handle cases where a function contains a `Promise<>` in its return type, which can cause issues with some build tools like Docusaurus.