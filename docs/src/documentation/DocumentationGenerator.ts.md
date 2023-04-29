# DocumentationGenerator.ts

This is a TypeScript code file that defines the `DocumentationGenerator` class. The class is responsible for generating documentation files based on the provided documents and configuration. It also supports the use of generator plugins to customize the documentation generation process.

## Usage

To use the `DocumentationGenerator` class, you need to import it and create an instance. You can then call the `make()` method to generate the documentation files.

```typescript
import DocumentationGenerator from "./DocumentationGenerator";

const generator = new DocumentationGenerator();
generator.make();
```

You can also pass a `Document` object to the `make()` method to generate documentation for a specific document.

```typescript
import DocumentationGenerator from "./DocumentationGenerator";
import Document from "./Document";

const document = new Document(/* ... */);
const generator = new DocumentationGenerator();
generator.make(document);
```

## Methods

### make(document?: Document)

This method generates the documentation files based on the provided documents and configuration. If a `Document` object is provided, it will generate documentation only for that document. Otherwise, it will generate documentation for all documents in the `DocumentationCache`.

#### Parameters

- `document` (optional): A `Document` object for which the documentation should be generated. If not provided, the method will generate documentation for all documents in the `DocumentationCache`.

## Technical Concepts

### Generator Plugins

The `DocumentationGenerator` class supports the use of generator plugins to customize the documentation generation process. These plugins should be instances of the `BaseGenerator` class or its subclasses. They should be specified in the configuration object under the `generatorPlugin` property.

For example, to use a custom generator plugin, you can update your configuration object like this:

```javascript
const config = {
  // ...
  generatorPlugin: [
    CustomGeneratorPlugin,
  ],
};
```

The `CustomGeneratorPlugin` should be a subclass of `BaseGenerator` and implement the `process(document: Document)` method. This method will be called for each document during the documentation generation process.

```typescript
import BaseGenerator from "./plugins/generators/BaseGenerator";
import Document from "./Document";

class CustomGeneratorPlugin extends BaseGenerator {
  process(document: Document) {
    // Custom processing logic
  }
}
```

### Configuration

The `DocumentationGenerator` class relies on a configuration object to determine various settings for the documentation generation process. This configuration object should be an instance of the `ConfigHelper` class and should include properties like `readmeRoot`, `project_path`, `documentation_path`, `folderRootFileName`, and `document_file_extension`.