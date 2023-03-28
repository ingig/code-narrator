---
sidebar_position: 0
sidebar_label: Code-narrator.config.ts
---

These are the app-specific config files called `code-narrator.config.ts`. When you use it in your project, you need to set these configurations correctly to match your project. Here's a detailed description of the configuration file and its purpose in the application:

```markdown
- **projects**: An array of project configurations, each containing:
  - **project_file**: The main project file, usually `package.json`.
  - **config_file**: The app-specific config file, e.g., `code-narrator.config.ts`.
  - **entry_file**: The entry point of the application, e.g., `./src/App.ts`.
  - **cli_file**: The command-line interface file, e.g., `./src/cli.ts`.
  - **project_path**: The root path of the project, e.g., `./`.
  - **source_path**: The source code path, e.g., `./src`.
  - **documentation_path**: The path for generated documentation, e.g., `./docs`.
  - **test_path**: The path for test files, e.g., `./test`.
  - **exclude**: An array of files and folders to exclude from documentation.
  - **readmeRoot**: A boolean indicating if the README file should be at the root of the project.

- **builderPlugins**: An array of builder plugins, defining the order in which they run.

- **generatorPlugin**: An array of generator plugins, such as `DocusaurusGenerator`.

- **gptSystemCommands**: An array of GPT system commands for text formatting and information extraction.

- **documentation_type**: The format of the generated documentation, e.g., `md`.

- **document_file_extension**: The file extension for the generated documentation, e.g., `.md`.

- **cache_file**: The location of the cache file. :::warning '.code-narrator/cache.json' should be committed into git.
```

To retrieve a value from the config file, you can import the configuration and access the desired property. For example:

```javascript
import config from "./code-narrator.config.ts";

console.log(config.documentation_type); // Output: 'md'
```

:::note
Remember to commit the cache file `.code-narrator/cache.json` into git.
:::