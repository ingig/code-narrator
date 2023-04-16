---
nav_order: 0
title: UserDefinedBuilder.ts
parent: UserDefined

permalink: src/documentation/plugins/builders/UserDefined/UserDefinedBuilder.ts.md
---

# UserDefinedBuilder.ts

This is a TypeScript code file that defines a class named `UserDefinedBuilder` which extends the `BaseBuilder` class. The purpose of this class is to generate and render user-defined documentation based on templates and configurations.

## Usage

To use the `UserDefinedBuilder` class, you need to import it and create an instance of the class. Then, you can call its methods to generate and render the documentation.

```typescript
import UserDefinedBuilder from "./UserDefinedBuilder";

const userDefinedBuilder = new UserDefinedBuilder();
await userDefinedBuilder.generate();
```

## Methods

### constructor()

The constructor initializes the `UserDefinedBuilder` instance and sets its type to 'UserDefined'.

### extractPathFromContent(input: string): string | null

This method takes an input string and extracts the content path using a regular expression. It returns the extracted path or null if no match is found.

#### Parameters

- `input`: A string containing the content path.

### generate(): Promise<void>

This asynchronous method generates the user-defined documentation based on the provided configuration and templates. It iterates through the builders in the configuration, checks if the template has changed, and generates the documentation using the `UserDefinedBuilderHelper` class.

### render(document: Document): Promise<string>

This asynchronous method takes a `Document` object and returns its documentation as a string.

#### Parameters

- `document`: A `Document` object containing the documentation to be rendered.

### hasTemplateChanged(document: Document | undefined, templatePath: string): boolean

This method checks if the template has changed since the last update of the document. It returns true if the template has changed or if the document is undefined, and false otherwise.

#### Parameters

- `document`: A `Document` object or undefined.
- `templatePath`: A string representing the path to the template file.

## Helper Classes

The `UserDefinedBuilder` class uses the following helper classes:

- `UserDefinedBuilderHelper`: This class is responsible for loading arguments, getting assistant messages, and generating the documentation.
- `ConfigHelper`: This class helps with managing the configuration settings.
- `DocumentationCache`: This class is responsible for caching the generated documentation.
- `FileStructure`: This class helps with managing the file structure of the project.
- `Helper`: This class contains utility functions.

## Dependencies

The `UserDefinedBuilder` class depends on the following external libraries:

- `path`: A built-in Node.js module for working with file and directory paths.
- `fs`: A built-in Node.js module for working with the file system.
- `jsonpath`: A library for working with JSONPath expressions.