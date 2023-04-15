---
nav_order: 2
title: DefaultSettings.ts
parent: config

permalink: src\config\DefaultSettings.ts
---

# DefaultSettings.ts

This is a TypeScript code file that defines the `DefaultSettings` class. The class is responsible for providing default settings for the Code Narrator application. It includes various configurations, such as file paths, plugin settings, and GPT model settings.

## Usage

To use the `DefaultSettings` class, simply import it and call the `get()` method to retrieve the default settings.

```typescript
import DefaultSettings from "./DefaultSettings";

const settings = DefaultSettings.get();
```

## Methods

### get()

This method returns an object containing the default settings for the Code Narrator application.

```typescript
public static get(): ICodeNarratorConfig
```

#### Returns

An object of type `ICodeNarratorConfig` containing the default settings.

### getFilesToExclude()

This private method returns an array of file paths and patterns that should be excluded from the documentation process.

```typescript
private static getFilesToExclude(): string[]
```

#### Returns

An array of strings containing file paths and patterns to exclude.

## Configuration

The `DefaultSettings` class provides the following default settings:

- `config_files`: An array of configuration file names.
- `project_file`: The main project file name.
- `entry_file`: The entry point file for the application.
- `cli_file`: The command-line interface file for the application.
- `project_path`: The root path of the project.
- `source_path`: The path to the source code.
- `documentation_path`: The path to the documentation files.
- `test_path`: The path to the test files.
- `exclude`: An array of file paths and patterns to exclude from the documentation process.
- `readmeRoot`: A boolean indicating whether to include a README file at the root of the documentation.
- `repository_url`: The URL of the project's repository.
- `builderPlugins`: An array of builder plugins to use for generating documentation.
- `gptSystemCommands`: An array of GPT system commands for generating documentation.
- `documentation_type`: The format of the generated documentation (e.g., 'md' for Markdown).
- `document_file_extension`: The file extension for the generated documentation files.
- `rootFileName`: The file name for the root documentation file.
- `cache_file`: The path to the cache file. :::warning The cache file should be committed to the Git repository.
- `gptModel`: The GPT model to use for generating documentation (e.g., 'gpt-4').

## Technical Concepts

### ICodeNarratorConfig

`ICodeNarratorConfig` is an interface that defines the structure of the configuration object used by the Code Narrator application. It includes properties for file paths, plugin settings, and GPT model settings.

### FileStructure

`FileStructure` is a utility class that provides methods for working with the file system, such as reading and writing files.

### Builder Plugins

Builder plugins are classes that are responsible for generating documentation for specific aspects of a project, such as configuration files, source code files, and user-defined content. The `DefaultSettings` class includes a default set of builder plugins:

- `ConfigurationBuilder`
- `FilesBuilder`
- `FoldersBuilder`
- `UserDefinedBuilder`
- `HowToBuilder`

### GPT System Commands

GPT system commands are instructions that guide the GPT model in generating documentation. The `DefaultSettings` class includes a default set of GPT system commands:

- 'Act as a documentation expert for software'
- 'If there is :::note, :::info, :::caution, :::tip, :::danger in the text, extract that from its location and format it correctly'
- 'Return your answer in {DocumentationType} format'
- 'If you notice any secret information, replace it with ***** in your response'