---
sidebar_position: 2
sidebar_label: FolderStructure.ts
---

# FolderStructure.ts

## Overview

The `FolderStructure.ts` file is a TypeScript module that provides a class called `FolderStructure`. This class is responsible for managing and interacting with folder structures in a file system. It provides methods for getting files, checking if a folder exists, searching for a string in files, and more.

## Usage

To use the `FolderStructure` class, you need to import it and create an instance by passing the folder path as a parameter:

```typescript
import FolderStructure from './FolderStructure';

const folder = new FolderStructure('/path/to/folder');
```

## Class: FolderStructure

### Properties

- `name`: The name of the folder.
- `path`: The relative path of the folder.
- `entry`: An entry object representing the folder.
- `files`: An array of `FileStructure` objects representing the files in the folder.
- `folders`: An array of `FolderStructure` objects representing the subfolders in the folder.

### Constructor

- `constructor(folderPath: string)`: Initializes a new instance of the `FolderStructure` class with the given folder path.

### Methods

- `static getFiles(dir: string)`: Returns an array of `FileStructure` objects representing the files in the specified directory. It ignores files and folders listed in the ignore list.

- `static exists(dir: string)`: Returns a boolean indicating whether the specified directory exists.

- `getFiles(dir: string)`: Instance method that calls the static `getFiles` method with the specified directory.

- `private getStructure(path: string)`: Returns an array of `FolderStructure` objects representing the subfolders in the specified path. It ignores files and folders listed in the ignore list.

- `static isInIgnoreList(fileOrFolderPath: string)`: Returns a boolean indicating whether the specified file or folder path is in the ignore list.

- `static searchForStringInFiles(root: string, search: string)`: Searches for a specified string in all `.ts` and `.js` files within the specified root directory and its subdirectories. Returns the content of the first file containing the search string and logs the file path.

## Technical Concepts

### Ignore List

The ignore list is a list of file and folder patterns that should be excluded from certain operations, such as getting files or searching for a string in files. The ignore list is managed using the `ignore` package and can be configured using the `ConfigHelper` class.