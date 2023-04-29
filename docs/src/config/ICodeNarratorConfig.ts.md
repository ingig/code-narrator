# ICodeNarratorConfig.ts

This is a TypeScript interface file that defines the structure of the configuration object for the ICodeNarrator application. The ICodeNarratorConfig interface contains properties that are essential for the proper functioning of the application, such as project settings, file paths, and plugin configurations.

## Interface Properties

The ICodeNarratorConfig interface contains the following properties:

### project_name: string

The name of the project.

### repository_url: string

The URL of the project's repository.

### project_file: string

The main project file.

### config_files: string[]

An array of configuration files specific to the application, e.g., "code-narrator.config.ts" for the Code Narrator application.

### entry_file: string

The entry point file of the project.

### cli_file: string

The command-line interface file for the project.

### project_path: string

The path to the project folder.

### source_path: string

The path to the source code folder.

### documentation_path: string

The path to the documentation folder.

### test_path: string

The path to the test folder.

### readmeRoot: boolean

A flag indicating whether to generate documentation at the root level of the project.

### builderPlugins: any[]

An array of builder plugins used in the project.

### generatorPlugin: any[]

An array of generator plugins used in the project.

### gptSystemCommands: string[]

An array of GPT system commands used in the project.

### documentation_type: string

The type of documentation to generate, e.g., "md" for Markdown.

### document_file_extension: string

The file extension for the generated documentation files.

### folderRootFileName: string

The name of the root file in each folder.

### cache_file: string

The cache file used by the application.

### gptModel: string

The GPT model used for generating documentation.

### builders: IBuilder[]

An array of builder instances used in the project.

### include: string[]

An array of file patterns to include in the documentation generation process.

### exclude: string[]

An array of file patterns to exclude from the documentation generation process.

### aiService: any

The AI service used in the project, implementing the IGenericAIService interface.

## Usage

To use the ICodeNarratorConfig interface, create a configuration object that implements the interface and provide the necessary property values. For example:

```typescript
import ICodeNarratorConfig from "./ICodeNarratorConfig";

const config: ICodeNarratorConfig = {
  project_name: "MyProject",
  repository_url: "https://github.com/user/myproject",
  project_file: "myproject.ts",
  config_files: ["code-narrator.config.ts"],
  entry_file: "index.ts",
  cli_file: "cli.ts",
  project_path: "/path/to/myproject",
  source_path: "/path/to/myproject/src",
  documentation_path: "/path/to/myproject/docs",
  test_path: "/path/to/myproject/test",
  readmeRoot: true,
  builderPlugins: [],
  generatorPlugin: [],
  gptSystemCommands: [],
  documentation_type: "md",
  document_file_extension: ".md",
  folderRootFileName: "README.md",
  cache_file: "cache.json",
  gptModel: "gpt-3",
  builders: [],
  include: ["**/*.ts"],
  exclude: ["**/*.test.ts"],
  aiService: {},
};
```

This configuration object can then be passed to the ICodeNarrator application to generate documentation based on the provided settings.