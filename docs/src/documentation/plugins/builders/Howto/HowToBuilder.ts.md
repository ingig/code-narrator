---
sidebar_position: 0
sidebar_label: HowToBuilder.ts
---

# HowToBuilder.ts

`HowToBuilder.ts` is a TypeScript code file that provides a class `HowToBuilder` for generating and rendering documentation for "how-to" guides. The class extends the `BaseBuilder` class and is responsible for extracting and formatting "how-to" content from the given files.

## Class: HowToBuilder

The `HowToBuilder` class is responsible for generating and rendering documentation for "how-to" guides.

### Constructor

The constructor initializes the `HowToBuilder` class with the type 'HowTo'.

```typescript
constructor() {
    super('HowTo');
}
```

### Method: generate

The `generate` method is an asynchronous method that iterates through all the files in the project structure, reads their content, and checks for the presence of a "how-to" guide using a regular expression. If a match is found, it calls the `makeHowTo` method to create the documentation for that guide.

```typescript
public async generate() {
    // ...
}
```

### Method: render

The `render` method is an asynchronous method that takes a `Document` object as a parameter and returns the documentation content as a string.

```typescript
public async render(document: Document) {
    return document.documentation;
}
```

### Method: makeHowTo

The `makeHowTo` method is a private asynchronous method that takes a `FileStructure` object, the content of the file, and the name of the "how-to" guide as parameters. It checks if the documentation for the guide already exists in the cache, and if not, it extracts the referenced documents using a regular expression and generates the documentation using the `generateDocumentationAndCache` method from the `BaseBuilder` class.

```typescript
private async makeHowTo(fileStructure: FileStructure, content: string, name : string) {
    // ...
}
```

## Usage

To use the `HowToBuilder` class, you need to import it and create an instance of the class. Then, you can call the `generate` method to generate the documentation for the "how-to" guides in your project.

```typescript
import HowToBuilder from "./HowToBuilder";

const howToBuilder = new HowToBuilder();
await howToBuilder.generate();
```

## Technical Concepts

- **Regular Expressions**: Regular expressions are used in this code to match and extract specific patterns in the file content, such as the "how-to" guide and referenced documents.
- **FileStructure**: The `FileStructure` class is used to represent the structure of a file in the project. It provides methods for getting the content of a file and other file-related operations.
- **DocumentationCache**: The `DocumentationCache` class is used to cache the generated documentation for faster access and to avoid unnecessary regeneration of the documentation.