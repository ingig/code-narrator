---
sidebar_position: 0
sidebar_label: DocusaurusGenerator.ts
---

# DocusaurusGenerator.ts

The `DocusaurusGenerator.ts` file is a TypeScript code file that defines a class named `DocusaurusGenerator`. This class extends the `BaseGenerator` class and is responsible for processing a `Document` object to generate documentation compatible with Docusaurus.

## Usage

To use the `DocusaurusGenerator` class, you need to import it and create an instance of the class. Then, call the `process()` method with a `Document` object as its argument.

```typescript
import DocusaurusGenerator from './DocusaurusGenerator';
import Document from '../../../Document';

const generator = new DocusaurusGenerator();
const document = new Document(/* ... */);

const processedDocument = generator.process(document);
```

## Class Description

### DocusaurusGenerator

The `DocusaurusGenerator` class extends the `BaseGenerator` class and overrides the `process()` method to process a `Document` object and generate documentation compatible with Docusaurus.

#### Methods

##### process(document: Document): Document

The `process()` method takes a `Document` object as its argument and processes it to generate documentation compatible with Docusaurus. It returns the processed `Document` object.

###### Parameters

- `document: Document`: The `Document` object to be processed.

###### Technical Concepts

- Docusaurus: Docusaurus is a static site generator that makes it easy to build and maintain open-source documentation websites. It supports Markdown and allows you to create custom pages with React components.

## Example

Here's an example of how to use the `DocusaurusGenerator` class:

```typescript
import DocusaurusGenerator from './DocusaurusGenerator';
import Document from '../../../Document';

const generator = new DocusaurusGenerator();
const document = new Document({
  name: 'Example',
  sidebar_label: 'Example Label',
  sidebar_position: 2,
  documentation: 'This is an example documentation.',
});

const processedDocument = generator.process(document);
console.log(processedDocument.documentation);
```

This will output the following processed documentation:

```
---
sidebar_position: 2
sidebar_label: Example Label
---

This is an example documentation.
```