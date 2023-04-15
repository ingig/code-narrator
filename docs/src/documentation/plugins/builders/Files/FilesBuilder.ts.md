---
nav_order: 0
title: FilesBuilder.ts
parent: Files

permalink: src\documentation\plugins\builders\Files\FilesBuilder.ts
---

# FilesBuilder.ts

The `FilesBuilder.ts` file is a TypeScript class that extends the `BaseBuilder` class. It is responsible for generating and rendering documentation for files in a project structure. It also handles querying folders, cleaning deleted files from the cache, and determining if a file should be documented.

## Table of Contents

- [Class Definition](#class-definition)
- [Methods](#methods)
  - [generate](#generate)
  - [render](#render)
  - [queryForFolder](#queryforfolder)
  - [cleanDeletedFilesFromCache](#cleandeletedfilesfromcache)
  - [shouldDocument](#shoulddocument)

## Class Definition

```typescript
export default class FilesBuilder extends BaseBuilder {
    ...
}
```

## Methods

### generate

```typescript
public async generate(): Promise<void>
```

This method generates the documentation for the files in the project structure. It creates a new `ProjectStructure` instance, retrieves the folder structure, and then queries the folder for documentation.

### render

```typescript
public async render(document: Document): Promise<string>
```

This method renders the documentation for a given `Document` instance. It returns the documentation as a string.

### queryForFolder

```typescript
public async queryForFolder(folder: FolderStructure): Promise<void>
```

This method recursively queries a given folder and its subfolders for documentation. It cleans deleted files from the cache, iterates through the files in the folder, and generates documentation for each file if it should be documented.

### cleanDeletedFilesFromCache

```typescript
private cleanDeletedFilesFromCache(folder: FolderStructure): void
```

This method cleans deleted files from the `DocumentationCache` by checking if the cached files still exist in the folder structure. If a file does not exist, it is removed from the cache.

### shouldDocument

```typescript
private shouldDocument(file: FileStructure): boolean
```

This method determines if a given file should be documented based on the `include` configuration. If the `include` configuration is not set, all files are considered for documentation. If the `include` configuration is set, the method checks if the file path is ignored by the include patterns. If the file path is ignored, the file should be documented.

## Usage

To use the `FilesBuilder` class, you can create a new instance and call the `generate` method to generate documentation for the files in the project structure.

```typescript
const filesBuilder = new FilesBuilder();
await filesBuilder.generate();
```

To render the documentation for a specific `Document` instance, you can call the `render` method.

```typescript
const document = new Document(...);
const documentation = await filesBuilder.render(document);
```

To query a specific folder for documentation, you can call the `queryForFolder` method.

```typescript
const folder = new FolderStructure(...);
await filesBuilder.queryForFolder(folder);
```