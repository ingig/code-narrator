---
nav_order: 4
title: ICodeNarratorConfig.ts
parent: config

permalink: src\config\ICodeNarratorConfig.ts
---

# ICodeNarratorConfig.ts

This TypeScript file defines the `ICodeNarratorConfig` interface, which is used to configure the Code Narrator application. The interface contains various properties that are essential for setting up and customizing the behavior of the application.

## Interface Properties

The `ICodeNarratorConfig` interface contains the following properties:

- `project_name: string`: The name of the project.
- `repository_url: string`: The URL of the project's repository.
- `project_file: string`: The main project file.
- `config_files: string[]`: An array of configuration files for the application (e.g., "code-narrator.config.ts").
- `entry_file: string`: The entry point file for the application.
- `cli_file: string`: The command-line interface file for the application.
- `project_path: string`: The path to the project directory.
- `source_path: string`: The path to the source code directory.
- `documentation_path: string`: The path to the documentation directory.
- `test_path: string`: The path to the test directory.
- `exclude: string[]`: An array of file patterns to exclude from the documentation generation process.
- `readmeRoot: boolean`: A flag indicating whether to include the README file at the root of the documentation.
- `builderPlugins: any[]`: An array of builder plugins to use for generating the documentation.
- `generatorPlugin: any[]`: An array of generator plugins to use for generating the documentation.
- `gptSystemCommands: string[]`: An array of GPT system commands to use for generating the documentation.
- `documentation_type: string`: The type of documentation to generate (e.g., "md" for Markdown).
- `document_file_extension: string`: The file extension for the generated documentation files.
- `rootFileName: string`: The name of the root file for the documentation.
- `cache_file: string`: The cache file used for storing intermediate results during documentation generation.
- `gptModel: string`: The GPT model to use for generating the documentation.
- `builders: IBuilder[]`: An array of builder instances to use for generating the documentation.
- `include: string[]`: An array of file patterns to include in the documentation generation process.
- `sitemap: ISitemap`: The sitemap configuration for the generated documentation.

## Usage Example

To use the `ICodeNarratorConfig` interface, you can create a configuration object that implements the interface and provide it to the Code Narrator application. Here's an example:

```typescript
import ICodeNarratorConfig from "./ICodeNarratorConfig";

const config: ICodeNarratorConfig = {
  project_name: "My Project",
  repository_url: "https://github.com/user/my-project",
  project_file: "my-project.ts",
  config_files: ["code-narrator.config.ts"],
  entry_file: "index.ts",
  cli_file: "cli.ts",
  project_path: "/path/to/my-project",
  source_path: "/path/to/my-project/src",
  documentation_path: "/path/to/my-project/docs",
  test_path: "/path/to/my-project/test",
  exclude: ["**/*.spec.ts"],
  readmeRoot: true,
  builderPlugins: [],
  generatorPlugin: [],
  gptSystemCommands: [],
  documentation_type: "md",
  document_file_extension: ".md",
  rootFileName: "README.md",
  cache_file: ".cache",
  gptModel: "gpt-3",
  builders: [],
  include: ["**/*.ts"],
  sitemap: {
    include: ["**/*.md"],
    exclude: ["**/node_modules/**"],
  },
};

// Pass the config object to the Code Narrator application
```

This example demonstrates how to create a configuration object that implements the `ICodeNarratorConfig` interface and provides the necessary properties for the Code Narrator application to generate documentation for a TypeScript project.