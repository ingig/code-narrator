---
nav_order: 2
title: JekyllGenerator.ts
parent: generators

permalink: src\documentation\plugins\generators\JekyllGenerator.ts
---

# JekyllGenerator.ts

This file contains the `JekyllGenerator` class, which is responsible for processing documents and generating the appropriate Jekyll front matter for each document. The class extends the `BaseGenerator` class and overrides the `process` method.

## Table of Contents

- [Usage](#usage)
- [Methods](#methods)
  - [process](#process)
- [Technical Concepts](#technical-concepts)
  - [Jekyll Front Matter](#jekyll-front-matter)

## Usage

To use the `JekyllGenerator` class, you need to import it and create an instance of the class. Then, you can call the `process` method on the instance, passing in a `Document` object.

```typescript
import JekyllGenerator from "./JekyllGenerator";
import Document from "../../Document";

const generator = new JekyllGenerator();
const document = new Document(/* ... */);

const processedDocument = generator.process(document);
```

## Methods

### process

The `process` method takes a `Document` object as its input and generates the Jekyll front matter for the document. It returns the modified `Document` object with the front matter added to its `documentation` property.

#### Parameters

- `document` (`Document`): The document to be processed.

#### Example

```typescript
const generator = new JekyllGenerator();
const document = new Document(/* ... */);

const processedDocument = generator.process(document);
```

## Technical Concepts

### Jekyll Front Matter

Jekyll front matter is a block of YAML code at the beginning of a Markdown file that contains metadata about the file. It is used by Jekyll to generate the site structure and navigation. In this class, the front matter is generated based on the document's properties, such as its `sidebar_label`, `sidebar_position`, and `folderPath`. The generated front matter includes the following properties:

- `nav_order`: The position of the document in the sidebar navigation.
- `title`: The title of the document, which is displayed in the sidebar navigation.
- `parent`: The path of the parent document, if the document is a child of another document.
- `has_children`: A boolean indicating whether the document has child documents.

Here's an example of the generated front matter:

```yaml
---
nav_order: 1
title: Introduction
parent: getting-started
has_children: true
---
```