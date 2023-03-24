---
sidebar_label: DocumentFactory
sidebar_position: 2
---
# DocumentFactory

The `DocumentFactory` class is responsible for creating instances of different types of documents based on the input suggestion. It supports creating instances of `FolderDocument`, `CodeDocument`, and `GeneralDocument`. The class uses the `FileStructure` utility to determine if a file is a code file or not.

## Usage Examples

Here are some examples of how to use the `DocumentFactory` class:

```javascript
import DocumentFactory from "./DocumentFactory";
import Document from "../Document";

// Create a folder document
const folderSuggestion = new Document("folderName", true);
const folderDocument = DocumentFactory.getDocument(folderSuggestion);

// Create a code document
const codeSuggestion = new Document("fileName.js", false);
const codeDocument = DocumentFactory.getDocument(codeSuggestion);

// Create a general document
const generalSuggestion = new Document("fileName.txt", false);
const generalDocument = DocumentFactory.getDocument(generalSuggestion);
```

## Methods

### getDocument(suggestion: Document)

The `getDocument` method is a static method that takes a `Document` object as input and returns an instance of either `FolderDocument`, `CodeDocument`, or `GeneralDocument` based on the input suggestion.

#### Parameters

- `suggestion`: A `Document` object that contains the name and `isFolder` property of the file or folder.

#### Return Value

- An instance of `FolderDocument`, `CodeDocument`, or `GeneralDocument` based on the input suggestion.

## Technical Concepts

### FileStructure Utility

The `FileStructure` utility is used in the `DocumentFactory` class to determine if a file is a code file or not. The `isCodeFile` method of the `FileStructure` utility checks the file extension of the input file name and returns `true` if it is a code file, otherwise `false`.