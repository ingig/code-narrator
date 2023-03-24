---
sidebar_label: ProjectLogic
sidebar_position: 3
---
# ProjectLogic

The `ProjectLogic` class is a utility class that helps in managing the project structure. It provides methods to get the folder structure of a project. This class uses the `ConfigHelper` and `FolderStructure` utility classes to perform its operations.

## Usage

To use the `ProjectLogic` class, first import it and create an instance of the class:

```javascript
import ProjectLogic from "./path/to/ProjectLogic";

const projectLogic = new ProjectLogic();
```

Then, you can use the available methods on the `projectLogic` instance. For example, to get the folder structure of a project:

```javascript
const folderStructure = await projectLogic.getStructure();
console.log(folderStructure);
```

## Methods

### getStructure()

This method returns the folder structure of a project. It reads the project path from the configuration using the `ConfigHelper` class and then creates a `FolderStructure` instance with the project path.

#### Parameters

This method does not have any parameters.

#### Returns

This method returns a `FolderStructure` instance representing the folder structure of the project.

#### Example

```javascript
const projectLogic = new ProjectLogic();
const folderStructure = await projectLogic.getStructure();
console.log(folderStructure);
```

## Technical Concepts

### ConfigHelper

`ConfigHelper` is a utility class that helps in managing the configuration of the application. It provides methods to get and set configuration values. In this class, it is used to get the project path from the configuration.

### FolderStructure

`FolderStructure` is a utility class that represents the folder structure of a project. It provides methods to traverse and manipulate the folder structure. In this class, it is used to create an instance of the folder structure with the project path.