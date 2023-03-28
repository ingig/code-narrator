---
sidebar_position: 0
sidebar_label: BaseBuilder.ts
---

# BaseBuilder.ts

BaseBuilder.ts is a TypeScript file that defines an abstract class `BaseBuilder` for creating Builder plugins. These plugins are used to generate questions for GPT, parse the response, and load it into a `Document` object that is later cached.

## Class: BaseBuilder

The `BaseBuilder` class is an abstract class that provides a base structure for creating Builder plugins. It has the following properties and methods:

### Properties

- `openAIRepository`: An instance of the `OpenAIRepository` class.
- `generator`: A string representing the generator used for the Builder plugin.
- `project`: An object representing the project.

### Constructor

The constructor takes two parameters:

- `generator` (string): The generator used for the Builder plugin.
- `project` (any): The project object.

### Methods

#### generate()

An abstract method that should be implemented by the derived class.

#### render(document: Document)

An abstract method that should be implemented by the derived class. It takes a `Document` object as a parameter and returns a Promise that resolves to a string.

#### getAnswer(name: string, args: any, template = 'template'): Promise<[string, string]>

This method takes three parameters:

- `name` (string): The name of the file.
- `args` (any): The arguments for the question.
- `template` (string, optional, default: 'template'): The template to use for generating the question.

It returns a Promise that resolves to a tuple containing the answer and the question.

#### generateDocumentation(options: GenerateOptions)

This method takes an object of type `GenerateOptions` as a parameter and returns a `Document` object. It generates the documentation by asking GPT a question and creating a new `Document` object with the answer.

#### generateDocumentationAndCache(options: GenerateOptions)

This method takes an object of type `GenerateOptions` as a parameter and generates the documentation using the `generateDocumentation` method. It then stores the generated `Document` object in the cache using the `DocumentationCache.set()` method.

#### hasChanged(document?: Document): boolean

This method takes an optional `Document` object as a parameter and returns a boolean value. It checks if the document has changed by comparing the file modification time with the document's updated time. If the document has changed, it returns `true`, otherwise, it returns `false`.

## Example Usage

To create a custom Builder plugin, you can extend the `BaseBuilder` class and implement the `generate()` and `render()` methods. Here's an example:

```typescript
import BaseBuilder from "./BaseBuilder";
import Document from "../../Document";

class CustomBuilder extends BaseBuilder {
  constructor(generator: string, project: any) {
    super(generator, project);
  }

  generate() {
    // Implement the generate method
  }

  async render(document: Document) {
    // Implement the render method
  }
}
```

Then, you can use the `CustomBuilder` class to generate and cache documentation:

```typescript
const customBuilder = new CustomBuilder("customGenerator", project);
customBuilder.generateDocumentationAndCache(options);
```