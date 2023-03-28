---
sidebar_position: 0
sidebar_label: App.ts
---

# App.ts

This file contains the main class `App` and its implementation for the code-narrator application. The code-narrator application is used to generate documentation for a project by analyzing its code and folder structure, and then using GPT to generate documentation in markdown format.

## Table of Contents

- [Class: App](#class-app)
  - [Static Properties](#static-properties)
  - [Method: run](#method-run)
- [Usage](#usage)

## Class: App

The `App` class is the main class responsible for running the code-narrator application. It contains the main logic for loading configurations, caching documentation, building documentation, and generating the final documentation.

### Static Properties

- `repositoryUrl`: A static property that holds the repository URL for the project.
- `Project`: A static property that holds the current project being processed.
- `StartFile`: A static property that holds the starting file for the documentation generation process.

### Method: run

The `run` method is an asynchronous method that performs the main logic for the code-narrator application. It iterates through the projects defined in the configuration, loads the configuration and documentation cache, builds the documentation, and generates the final documentation.

#### Parameters

None.

#### Example

```javascript
let app = new App();
app.run();
```

## Usage

To use the `App` class, simply create a new instance of the class and call the `run` method. This will start the documentation generation process for the projects defined in the configuration.

```javascript
let app = new App();
app.run();
```

:::note
Remember to follow the rules mentioned in the file content, such as writing a description about the project in the project file (e.g., package.json), and using :::tip or :::danger in your comments in your code files.
:::