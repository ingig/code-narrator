---
nav_order: 1
title: FileStructure.ts
parent: utils

permalink: src\utils\FileStructure.ts
---

# FileStructure.ts

This is a TypeScript code file that defines a `FileStructure` class. The class is used to represent and manipulate file structures in a project. It provides methods to check if a file is a code file and to get the content of a file.

## Table of Contents

- [Class Definition](#class-definition)
- [Examples](#examples)
- [Methods](#methods)
  - [constructor](#constructor)
  - [isCodeFile](#iscodefile)
  - [getContent](#getcontent)

## Class Definition

The `FileStructure` class has the following properties:

- `name`: The name of the file or directory.
- `path`: The relative path of the file or directory from the project root.
- `entry`: An object representing the file or directory entry.
- `depth`: The depth of the file or directory in the file structure.

## Examples

Here are some examples of how to use the `FileStructure` class:

```typescript
// Create a new FileStructure instance
const fileStructure = new FileStructure('src', { name: 'example.ts' }, 1);

// Check if a file is a code file
const isCodeFile = FileStructure.isCodeFile('example.ts'); // true

// Get the content of a file
const content = FileStructure.getContent('src/example.ts');
```

## Methods

### constructor

The constructor initializes a new `FileStructure` instance with the given `dir`, `entry`, and `depth`.

**Parameters:**

- `dir`: A string representing the directory path.
- `entry`: An object representing the file or directory entry.
- `depth`: A number representing the depth of the file or directory in the file structure.

### isCodeFile

This static method checks if the given `fileName` is a TypeScript code file by checking its file extension.

**Parameters:**

- `fileName`: A string representing the name of the file.

**Returns:** A boolean value indicating whether the file is a TypeScript code file.

### getContent

This static method returns the content of the file at the given `path`. If the file does not exist, it returns an empty string.

**Parameters:**

- `path`: A string representing the path of the file.

**Returns:** A string containing the content of the file.