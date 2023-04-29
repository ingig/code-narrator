# DocumentationCache.ts

This file contains the `DocumentationCache` class, which is responsible for managing the cache of documentation files. It provides methods to load, get, set, and remove documents from the cache, as well as methods to retrieve documents by their folder path.

## Table of Contents

- [Class: DocumentationCache](#class-documentationcache)
  - [Static Properties](#static-properties)
  - [Constructor](#constructor)
  - [Static Methods](#static-methods)
    - [load()](#load)
    - [getIndex(id: string)](#getindexid-string)
    - [get(path: string)](#getpath-string)
    - [remove(document: Document)](#removedocument-document)
    - [set(document: Document)](#setdocument-document)
    - [getByFolderPath(path: string)](#getbyfolderpathpath-string)
    - [getFolderByFolderPath(path: string)](#getfolderbyfolderpathpath-string)

## Class: DocumentationCache

### Static Properties

- `Documents: Document[] | null`: An array of `Document` objects representing the cached documents, or `null` if the cache is not initialized.

### Constructor

The constructor is private and should not be called directly. Instead, use the `load()` method to initialize the cache.

### Static Methods

#### load()

Initializes the `DocumentationCache` by loading the cache file from disk. If the cache file does not exist, it creates an empty cache file.

#### getIndex(id: string)

Returns the index of the document with the specified `id` in the `Documents` array. If the document is not found, it returns `-1`.

- `id: string`: The ID of the document to find.

#### get(path: string)

Returns the `Document` object with the specified `path`. If the document is not found in the cache, it returns `undefined`.

- `path: string`: The path of the document to retrieve.

#### remove(document: Document)

Removes the specified `Document` object from the cache and deletes the corresponding file from disk.

- `document: Document`: The document to remove.

#### set(document: Document)

Adds or updates the specified `Document` object in the cache and saves the cache to disk.

- `document: Document`: The document to add or update.

#### getByFolderPath(path: string)

Returns an array of `Document` objects that have the specified `folderPath`.

- `path: string`: The folder path to search for.

#### getFolderByFolderPath(path: string)

Returns the `Document` object that represents a folder with the specified `folderPath` and has a generator of type 'Folders'. If no such document is found, it returns `undefined`.

- `path: string`: The folder path to search for.

:::danger
Make sure to add the cache file (default is .codenarrator\cache.json) to git, so you don't have to query GPT on each run.
:::