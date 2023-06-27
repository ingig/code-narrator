# ConfigHelper.ts

The `ConfigHelper.ts` file is a TypeScript module that provides a class for managing the configuration of a Code Narrator project. This class is responsible for loading and generating project configurations, handling environment variables, and managing user-defined examples.

## Usage

To use the `ConfigHelper` class, you need to import it and then call the `load()` method with an optional `projectConfig` parameter.

```typescript
import ConfigHelper from "./ConfigHelper";

await ConfigHelper.load(projectConfig);
```

## Class: ConfigHelper

### Properties

- `env`: Stores the environment variables.
- `OpenAiKey`: Stores the OpenAI API key.
- `DocumentingProject`: Stores the documentation path.
- `BuilderPlugins`: Stores an array of builder plugins.
- `DocumentationType`: Stores the documentation type (default is 'md').
- `DocumentExtension`: Stores the document file extension (default is '.md').
- `CacheFilePath`: Stores the cache file path.
- `config`: Stores the ICodeNarratorConfig object.

### Methods

#### load(projectConfig: Partial<ICodeNarratorConfig> = {})

This method is responsible for loading the project configuration. It takes an optional `projectConfig` parameter, which is a partial ICodeNarratorConfig object. The method performs the following tasks:

1. Loads environment variables using `dotenv`.
2. Sets the OpenAI API key.
3. Generates a project configuration if not provided.
4. Merges the default settings with the provided project configuration.
5. Sets the documentation path, builder plugins, document extension, and documentation type.
6. Initializes the AI service.
7. Sets the cache file path.

#### getUserDefinedExamples(config: ICodeNarratorConfig)

This method returns an array of user-defined examples. It takes a `config` parameter, which is an ICodeNarratorConfig object. The method creates two IBuilder objects, `readMeBuilder` and `howToBuilder`, and returns them in an array.

## Example

```typescript
import ConfigHelper from "./ConfigHelper";

(async () => {
  const projectConfig = {
    project_name: "My Project",
    repository_url: "https://github.com/user/my-project",
    source_path: "src",
    documentation_path: "docs",
  };

  await ConfigHelper.load(projectConfig);
})();
```

This example demonstrates how to use the `ConfigHelper` class to load a project configuration. The `projectConfig` object contains basic information about the project, such as the project name, repository URL, source path, and documentation path.