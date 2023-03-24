---
sidebar_label: DocumentationGenerator
sidebar_position: 2
---
# DocumentationGenerator

The `DocumentationGenerator` class is responsible for generating documentation files in the Markdown format for a given project. It uses the `ConfigHelper` to get the configuration settings, `DocumentFactory` to create the documentation content, and `DocumentationCache` to store the generated documentation.

## Usage

To use the `DocumentationGenerator` class, you need to first import it and then create an instance of the class. After that, you can call the `make()` method to generate the documentation files.

```javascript
import DocumentationGenerator from "./path/to/DocumentationGenerator";

const generator = new DocumentationGenerator();
generator.make();
```

## Methods

### make()

The `make()` method is responsible for generating the documentation files. It does not take any parameters.

1. It first gets the suggestions from the `DocumentationCache.Documents` property.
2. If there are no suggestions, it returns immediately.
3. It then gets the `documentation_path` and `project_path` from the `ConfigHelper`.
4. It iterates through the suggestions and processes each one:
   - It gets the folder path of the suggestion and removes the `project_path` from it.
   - It creates a document using the `DocumentFactory.getDocument()` method.
   - If the path is equal to '.\', it sets the path to an empty string.
   - It constructs the file path for the documentation file by concatenating the `documentation_path`, the path, and the suggestion's name with the '.md' extension.
   - It creates the necessary directories using `fs.mkdirSync()` with the `recursive` option set to `true`.
   - It writes the content of the document to the file using `fs.writeFileSync()`.

## Parameters

There are no parameters in the `make()` method.

## Technical Concepts

### ConfigHelper

The `ConfigHelper` is a utility class that helps in getting the configuration settings for the project. It has a `get()` method that takes a key as a parameter and returns the value associated with that key.

### DocumentFactory

The `DocumentFactory` is a factory class that is responsible for creating documentation content for a given suggestion. It has a `getDocument()` method that takes a suggestion as a parameter and returns a document object with the generated content.

### DocumentationCache

The `DocumentationCache` is a class that stores the generated documentation. It has a `Documents` property that holds an array of suggestions. Each suggestion has a `folderPath`, `name`, and other properties that are used to generate the documentation files.