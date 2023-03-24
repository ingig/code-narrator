---
sidebar_label: App
sidebar_position: 0
---
# App

The `App` class is the main entry point of the code-narrator application. It is responsible for loading the configuration and cached documentation, parsing the project code, generating documentation using GPT, and writing the generated documentation to the cache. Finally, it creates the complete documentation from the cache.

## Usage

To use the `App` class, simply create a new instance of the class and call the `run()` method:

```javascript
let app = new App();
app.run();
```

## Methods

### run()

The `run()` method is an asynchronous method that performs the following steps:

1. Load the configuration using `ConfigHelper.load()`.
2. Load the cached documentation using `DocumentationCache.load()`.
3. Create a new instance of the `DocumentationBuilder` class.
4. Call the following methods on the `DocumentationBuilder` instance:
   - `createGetStarted()`
   - `createBehaviour()`
   - `createConfig()`
   - `createApi()`
5. Create a new instance of the `DocumentationGenerator` class and call its `make()` method.

#### Parameters

This method does not have any parameters.

## Technical Concepts

### GPT

GPT (Generative Pre-trained Transformer) is an advanced machine learning model used for generating human-like text. In this application, GPT is used to generate documentation in the Markdown format based on the project code.

### Cache

The cache is used to store the generated documentation for each file and folder in the project. This helps to avoid unnecessary calls to GPT and speeds up the documentation generation process.

### Configuration

The configuration is loaded using the `ConfigHelper` class and contains information about the project, such as the repository URL and the start file. This information is used by the application to generate the appropriate documentation.

### Documentation Builder

The `DocumentationBuilder` class is responsible for creating the different sections of the documentation, such as the "Get Started", "Behavior", "Config", and "API" sections. These sections are then combined by the `DocumentationGenerator` class to create the complete documentation.

### Documentation Generator

The `DocumentationGenerator` class is responsible for combining the different sections of the documentation created by the `DocumentationBuilder` class and writing the complete documentation to the cache.

### Tips and Dangers

You can use the `:::tip` and `:::danger` tags in your comments in your code files to provide additional information or warnings in the generated documentation. For example:

```javascript
// :::tip
// This is a helpful tip.
// :::

// :::danger
// This is a warning or danger message.
// :::
```

## Rules to Follow

- Write a description about the project in the project file (e.g., `package.json`).
- If GPT generates incorrect documentation, the code is probably not clear for humans either. Try adjusting the code or adding a one-line comment to make the code clearer.
- Use `:::tip` or `:::danger` in your comments in your code files to provide additional information or warnings in the generated documentation.