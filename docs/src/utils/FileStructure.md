---
sidebar_label: FileStructure
sidebar_position: 1
---
# FileStructure

The `FileStructure` class is a utility class that represents a file or directory within a file system. It provides a simple way to manage and interact with files and directories, including resolving their paths and checking if a file is a TypeScript code file.

## Usage

To use the `FileStructure` class, you need to import it and create a new instance by providing a directory path and an entry object.

```javascript
import FileStructure from './FileStructure';

const dir = '/path/to/directory';
const entry = {
    name: 'example.ts',
};

const fileStructure = new FileStructure(dir, entry);
```

You can also use the `isCodeFile` method to check if a file is a TypeScript code file.

```javascript
const fileName = 'example.ts';

if (FileStructure.isCodeFile(fileName)) {
    console.log('This is a TypeScript code file.');
} else {
    console.log('This is not a TypeScript code file.');
}
```

## Methods

### constructor(dir: string, entry: any)

The constructor method initializes a new instance of the `FileStructure` class.

- `dir`: A string representing the directory path.
- `entry`: An object containing the file or directory information. It must have a `name` property.

### isCodeFile(fileName: string): boolean

The `isCodeFile` method is a static method that checks if a given file is a TypeScript code file.

- `fileName`: A string representing the file name.

Returns a boolean value indicating whether the file is a TypeScript code file or not.

## Properties

### name: string

The `name` property is a string representing the name of the file or directory.

### path: string

The `path` property is a string representing the resolved path of the file or directory.

### entry: any

The `entry` property is an object containing the file or directory information. It must have a `name` property.