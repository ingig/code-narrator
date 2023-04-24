# ConfigHelper.ts

The `ConfigHelper.ts` file is a TypeScript module that provides a helper class for managing the configuration of a Code Narrator project. This class is responsible for loading and generating project configurations, as well as providing utility methods for working with the configuration data.

## Table of Contents

- [Class: ConfigHelper](#class-confighelper)
  - [Static Properties](#static-properties)
  - [Static Methods](#static-methods)
    - [load](#load)
    - [getUserDefinedExamples](#getuserdefinedexamples)

## Class: ConfigHelper

The `ConfigHelper` class is the main class in this module, and it contains several static properties and methods for managing the configuration of a Code Narrator project.

### Static Properties

- `env`: An object containing the environment variables loaded from the `.env` file.
- `OpenAiKey`: A string representing the OpenAI API key.
- `DocumentingProject`: An object representing the project being documented.
- `BuilderPlugins`: An array of builder plugins.
- `DocumentationType`: A string representing the documentation type (default: 'md').
- `DocumentExtension`: A string representing the document file extension (default: '.md').
- `CacheFilePath`: A string representing the cache file path (default: '.code-narrator/cache.json').
- `config`: An instance of the `ICodeNarratorConfig` interface representing the project configuration.

### Static Methods

#### load

```typescript
public static async load(projectConfig: Partial<ICodeNarratorConfig> = {}): Promise<void>
```

The `load` method is responsible for loading the project configuration. It takes an optional `projectConfig` parameter, which is a partial instance of the `ICodeNarratorConfig` interface. If the `projectConfig` parameter is not provided, the method will generate a new configuration using the `ConfigGenerator` class.

This method also checks for the presence of the `OPENAI_API_KEY` environment variable and throws an error if it is not found.

#### getUserDefinedExamples

```typescript
public static getUserDefinedExamples(config: ICodeNarratorConfig): IBuilder[]
```

The `getUserDefinedExamples` method returns an array of `IBuilder` instances representing user-defined examples for the project. It takes a `config` parameter, which is an instance of the `ICodeNarratorConfig` interface.

This method creates two example builders: a `README` builder and a `HowTo Overview` builder. The `README` builder is configured to generate a README file using the `entryFileContent` argument, while the `HowTo Overview` builder is configured to generate an overview page with a `howto` template.

Example usage:

```typescript
import ConfigHelper from './ConfigHelper';

(async () => {
  await ConfigHelper.load();
  const userDefinedExamples = ConfigHelper.getUserDefinedExamples(ConfigHelper.config);
  console.log(userDefinedExamples);
})();
```

This will output an array of `IBuilder` instances representing the user-defined examples for the project.