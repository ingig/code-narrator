# BaseBuilder.ts

This is a TypeScript code file that defines the `BaseBuilder` class, which serves as the base class for Builder plugins. Builder plugins are used to generate questions for GPT, parse the response, and load it into a `Document` object that is later cached.

## Table of Contents

- [Class Definition](#class-definition)
- [Methods](#methods)
  - [generate](#generate)
  - [getAnswer](#getanswer)
  - [generateDocumentation](#generatedocumentation)
  - [generateDocumentationAndCache](#generatedocumentationandcache)
  - [hasChanged](#haschanged)

## Class Definition

The `BaseBuilder` class is defined as an abstract class with the following properties:

- `openAIRepository`: An instance of the `OpenAIRepository` class.
- `generator`: A string representing the generator used by the Builder plugin.
- `config`: An instance of the `ICodeNarratorConfig` interface.

The constructor takes a single parameter, `generator`, which is a string representing the generator used by the Builder plugin.

## Methods

### generate

```typescript
abstract generate(): any;
```

This is an abstract method that must be implemented by derived classes. It is responsible for generating the content based on the specific Builder plugin.

### getAnswer

```typescript
public async getAnswer(name: string, args: any = {}, template = 'template', assistantMessages?: string[]): Promise<OpenAIResponse>;
```

This method takes the following parameters:

- `name`: A string representing the name of the file or method being documented.
- `args`: An optional object containing additional arguments for the question generation.
- `template`: An optional string representing the template file to use for generating the question. Defaults to `'template'`.
- `assistantMessages`: An optional array of strings containing previous messages from the assistant.

The method returns a `Promise` that resolves to an `OpenAIResponse` object containing the GPT-generated answer.

### generateDocumentation

```typescript
public async generateDocumentation(options: GenerateOptions): Promise<Document>;
```

This method takes a `GenerateOptions` object as its parameter and returns a `Promise` that resolves to a `Document` object. The `GenerateOptions` object contains the following properties:

- `args`: An optional object containing additional arguments for the question generation.
- `template`: An optional string representing the template file to use for generating the question.
- `name`: The name of the file or method being documented.
- `pathToFile`: The path to the file being documented.
- `folderPath`: The path to the folder containing the file being documented.
- `sidebarPosition`: The position of the file in the sidebar.
- `assistantMessages`: An optional array of strings containing previous messages from the assistant.
- `sidebarLabel`: The label for the file in the sidebar.
- `saveToPath`: The path where the generated documentation should be saved.
- `data`: Any additional data to be included in the `Document` object.

### generateDocumentationAndCache

```typescript
public async generateDocumentationAndCache(options: GenerateOptions): Promise<void>;
```

This method takes a `GenerateOptions` object as its parameter and returns a `Promise` that resolves to `void`. It generates the documentation using the `generateDocumentation` method, caches the resulting `Document` object using the `DocumentationCache`, and generates the actual documentation file using the `DocumentationGenerator`.

### hasChanged

```typescript
public hasChanged(document?: Document): boolean;
```

This method takes an optional `Document` object as its parameter and returns a boolean value. It checks if the given document has changed since it was last updated. If the document is not provided or if the document's `documentation_type` property does not match the current `DocumentationType`, the method returns `true`. If the file does not exist, the method removes the document from the `DocumentationCache` and returns `false`. Otherwise, it compares the file's modification time with the document's `updated` property and returns `true` if the file has been modified since the document was last updated.