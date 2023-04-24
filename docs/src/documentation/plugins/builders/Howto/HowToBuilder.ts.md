# HowToBuilder.ts

The `HowToBuilder.ts` file is a TypeScript class that extends the `BaseBuilder` class. It is responsible for generating documentation for "how-to" guides by parsing and extracting relevant information from the project files. The class has two main methods: `generate()` and `makeHowTo()`.

## Usage

To use the `HowToBuilder` class, you need to import it and create a new instance:

```typescript
import HowToBuilder from "./path/to/HowToBuilder";

const howToBuilder = new HowToBuilder();
```

Then, you can call the `generate()` method to start the documentation generation process:

```typescript
await howToBuilder.generate();
```

## Methods

### constructor()

The constructor initializes the `HowToBuilder` instance and sets the builder type to 'HowTo'.

### generate(): Promise<void>

This asynchronous method generates the documentation for "how-to" guides. It does so by:

1. Creating a new `ProjectStructure` instance and retrieving all the files in the project.
2. Reading the content of each file and checking if it contains a "how-to" guide using a regular expression.
3. If a "how-to" guide is found, it calls the `makeHowTo()` method to generate the documentation for that guide.

### makeHowTo(fileStructure: FileStructure, content: string, name: string): Promise<void>

This private asynchronous method generates the documentation for a specific "how-to" guide. It takes the following parameters:

- `fileStructure`: A `FileStructure` instance representing the file containing the "how-to" guide.
- `content`: The content of the file as a string.
- `name`: The name of the "how-to" guide.

The method performs the following steps:

1. Checks if the documentation for the given "how-to" guide already exists in the `DocumentationCache`. If it does, the method returns immediately.
2. Uses a regular expression to find all references to other documents in the file content.
3. For each reference found, it retrieves the content of the referenced document and adds it to an array of assistant messages.
4. Calls the `generateDocumentationAndCache()` method from the `BaseBuilder` class to generate the documentation and cache it.

## Technical Concepts

### Regular Expressions

Regular expressions are used in this class to match and extract specific patterns from the file content. For example, the `generate()` method uses a regular expression to find "how-to" guides in the file content:

```typescript
const regex = /:::\s*howto\s+(.*)/;
```

Similarly, the `makeHowTo()` method uses a regular expression to find references to other documents in the file content:

```typescript
let regex = /ref:\s*([A-Z0-9a-z\.\/]*)/gm;
```

### FileStructure and ProjectStructure

The `FileStructure` and `ProjectStructure` classes are utility classes used to manage and retrieve information about the files and folders in the project. They are used in this class to get the list of all files in the project and to retrieve the content of referenced documents.