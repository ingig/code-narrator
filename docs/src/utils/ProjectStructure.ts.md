# ProjectStructure.ts

This is a code file that defines a class called `ProjectStructure`. The class is responsible for managing the structure of a project, including its folders and files. It provides methods to retrieve the folder structure and all the files within the project.

## Table of Contents

- [Class Description](#class-description)
- [Examples](#examples)
- [Methods](#methods)
  - [constructor](#constructor)
  - [getStructure](#getstructure)
  - [getAllFiles](#getallfiles)
  - [getSubfiles](#getsubfiles)

## Class Description

The `ProjectStructure` class has the following properties:

- `folderStructure`: An instance of the `FolderStructure` class representing the project's folder structure.

The class has the following methods:

- `constructor`: Initializes a new instance of the `ProjectStructure` class.
- `getStructure`: Returns the folder structure of the project.
- `getAllFiles`: Returns an array of all the files in the project.
- `getSubfiles`: A private method that returns an array of all the files in a given folder.

## Examples

```javascript
import ProjectStructure from "./ProjectStructure";

// Create a new instance of the ProjectStructure class
const projectStructure = new ProjectStructure();

// Get the folder structure of the project
const folderStructure = await projectStructure.getStructure();

// Get all the files in the project
const allFiles = projectStructure.getAllFiles();
```

## Methods

### constructor

The `constructor` method initializes a new instance of the `ProjectStructure` class. It sets the `folderStructure` property to a new instance of the `FolderStructure` class, using the current working directory as the project path.

```javascript
constructor() {
    let projectPath = process.cwd();
    this.folderStructure = new FolderStructure(projectPath);
}
```

### getStructure

The `getStructure` method is an asynchronous method that returns the folder structure of the project.

```javascript
public async getStructure() {
    return this.folderStructure;
}
```

### getAllFiles

The `getAllFiles` method returns an array of all the files in the project. It iterates through the folders in the folder structure and calls the private `getSubfiles` method to get all the files in each folder.

```javascript
public getAllFiles() {
    let files : FileStructure[] = this.folderStructure.files;
    for (let i=0;i<this.folderStructure.folders.length;i++) {
        files.push(...this.getSubfiles(this.folderStructure.folders[i]))
    }
    return files;
}
```

### getSubfiles

The `getSubfiles` method is a private method that takes a `FolderStructure` object as a parameter and returns an array of all the files in the given folder. It recursively calls itself for each subfolder in the folder structure.

```javascript
private getSubfiles(folder : FolderStructure) {
    let files : FileStructure[] = folder.files;
    for (let i=0;i<folder.folders.length;i++) {
        files.push(...this.getSubfiles(folder.folders[i]))
    }
    return files;
}
```