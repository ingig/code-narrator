# BaseBuilder.ts

The `BaseBuilder.ts` file is a TypeScript code file that defines an abstract class `BaseBuilder`. This class serves as the base class for Builder plugins, which are used to generate questions for GPT, parse the response, and load it into a `Document` object that is later cached.

## Table of Contents

- [Description](#description)
- [Usage](#usage)
- [Methods](#methods)
  - [generate](#generate)
  - [render](#render)
  - [getAnswer](#getanswer)
  - [generateDocumentation](#generatedocumentation)
  - [generateDocumentationAndCache](#generatedocumentationandcache)
  - [hasChanged](#haschanged)

## Description

The `BaseBuilder` class provides a foundation for creating Builder plugins that interact with GPT and manage the generation and caching of documentation. It includes methods for generating questions, rendering documents, and managing the cache.

## Usage

To use the `BaseBuilder` class, you need to create a new class that extends it and implement the abstract methods `generate()` and `render(document: Document)`.

```typescript
import BaseBuilder from "./BaseBuilder";
import Document from "../../Document";

class CustomBuilder extends BaseBuilder {
  constructor() {
    super("CustomGenerator");
  }

  generate() {
    // Your custom implementation here
  }

  async render(document: Document): Promise<string> {
    // Your custom implementation here
  }
}
```

## Methods

### generate

This abstract method should be implemented in the derived class to generate the required data.

```typescript
abstract generate(): any;
```

### render

This abstract method should be implemented in the derived class to render the given `Document` object.

```typescript
abstract render(document: Document): Promise<string>;
```

### getAnswer

This method retrieves an answer from GPT using the provided name, arguments, and template.

```typescript
public async getAnswer(name: string, args: any = {}, template = 'template', assistantMessages?: string[]): Promise<OpenAIResponse>;
```

### generateDocumentation

This method generates a `Document` object with the provided options.

```typescript
public async generateDocumentation(options: GenerateOptions): Promise<Document>;
```

### generateDocumentationAndCache

This method generates a `Document` object with the provided options and caches it.

```typescript
public async generateDocumentationAndCache(options: GenerateOptions): Promise<void>;
```

### hasChanged

This method checks if the given `Document` object has changed since it was last updated.

```typescript
public hasChanged(document?: Document): boolean;
```

## Example

```typescript
import BaseBuilder from "./BaseBuilder";
import Document from "../../Document";

class CustomBuilder extends BaseBuilder {
  constructor() {
    super("CustomGenerator");
  }

  generate() {
    // Your custom implementation here
  }

  async render(document: Document): Promise<string> {
    // Your custom implementation here
  }
}

const customBuilder = new CustomBuilder();
const generatedDocument = await customBuilder.generateDocumentation({
  name: "example",
  pathToFile: "path/to/file",
  folderPath: "path/to/folder",
  sidebarPosition: 1,
  sidebarLabel: "Example",
});

console.log(generatedDocument);
```