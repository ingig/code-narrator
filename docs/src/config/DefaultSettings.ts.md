# DefaultSettings.ts

This is a TypeScript code file that defines the `DefaultSettings` class. The class is responsible for providing default configuration settings for the Code Narrator application. It includes methods to get the default settings and to exclude specific files from the configuration.

## Usage

To use the `DefaultSettings` class, simply import it and call the `get()` method to retrieve the default configuration settings.

```typescript
import DefaultSettings from './DefaultSettings';

const defaultSettings = DefaultSettings.get();
```

## Class Description

### DefaultSettings

The `DefaultSettings` class contains a static method `get()` that returns an object containing the default configuration settings for the Code Narrator application.

#### Methods

- `get(): ICodeNarratorConfig`

  Returns an object containing the default configuration settings for the Code Narrator application.

- `getFilesToExclude(): string[]`

  Returns an array of file paths to be excluded from the configuration.

#### Configuration Settings

The `get()` method returns an object with the following properties:

- `config_files: string[]`: An array of configuration file names.
- `project_file: string`: The project file name.
- `entry_file: string`: The entry file path.
- `cli_file: string`: The CLI file path.
- `project_path: string`: The project path.
- `source_path: string`: The source path.
- `documentation_path: string`: The documentation path.
- `test_path: string`: The test path.
- `exclude: string[]`: An array of file paths to be excluded from the configuration.
- `readmeRoot: boolean`: Whether to include a README file in the root directory.
- `repository_url: string`: The repository URL.
- `builderPlugins: any[]`: An array of builder plugin classes.
- `gptSystemCommands: string[]`: An array of GPT system commands.
- `documentation_type: string`: The documentation format to be generated (e.g., 'md', 'sphinx').
- `document_file_extension: string`: The file extension for the generated documentation files.
- `rootFileName: string`: The root file name.
- `cache_file: string`: The location of the cache file.
- `gptModel: string`: The GPT model to be used.

### Example

```typescript
import DefaultSettings from './DefaultSettings';

const defaultSettings = DefaultSettings.get();
console.log(defaultSettings);
```

Output:

```json
{
  "config_files": ["code-narrator.config.ts"],
  "project_file": "package.json",
  "entry_file": "./src/App.ts",
  "cli_file": "./src/cli.ts",
  "project_path": "./",
  "source_path": "./src",
  "documentation_path": "./docs",
  "test_path": "./test",
  "exclude": ["/node_modules", ".env", "/.idea", "/.git", ".gitignore", "/.code-narrator", "/dist", "/build", "package-lock.json"],
  "readmeRoot": true,
  "repository_url": "https://github.com/ingig/code-narrator",
  "builderPlugins": [ConfigurationBuilder, FilesBuilder, FoldersBuilder, UserDefinedBuilder, HowToBuilder],
  "gptSystemCommands": [
    "Act as a documentation expert for software",
    "If there is :::note, :::info, :::caution, :::tip, :::danger in the text, extract that from its location and format it correctly",
    "Return your answer in md format",
    "If you notice any secret information, replace it with ***** in your response"
  ],
  "documentation_type": "md",
  "document_file_extension": ".md",
  "rootFileName": "README",
  "cache_file": ".code-narrator/cache.json",
  "gptModel": "gpt-4"
}
```

## Technical Concepts

- `ICodeNarratorConfig`: An interface that defines the structure of the configuration object returned by the `get()` method.
- `FileStructure`: A utility class that provides methods for working with file structures.
- `path`: A built-in Node.js module for working with file and directory paths.