# ICodeNarratorConfig.ts

This TypeScript file defines an interface called `ICodeNarratorConfig` which is used to configure the settings for a code narration project. The interface contains various properties that are essential for setting up and managing the project.

## Interface Properties

The `ICodeNarratorConfig` interface contains the following properties:

- `project_name: string`: The name of the project.
- `repository_url: string`: The URL of the project's repository.
- `project_file: string`: The main project file.
- `config_files: string[]`: An array of configuration file paths. These files are specific to the application, e.g., for code-narrator, "code-narrator.config.ts" is the app config file.
- `entry_file: string`: The entry point file for the project.
- `cli_file: string`: The command-line interface file for the project.
- `project_path: string`: The path to the project directory.
- `source_path: string`: The path to the source code directory.
- `documentation_path: string`: The path to the documentation directory.
- `test_path: string`: The path to the test directory.
- `exclude: string[]`: An array of file paths or patterns to exclude from the documentation generation process.
- `readmeRoot: boolean`: A flag indicating whether to include the README file at the root of the documentation.
- `builderPlugins: any[]`: An array of builder plugins to be used in the project.
- `generatorPlugin: any[]`: An array of generator plugins to be used in the project.
- `gptSystemCommands: string[]`: An array of GPT system commands to be used in the project.
- `documentation_type: string`: The type of documentation to be generated (e.g., "md" for Markdown).
- `document_file_extension: string`: The file extension for the generated documentation files.
- `rootFileName: string`: The name of the root file in the documentation.
- `cache_file: string`: The path to the cache file.
- `gptModel: string`: The GPT model to be used for generating the documentation.
- `builders: IBuilder[]`: An array of builder instances to be used in the project.
- `include: string[]`: An array of file paths or patterns to include in the documentation generation process.

## Usage

To use the `ICodeNarratorConfig` interface, you need to create a configuration object that implements this interface. Here's an example:

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
  exclude: ["**/*.spec.ts"],
  readmeRoot: true,
  builderPlugins: [],
  generatorPlugin: [],
  gptSystemCommands: [],
  documentation_type: "md",
  document_file_extension: ".md",
  rootFileName: "README",
  cache_file: "/path/to/myproject/.cache",
  gptModel: "gpt-3",
  builders: [],
  include: ["**/*.ts"],
};
```

This configuration object can then be used to set up and manage your code narration project.