---
sidebar_label: FlowChart
sidebar_position: 3
---
# FlowChart

The `FlowChart` class is a plugin that extends the `BaseCodePlugin` class. It is used to generate flowcharts for methods in a given code file using the Mermaid format. The flowcharts are generated based on the complexity of the methods.

## Usage

To use the `FlowChart` class, you need to import it and create an instance by passing a `Document` object as a parameter. The `Document` object represents the code file for which you want to generate flowcharts.

```javascript
import FlowChart from "./FlowChart";
import Document from "../../Document";

const suggestion = new Document("path/to/code/file");
const flowChart = new FlowChart(suggestion);
```

## Methods

### constructor(suggestion: Document)

The constructor initializes a new instance of the `FlowChart` class. It takes a `Document` object as a parameter, which represents the code file for which you want to generate flowcharts.

- `suggestion`: A `Document` object representing the code file.

### async getPluginQuestion(text: string, folder: FolderStructure, file: FileStructure)

This method generates a question for the OpenAI API to create flowcharts for methods in the code file. It takes the following parameters:

- `text`: A string representing the text to be used in the question.
- `folder`: A `FolderStructure` object representing the folder structure of the code file.
- `file`: A `FileStructure` object representing the file structure of the code file.

The method returns a string containing the question for the OpenAI API. The question includes the method names and their source code, and the response should be in JSON format.

### processPluginAnswer()

This method processes the answer received from the OpenAI API and updates the `methods` array with the generated flowcharts. It takes no parameters.

## Technical Concepts

### Mermaid Format

Mermaid is a simple markdown-like language that allows you to generate diagrams and flowcharts from text. In this plugin, the flowcharts are generated in the Mermaid format, which can be easily converted to an image or rendered in a web page.

### JSON Format

JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. In this plugin, the response from the OpenAI API should be in JSON format, which can be easily processed and used to update the `methods` array with the generated flowcharts.