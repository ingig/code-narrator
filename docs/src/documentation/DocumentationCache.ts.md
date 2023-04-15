---
nav_order: 2
title: DocumentationCache.ts
parent: documentation
---

# DocumentationCache.ts

This is a TypeScript code file that provides a class named `DocumentationCache`. The class is responsible for managing a cache of `Document` objects, which represent documentation files. The cache is stored in a JSON file, and the class provides methods for loading, getting, setting, and removing documents from the cache.

## Usage

To use the `DocumentationCache` class, first call the `load()` method to initialize the cache. Then, you can use the `get()`, `set()`, `remove()`, and `getByFolderPath()` methods to interact with the cache.

## Methods

### load()

This static method initializes the `DocumentationCache` by reading the cache file from disk and parsing its contents into an array of `Document` objects. If the cache file does not exist, it creates an empty cache file.

### getIndex(id: string): number

This static method takes a document ID as a parameter and returns the index of the document with the given ID in the cache. If the document is not found, it returns -1.

### get(path: string): Document | undefined

This static method takes a file path as a parameter and returns the `Document` object associated with the given path. If the document is not found in the cache, it returns `undefined`.

### remove(document: Document)

This static method takes a `Document` object as a parameter and removes it from the cache. It also deletes the corresponding documentation file from the file system.

### set(document: Document)

This static method takes a `Document` object as a parameter and adds or updates it in the cache. The cache file is then updated with the new contents.

### getByFolderPath(path: string)

This static method takes a folder path as a parameter and returns an array of `Document` objects that are located within the specified folder.

### getProjectInfo()

This static method is currently empty and does not perform any actions.

## Caution

:::danger
Make sure to add the cache file (default is .codenarrator\cache.json) to git, so you don't have to query GPT on each run.
:::