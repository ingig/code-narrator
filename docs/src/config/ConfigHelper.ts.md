# ConfigHelper.ts

The `ConfigHelper.ts` file is a TypeScript module that provides a helper class for managing the configuration of a Code Narrator project. This class is responsible for loading and generating project configurations, as well as providing utility methods for working with the configuration data.

## Table of Contents

- [Class: ConfigHelper](#class-confighelper)
  - [Static Properties](#static-properties)
  - [Static Methods](#static-methods)
    - [load](#load)
    - [getUserDefinedExamples](#getuserdefinedexamples)

## Class: ConfigHelper

The `ConfigHelper` class is the main class in this module, and it provides several static properties and methods for working with project configurations.

### Static Properties

- `env`: Stores the environment variables from the `.env` file.
- `OpenAiKey`: Stores the OpenAI API key.
- `DocumentingProject`: Stores the path to the project's documentation.
- `BuilderPlugins`: Stores an array of builder plugins.
- `DocumentationType`: Stores the type of documentation (default is 'md').
- `DocumentExtension`: Stores the file extension for documentation files (default is '.md').
- `CacheFilePath`: Stores the path to the cache file (default is '.code-narrator/cache.json').
- `config`: Stores the `ICodeNarratorConfig` object.

### Static Methods

#### load

```typescript
public static async load(projectConfig: Partial<ICodeNarratorConfig> = {}): Promise<void>
```

The `load` method is responsible for loading the project configuration. It takes an optional `projectConfig` parameter, which is a partial `ICodeNarratorConfig` object. This method performs the following tasks:

1. Loads environment variables from the `.env` file.
2. Sets the `OpenAiKey` property.
3. Generates a new project configuration if the `fromFile` property is not set in the `projectConfig` object.
4. Merges the default settings with the provided `projectConfig` object.
5. Sets the `DocumentingProject`, `BuilderPlugins`, `DocumentExtension`, `DocumentationType`, and `CacheFilePath` properties based on the merged configuration.

#### getUserDefinedExamples

```typescript
public static getUserDefinedExamples(config: ICodeNarratorConfig): IBuilder[]
```

The `getUserDefinedExamples` method returns an array of `IBuilder` objects that represent user-defined examples. It takes a `config` parameter, which is an `ICodeNarratorConfig` object. This method creates and returns an array containing two `IBuilder` objects:

1. `readMeBuilder`: Represents the README file.
2. `howToBuilder`: Represents the HowTo Overview page, which includes a HowTo Example page.

These `IBuilder` objects can be used to generate documentation for the project based on the provided configuration.

## Usage

To use the `ConfigHelper` class, you can import it and call its static methods as needed. For example, to load a project configuration and get user-defined examples, you can do the following:

```typescript
import ConfigHelper from "./ConfigHelper";

(async () => {
  await ConfigHelper.load();
  const userDefinedExamples = ConfigHelper.getUserDefinedExamples(ConfigHelper.config);
})();
```

This will load the project configuration and generate user-defined examples based on the loaded configuration.