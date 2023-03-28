---
sidebar_position: 4
sidebar_label: ProjectStructure.ts
---

# ProjectStructure.ts

## Overview

The `ProjectStructure.ts` file is a TypeScript module that exports a `ProjectStructure` class. This class is responsible for managing the structure of a project, including its folder hierarchy and configuration settings. It utilizes the `ConfigHelper` and `FolderStructure` utility classes to achieve this.

## Usage

To use the `ProjectStructure` class, you first need to import it:

```typescript
import ProjectStructure from "./ProjectStructure";
```

Then, create a new instance of the class and call its methods as needed:

```typescript
const projectStructure = new ProjectStructure();
const structure = await projectStructure.getStructure();
```

## Class: ProjectStructure

### Method: getStructure()

This method retrieves the folder structure of the project, based on the project path specified in the configuration.

#### Parameters

There are no parameters for this method.

#### Returns

This method returns an instance of the `FolderStructure` class, which represents the folder hierarchy of the project.

#### Example

```typescript
const projectStructure = new ProjectStructure();
const structure = await projectStructure.getStructure();
console.log(structure);
```

## Utility Classes

### ConfigHelper

The `ConfigHelper` utility class is used to manage the configuration settings of the project. It provides methods to get and set configuration values, such as the project path.

### FolderStructure

The `FolderStructure` utility class is used to represent and manipulate the folder hierarchy of the project. It provides methods to traverse the folder structure, create new folders, and delete existing ones.

## Technical Concepts

### TypeScript

TypeScript is a superset of JavaScript that adds optional static typing to the language. It is designed to make it easier to write and maintain large-scale JavaScript applications. TypeScript code is transpiled to JavaScript before being executed in the browser or on the server.

### JSON

JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is a text format that is completely language-independent but uses conventions that are familiar to programmers of the C family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others.