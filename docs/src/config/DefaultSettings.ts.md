---
sidebar_position: 2
sidebar_label: DefaultSettings.ts
---

# DefaultSettings.ts

This is a TypeScript code file that defines the `DefaultSettings` class. The class provides default settings for the Code Narrator application, which is used to generate documentation for a project. The settings include paths, file names, plugin configurations, and other options.

## Usage

To use the `DefaultSettings` class, simply import it and call the `get()` method to retrieve the default settings object.

```typescript
import DefaultSettings from "./DefaultSettings";

const settings = DefaultSettings.get();
```

## Class Methods

### get(): ICodeNarratorConfig

This method returns an object containing the default settings for the Code Narrator application. The returned object implements the `ICodeNarratorConfig` interface.

### getFilesToExclude(): string[]

This private method returns an array of file and folder paths that should be excluded from the documentation generation process. It combines the contents of the project's `.gitignore` file with a list of default exclusions.

## Settings Object

The settings object returned by the `get()` method contains the following properties:

- `config_files`: An array of configuration file names.
- `project_file`: The main project file name.
- `entry_file`: The entry point file for the application.
- `cli_file`: The command-line interface file for the application.
- `project_path`: The root path of the project.
- `source_path`: The path to the source code folder.
- `documentation_path`: The path to the documentation folder.
- `test_path`: The path to the test folder.
- `exclude`: An array of file and folder paths to exclude from the documentation generation process.
- `readmeRoot`: A boolean indicating whether to include the project's README file in the documentation.
- `repository_url`: The URL of the project's repository.
- `builderPlugins`: An array of builder plugin classes.
- `generatorPlugin`: An array of generator plugin classes.
- `gptSystemCommands`: An array of GPT system commands.
- `documentation_type`: The format of the generated documentation (e.g., 'md' for Markdown).
- `document_file_extension`: The file extension for the generated documentation files.
- `cache_file`: The path to the cache file. :::warning '.code-narrator/cache.json' should be committed into git.
- `gptModel`: The GPT model to use (e.g., 'gpt-4').

## Technical Concepts

### ICodeNarratorConfig

This is an interface that defines the shape of the configuration object used by the Code Narrator application. It includes properties for paths, file names, plugins, and other options.

### Builder and Generator Plugins

The `builderPlugins` and `generatorPlugin` properties in the settings object are arrays of classes that implement specific functionality for building and generating documentation. The order of the plugins in the `builderPlugins` array matters, as they are executed in the order they appear.

Examples of builder plugins include `ConfigurationBuilder`, `FilesBuilder`, `FoldersBuilder`, `UserDefinedBuilder`, and `HowToBuilder`. The `DocusaurusGenerator` is an example of a generator plugin.

### GPT System Commands

The `gptSystemCommands` property is an array of commands that are used to control the behavior of the GPT model during the documentation generation process. These commands can be used to format text, handle special cases, and perform other tasks.