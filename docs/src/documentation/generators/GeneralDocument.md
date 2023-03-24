---
sidebar_label: GeneralDocument
sidebar_position: 4
---
# GeneralDocument

The `GeneralDocument` class is an extension of the `BaseDocument` class, which is used to represent a general document with a summary. This class is useful when you need to create a summarized version of a document, such as a brief overview or a condensed version of the original content.

## Usage

To use the `GeneralDocument` class, you need to import it and create a new instance by passing a `Document` object to the constructor. The `Document` object should contain the content of the document you want to summarize.

Here's an example of how to use the `GeneralDocument` class:

```javascript
import Document from "../Document";
import GeneralDocument from "./GeneralDocument";

// Create a new Document object with some content
const myDocument = new Document("This is the content of my document.");

// Create a new GeneralDocument object using the Document object
const myGeneralDocument = new GeneralDocument(myDocument);

// Get the summary of the GeneralDocument object
console.log(myGeneralDocument.getMyContent());
```

## Methods

### constructor(suggestion: Document)

The constructor of the `GeneralDocument` class takes a `Document` object as a parameter and initializes the `summary` property by calling the `getSummary()` method.

- `suggestion`: A `Document` object containing the content of the document you want to summarize.

### getMyContent(): string

The `getMyContent()` method returns the summary of the document as a string.

### getSummary(document: Document): string

The `getSummary()` method is a private method used by the constructor to generate the summary of the document. It takes a `Document` object as a parameter and returns the summary as a string.

- `document`: A `Document` object containing the content of the document you want to summarize.

## Technical Concepts

### Inheritance

The `GeneralDocument` class extends the `BaseDocument` class, which means it inherits all the properties and methods of the `BaseDocument` class. This is a standard concept in object-oriented programming, allowing you to create new classes based on existing ones, reusing code and adding new functionality as needed.

### Document Class

The `Document` class is used to represent a document with content. It is a simple class that stores the content of a document as a string. In this code, the `Document` class is used as a parameter for the `GeneralDocument` constructor, allowing you to create a summarized version of a document.