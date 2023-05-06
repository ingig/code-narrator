# ConfigHelper.ts

The `ConfigHelper.ts` file is a TypeScript module that provides a helper class for managing the configuration of a Code Narrator project. It imports necessary dependencies, defines the `ConfigHelper` class, and exports it as the default export.

## Class: ConfigHelper

The `ConfigHelper` class is responsible for loading and managing the configuration of a Code Narrator project. It provides methods to load the configuration, generate default settings, and retrieve user-defined examples.

### Properties

- `env`: Stores the environment variables.
- `OpenAiKey`: Stores the OpenAI API key.
- `DocumentingProject`: Stores the documentation path.
- `BuilderPlugins`: Stores an array of builder plugins.
- `DocumentationType`: Stores the documentation type (default is 'md').
- `DocumentExtension`: Stores the document file extension (default is '.md').
- `CacheFilePath`: Stores the cache file path.

### Method: load(projectConfig)

This method is responsible for loading the project configuration. It takes an optional `projectConfig` parameter, which is a partial `ICodeNarratorConfig` object. The method performs the following tasks:

1. Loads environment variables using `dotenv`.
2. Sets the `OpenAiKey` property.
3. Generates a configuration file if it doesn't exist.
4. Merges the default settings with the provided `projectConfig`.
5. Sets the `DocumentingProject`, `BuilderPlugins`, `DocumentExtension`, and `DocumentationType` properties.
6. Initializes the AI service.

### Method: getUserDefinedExamples(config)

This method returns an array of user-defined examples. It takes a `config` parameter, which is an `ICodeNarratorConfig` object. The method creates two example builders: `readMeBuilder` and `howToBuilder`, and returns them in an array.

## Usage

To use the `ConfigHelper` class, you need to import it and call its `load` method with the appropriate configuration object. The class will then manage the configuration for your Code Narrator project.

```typescript
import ConfigHelper from "./ConfigHelper";

// Load the configuration
await ConfigHelper.load(projectConfig);

// Get user-defined examples
const examples = ConfigHelper.getUserDefinedExamples(config);
```

## Note

Make sure to include your OpenAI API key in the `.env` file as `OPENAI_API_KEY=Your_OpenAI_Key`. If the key is missing, an error will be thrown.

## Caution

The `ConfigHelper` class assumes that the project configuration file is named `code-narrator.config.js`. If your project uses a different name, you may need to modify the class accordingly.