---
sidebar_position: 0
sidebar_label: BaseGenerator.ts
---

# BaseGenerator.ts

`BaseGenerator.ts` is a TypeScript code file that defines the base class for Generator plugins. Generator plugins are used to parse the documentation and modify it for the build tool you are using to build the documentation.

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

This abstract method should be implemented by the derived class. It takes a `Document` object as input and returns a modified `Document` object.

#### Parameters

- `document` (Document): The input `Document` object that needs to be processed by the generator plugin.

#### Returns

- `Document`: The modified `Document` object after processing.

## Technical Concepts

### Generator Plugins

Generator plugins are used to parse and modify the documentation for the build tool you are using to build the documentation. They can be used to customize the output of the documentation, such as modifying the function names, creating sidebar information, or adding additional metadata.

### Promise

A `Promise` is a standard JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. In the context of this file, the `Promise<>` type is used to indicate that a function returns a promise that resolves to a specific type. However, Docusaurus fails to build when a function contains a `Promise<>` in return, so the generator plugin clears that Promise from the function name to allow the build to proceed.