# JekyllGenerator.ts

This is a TypeScript code file that defines the `JekyllGenerator` class, which extends the `BaseGenerator` class. The purpose of this class is to process a given `Document` object and generate the appropriate Jekyll front matter for it. This class is particularly useful when working with Jekyll-based documentation websites.

## Usage

To use the `JekyllGenerator` class, you need to import it and create a new instance. Then, call the `process()` method with a `Document` object as its argument.

```typescript
import JekyllGenerator from "./JekyllGenerator";
import Document from "../../Document";

const generator = new JekyllGenerator();
const document = new Document(/* ... */);

const processedDocument = generator.process(document);
```

## Methods

### process(document: Document)

This method takes a `Document` object as its input and processes it to generate the Jekyll front matter. It returns the modified `Document` object with the front matter added to its `documentation` property.

#### Parameters

- `document: Document` - The `Document` object to be processed.

## Technical Concepts

### Jekyll Front Matter

Jekyll front matter is a block of YAML code at the beginning of a Markdown file that contains metadata about the file. It is used by Jekyll to generate the static website. In this class, the front matter is generated based on the properties of the `Document` object, such as its `sidebar_label`, `sidebar_position`, `parent`, and `has_children`.

### Document Object

The `Document` object is a custom class that represents a documentation file. It contains properties such as `name`, `folderPath`, `data`, and `documentation`. The `JekyllGenerator` class processes these properties to generate the appropriate Jekyll front matter.

### DocumentationCache

The `DocumentationCache` class is used to store and retrieve `Document` objects based on their folder paths. In the `JekyllGenerator` class, it is used to find the parent document of a given document, if any.

### ConfigHelper

The `ConfigHelper` class is used to access the configuration settings of the application. In the `JekyllGenerator` class, it is used to get the `folderRootFileName` and `document_file_extension` settings, which are used to generate the `permalink` property in the Jekyll front matter.