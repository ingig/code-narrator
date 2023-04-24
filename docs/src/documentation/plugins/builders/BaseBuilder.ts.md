# BaseBuilder.ts

This is a TypeScript code file that defines the `BaseBuilder` class, which serves as the base class for Builder plugins. Builder plugins are used to generate questions for GPT, parse the response, and load it into a `Document` object that is later cached.

## Table of Contents

- [Class Description](#class-description)
- [Methods](#methods)
  - [generate](#generate)
  - [getAnswer](#getanswer)
  - [generateDocumentation](#generatedocumentation)
  - [generateDocumentationAndCache](#generatedocumentationandcache)
  - [hasChanged](#haschanged)

## Class Description

The `BaseBuilder` class is an abstract class that provides the basic structure and methods for Builder plugins. It includes the following properties:

- `openAIRepository`: An instance of the `OpenAIRepository` class.
- `generator`: A string representing the generator used by the Builder plugin.
- `config`: An instance of the `ICodeNarratorConfig` interface.

## Methods

### generate

```typescript
abstract generate(): any;
```

This is an abstract method that must be implemented by any class that extends `BaseBuilder`. It is responsible for generating the content for the Builder plugin.

### getAnswer

```typescript
public async getAnswer(name: string, args: any = {}, template = 'template', assistantMessages?: string[]): Promise<OpenAIResponse>;
```

This method takes a `name`, `args`, `template`, and optional `assistantMessages` as input and returns a `Promise` that resolves to an `OpenAIResponse`. It uses the Liquid templating engine to render the template with the provided arguments and queries the OpenAI API with the generated question.

**Parameters:**

- `name`: The name of the entity for which the answer is being requested.
- `args`: An object containing any additional arguments required for the template.
- `template`: The name of the template file to be used (default is 'template').
- `assistantMessages`: An optional array of strings containing any assistant messages to be included in the API request.

### generateDocumentation

```typescript
public async generateDocumentation(options: GenerateOptions): Promise<Document>;
```

This method takes a `GenerateOptions` object as input and returns a `Promise` that resolves to a `Document` object. It calls the `getAnswer` method to obtain the answer from the OpenAI API and creates a new `Document` object with the provided information.

**Parameters:**

- `options`: An object containing the options for generating the documentation. See the `GenerateOptions` interface for more details.

### generateDocumentationAndCache

```typescript
public async generateDocumentationAndCache(options: GenerateOptions): Promise<void>;
```

This method takes a `GenerateOptions` object as input and returns a `Promise` that resolves to `void`. It calls the `generateDocumentation` method to create a `Document` object and then stores it in the `DocumentationCache`.

**Parameters:**

- `options`: An object containing the options for generating the documentation and caching it. See the `GenerateOptions` interface for more details.

### hasChanged

```typescript
public hasChanged(document?: Document): boolean;
```

This method takes an optional `Document` object as input and returns a boolean value indicating whether the document has changed since it was last updated. If the document is not provided or does not exist, the method returns `true`.

**Parameters:**

- `document`: An optional `Document` object to check for changes.