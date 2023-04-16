# DocumentationCache.ts

This file contains the `DocumentationCache` class, which is responsible for managing the cache of documentation files. It provides methods to load, get, set, and remove documents from the cache, as well as retrieve documents by folder path and get project information.

## Table of Contents

- [Class: DocumentationCache](#class-documentationcache)
  - [Constructor](#constructor)
  - [Methods](#methods)
    - [load()](#load)
    - [getIndex(id: string)](#getindexid-string)
    - [get(path: string)](#getpath-string)
    - [remove(document: Document)](#removedocument-document)
    - [set(document: Document)](#setdocument-document)
    - [getByFolderPath(path: string)](#getbyfolderpathpath-string)
    - [getFolderByFolderPath(path: string)](#getfolderbyfolderpathpath-string)
    - [getProjectInfo()](#getprojectinfo)

## Class: DocumentationCache

### Constructor

The constructor of the `DocumentationCache` class is private, which means that instances of this class cannot be created using the `new` keyword. Instead, the class provides static methods to interact with the cache.

### Methods

#### load()

This static method initializes the cache by reading the cache file specified in the `ConfigHelper.CacheFilePath`. If the cache file does not exist, it creates a new empty cache file.

#### getIndex(id: string)

This static method takes an `id` as a parameter and returns the index of the document with the given `id` in the cache. If the document is not found, it returns -1.

#### get(path: string)

This static method takes a `path` as a parameter and returns the `Document` object associated with the given path. If the document is not found in the cache, it returns `undefined`.

#### remove(document: Document)

This static method takes a `Document` object as a parameter and removes it from the cache. It also deletes the corresponding file from the file system.

#### set(document: Document)

This static method takes a `Document` object as a parameter and adds or updates it in the cache. The cache file is then updated with the new content.

#### getByFolderPath(path: string)

This static method takes a `path` as a parameter and returns an array of `Document` objects that have the given folder path.

#### getFolderByFolderPath(path: string)

This static method takes a `path` as a parameter and returns the `Document` object representing the folder with the given path. If the folder is not found in the cache, it returns `undefined`.

#### getProjectInfo()

This static method is currently empty and does not perform any action.

:::danger
Make sure to add the cache file (default is .codenarrator\cache.json) to git, so you don't have to query GPT on each run.
:::