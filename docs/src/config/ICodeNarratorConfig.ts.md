---
sidebar_position: 4
sidebar_label: ICodeNarratorConfig.ts
---

# ICodeNarratorConfig.ts

This is a TypeScript interface file that defines the structure of the `ICodeNarratorConfig` interface. The `ICodeNarratorConfig` interface is used to configure the settings for a code narration project. This file is essential for setting up and managing the project's configuration.

## Interface Description

The `ICodeNarratorConfig` interface contains the following properties:

- `project_name`: (string) The name of the project.
- `repository_url`: (string) The URL of the project's repository.
- `project_file`: (string) The main project file.
- `config_files`: (string[]) An array of configuration files for the project.
- `entry_file`: (string) The entry point file for the project.
- `cli_file`: (string) The command-line interface file for the project.
- `project_path`: (string) The path to the project folder.
- `source_path`: (string) The path to the source code folder.
- `documentation_path`: (string) The path to the documentation folder.
- `test_path`: (string) The path to the test folder.
- `exclude`: (string[]) An array of file patterns to exclude from the project.
- `readmeRoot`: (boolean) Whether to include the README file in the root folder.
- `builderPlugins`: (any[]) An array of builder plugins for the project.
- `generatorPlugin`: (any[]) An array of generator plugins for the project.
- `gptSystemCommands`: (string[]) An array of GPT system commands for the project.
- `documentation_type`: (string) The type of documentation to generate.
- `document_file_extension`: (string) The file extension for the generated documentation files.
- `cache_file`: (string) The cache file for the project.
- `gptModel`: (string) The GPT model to use for code narration.
- `builders`: (IBuilder[]) An array of builder instances for the project.
- `include`: (string[]) An array of file patterns to include in the project.

## Usage

To use the `ICodeNarratorConfig` interface, you need to import it and create an object that implements the interface. Here's an example:

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
  test_path: "/path/to/myproject/tests",
  exclude: ["**/*.spec.ts"],
  readmeRoot: true,
  builderPlugins: [],
  generatorPlugin: [],
  gptSystemCommands: [],
  documentation_type: "markdown",
  document_file_extension: ".md",
  cache_file: "cache.json",
  gptModel: "gpt-3",
  builders: [],
  include: ["**/*.ts"],
};
```

In this example, we've created a configuration object for a project called "MyProject" with the specified settings. You can customize the settings according to your project's requirements.