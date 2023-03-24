---
sidebar_label: FolderStructure
sidebar_position: 2
---
# FolderStructure

The `FolderStructure` class is a utility class that helps in managing and organizing the folder structure of a project. It provides methods to retrieve files and folders within a given directory, while also allowing to filter out certain files and folders based on an ignore list.

## Usage

To use the `FolderStructure` class, first import it and create a new instance by passing the path of the directory you want to manage.

```javascript
import FolderStructure from "./FolderStructure";

const folder = new FolderStructure("path/to/your/directory");
```

You can then use the various methods provided by the class to retrieve files and folders within the directory.

## Methods

### constructor(path: string)

The constructor initializes a new instance of the `FolderStructure` class with the given path. It sets the name and path properties, and initializes the files and folders arrays by calling the `getFiles()` and `getStructure()` methods.

- `path`: The path of the directory to manage.

### getFiles(dir: string): FileStructure[]

This method returns an array of `FileStructure` objects representing the files within the given directory. It filters out files that are in the ignore list.

- `dir`: The path of the directory to retrieve files from.

Example:

```javascript
const files = folder.getFiles("path/to/your/directory");
```

### getStructure(path: string): FolderStructure[]

This method returns an array of `FolderStructure` objects representing the folders within the given directory. It filters out folders that are in the ignore list.

- `path`: The path of the directory to retrieve folders from.

Example:

```javascript
const folders = folder.getStructure("path/to/your/directory");
```

### isInIgnoreList(fileName: string, path: string): boolean

This method checks if the given file or folder name is in the ignore list. It returns `true` if the name is in the ignore list, and `false` otherwise.

- `fileName`: The name of the file or folder to check.
- `path`: The path of the file or folder to check.

Example:

```javascript
const isIgnored = folder.isInIgnoreList("node_modules", "path/to/your/directory");
```

## Properties

- `name`: The name of the folder.
- `path`: The path of the folder.
- `entry`: An entry object representing the folder.
- `files`: An array of `FileStructure` objects representing the files within the folder.
- `folders`: An array of `FolderStructure` objects representing the folders within the folder.

## Technical Concepts

### FileStructure

The `FileStructure` class is used to represent individual files within a directory. It is used by the `FolderStructure` class to manage and organize files within a project.

### ConfigHelper

The `ConfigHelper` class is a utility class that helps in managing the configuration settings of a project. It is used by the `FolderStructure` class to retrieve the project path.

### Ignore List

The ignore list is an array of file and folder names that should be excluded from the folder structure. By default, the ignore list includes common files and folders that are not relevant to the project structure, such as `node_modules`, `.git`, and `package.json`.