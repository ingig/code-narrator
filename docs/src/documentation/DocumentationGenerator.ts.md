# DocumentationGenerator.ts

This is a TypeScript code file that defines the `DocumentationGenerator` class. The class is responsible for generating documentation files based on the content of the `DocumentationCache`. It also supports the use of generator plugins to further process the documentation.

## Usage

To use the `DocumentationGenerator` class, you need to import it and create an instance of the class. Then, call the `make()` method to generate the documentation files.

```typescript
import DocumentationGenerator from "./DocumentationGenerator";

const generator = new DocumentationGenerator();
generator.make();
```

## Class: DocumentationGenerator

### Method: make()

This method generates the documentation files based on the content of the `DocumentationCache`. It also processes the documentation using the generator plugins specified in the configuration.

#### Parameters

None.

#### Example

```typescript
const generator = new DocumentationGenerator();
generator.make();
```

## Technical Concepts

### DocumentationCache

`DocumentationCache` is a class that stores the documentation content in memory. It provides methods to access and manipulate the documentation content.

### BaseGenerator

`BaseGenerator` is an abstract class that defines the interface for generator plugins. Generator plugins are used to process the documentation content before it is written to the file system.

### ConfigHelper

`ConfigHelper` is a class that provides access to the configuration settings of the application. It is used to retrieve settings such as the documentation path, generator plugins, and file extensions.

## File Content

The file content consists of the following:

1. Import statements for required modules and classes.
2. Definition of the `DocumentationGenerator` class.
3. Implementation of the `make()` method, which generates the documentation files.

### Note

The `make()` method uses the `fs` module to write the generated documentation to the file system. It also uses the `path` module to manipulate file paths.