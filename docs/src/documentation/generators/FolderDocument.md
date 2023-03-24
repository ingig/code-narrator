---
sidebar_label: FolderDocument
sidebar_position: 3
---
# FolderDocument

The `FolderDocument` class is an extension of the `BaseDocument` class, which is used to represent a folder in a file system. This class provides additional functionality for handling folder-specific properties, such as the folder's summary.

## Usage

To use the `FolderDocument` class, you first need to import it:

```javascript
import FolderDocument from "./FolderDocument";
```

Then, you can create a new instance of the class by passing a `Document` object to the constructor:

```javascript
import Document from "../Document";

const myDocument = new Document(/* ... */);
const myFolderDocument = new FolderDocument(myDocument);
```

Once you have an instance of the `FolderDocument` class, you can use its methods to interact with the folder's properties.

## Methods

### constructor(suggestion: Document)

The constructor for the `FolderDocument` class takes a single parameter:

- `suggestion`: A `Document` object representing the folder.

The constructor initializes the `FolderDocument` instance by calling the `super()` method with the `suggestion` parameter and setting the `summary` property to the result of the `getSummary()` method.

### getMyContent(): string

The `getMyContent()` method returns a string containing the folder's summary and, if available, the folder's path. The method does not take any parameters.

Example:

```javascript
const content = myFolderDocument.getMyContent();
console.log(content);
```

Output:

```
This is the folder summary.

##### This overview
is for the folder /path/to/folder
```

### getSummary(document: Document): string

The `getSummary()` method is a private method used by the constructor to extract the summary from the `Document` object. It takes a single parameter:

- `document`: A `Document` object representing the folder.

The method returns a string containing the folder's summary.