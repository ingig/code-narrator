# BaseBuilder.ts

This is a TypeScript code file that defines the `BaseBuilder` class, which serves as the base class for Builder plugins. Builder plugins are used to generate questions for GPT, parse the response, and load it into the `Document` object that is later cached.

## Class: BaseBuilder

The `BaseBuilder` class is an abstract class that provides the basic structure and methods for generating and rendering documentation using GPT.

### Properties

- `openAIRepository`: An instance of the `OpenAIRepository` class.
- `generator`: A string representing the generator used for the Builder plugin.
- `config`: An instance of the `ICodeNarratorConfig` interface.

### Constructor

The constructor takes a `generator` string as a parameter and initializes the `openAIRepository`, `generator`, and `config` properties.

### Abstract Methods

- `generate()`: An abstract method that must be implemented by derived classes.
- `render(document: Document)`: An abstract method that takes a `Document` object as a parameter and must be implemented by derived classes.

### Public Methods

- `getAnswer(name: string, args: any = {}, template = 'template', assistantMessages?: string[])`: A method that takes a `name`, `args`, `template`, and optional `assistantMessages` as parameters, and returns a Promise of an `OpenAIResponse`. It generates a question using the Liquid template engine and queries the OpenAIRepository.

- `generateDocumentation(options: GenerateOptions)`: A method that takes a `GenerateOptions` object as a parameter and returns a Promise of a `Document`. It generates the documentation using the provided options and stores the response in a `Document` object.

- `generateDocumentationAndCache(options: GenerateOptions)`: A method that takes a `GenerateOptions` object as a parameter and generates the documentation using the provided options. It then stores the generated `Document` object in the `DocumentationCache`.

- `hasChanged(document?: Document)`: A method that takes an optional `Document` object as a parameter and returns a boolean indicating whether the document has changed or not. It checks if the file exists, if the documentation type has changed, and if the file's modification time is greater than or equal to the document's updated time.

## Example Usage

To use the `BaseBuilder` class, you would need to create a derived class that implements the abstract methods `generate()` and `render(document: Document)`.

```typescript
import BaseBuilder from "./BaseBuilder";
import Document from "../../Document";

class CustomBuilder extends BaseBuilder {
  constructor() {
    super("CustomGenerator");
  }

  generate() {
    // Implement the generate method
  }

  async render(document: Document): Promise<string> {
    // Implement the render method
  }
}

const customBuilder = new CustomBuilder();
```

In this example, a `CustomBuilder` class is created that extends the `BaseBuilder` class. The `generate()` and `render(document: Document)` methods are implemented according to the specific requirements of the custom builder.