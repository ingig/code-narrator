---
nav_order: 0
title: ConfigGenerator.ts
parent: config

permalink: src/config/ConfigGenerator.ts.md
---

# ConfigGenerator.ts

This document provides an in-depth explanation of the `ConfigGenerator.ts` file, which is a TypeScript code file. The file contains a class named `ConfigGenerator` that is responsible for generating a configuration object for the Code Narrator project. The configuration object is based on the project's folder structure, project file, and other relevant information.

## Table of Contents

- [Class: ConfigGenerator](#class-configgenerator)
  - [Method: generate](#method-generate)
  - [Method: getDocPath](#method-getdocpath)

## Class: ConfigGenerator

The `ConfigGenerator` class is responsible for generating a configuration object for the Code Narrator project. It has two methods: `generate` and `getDocPath`.

### Method: generate

The `generate` method is an asynchronous static method that takes an optional `projectConfig` parameter of type `Partial<ICodeNarratorConfig>` and returns a `Promise<Partial<ICodeNarratorConfig>>`. The method generates a configuration object based on the project's folder structure, project file, and other relevant information.

#### Parameters

- `projectConfig` (Optional): A partial configuration object of type `Partial<ICodeNarratorConfig>`.

#### Example

```typescript
const generatedConfig = await ConfigGenerator.generate(projectConfig);
```

### Method: getDocPath

The `getDocPath` method is a private static method that takes two parameters: `config` and `json`. It returns the documentation path for the project.

#### Parameters

- `config`: An object of type `ICodeNarratorConfig` representing the current configuration.
- `json`: An object containing the JSON data extracted from the GPT-3 response.

#### Example

```typescript
const documentationPath = ConfigGenerator.getDocPath(config, json);
```

## Usage

To use the `ConfigGenerator` class, you can import it and call the `generate` method with an optional `projectConfig` parameter. The method will return a configuration object based on the project's folder structure, project file, and other relevant information.

```typescript
import ConfigGenerator from "./ConfigGenerator";

const projectConfig = {
  // Your partial configuration object
};

const generatedConfig = await ConfigGenerator.generate(projectConfig);
```

The `generate` method will analyze the project's folder structure and project file to determine the project type, code language, framework, and other relevant information. It will then generate a configuration object with the appropriate values for the project file, source path, documentation path, and test folder path.

If the method cannot determine the project's information, it will throw an error, and you should set the configuration manually when calling `ConfigHelper.load`.