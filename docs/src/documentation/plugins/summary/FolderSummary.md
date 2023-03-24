---
sidebar_label: FolderSummary
sidebar_position: 2
---
# FolderSummary

The `FolderSummary` class is a plugin that helps in generating in-depth documentation for a given folder. It provides a method to generate a question for GPT, which can be used to create comprehensive documentation for the folder and its contents. The class extends the `BasePlugin` class and is part of a larger documentation generation system.

## Usage

To use the `FolderSummary` class, you need to create an instance of the class by passing a `Document` object to its constructor. The `Document` object should represent the folder for which you want to generate the documentation.

```javascript
import Document from "../../Document";
import FolderSummary from "./FolderSummary";

const document = new Document(/* ... */);
const folderSummary = new FolderSummary(document);
```

Once you have an instance of the `FolderSummary` class, you can use its `getQuestion` method to generate a question for GPT. This question can then be used to create the documentation for the folder and its contents.

```javascript
const content = /* ... */;
const folder = /* ... */;
const question = await folderSummary.getQuestion(content, folder);
```

## Methods

### constructor(document: Document)

The constructor of the `FolderSummary` class takes a `Document` object as its parameter. The `Document` object should represent the folder for which you want to generate the documentation.

- `document`: A `Document` object representing the folder for which you want to generate the documentation.

### async getQuestion(content: string, folder: FolderStructure): Promise<string | undefined>

The `getQuestion` method generates a question for GPT based on the given content and folder structure. The generated question can be used to create comprehensive documentation for the folder and its contents.

- `content`: A string representing the content of the folder.
- `folder`: A `FolderStructure` object representing the structure of the folder.

Returns a `Promise` that resolves to a string representing the generated question or `undefined` if the question cannot be generated.

### processPluginAnswer(): void

This method is currently empty and does not perform any action.

### private getSummary(suggestion: Document): string

This private method retrieves the summary of a given `Document` object if it has a `FolderSummary` plugin.

- `suggestion`: A `Document` object for which the summary needs to be retrieved.

Returns a string representing the summary of the given `Document` object.

### private getSummaryWithoutExample(suggestion: Document): string

This private method retrieves the summary of a given `Document` object without any examples if it has a `FileSummary` plugin.

- `suggestion`: A `Document` object for which the summary without examples needs to be retrieved.

Returns a string representing the summary of the given `Document` object without any examples.