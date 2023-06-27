# App.ts

The `App.ts` file is the main entry point for the `code-narrator` application. This application is responsible for generating documentation for a project by parsing its code and folder structure, and then using GPT to generate documentation in Markdown format. The generated documentation is then cached and used to create the final documentation output.

## Table of Contents

- [Overview](#overview)
- [App Class](#app-class)
  - [run Method](#run-method)
- [Usage](#usage)
- [Tips and Cautions](#tips-and-cautions)

## Overview

The `code-narrator` application is installed with `npm i code-narrator` and executed either by `npm run start` or by using the CLI. When starting, it will load up the configuration and cached documentation. Then, it will go through the project code, reading the file & folder structure. If the file or folder does not exist in the cache or the file has changed since last cached, `code-narrator` will send the code to GPT and ask for documentation in an .md format. When it receives the documentation, it writes it to the cache. When all files and folders have been parsed, then `code-narrator` creates the documentation from the cache.

## App Class

The `App` class is the main class of the `code-narrator` application. It contains a single method, `run`, which is responsible for executing the documentation generation process.

### run Method

The `run` method is an asynchronous method that takes an optional `config` parameter of type `Partial<ICodeNarratorConfig>`. This method is responsible for the following tasks:

1. Loading the configuration using `ConfigHelper.load(config)`.
2. Loading the documentation cache using `DocumentationCache.load()`.
3. Building the documentation using `DocumentationBuilder.build()`.
4. Generating the final documentation using `DocumentationGenerator.make()`.

After the documentation generation process is complete, the method logs a message to the console indicating that the process is done.

## Usage

To use the `App` class, simply create a new instance of the class and call the `run` method with the desired configuration:

```typescript
import App from "./App";

const app = new App();
app.run();
```

## Tips and Cautions

When using `code-narrator`, there are a few rules to follow:

- Write a description of the project in the project file (e.g., `package.json`).
- If GPT generates incorrect documentation, the code is probably not clear for humans either. Try adjusting the code or adding a one-line comment to make the code clearer.
- You can use `:::tip` or `:::danger` in your comments in your code files.