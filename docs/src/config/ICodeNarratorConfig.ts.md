# ICodeNarratorConfig.ts

This is a TypeScript interface file that defines the structure of the `ICodeNarratorConfig` interface. The `ICodeNarratorConfig` interface is used to configure the settings for a code narration project.

## Interface Description

The `ICodeNarratorConfig` interface contains the following properties:

- `project_name`: (string) The name of the project.
- `repository_url`: (string) The URL of the project's repository.
- `project_file`: (string) The main project file.
- `config_files`: (string[]) An array of configuration file paths.
- `entry_file`: (string) The entry point file of the project.
- `cli_file`: (string) The command-line interface file of the project.
- `project_path`: (string) The path to the project folder.
- `source_path`: (string) The path to the source code folder.
- `documentation_path`: (string) The path to the documentation folder.
- `test_path`: (string) The path to the test folder.
- `readmeRoot`: (boolean) A flag indicating whether the README file should be placed at the root of the project.
- `builderPlugins`: (any[]) An array of builder plugins.
- `generatorPlugin`: (any[]) An array of generator plugins.
- `gptSystemCommands`: (string[]) An array of GPT system commands.
- `documentation_type`: (string) The type of documentation to generate.
- `document_file_extension`: (string) The file extension for the generated documentation files.
- `folderRootFileName`: (string) The name of the root folder file.
- `cache_file`: (string) The path to the cache file.
- `gptModel`: (string) The GPT model to use for generating documentation.
- `builders`: (IBuilder[]) An array of builder instances.
- `include`: (string[]) An array of file patterns to include in the documentation.
- `exclude`: (string[]) An array of file patterns to exclude from the documentation.

## Usage Example

To use the `ICodeNarratorConfig` interface, you can create a configuration object that implements the interface. Here's an example:

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
  documentation_type: "markdown",
  document_file_extension: ".md",
  folderRootFileName: "README.md",
  cache_file: "/path/to/myproject/.cache",
  gptModel: "gpt-3",
  builders: [],
  include: ["**/*.ts"],
  exclude: ["**/*.test.ts"],
};
```

This configuration object can then be used to configure the code narration project according to the specified settings.