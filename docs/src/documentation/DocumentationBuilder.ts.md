---
sidebar_position: 1
sidebar_label: DocumentationBuilder.ts
---

# DocumentationBuilder.ts

## Overview

The `DocumentationBuilder.ts` file is a TypeScript module that provides a class called `DocumentationBuilder`. This class is responsible for generating documentation for a given project using a set of plugins. The class interacts with the OpenAIRepository and utilizes the ConfigHelper utility to manage configurations.

## Usage

To use the `DocumentationBuilder` class, you need to import it and create a new instance. Then, you can call the `build` method with a project object to generate the documentation.

```typescript
import DocumentationBuilder from './DocumentationBuilder';

const docBuilder = new DocumentationBuilder();
docBuilder.build(project);
```

## Class: DocumentationBuilder

### Properties

- `openAIRepository: OpenAIRepository`: An instance of the `OpenAIRepository` class, which is used to interact with the OpenAI API.
- `projectPath: string`: A string representing the path to the project for which the documentation is being generated. This value is retrieved from the configuration file using the `ConfigHelper` utility.

### Constructor

The constructor initializes the `openAIRepository` and `projectPath` properties.

```typescript
constructor() {
    this.openAIRepository = new OpenAIRepository();
    this.projectPath = ConfigHelper.get('project_path');
}
```

### Method: build(project: any)

This method generates the documentation for the given project using the configured plugins.

- `project: any`: The project object for which the documentation is being generated.

#### Example

```typescript
const docBuilder = new DocumentationBuilder();
docBuilder.build(project);
```

## Technical Concepts

### ConfigHelper

The `ConfigHelper` utility is used to manage configurations in the application. It provides methods to get and set configuration values.

### OpenAIRepository

The `OpenAIRepository` class is responsible for interacting with the OpenAI API. It provides methods to fetch data from the API and process it.

### BaseBuilder

The `BaseBuilder` class is an abstract class that serves as a base for all builder plugins. Each plugin should extend this class and implement the `generate` method to generate documentation for a specific part of the project.

## Sections

- Overview
- Usage
- Class: DocumentationBuilder
  - Properties
  - Constructor
  - Method: build(project: any)
- Technical Concepts
  - ConfigHelper
  - OpenAIRepository
  - BaseBuilder