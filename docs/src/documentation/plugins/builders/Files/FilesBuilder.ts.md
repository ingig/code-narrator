---
sidebar_position: 0
sidebar_label: FilesBuilder.ts
---

# FilesBuilder.ts

## Overview

The `FilesBuilder.ts` file is a TypeScript code file that defines a `FilesBuilder` class, which extends the `BaseBuilder` class. This class is responsible for generating and rendering documentation for files in a project structure, as well as managing the documentation cache for these files.

## Usage

To use the `FilesBuilder` class, you need to import it and create a new instance by passing a `project` object to the constructor. Then, you can call the `generate()` method to generate the documentation for the files in the project structure.

```typescript
import FilesBuilder from "./path/to/FilesBuilder";

const project = { /* project object */ };
const filesBuilder = new FilesBuilder(project);

await filesBuilder.generate();
```

## Class Methods

### constructor(project: any)

The constructor initializes a new instance of the `FilesBuilder` class with the given `project` object.

### async generate()

This method generates the documentation for the files in the project structure. It creates a new `ProjectStructure` instance, retrieves the folder structure, and then calls the `queryForFolder()` method for the root folder.

### async render(document: Document)

This method renders the documentation for a given `document` object. It returns the `documentation` property of the `document` object.

### async queryForFolder(folder: FolderStructure)

This method recursively queries the given `folder` and its subfolders for files, generating and caching the documentation for each file. It also cleans up the documentation cache for deleted files by calling the `cleanDeletedFilesFromCache()` method.

### private cleanDeletedFilesFromCache(folder: FolderStructure)

This private method cleans up the documentation cache for deleted files in the given `folder`. It checks if each cached file still exists in the folder, and if not, removes it from the cache.

## Technical Concepts

### ProjectStructure

The `ProjectStructure` class is a utility class that represents the structure of a project, including its folders and files.

### FolderStructure

The `FolderStructure` class is a utility class that represents the structure of a folder, including its subfolders and files.

### FileStructure

The `FileStructure` class is a utility class that represents the structure of a file, including its content and metadata.

### DocumentationCache

The `DocumentationCache` class is a utility class that manages the caching of documentation for files and folders in a project structure.