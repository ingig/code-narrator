---
nav_order: 2
title: FolderStructure.ts
parent: utils

permalink: src\utils\FolderStructure.ts
---

# FolderStructure.ts

This TypeScript file defines a `FolderStructure` class that represents a folder structure in a file system. The class provides methods to retrieve information about the folder structure, such as its hierarchical tree, files, and folders. It also includes utility methods to check if a folder exists, search for a string in files, and determine if a path is an ancestor or parent of another path.

## Usage

To use the `FolderStructure` class, you need to import it and create an instance by providing the folder path and an optional depth parameter.

```typescript
import FolderStructure from './FolderStructure';

const folderStructure = new FolderStructure('path/to/folder');
```

## Class Methods

### constructor(folderPath: string, depth = 0)

The constructor initializes a new `FolderStructure` instance with the given folder path and depth. It sets the instance properties such as name, path, files, folders, and depth.

### getHierarchicalTree(): string

This method returns a string representation of the folder structure's hierarchical tree. It includes the folder and file names with indentation based on their depth in the tree.

### static getFiles(dir: string, depth: number): FileStructure[]

This static method returns an array of `FileStructure` instances for the files in the specified directory. It filters the files based on the `shouldDocument` method.

### static exists(dir: string): boolean

This static method checks if a directory exists and returns a boolean value.

### getFiles(dir: string, depth: number): FileStructure[]

This instance method is a wrapper for the static `getFiles` method.

### private getStructure(folderPath: string, depth: number): FolderStructure[]

This private method returns an array of `FolderStructure` instances for the subfolders in the specified folder path. It filters the folders based on the `shouldDocument` method.

### static shouldDocument(fileOrFolderPath: string, isDirectory: boolean): boolean

This static method checks if a file or folder should be documented based on the include and exclude patterns defined in the `ConfigHelper` configuration. It returns a boolean value.

### static isAncestorOrParentPath(parentPath: string, childPath: string): boolean

This static method checks if a path is an ancestor or parent of another path and returns a boolean value.

### static searchForStringInFiles(root: string, search: string): string

This static method searches for a string in the files of a specified root directory. It returns the content of the first file containing the search string or an empty string if not found.

### static getFoldersAndFiles(path: string): string[]

This static method returns an array of folder and file names in the specified path.

## Example

```typescript
import FolderStructure from './FolderStructure';

// Create a FolderStructure instance
const folderStructure = new FolderStructure('path/to/folder');

// Get the hierarchical tree
const tree = folderStructure.getHierarchicalTree();
console.log(tree);

// Check if a folder exists
const exists = FolderStructure.exists('path/to/folder');
console.log(exists);

// Search for a string in files
const content = FolderStructure.searchForStringInFiles('path/to/folder', 'searchString');
console.log(content);
```

## Note

The `FolderStructure` class depends on the `FileStructure` class, `ConfigHelper` class, and the `fast-glob` library. Make sure to import and install these dependencies before using the `FolderStructure` class.