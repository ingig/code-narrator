---
sidebar_label: GetStartedSummary
sidebar_position: 3
---
# GetStartedSummary

The `GetStartedSummary` class is a plugin that generates a "Get Started" guide for a project based on its `package.json` file. The guide includes information about the project's purpose, installation, configuration, running, testing, bug reporting, homepage, repository, and dependencies.

## Usage

To use the `GetStartedSummary` class, you need to import it and create an instance by passing a `Document` object to its constructor. Then, you can call the `getQuestion` method to generate the GPT question based on the project's `package.json` file.

```javascript
import Document from "../../Document";
import GetStartedSummary from "./GetStartedSummary";
import FolderStructure from "../../../utils/FolderStructure";

const document = new Document();
const getStartedSummary = new GetStartedSummary(document);

const folder = new FolderStructure();
const content = "Your project content here";
const question = await getStartedSummary.getQuestion(content, folder);
```

## Methods

### getQuestion

```javascript
public async getQuestion(content: string, folder: FolderStructure): Promise<string | undefined>
```

The `getQuestion` method generates a GPT question based on the project's `package.json` file. It takes two parameters:

- `content` (string): The content of the project.
- `folder` (FolderStructure): The folder structure of the project.

The method returns a Promise that resolves to a string containing the GPT question or `undefined` if there's an error.

### processPluginAnswer

```javascript
processPluginAnswer(): void
```

The `processPluginAnswer` method is currently empty and does not perform any actions.

## Technical Concepts

### FolderStructure

The `FolderStructure` class is a utility class that represents the folder structure of a project. It is used as a parameter in the `getQuestion` method.

### ConfigHelper

The `ConfigHelper` class is a utility class that helps with reading and managing configuration settings. It is used to get the `project_file` setting in the `getQuestion` method.

### App

The `App` class represents the main application instance. It is used to store the repository URL of the project in the `getQuestion` method.