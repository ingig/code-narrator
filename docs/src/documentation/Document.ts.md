---
sidebar_position: 0
sidebar_label: Document.ts
---

# Document.ts

This file defines a `Document` class that represents a document or folder in a project. The class contains properties and methods to manage the document's metadata, content, and related information.

## Table of Contents

- [Class Definition](#class-definition)
- [Constructor](#constructor)
- [Methods](#methods)
  - [getId](#getid)

## Class Definition

The `Document` class has the following properties:

- `id`: A unique identifier for the document.
- `name`: The name of the document.
- `path`: The relative path of the document in the project.
- `folderPath`: The path of the folder containing the document.
- `fileContent`: The content of the document file.
- `documentation`: The documentation associated with the document.
- `isFolder`: A boolean indicating if the document represents a folder.
- `updated`: A `Date` object representing the last update time of the document.
- `sidebar_position`: An optional number representing the position of the document in the sidebar.
- `sidebar_label`: An optional string representing the label of the document in the sidebar.
- `init`: A boolean indicating if the document has been initialized.
- `postInit`: A boolean indicating if the document has been post-initialized.
- `generator`: A string representing the generator used to create the document.
- `saveToPath`: The path where the document should be saved.
- `data`: Any additional data associated with the document.
- `documentation_type`: A string representing the type of documentation (default is 'md').
- `question`: A string representing a question related to the document.

## Constructor

The constructor for the `Document` class takes the following parameters:

- `name`: The name of the document.
- `filePath`: The path of the document file.
- `folderPath`: The path of the folder containing the document.
- `updated`: A `Date` object representing the last update time of the document.
- `sidebar_position?`: An optional number representing the position of the document in the sidebar.
- `sidebar_label?`: An optional string representing the label of the document in the sidebar.

The constructor initializes the properties of the `Document` class and reads the file content if the document is not a folder.

## Methods

### getId

```typescript
public static getId(path: string): string
```

The `getId` method is a static method that takes a `path` parameter and returns a unique identifier for the document based on the path. This method is used to generate the `id` property of the `Document` class.