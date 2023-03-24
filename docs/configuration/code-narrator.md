---
sidebar_label: Code-narrator
sidebar_position: 1
---
# code-narrator

## Description

The `code-narrator` configuration file is a JSON file that provides information about the project structure, such as the location of the project file, the start file, the project path, the documentation path, and the test path. This file is essential for the proper functioning of the code-narrator tool, which generates documentation based on the project's source code.

## Summary

The JSON file contains the following properties:

- `project_file`: The main project file, usually `package.json`.
- `start_file`: The entry point of the application, typically the main `App.ts` file.
- `project_path`: The root directory of the project.
- `documentation_path`: The directory where the generated documentation will be stored.
- `test_path`: The directory containing the project's test files.

## Properties

### `project_file`

This property specifies the main project file, which is usually the `package.json` file. This file contains metadata about the project, such as its name, version, and dependencies.

Example:

```json
{
  "project_file": "package.json"
}
```

### `start_file`

This property specifies the entry point of the application, which is typically the main `App.ts` file. This file is responsible for initializing the application and starting the main process.

Example:

```json
{
  "start_file": "./src/App.ts"
}
```

### `project_path`

This property specifies the root directory of the project. It is usually set to `./`, which represents the current directory.

Example:

```json
{
  "project_path": "./"
}
```

### `documentation_path`

This property specifies the directory where the generated documentation will be stored. By default, it is set to `./docs`.

Example:

```json
{
  "documentation_path": "./docs"
}
```

### `test_path`

This property specifies the directory containing the project's test files. By default, it is set to `./test`.

Example:

```json
{
  "test_path": "./test"
}
```

## Setup

To set up the `code-narrator` configuration file, create a new JSON file with the following content:

```json
{
  "project_file": "package.json",
  "start_file": "./src/App.ts",
  "project_path": "./",
  "documentation_path": "./docs",
  "test_path": "./test"
}
```

Modify the properties as needed to match your project's structure.

## Path

The `code-narrator` configuration file should be located at the root of your project, alongside the `package.json` file.