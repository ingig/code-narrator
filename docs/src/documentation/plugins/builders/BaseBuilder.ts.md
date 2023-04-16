# BaseBuilder.ts

The `BaseBuilder.ts` file is a TypeScript code file that defines an abstract class `BaseBuilder`. This class serves as the base class for Builder plugins, which are used to generate questions for GPT, parse the response, and load it into a `Document` object that is later cached.

## Class: BaseBuilder

### Constructor

- `protected constructor(generator: string)`: Initializes a new instance of the `BaseBuilder` class with the specified generator.

### Properties

- `openAIRepository: OpenAIRepository`: An instance of the `OpenAIRepository` class.
- `generator: string`: The generator used by the builder.
- `config: ICodeNarratorConfig`: The configuration object for the builder.

### Abstract Methods

- `generate(): any`: An abstract method that must be implemented by derived classes to generate content.
- `render(document: Document): Promise<string>`: An abstract method that must be implemented by derived classes to render the content of a `Document` object.

### Public Methods

- `getAnswer(name: string, args: any = {}, template = 'template', assistantMessages?: string[]): Promise<OpenAIResponse>`: Generates a question using the specified template and arguments, and returns the GPT response as an `OpenAIResponse` object.

- `generateDocumentation(options: GenerateOptions)`: Generates documentation using the specified options and returns a `Document` object.

- `generateDocumentationAndCache(options: GenerateOptions)`: Generates documentation using the specified options, creates a `Document` object, and stores it in the cache.

- `hasChanged(document?: Document)`: Checks if the specified document has changed since it was last updated.

## Usage Examples

To use the `BaseBuilder` class, you need to create a derived class that implements the abstract methods `generate()` and `render()`. Here's an example of a derived class:

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
```

Once you have a derived class, you can use it to generate documentation and cache it:

```typescript
const customBuilder = new CustomBuilder();
const options: GenerateOptions = {
  // Specify the options for generating documentation
};

customBuilder.generateDocumentationAndCache(options);
```

## Technical Concepts

- **Liquid**: Liquid is a template engine used in this code to render templates with the provided data. It is used to generate questions for GPT based on the specified template and arguments.
- **GPT**: GPT (Generative Pre-trained Transformer) is an AI model used to generate human-like text based on the input provided. In this code, GPT is used to generate documentation content based on the questions generated using Liquid templates.