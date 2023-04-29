# ConfigHelper.ts

The `ConfigHelper.ts` file is a TypeScript module that provides a helper class for managing the configuration of a Code Narrator project. This class is responsible for loading and generating project configurations, as well as providing access to various settings and services used throughout the project.

## Table of Contents

- [Class Description](#class-description)
- [Usage Examples](#usage-examples)
- [Methods](#methods)
  - [load](#load)
  - [getUserDefinedExamples](#getuserdefinedexamples)
- [Properties](#properties)

## Class Description

The `ConfigHelper` class is a static class that provides methods and properties for managing the configuration of a Code Narrator project. It is responsible for loading and generating project configurations, as well as providing access to various settings and services used throughout the project.

## Usage Examples

Here are some examples of how to use the `ConfigHelper` class:

```typescript
// Load the project configuration
await ConfigHelper.load(projectConfig);

// Get user-defined examples
const examples = ConfigHelper.getUserDefinedExamples(config);
```

## Methods

### load

```typescript
public static async load(projectConfig: Partial<ICodeNarratorConfig> = {}): Promise<void>
```

The `load` method is responsible for loading the project configuration. It takes an optional `projectConfig` parameter, which is a partial `ICodeNarratorConfig` object. If no configuration is provided, the method will generate a default configuration using the `ConfigGenerator` class.

#### Parameters

- `projectConfig`: A partial `ICodeNarratorConfig` object representing the project configuration. This parameter is optional and defaults to an empty object.

### getUserDefinedExamples

```typescript
public static getUserDefinedExamples(config: ICodeNarratorConfig): IBuilder[]
```

The `getUserDefinedExamples` method returns an array of `IBuilder` objects representing user-defined examples for the project. It takes a `config` parameter, which is an `ICodeNarratorConfig` object representing the project configuration.

#### Parameters

- `config`: An `ICodeNarratorConfig` object representing the project configuration.

## Properties

- `env`: An object representing the environment variables.
- `OpenAiKey`: A string representing the OpenAI API key.
- `DocumentingProject`: An object representing the project being documented.
- `BuilderPlugins`: An array of builder plugins.
- `DocumentationType`: A string representing the documentation type (e.g., 'md' for Markdown).
- `DocumentExtension`: A string representing the document file extension (e.g., '.md' for Markdown files).
- `CacheFilePath`: A string representing the cache file path.
- `config`: An `ICodeNarratorConfig` object representing the project configuration.