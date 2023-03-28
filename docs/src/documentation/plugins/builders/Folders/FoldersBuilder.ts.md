---
sidebar_position: 0
sidebar_label: FoldersBuilder.ts
---

# FoldersBuilder.ts

This TypeScript file defines a `FoldersBuilder` class that extends the `BaseBuilder` class. The main purpose of this class is to generate documentation for a given project structure, including folders and files. It also provides methods to query for folder information, render the documentation, and retrieve summaries for files and folders.

## Usage

To use the `FoldersBuilder` class, you need to import it and create a new instance by passing a `project` object to the constructor. Then, you can call the `generate()` method to generate the documentation.

```typescript
import FoldersBuilder from "./path/to/FoldersBuilder";

const project = { /* project data */ };
const foldersBuilder = new FoldersBuilder(project);
await foldersBuilder.generate();
```

## Methods

### constructor(project: any)

The constructor initializes a new instance of the `FoldersBuilder` class with the given `project` object.

- `project`: The project data for which the documentation will be generated.

### async generate()

This method generates the documentation for the project structure by calling the `queryForFolder()` method.

### async queryForFolder(folder: FolderStructure, position: number)

This method recursively queries for folder information and generates documentation for each folder and its contents.

- `folder`: A `FolderStructure` object representing the folder to be queried.
- `position`: The position of the folder in the project structure.

### async render(document: Document)

This method renders the documentation for a given `Document` object and returns it as a string.

- `document`: A `Document` object containing the documentation to be rendered.

### private getFileSummary(file: FileStructure)

This method retrieves the summary of a given `FileStructure` object.

- `file`: A `FileStructure` object representing the file for which the summary will be retrieved.

### private getFolderSummary(folder: FolderStructure)

This method retrieves the summary of a given `FolderStructure` object.

- `folder`: A `FolderStructure` object representing the folder for which the summary will be retrieved.

## Technical Concepts

### FolderStructure and FileStructure

These are custom classes used to represent the structure of folders and files in the project. They contain properties such as `name`, `path`, and `folders` (for `FolderStructure`) or `files` (for `FileStructure`).

### DocumentationCache

This is a custom class that manages the caching of documentation data. It provides methods to get and set documentation data in the cache.

### ProjectStructure

This is a custom class that represents the structure of a project. It provides methods to retrieve the project structure and manipulate it.

### BaseBuilder

This is the base class for all builder classes, including `FoldersBuilder`. It provides common methods and properties for generating documentation.