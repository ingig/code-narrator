# ConfigHelper.ts

The `ConfigHelper.ts` file is a TypeScript module that provides a helper class for managing the configuration of a Code Narrator project. This class is responsible for loading and generating project configurations, as well as handling environment variables and default settings.

## Table of Contents

- [Class: ConfigHelper](#class-confighelper)
  - [Static Properties](#static-properties)
  - [Methods](#methods)
    - [load](#load)
    - [getUserDefinedExamples](#getuserdefinedexamples)

## Class: ConfigHelper

The `ConfigHelper` class is the main class in this module, and it contains several static properties and methods.

### Static Properties

- `env`: Stores the environment variables.
- `OpenAiKey`: Stores the OpenAI API key.
- `DocumentingProject`: Stores the path to the project being documented.
- `BuilderPlugins`: An array of builder plugins.
- `DocumentationType`: The type of documentation being generated (default is 'md').
- `DocumentExtension`: The file extension for the documentation files (default is '.md').
- `CacheFilePath`: The path to the cache file (default is '.code-narrator/cache.json').
- `config`: An instance of the `ICodeNarratorConfig` interface.

### Methods

#### load

```typescript
public static async load(projectConfig: Partial<ICodeNarratorConfig> = {}): Promise<void>
```

The `load` method is responsible for loading the project configuration. It takes an optional `projectConfig` parameter, which is a partial instance of the `ICodeNarratorConfig` interface. This method performs the following tasks:

1. Loads environment variables using the `dotenv` package.
2. Sets the `OpenAiKey` property from the `OPENAI_API_KEY` environment variable.
3. Generates a new project configuration using the `ConfigGenerator` class if the `fromFile` property is not set in the `projectConfig` parameter.
4. Merges the default settings with the provided `projectConfig`.
5. Initializes the `aiService` property with an instance of the `OpenAIService` class or a custom AI service class if provided in the `projectConfig` parameter.
6. Sets the `CacheFilePath` property based on the `cache_file` property in the configuration.

#### getUserDefinedExamples

```typescript
public static getUserDefinedExamples(config: ICodeNarratorConfig): IBuilder[]
```

The `getUserDefinedExamples` method returns an array of `IBuilder` instances representing user-defined examples. It takes a `config` parameter, which is an instance of the `ICodeNarratorConfig` interface. This method creates two example builders: a `README` builder and a `HowTo Overview` builder. The `README` builder generates a README file with the content from the project's entry file, while the `HowTo Overview` builder generates an overview page with a list of how-to guides.

## Usage Examples

To use the `ConfigHelper` class, you can import it and call its methods as shown below:

```typescript
import ConfigHelper from "./ConfigHelper";

// Load the project configuration
await ConfigHelper.load();

// Get user-defined examples
const examples = ConfigHelper.getUserDefinedExamples(ConfigHelper.config);
```

Make sure to replace any sensitive information, such as API keys, with placeholders (e.g., `*****`) when sharing code examples or documentation.