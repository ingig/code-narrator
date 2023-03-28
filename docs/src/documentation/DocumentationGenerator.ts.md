---
sidebar_position: 3
sidebar_label: DocumentationGenerator.ts
---

# DocumentationGenerator.ts

## Overview

The `DocumentationGenerator.ts` file is a TypeScript module that exports a `DocumentationGenerator` class. This class is responsible for generating documentation files based on the configuration and the cached documents. It uses the `ConfigHelper`, `DocumentationCache`, and generator plugins to create the documentation files in the specified format and location.

## Usage

To use the `DocumentationGenerator` class, you need to import it and create an instance of the class. Then, call the `make()` method to generate the documentation files.

```typescript
import DocumentationGenerator from './DocumentationGenerator';

const generator = new DocumentationGenerator();
generator.make();
```

## Class: DocumentationGenerator

### Method: make()

The `make()` method is the main method of the `DocumentationGenerator` class. It generates the documentation files based on the cached documents and the configuration.

#### Process

1. Retrieve the cached documents from `DocumentationCache.Documents`.
2. Get the `documentation_path` and `project_path` from the `ConfigHelper`.
3. Iterate through the configured projects and generate the `ReadMe.md` file if the `readmeRoot` option is set.
4. Iterate through the cached documents and generate the documentation files for each document.
5. For each document, create the folder structure in the `documentation_path` if it doesn't exist.
6. Process the document using the configured generator plugins.
7. Write the generated documentation to the file system.

## Configuration

The `DocumentationGenerator` class relies on the following configuration options:

- `documentation_path`: The path where the generated documentation files will be saved.
- `project_path`: The path of the project for which the documentation is being generated.
- `generatorPlugin`: An array of generator plugins to be used for processing the documents.

## Generator Plugins

The `DocumentationGenerator` class supports the use of generator plugins to process the documents before writing them to the file system. These plugins should extend the `BaseGenerator` class and implement the `process()` method.

Example of a generator plugin:

```typescript
import BaseGenerator from './plugins/generators/BaseGenerator';

class CustomGenerator extends BaseGenerator {
  process(document: Document) {
    // Process the document
  }
}
```

To use a custom generator plugin, add it to the `generatorPlugin` configuration option:

```typescript
import CustomGenerator from './CustomGenerator';

const config = {
  // ...
  generatorPlugin: [CustomGenerator],
};
```