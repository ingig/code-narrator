---
sidebar_position: 3
sidebar_label: DocumentationGenerator.ts
---

# DocumentationGenerator.ts

This is a TypeScript code file that defines a class named `DocumentationGenerator`. The purpose of this class is to generate documentation files based on the contents of a `DocumentationCache`. It supports the use of generator plugins to process the documentation before writing it to the file system.

## Table of Contents

- [Class Description](#class-description)
- [Usage Examples](#usage-examples)
- [Methods](#methods)
  - [make](#make)
- [Parameters](#parameters)

## Class Description

The `DocumentationGenerator` class is responsible for generating documentation files based on the contents of a `DocumentationCache`. It uses the configuration provided by `ConfigHelper` to determine the output paths for the generated documentation files. The class also supports the use of generator plugins to process the documentation before writing it to the file system.

## Usage Examples

To use the `DocumentationGenerator` class, you can create an instance of the class and call the `make` method:

```typescript
import DocumentationGenerator from "./DocumentationGenerator";

const generator = new DocumentationGenerator();
generator.make();
```

## Methods

### make

The `make` method is responsible for generating the documentation files. It first retrieves the documents from the `DocumentationCache`. If there are no documents, the method returns immediately. The method then iterates through the documents and processes them using the configured generator plugins. Finally, it writes the processed documentation to the file system.

```typescript
public make(): void;
```

## Parameters

The `make` method does not have any parameters.

### Technical Concepts

- **DocumentationCache**: A cache that stores the documentation data to be processed by the `DocumentationGenerator`.
- **BaseGenerator**: A base class for generator plugins that can be used to process the documentation before writing it to the file system.
- **ConfigHelper**: A helper class that provides access to the configuration settings for the documentation generation process.
- **App**: A class representing the main application, which is used to determine the start time of the application for cache management purposes.