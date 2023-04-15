---
nav_order: 0
title: FoldersBuilder.ts
parent: Folders

permalink: src\documentation\plugins\builders\Folders\FoldersBuilder.ts
---

# FoldersBuilder.ts

This is a TypeScript code file that defines a `FoldersBuilder` class, which is responsible for generating documentation for a folder structure in a project. The class extends the `BaseBuilder` class and provides methods to generate, query, and render documentation for folders and files within the project.

## Table of Contents

- [Class Definition](#class-definition)
- [Methods](#methods)
  - [generate](#generate)
  - [queryForFolder](#queryForFolder)
  - [render](#render)
  - [getFileSummary](#getFileSummary)
  - [getFolderSummary](#getFolderSummary)

## Class Definition

```typescript
export default class FoldersBuilder extends BaseBuilder {
    ...
}
```

The `FoldersBuilder` class extends the `BaseBuilder` class and provides additional methods for generating and rendering documentation for a folder structure.

## Methods

### generate

```typescript
public async generate(): Promise<void>
```

This method generates the documentation for the project's folder structure. It creates a new `ProjectStructure` instance, retrieves the folder structure, and then queries for each folder in the structure.

### queryForFolder

```typescript
public async queryForFolder(folder: FolderStructure, position: number): Promise<void>
```

This method takes a `FolderStructure` object and a `position` number as parameters. It recursively queries for each subfolder in the given folder and generates documentation for the files and folders within it. The documentation is then cached using the `DocumentationCache` class.

### render

```typescript
public async render(document: Document): Promise<string>
```

This method takes a `Document` object as a parameter and returns the documentation as a string.

### getFileSummary

```typescript
private getFileSummary(file: FileStructure): string
```

This method takes a `FileStructure` object as a parameter and returns a summary of the file's documentation. It retrieves the cached documentation for the file and extracts a summary using a regular expression.

### getFolderSummary

```typescript
private getFolderSummary(folder: FolderStructure): string
```

This method takes a `FolderStructure` object as a parameter and returns a summary of the folder's documentation. It retrieves the cached documentation for the folder and extracts a summary using a regular expression.