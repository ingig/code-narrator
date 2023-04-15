# JenkyllGenerator.ts

The `JenkyllGenerator.ts` file is a TypeScript code file that defines a class named `JenkyllGenerator`. This class extends the `BaseGenerator` class and is responsible for processing a given `Document` object to generate a Jekyll-compatible output.

## Table of Contents

- [Overview](#overview)
- [Usage](#usage)
- [Methods](#methods)
  - [process](#process)
- [Technical Concepts](#technical-concepts)

## Overview

The `JenkyllGenerator` class is a part of a larger system that processes documentation files. It is specifically designed to work with Jekyll, a popular static site generator. The class takes a `Document` object as input and modifies its `documentation` property to include Jekyll-specific front matter.

## Usage

To use the `JenkyllGenerator` class, you need to import it and create an instance of the class. Then, you can call the `process` method with a `Document` object as a parameter.

```typescript
import JenkyllGenerator from "./JenkyllGenerator";
import Document from "../../../Document";

const generator = new JenkyllGenerator();
const document = new Document(/* ... */);

const processedDocument = generator.process(document);
```

## Methods

### process

The `process` method is the main method of the `JenkyllGenerator` class. It takes a `Document` object as a parameter and modifies its `documentation` property to include Jekyll-specific front matter.

```typescript
public process(document: Document): Document
```

**Parameters:**

- `document` (Document): The `Document` object to be processed.

**Returns:**

- `Document`: The processed `Document` object with Jekyll-specific front matter added.

## Technical Concepts

### Jekyll Front Matter

Jekyll uses a concept called "front matter" to store metadata about a page or post. Front matter is written in YAML and is placed at the beginning of a file, enclosed by triple-dashed lines (`---`). In the `JenkyllGenerator` class, the front matter is generated and added to the `documentation` property of the `Document` object. The generated front matter includes the following properties:

- `nav_order`: The position of the document in the navigation menu.
- `title`: The title of the document, which is displayed in the navigation menu.
- `parent`: The parent folder of the document, used for organizing the navigation menu.

For example, the generated front matter might look like this:

```
---
nav_order: 1
title: Introduction
parent: Getting Started
---
```