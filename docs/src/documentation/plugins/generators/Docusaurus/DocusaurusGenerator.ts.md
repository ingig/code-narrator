---
sidebar_position: 0
sidebar_label: DocusaurusGenerator.ts
---

# DocusaurusGenerator.ts

DocusaurusGenerator.ts is a TypeScript file that extends the BaseGenerator class and provides a specific implementation for generating documentation compatible with Docusaurus, a popular static site generator for documentation websites.

## Usage

To use the DocusaurusGenerator class, you need to import it and create an instance. Then, you can call the `process` method on the instance, passing a Document object as a parameter.

```typescript
import DocusaurusGenerator from './DocusaurusGenerator';
import Document from '../../../Document';

const generator = new DocusaurusGenerator();
const document = new Document(/* ... */);

const processedDocument = generator.process(document);
```

## Class: DocusaurusGenerator

### Method: process(document: Document)

This method takes a Document object as input and processes it to make it compatible with Docusaurus. It returns the processed Document object.

#### Parameters

- `document: Document` - The Document object to be processed.

#### Description

The `process` method performs the following operations on the input Document object:

1. Removes any occurrences of `: Promise<[a-zA-Z]*>` from the documentation, as Docusaurus does not support Promise types in headers.
2. Sets the `sidebar_label` property of the document to either the provided `sidebar_label` or the document's name if no `sidebar_label` is provided.
3. Sets the `sidebar_position` property of the document to the provided `sidebar_position` or 1 if no `sidebar_position` is provided.
4. Prepends the Docusaurus-specific frontmatter (sidebar_position and sidebar_label) to the documentation.

After processing, the method returns the modified Document object.

## Example

```typescript
import DocusaurusGenerator from './DocusaurusGenerator';
import Document from '../../../Document';

const generator = new DocusaurusGenerator();
const document = new Document({
  name: 'Example',
  documentation: 'This is an example document.',
  sidebar_label: 'Example Label',
  sidebar_position: 2,
});

const processedDocument = generator.process(document);
console.log(processedDocument.documentation);
```

Output:

```
---
sidebar_position: 2
sidebar_label: Example Label
---

This is an example document.
```