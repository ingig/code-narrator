# FilesBuilder.ts

The `FilesBuilder.ts` file is a TypeScript module that provides a class for generating and managing documentation for files in a project. It extends the `BaseBuilder` class and is responsible for traversing the project structure, rendering documentation, and caching the generated documentation.

## Table of Contents

- [Class: FilesBuilder](#class-filesbuilder)
  - [Constructor](#constructor)
  - [Methods](#methods)
    - [generate](#generate)
    - [render](#render)
    - [queryForFolder](#queryforfolder)
    - [cleanDeletedFilesFromCache](#cleandeletedfilesfromcache)
    - [shouldDocument](#shoulddocument)

## Class: FilesBuilder

The `FilesBuilder` class extends the `BaseBuilder` class and provides methods for generating and managing documentation for files in a project.

### Constructor

The constructor initializes the `FilesBuilder` instance with the name 'Files'.

```typescript
constructor() {
    super('Files');
}
```

### Methods

#### generate

The `generate` method is an asynchronous method that initializes a new `ProjectStructure` instance, retrieves the project's folder structure, and calls the `queryForFolder` method with the retrieved folder structure.

```typescript
public async generate() {
    let structure = new ProjectStructure();
    let folder = await structure.getStructure();
    await this.queryForFolder(folder);
}
```

#### render

The `render` method takes a `Document` instance as a parameter and returns the documentation content of the document.

```typescript
public async render(document: Document) {
    return document.documentation;
}
```

#### queryForFolder

The `queryForFolder` method is an asynchronous method that takes a `FolderStructure` instance as a parameter. It cleans the deleted files from the cache, iterates through the files in the folder, and generates documentation for each file if it should be documented. It also recursively calls itself for each subfolder in the folder.

```typescript
public async queryForFolder(folder: FolderStructure) {
    // ...
}
```

#### cleanDeletedFilesFromCache

The `cleanDeletedFilesFromCache` method is a private method that takes a `FolderStructure` instance as a parameter. It removes the deleted files from the documentation cache.

```typescript
private cleanDeletedFilesFromCache(folder: FolderStructure) {
    // ...
}
```

#### shouldDocument

The `shouldDocument` method is a private method that takes a `FileStructure` instance as a parameter. It checks if the file should be documented based on the configuration's include patterns and returns a boolean value.

```typescript
private shouldDocument(file: FileStructure) {
    // ...
}
```

## Usage

To use the `FilesBuilder` class, you can create a new instance and call its `generate` method to generate documentation for the files in the project.

```typescript
const filesBuilder = new FilesBuilder();
await filesBuilder.generate();
```

You can also use the `render` method to get the documentation content of a specific document.

```typescript
const document = new Document(/* ... */);
const documentationContent = await filesBuilder.render(document);
```