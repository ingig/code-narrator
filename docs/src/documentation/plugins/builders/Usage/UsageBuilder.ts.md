---
sidebar_position: 0
sidebar_label: UsageBuilder.ts
---

# UsageBuilder.ts

## Overview

The `UsageBuilder.ts` file is a TypeScript module that exports a `UsageBuilder` class, which extends the `BaseBuilder` class. This class is responsible for generating and caching usage documentation for a given project. It also provides a method to render the documentation.

## Class: UsageBuilder

### Constructor

```typescript
constructor(project: any)
```

The constructor takes a single parameter, `project`, which is an object containing the project's information. It initializes the `UsageBuilder` instance by calling the `super` constructor with the `'Usage'` type and the `project` object.

### Method: generate

```typescript
public async generate()
```

The `generate` method is an asynchronous function that generates and caches the usage documentation for the project. It first checks if the documentation is already cached, and if so, it returns immediately. Otherwise, it reads the project's files, such as the project file, CLI file, and config file, and constructs an `args` object containing the project's name and file contents. It then calls the `generateDocumentationAndCache` method from the `BaseBuilder` class to generate and cache the documentation.

### Method: render

```typescript
public async render(document: Document)
```

The `render` method is an asynchronous function that takes a `Document` object as its parameter and returns the documentation content.

## Usage

To use the `UsageBuilder` class, you need to import it and create an instance with the project information. Then, you can call the `generate` method to generate and cache the usage documentation, and the `render` method to render the documentation.

```typescript
import UsageBuilder from "./UsageBuilder";

const projectInfo = {
  project_path: "path/to/project",
  project_file: "projectFile.ts",
  cli_file: "cliFile.ts",
  config_file: "configFile.ts",
  project_name: "MyProject",
};

const usageBuilder = new UsageBuilder(projectInfo);
await usageBuilder.generate();
const document = DocumentationCache.get("Usage");
const renderedDocumentation = await usageBuilder.render(document);
```

## Dependencies

The `UsageBuilder.ts` file imports several dependencies:

- `Document`: A class representing a documentation object.
- `fs`: The Node.js file system module, used for reading files.
- `path`: The Node.js path module, used for joining and manipulating file paths.
- `ConfigHelper`: A utility class for working with configuration files.
- `BaseBuilder`: The base class for all builder classes, providing common functionality.
- `DocumentationCache`: A class for caching documentation objects.
- `FileStructure`: A utility class for working with file structures.