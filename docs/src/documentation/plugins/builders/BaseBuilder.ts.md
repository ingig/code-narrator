# BaseBuilder.ts

The `BaseBuilder.ts` file is a TypeScript code file that defines an abstract class `BaseBuilder`. This class serves as the base class for Builder plugins, which are used to generate questions for GPT, parse the response, and load it into a document object that is later cached.

## Class: BaseBuilder

### Constructor

- `protected constructor(generator: string)`: Initializes a new instance of the `BaseBuilder` class with the specified generator.

### Properties

- `aiService: IGenericAIService`: An instance of the AI service used for querying GPT.
- `generator: string`: The generator used for generating questions.
- `config: ICodeNarratorConfig`: The configuration object for the Code Narrator.

### Methods

- `public async generateUsingPlugin()`: Calls the `generate()` method to generate questions using the plugin.
- `abstract generate(): Promise<any>`: An abstract method that must be implemented by derived classes to generate questions.
- `public async getAnswer(name: string, args: any = {}, template = 'template', assistantMessages?: string[]): Promise<GenericAIResponse>`: Renders the question using the specified template and arguments, queries the AI service, and returns the response.
- `public async generateDocumentation(options: GenerateOptions)`: Generates documentation using the specified options and returns a `Document` object.
- `public async generateDocumentationAndCache(options: GenerateOptions)`: Generates documentation using the specified options, caches the document, and generates the documentation file.
- `public hasChanged(document?: Document)`: Checks if the document has changed since the last update.

## Usage

To use the `BaseBuilder` class, you need to create a derived class that implements the `generate()` method. Here's an example:

```typescript
import BaseBuilder from "./BaseBuilder";

class CustomBuilder extends BaseBuilder {
  constructor() {
    super("CustomGenerator");
  }

  async generate() {
    // Implement your custom logic for generating questions here
  }
}

const customBuilder = new CustomBuilder();
customBuilder.generateUsingPlugin();
```

In the derived class, you can use the `getAnswer()` method to query the AI service and the `generateDocumentation()` and `generateDocumentationAndCache()` methods to generate and cache the documentation.

```typescript
async generate() {
  const name = "example";
  const args = { projectName: "MyProject" };
  const template = "custom_template";
  const response = await this.getAnswer(name, args, template);

  const options: GenerateOptions = {
    args,
    template,
    name,
    pathToFile: "path/to/file",
    folderPath: "path/to/folder",
    sidebarPosition: 1,
    sidebarLabel: "Example",
  };

  const document = await this.generateDocumentation(options);
  await this.generateDocumentationAndCache(options);
}
```

Remember to handle any non-standard technical concepts that may appear in the code, such as custom configuration objects or unique AI service implementations.