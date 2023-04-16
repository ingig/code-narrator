# App.ts

The `App.ts` file is the main entry point for the `code-narrator` application. This application is installed with `npm i code-narrator` and executed either by `npm run start` or by using the CLI. The purpose of this application is to generate documentation for a project by parsing the project's code and using GPT to generate documentation in Markdown format.

## Table of Contents

- [Overview](#overview)
- [App Class](#app-class)
  - [run Method](#run-method)
- [Usage](#usage)
- [Rules](#rules)

## Overview

When the application starts, it will load up the configuration and cached documentation. Then, it will go through the project code, reading the file and folder structure. If the file or folder does not exist in the cache or the file has changed since last cached, `code-narrator` will send the code to GPT and ask for documentation in an `.md` format. When it receives the documentation, it writes it to the cache. When all files and folders have been parsed, then `code-narrator` creates the documentation from the cache.

## App Class

The `App` class is the main class of the application and contains the `run` method, which is responsible for executing the documentation generation process.

### run Method

The `run` method is an asynchronous method that takes an optional `config` parameter of type `Partial<ICodeNarratorConfig>`. The method performs the following steps:

1. Load the configuration using `ConfigHelper.load(config)`.
2. Load the documentation cache using `DocumentationCache.load()`.
3. Create a new instance of `DocumentationBuilder` and call its `build` method.
4. Create a new instance of `DocumentationGenerator` and call its `make` method.
5. Log a message to the console indicating that the document generation is complete.

## Usage

To use the `App` class, simply import it and create a new instance, then call the `run` method with the desired configuration:

```typescript
import App from "./App";

const app = new App();
app.run();
```

## Rules

There are a few rules to follow when using `code-narrator`:

1. Write a description about the project in the project file (e.g., `package.json`).
2. If GPT generates incorrect documentation, the code is probably not clear for humans either. Try adjusting the code or adding a one-line comment to make the code clearer.
3. You can use `:::tip` or `:::danger` in your comments in your code files.

:::tip
Remember to write clear and concise code, as it will help GPT generate better documentation for your project.
:::

:::danger
Be cautious when using sensitive information in your code, as it might be included in the generated documentation. Always replace sensitive information with `*****` in the documentation.
:::