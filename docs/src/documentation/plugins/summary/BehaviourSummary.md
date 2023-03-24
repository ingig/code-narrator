---
sidebar_label: BehaviourSummary
sidebar_position: 0
---
# BehaviourSummary

The `BehaviourSummary` class is a plugin that extends the `BasePlugin` class. It is used to generate a deep, in-depth description of the behavior of an application. The plugin takes a high-level description of what the application does and the source for starting the application as input and returns a detailed description of the application's behavior.

## Usage

To use the `BehaviourSummary` class, you need to import it and create an instance by passing a `Document` object to the constructor. Here's an example:

```javascript
import BehaviourSummary from "./BehaviourSummary";
import Document from "../../Document";

const document = new Document();
const behaviourSummary = new BehaviourSummary(document);
```

## Methods

### constructor(document: Document)

The constructor takes a `Document` object as a parameter and initializes the `BehaviourSummary` instance.

- `document`: A `Document` object representing the document to be processed.

### getQuestion(content: string, folder: FolderStructure): Promise<string | undefined>

This method generates a question for GPT (Generative Pre-trained Transformer) based on the provided content and folder structure. It returns a promise that resolves to a string containing the question or `undefined` if the question cannot be generated.

- `content`: A string containing the high-level description of what the application does.
- `folder`: A `FolderStructure` object representing the folder structure of the application.

Example:

```javascript
const content = "This is a high-level description of the application.";
const folder = new FolderStructure();

behaviourSummary.getQuestion(content, folder).then((question) => {
  console.log(question);
});
```

### processPluginAnswer(): void

This method is currently empty and does not perform any action. It can be overridden in the future to process the answer returned by the GPT.

## Technical Concepts

### FolderStructure

The `FolderStructure` class is a utility class that represents the folder structure of an application. It is used to provide information about the application's folder structure to the `BehaviourSummary` plugin.

### ConfigHelper

The `ConfigHelper` class is a utility class that helps in managing the configuration settings of the application. It is used to get the value of the `start_file` configuration setting, which represents the path to the starting file of the application.