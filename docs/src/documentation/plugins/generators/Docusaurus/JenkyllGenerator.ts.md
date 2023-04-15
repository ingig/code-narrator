---
nav_order: 1
title: JenkyllGenerator.ts
parent: src\documentation\plugins\generators\Docusaurus

permalink: docs/src/documentation/plugins/generators/Docusaurus/JenkyllGenerator.ts.md
---

# JenkyllGenerator.ts

The `JenkyllGenerator.ts` file is a TypeScript code file that defines a class named `JenkyllGenerator`. This class extends the `BaseGenerator` class and is responsible for processing a given `Document` object to generate a Jekyll-compatible documentation file.

## Table of Contents

- [Usage](#usage)
- [Methods](#methods)
  - [process](#process)
- [Technical Concepts](#technical-concepts)

## Usage

To use the `JenkyllGenerator` class, you need to import it and create an instance of the class. Then, you can call the `process` method with a `Document` object as its argument.

```typescript
import JenkyllGenerator from "./JenkyllGenerator";
import Document from "../../../Document";

const generator = new JenkyllGenerator();
const document = new Document(/* ... */);

const processedDocument = generator.process(document);
```

## Methods

### process

The `process` method takes a `Document` object as its input and processes it to generate a Jekyll-compatible documentation file. It returns the processed `Document` object.

```typescript
public process(document: Document): Document
```

#### Parameters

- `document` (Document): The `Document` object to be processed.

## Technical Concepts

- **Jekyll**: Jekyll is a static site generator that takes Markdown files and other content, and transforms them into a complete static website. It is widely used for creating documentation websites and blogs.

- **Front Matter**: In Jekyll, the front matter is a block of YAML code at the beginning of a file that contains metadata about the file. The front matter is used to configure how Jekyll processes the file and generates the static site. In the `JenkyllGenerator` class, the front matter is generated and added to the `Document` object's `documentation` property.

- **ConfigHelper**: The `ConfigHelper` class is used to manage the configuration settings for the application. In the `JenkyllGenerator` class, the `ConfigHelper` is used to set the `rootFileName` property to `'index'`.