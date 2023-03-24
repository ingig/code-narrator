---
sidebar_label: BaseDocument
sidebar_position: 0
---
# BaseDocument

The `BaseDocument` class is an abstract class that provides a basic structure for creating and managing documents. It contains methods for getting the content of a document, getting a summary of a document, and getting a specific plugin for a document.

## Usage Examples

Before diving into the methods provided by the `BaseDocument` class, let's take a look at some examples of how to use this class.

### Example 1: Creating a Custom Document Class

```javascript
import BaseDocument from "./BaseDocument";
import Document from "../Document";

class CustomDocument extends BaseDocument {
  constructor(document: Document) {
    super(document);
  }

  getMyContent(): string {
    return "This is the content of my custom document.";
  }
}

const myDocument = new Document();
const customDoc = new CustomDocument(myDocument);
console.log(customDoc.getContent());
```

### Example 2: Getting a Summary of a Document

```javascript
import BaseDocument from "./BaseDocument";
import Document from "../Document";

class CustomDocument extends BaseDocument {
  constructor(document: Document) {
    super(document);
  }

  getMyContent(): string {
    return this.getSummary(this.document);
  }
}

const myDocument = new Document();
const customDoc = new CustomDocument(myDocument);
console.log(customDoc.getContent());
```

## Methods

### getContent()

This method returns the content of the document as a string. It includes the sidebar label and sidebar position of the document.

#### Example

```javascript
const content = customDoc.getContent();
console.log(content);
```

### getMyContent()

This abstract method should be implemented in the derived class to return the content of the document as a string.

#### Example

```javascript
class CustomDocument extends BaseDocument {
  // ...
  getMyContent(): string {
    return "This is the content of my custom document.";
  }
}
```

### getSummary(suggestion: Document)

This method returns the summary of the given document. It iterates through the `pluginDtos` array of the document and returns the answer of the first plugin.

#### Parameters

- `suggestion`: A `Document` object for which the summary is to be retrieved.

#### Example

```javascript
const summary = customDoc.getSummary(myDocument);
console.log(summary);
```

### getPlugin(type: string)

This method returns a specific plugin from the `pluginDtos` array of the document based on the given type. If the plugin is not found, it returns an object with an empty text and an empty methods array.

#### Parameters

- `type`: A string representing the type of the plugin to be retrieved.

#### Example

```javascript
const plugin = customDoc.getPlugin("FileSummary");
console.log(plugin);
```

## Technical Concepts

### Abstract Class

In the given code, `BaseDocument` is an abstract class. Abstract classes are classes that cannot be instantiated directly. Instead, they are meant to be extended by other classes. Abstract classes can have abstract methods, which must be implemented in the derived class. In this case, the `getMyContent()` method is an abstract method that should be implemented in the derived class.