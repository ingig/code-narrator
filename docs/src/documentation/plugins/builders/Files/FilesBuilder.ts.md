# FilesBuilder.ts

The `FilesBuilder.ts` file is a TypeScript class that extends the `BaseBuilder` class. It is responsible for generating documentation for files and folders in a project structure. The class provides methods to query folders, render documents, and clean deleted files from the cache.

## Table of Contents

- [Usage](#usage)
- [Methods](#methods)
  - [generate](#generate)
  - [render](#render)
  - [queryForFolder](#queryForFolder)
  - [cleanDeletedFilesFromCache](#cleanDeletedFilesFromCache)
  - [shouldDocument](#shouldDocument)

## Usage

To use the `FilesBuilder` class, you need to import it and create a new instance:

```typescript
import FilesBuilder from "./path/to/FilesBuilder";

const filesBuilder = new FilesBuilder();
```

Then, you can call the `generate` method to start generating documentation:

```typescript
await filesBuilder.generate();
```

## Methods

### generate

```typescript
public async generate(): Promise<void>
```

The `generate` method initializes a new `ProjectStructure` instance, gets the folder structure, and calls the `queryForFolder` method with the folder structure.

### render

```typescript
public async render(document: Document): Promise<string>
```

The `render` method takes a `Document` instance as a parameter and returns the documentation as a string.

### queryForFolder

```typescript
public async queryForFolder(folder: FolderStructure): Promise<void>
```

The `queryForFolder` method takes a `FolderStructure` instance as a parameter and recursively generates documentation for all files and folders in the given folder structure. It also cleans deleted files from the cache and checks if a file should be documented.

### cleanDeletedFilesFromCache

```typescript
private cleanDeletedFilesFromCache(folder: FolderStructure): void
```

The `cleanDeletedFilesFromCache` method takes a `FolderStructure` instance as a parameter and removes deleted files from the `DocumentationCache`.

### shouldDocument

```typescript
private shouldDocument(file: FileStructure): boolean
```

The `shouldDocument` method takes a `FileStructure` instance as a parameter and returns a boolean value indicating whether the file should be documented or not. It checks the `config.include` property and uses the `ignore` library to determine if the file should be documented.