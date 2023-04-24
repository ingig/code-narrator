# DocumentationCache.ts

This is a TypeScript code file that provides a class named `DocumentationCache`. The class is responsible for managing a cache of `Document` objects, which represent documentation files. The cache is stored in a JSON file, and the class provides methods to load, get, set, remove, and retrieve documents by their folder path.

## Table of Contents

- [Imported Modules](#imported-modules)
- [Class: DocumentationCache](#class-documentationcache)
  - [Static Properties](#static-properties)
  - [Constructor](#constructor)
  - [Methods](#methods)
    - [load](#load)
    - [getIndex](#getindex)
    - [get](#get)
    - [remove](#remove)
    - [set](#set)
    - [getByFolderPath](#getbyfolderpath)
    - [getFolderByFolderPath](#getfolderbyfolderpath)
- [Danger Note](#danger-note)

## Imported Modules

The following modules are imported in the file:

- `fs`: File system module for reading and writing files.
- `Document`: A custom class representing a documentation file.
- `path`: A module for working with file and directory paths.
- `App`: A custom class representing the application.
- `ConfigHelper`: A custom class for managing the application's configuration.

## Class: DocumentationCache

### Static Properties

- `Documents`: An array of `Document` objects, representing the cached documentation files. Initialized as `null`.

### Constructor

The constructor is private and is only called by the `load` method. It reads the cache file from the file system, parses its content, and initializes the `Documents` property. If the cache file does not exist, it creates an empty cache file and initializes `Documents` as an empty array.

### Methods

#### load

- **Description**: A static method that creates a new instance of the `DocumentationCache` class, which in turn initializes the cache by calling the private constructor.

#### getIndex

- **Parameters**:
  - `id`: A string representing the ID of a document.
- **Description**: A static method that returns the index of a document in the `Documents` array based on its ID. Returns `-1` if the document is not found.

#### get

- **Parameters**:
  - `path`: A string representing the path of a document.
- **Description**: A static method that returns a `Document` object from the cache based on its path. Updates the `lastTouch` property of the document and calls the `set` method to update the cache. Returns `undefined` if the document is not found.

#### remove

- **Parameters**:
  - `document`: A `Document` object to be removed from the cache.
- **Description**: A static method that removes a document from the cache and deletes its file from the file system.

#### set

- **Parameters**:
  - `document`: A `Document` object to be added or updated in the cache.
- **Description**: A static method that adds or updates a document in the cache. If the document is not found in the cache, it is added; otherwise, it is updated. The cache file is then updated with the new content.

#### getByFolderPath

- **Parameters**:
  - `path`: A string representing the folder path of documents.
- **Description**: A static method that returns an array of `Document` objects that have the specified folder path.

#### getFolderByFolderPath

- **Parameters**:
  - `path`: A string representing the folder path of a document.
- **Description**: A static method that returns a `Document` object with the specified folder path and a `generator` property set to `'Folders'`. Returns `undefined` if the document is not found.

## Danger Note

:::danger
Make sure to add the cache file (default is .codenarrator\cache.json) to git, so you don't have to query GPT on each run.
:::