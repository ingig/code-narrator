---
sidebar_label: DocumentationCache
sidebar_position: 1
---
# DocumentationCache

The `DocumentationCache` class is a utility class that helps manage a cache of `Document` objects. It provides methods to load, get, set, and retrieve documents by their folder path. The cache is stored in a JSON file located at `.codenarrator\cache.json` in the project path.

## Usage Examples

Here are some examples of how to use the `DocumentationCache` class:

```javascript
// Load the cache
DocumentationCache.load();

// Get a document by its name and path
const document = DocumentationCache.get("exampleName", "examplePath");

// Set a document in the cache
const newDocument = new Document("exampleName", "examplePath");
DocumentationCache.set(newDocument);

// Get all documents in a specific folder path
const documentsInFolderPath = DocumentationCache.getByFolderPath("exampleFolderPath");
```

## Methods

### load()

This method initializes the `DocumentationCache` by loading the cache from the JSON file. It should be called before using any other methods in the class.

### getIndex(id: string): number

This method returns the index of a document in the cache by its ID. If the document is not found, it returns -1.

- `id`: The ID of the document to find.

### get(name: string, path: string): Document | undefined

This method retrieves a document from the cache by its name and path. If the document is not found, it returns `undefined`.

- `name`: The name of the document to retrieve.
- `path`: The path of the document to retrieve.

### set(document: Document)

This method adds or updates a document in the cache. If the document does not exist in the cache, it is added. If it already exists, it is updated. The cache is then saved to the JSON file.

- `document`: The `Document` object to add or update in the cache.

### getByFolderPath(path: string): Document[]

This method retrieves all documents in the cache that have a specific folder path.

- `path`: The folder path to filter documents by.

## Technical Concepts

### Document

The `Document` class represents a single document in the cache. It has properties such as `id`, `name`, `path`, and `folderPath`. The `getId` static method can be used to generate a unique ID for a document based on its name and path.

### ConfigHelper

The `ConfigHelper` class is a utility class that helps manage the configuration settings for the application. It is used in the `DocumentationCache` class to get the project path.

### JSON

The cache is stored in a JSON file, which is a lightweight data interchange format that is easy to read and write. The `DocumentationCache` class uses the `JSON.parse()` and `JSON.stringify()` methods to read and write the cache data from and to the JSON file.