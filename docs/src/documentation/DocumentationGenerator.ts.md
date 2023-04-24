# DocumentationGenerator.ts

This TypeScript file contains the `DocumentationGenerator` class, which is responsible for generating documentation files based on the contents of the `DocumentationCache`. The generator uses various plugins to process the documentation and writes the output to the specified file paths.

## Usage

To use the `DocumentationGenerator` class, you need to create an instance of the class and call the `make()` method. The method will generate documentation files based on the documents stored in the `DocumentationCache`.

```typescript
import DocumentationGenerator from "./DocumentationGenerator";

const generator = new DocumentationGenerator();
generator.make();
```

## Class: DocumentationGenerator

### Method: make()

This method generates documentation files based on the documents stored in the `DocumentationCache`. It processes the documents using the configured generator plugins and writes the output to the specified file paths.

#### Parameters

None.

#### Example

```typescript
const generator = new DocumentationGenerator();
generator.make();
```

## Technical Concepts

### DocumentationCache

The `DocumentationCache` is a class that stores the documents to be processed by the `DocumentationGenerator`. It provides methods to add, remove, and retrieve documents based on their folder paths.

### BaseGenerator

The `BaseGenerator` is an abstract class that serves as a base for generator plugins. These plugins are responsible for processing the documents and modifying their content before they are written to the output files.

### ConfigHelper

The `ConfigHelper` is a class that provides access to the configuration settings of the application. It is used by the `DocumentationGenerator` to retrieve the settings related to the documentation generation process, such as the output folder, file extension, and generator plugins.

### App

The `App` class represents the main application instance. It is used by the `DocumentationGenerator` to determine the start time of the application, which is used to check if a document has been modified since the application started.

## Template Variables

None. This is a TypeScript code file, not a template file.