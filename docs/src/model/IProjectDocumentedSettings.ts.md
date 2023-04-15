---
nav_order: 0
title: IProjectDocumentedSettings.ts
parent: model

permalink: src\model\IProjectDocumentedSettings.ts.md
---

# IProjectDocumentedSettings.ts

This is a TypeScript interface file that defines the structure of the `IProjectDocumentedSettings` interface. The interface is used to represent the settings of a project that needs to be documented.

## Interface Description

The `IProjectDocumentedSettings` interface contains properties that store information about a project's configuration, file paths, and metadata. These properties are used to configure the project's documentation generation process.

## Properties

The `IProjectDocumentedSettings` interface contains the following properties:

- `project_file: string`: The path to the project file.
- `config_file: string`: The path to the configuration file.
- `entry_file: string`: The path to the entry file.
- `cli_file: string`: The path to the CLI file.
- `project_path: string`: The path to the project directory.
- `source_path: string`: The path to the source code directory.
- `documentation_path: string`: The path to the documentation directory.
- `test_path: string`: The path to the test directory.
- `exclude: string[]`: An array of file paths to be excluded from the documentation generation process.
- `readmeRoot: boolean`: A flag indicating whether the README file should be placed at the root of the project.

### Metadata Properties

These properties store metadata about the project:

- `name: string`: The name of the project.
- `version: string`: The version of the project.
- `homepage: string`: The URL of the project's homepage.
- `bugs: string`: The URL where users can report bugs.
- `repository: string`: The URL of the project's repository.
- `language: string`: The programming language used in the project.
- `framework: string`: The framework used in the project.
- `entry: string`: The entry point of the project.
- `cli: string`: The command-line interface of the project.
- `readme: string`: The path to the README file.

## Usage

To use the `IProjectDocumentedSettings` interface, import it into your TypeScript file and create an object that implements the interface. Here's an example:

```typescript
import IProjectDocumentedSettings from './IProjectDocumentedSettings';

const projectSettings: IProjectDocumentedSettings = {
  project_file: 'path/to/project/file',
  config_file: 'path/to/config/file',
  entry_file: 'path/to/entry/file',
  cli_file: 'path/to/cli/file',
  project_path: 'path/to/project',
  source_path: 'path/to/source',
  documentation_path: 'path/to/documentation',
  test_path: 'path/to/test',
  exclude: ['path/to/exclude/file1', 'path/to/exclude/file2'],
  readmeRoot: true,

  name: 'My Project',
  version: '1.0.0',
  homepage: 'https://example.com',
  bugs: 'https://example.com/bugs',
  repository: 'https://github.com/user/repo',
  language: 'TypeScript',
  framework: 'React',
  entry: 'src/index.ts',
  cli: 'src/cli.ts',
  readme: 'README.md',
};
```

With the `projectSettings` object, you can now access and manipulate the properties of the `IProjectDocumentedSettings` interface as needed.