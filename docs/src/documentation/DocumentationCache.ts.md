---
sidebar_position: 2
sidebar_label: DocumentationCache.ts
---

# DocumentationCache.ts

## Overview

The `DocumentationCache.ts` file is a TypeScript module that provides a class named `DocumentationCache`. This class is responsible for managing the cache of documentation files in a project. It provides methods to load, get, set, remove, and retrieve documentation files by their folder path.

## Usage

To use the `DocumentationCache` class, you should first import it:

```typescript
import DocumentationCache from "./path/to/DocumentationCache";
```

Then, you can call its static methods to interact with the cache.

## Methods

### load()

This static method initializes the `DocumentationCache` by loading the cache file from the project's configuration. If the cache file exists, it reads its content and parses it as an array of `Document` objects. If the cache file does not exist, it initializes an empty array.

```typescript
DocumentationCache.load();
```

### getIndex(id: string): number

This static method takes an `id` string as a parameter and returns the index of the `Document` with the given `id` in the cache. If the document is not found, it returns `-1`.

```typescript
const index = DocumentationCache.getIndex("some-document-id");
```

### get(path: string): Document | undefined

This static method takes a `path` string as a parameter and returns the `Document` object associated with the given path. If the document is not found, it returns `undefined`.

```typescript
const document = DocumentationCache.get("path/to/document");
```

### remove(document: Document)

This static method takes a `Document` object as a parameter and removes it from the cache. It also deletes the corresponding documentation file from the project's documentation folder.

```typescript
DocumentationCache.remove(document);
```

### set(document: Document)

This static method takes a `Document` object as a parameter and adds or updates it in the cache. It also writes the updated cache to the cache file.

```typescript
DocumentationCache.set(document);
```

### getByFolderPath(path: string)

This static method takes a `path` string as a parameter and returns an array of `Document` objects that are located in the specified folder path.

```typescript
const documents = DocumentationCache.getByFolderPath("path/to/folder");
```

## :::danger
Make sure to add the cache file (default is `.codenarrator\cache.json`) to git, so you don't have to query GPT on each run.
:::