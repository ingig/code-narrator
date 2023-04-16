---
nav_order: 1
title: DocumentationBuilder.ts
parent: documentation

permalink: src/documentation/DocumentationBuilder.ts.md
---

# DocumentationBuilder.ts

This is a TypeScript code file that defines a class called `DocumentationBuilder`. The purpose of this class is to generate documentation for a project using various builder plugins. The class imports necessary dependencies and manages the process of building documentation using the specified plugins.

## Table of Contents

- [Class Description](#class-description)
- [Examples](#examples)
- [Methods](#methods)
  - [constructor](#constructor)
  - [build](#build)
- [Parameters](#parameters)

## Class Description

The `DocumentationBuilder` class is responsible for generating documentation for a project. It uses the `OpenAIRepository` to interact with the OpenAI API and fetch relevant information. The class also imports `BaseBuilder` as a base class for the builder plugins and uses `ConfigHelper` to access the configuration settings.

## Examples

To use the `DocumentationBuilder` class, you can create an instance and call the `build` method:

```typescript
import DocumentationBuilder from "./DocumentationBuilder";

const docBuilder = new DocumentationBuilder();
docBuilder.build();
```

## Methods

### constructor

The `constructor` method initializes the `DocumentationBuilder` instance. It sets up the `openAIRepository` and `projectPath` properties.

```typescript
constructor() {
    this.openAIRepository = new OpenAIRepository();
    this.projectPath = __dirname;
}
```

### build

The `build` method is an asynchronous method that iterates through the configured builder plugins and generates documentation using each plugin. It creates an instance of each plugin and calls the `generate` method on it.

```typescript
public async build() {
    let plugins = ConfigHelper.BuilderPlugins;
    for (let i=0;i<plugins.length;i++) {
        let generator = new plugins[i]() as BaseBuilder;
        await generator.generate();
    }
}
```

## Parameters

There are no parameters in the methods of the `DocumentationBuilder` class. However, the class has two properties:

- `openAIRepository`: An instance of the `OpenAIRepository` class, which is used to interact with the OpenAI API.
- `projectPath`: A string representing the path of the project directory.