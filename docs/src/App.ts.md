---
sidebar_position: 0
sidebar_label: App.ts
---

# App.ts

The `App.ts` file is a part of the code-narrator application, which is responsible for generating documentation for a project using GPT. This file contains the main class `App` that orchestrates the process of loading configuration, caching documentation, building documentation, and generating the final documentation output.

## Table of Contents

- [Class: App](#class-app)
  - [Method: run](#method-run)
- [Usage](#usage)
- [Tips and Cautions](#tips-and-cautions)

## Class: App

The `App` class is the main class that handles the documentation generation process. It has a static property `StartTime` and a public method `run`.

### Method: run

The `run` method is an asynchronous method that takes an optional parameter `config` of type `Partial<ICodeNarratorConfig>`. This method is responsible for executing the following steps:

1. Load the configuration using `ConfigHelper.load(config)`.
2. Load the cached documentation using `DocumentationCache.load()`.
3. Create a new instance of `DocumentationBuilder` and call its `build` method to build the documentation.
4. Create a new instance of `DocumentationGenerator` and call its `make` method to generate the final documentation output.
5. Log a message to the console indicating that the document generation is complete.

## Usage

To use the `App` class, you need to create a new instance and call its `run` method with an optional configuration object. Here's an example:

```javascript
import App from "./App";

const app = new App();
app.run();
```

## Tips and Cautions

- Write a description of the project in the project file (e.g., `package.json`).
- If GPT generates incorrect documentation, the code is probably not clear for humans either. Try adjusting the code or adding a one-line comment to make the code clearer.
- You can use `:::tip` or `:::danger` in your comments in your code files.

For example:

```javascript
// :::tip
// This is a helpful tip.
// :::

// :::danger
// This is a cautionary note.
// :::
```

When the documentation is generated, these comments will be formatted as follows:

:::tip
This is a helpful tip.
:::

:::danger
This is a cautionary note.
:::