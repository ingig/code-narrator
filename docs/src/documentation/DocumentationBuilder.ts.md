# DocumentationBuilder.ts

This is a TypeScript code file that defines the `DocumentationBuilder` class. The class is responsible for building documentation using various plugins. It imports necessary modules and services, and then iterates through the configured plugins to generate documentation.

## Table of Contents

- [Class Description](#class-description)
- [Examples](#examples)
- [Methods](#methods)
  - [constructor](#constructor)
  - [build](#build)
- [Parameters](#parameters)

## Class Description

The `DocumentationBuilder` class is responsible for building documentation using various plugins. It imports necessary modules and services, and then iterates through the configured plugins to generate documentation.

## Examples

To use the `DocumentationBuilder` class, you can create an instance and call the `build` method:

```typescript
import DocumentationBuilder from './DocumentationBuilder';

const docBuilder = new DocumentationBuilder();
docBuilder.build();
```

## Methods

### constructor

The constructor initializes the `DocumentationBuilder` instance. It sets the `aiService` and `projectPath` properties.

```typescript
constructor()
```

### build

The `build` method is an asynchronous method that iterates through the configured plugins and generates documentation using each plugin. It skips plugins that are not user-defined if the `userDefined` configuration is set.

```typescript
public async build()
```

## Parameters

- `aiService`: An instance of `IGenericAIService`, which is set using the `ConfigHelper.config.aiService` configuration.
- `projectPath`: A string representing the project path, which is set using the `__dirname` global variable.