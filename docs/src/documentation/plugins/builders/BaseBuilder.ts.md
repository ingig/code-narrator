# BaseBuilder.ts

The `BaseBuilder.ts` file is a TypeScript code file that defines an abstract class `BaseBuilder`. This class serves as the base class for Builder plugins, which are used to generate questions for GPT, parse the response, and load it into a document object that is later cached.

## Class: BaseBuilder

### Constructor

- `protected constructor(generator: string)`: Initializes a new instance of the `BaseBuilder` class with the specified generator.

### Methods

- `public async generateUsingPlugin()`: Calls the `generate()` method to generate content using the plugin.

- `abstract generate(): Promise<any>`: An abstract method that must be implemented by derived classes to generate content.

- `public async getAnswer(name: string, args: any = {}, template = 'template', assistantMessages?: string[]): Promise<GenericAIResponse>`: Generates a question using the specified template and arguments, sends it to the AI service, and returns the response.

  - `name`: The name of the file or entity for which the question is being generated.
  - `args`: An optional object containing additional arguments for the question.
  - `template`: The name of the template file to use for generating the question (default is 'template').
  - `assistantMessages`: An optional array of assistant messages to include in the AI service query.

- `public async generateDocumentation(options: GenerateOptions)`: Generates documentation for the specified file or entity using the provided options and returns a `Document` object.

  - `options`: An object containing options for generating the documentation, such as `args`, `template`, `name`, `pathToFile`, `folderPath`, `sidebarPosition`, `assistantMessages`, `sidebarLabel`, `saveToPath`, and `data`.

- `public async generateDocumentationAndCache(options: GenerateOptions)`: Generates documentation for the specified file or entity using the provided options, creates a `Document` object, and stores it in the cache.

  - `options`: An object containing options for generating the documentation, such as `args`, `template`, `name`, `pathToFile`, `folderPath`, `sidebarPosition`, `assistantMessages`, `sidebarLabel`, `saveToPath`, `data`, and `prevDocument`.

- `public hasChanged(document?: Document)`: Checks if the specified document has changed since it was last updated.

  - `document`: The `Document` object to check for changes.

## Example Usage

To use the `BaseBuilder` class, you would need to create a derived class that implements the `generate()` method. Here's an example:

```typescript
import BaseBuilder from "./BaseBuilder";

class CustomBuilder extends BaseBuilder {
  constructor() {
    super("CustomGenerator");
  }

  async generate() {
    // Implement your custom generation logic here
  }
}

const customBuilder = new CustomBuilder();
customBuilder.generateUsingPlugin();
```

In this example, we create a `CustomBuilder` class that extends the `BaseBuilder` class and implements the `generate()` method. We then create an instance of the `CustomBuilder` class and call the `generateUsingPlugin()` method to generate content using our custom logic.