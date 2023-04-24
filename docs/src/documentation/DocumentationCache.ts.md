# DocumentationCache.ts

This file contains the `DocumentationCache` class, which is responsible for managing the cache of documentation files. The cache is stored in a JSON file, and this class provides methods for loading, getting, setting, and removing documents from the cache.

:::danger Make sure to add the cache file (default is .codenarrator\cache.json) to git, so you don't have to query GPT on each run.
:::

## Table of Contents

- [Class: DocumentationCache](#class-documentationcache)
  - [Static Properties](#static-properties)
  - [Constructor](#constructor)
  - [Static Methods](#static-methods)
    - [load](#load)
    - [getIndex](#getindex)
    - [get](#get)
    - [remove](#remove)
    - [set](#set)
    - [getByFolderPath](#getbyfolderpath)
    - [getFolderByFolderPath](#getfolderbyfolderpath)
    - [getProjectInfo](#getprojectinfo)

## Class: DocumentationCache

### Static Properties

- `Documents`: An array of `Document` objects or `null`. This property holds the cached documents.

### Constructor

The constructor is private and initializes the `Documents` property by reading the cache file. If the cache file does not exist, it creates an empty cache file and sets `Documents` to an empty array.

### Static Methods

#### load

- Description: Initializes a new instance of the `DocumentationCache` class.
- Parameters: None
- Returns: None

#### getIndex

- Description: Returns the index of a document in the `Documents` array based on its ID.
- Parameters:
  - `id` (string): The ID of the document to find.
- Returns: The index of the document in the `Documents` array, or `-1` if not found.

#### get

- Description: Retrieves a document from the cache based on its path.
- Parameters:
  - `path` (string): The path of the document to retrieve.
- Returns: The `Document` object if found, or `undefined` if not found.

#### remove

- Description: Removes a document from the cache and deletes its file.
- Parameters:
  - `document` (Document): The `Document` object to remove.
- Returns: None

#### set

- Description: Adds or updates a document in the cache and writes the cache to the cache file.
- Parameters:
  - `document` (Document): The `Document` object to add or update.
- Returns: None

#### getByFolderPath

- Description: Retrieves all documents in the cache that have a specific folder path.
- Parameters:
  - `path` (string): The folder path to search for.
- Returns: An array of `Document` objects with the specified folder path.

#### getFolderByFolderPath

- Description: Retrieves a folder document from the cache based on its folder path.
- Parameters:
  - `path` (string): The folder path of the folder document to retrieve.
- Returns: The `Document` object if found, or `undefined` if not found.

#### getProjectInfo

- Description: Placeholder method for retrieving project information.
- Parameters: None
- Returns: None