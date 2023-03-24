---
sidebar_label: BasePlugin
sidebar_position: 0
---
# BasePlugin

The `BasePlugin` class is an abstract class that provides a foundation for creating custom plugins. It includes methods for generating questions, processing answers, and managing plugin data. This class is designed to be extended by other classes to create specific plugins with custom functionality.

## Usage

To create a custom plugin, extend the `BasePlugin` class and implement the required abstract methods. Here's an example of how to create a custom plugin:

```javascript
import BasePlugin from './BasePlugin';

class MyCustomPlugin extends BasePlugin {
  // Implement the required abstract methods
  getQuestion(content, folder, file) {
    // Generate a question based on the content, folder, and file
  }

  processPluginAnswer() {
    // Process the answer from GPT
  }
}

const myPlugin = new MyCustomPlugin('MyPluginName', document);
```

## Methods

### constructor(name: string, suggestion: Document)

The constructor initializes the `BasePlugin` with a name and a `Document` object. It also sets up an instance of `OpenAIRepository` for querying the GPT model.

#### Parameters

- `name`: The name of the plugin.
- `suggestion`: A `Document` object containing the content to be processed by the plugin.

### abstract getQuestion(content: string, folder: FolderStructure, file?: FileStructure): Promise<string | undefined>

This abstract method should be implemented by the derived class to generate a question for the GPT model based on the provided content, folder, and file.

#### Parameters

- `content`: The content to be processed by the plugin.
- `folder`: A `FolderStructure` object representing the folder structure.
- `file`: An optional `FileStructure` object representing the file structure.

### abstract processPluginAnswer(): void

This abstract method should be implemented by the derived class to process the answer received from the GPT model.

### processAnswer(question: string, answer: CreateChatCompletionResponseChoicesInner): void

This method processes the answer received from the GPT model and updates the plugin data accordingly.

#### Parameters

- `question`: The question that was sent to the GPT model.
- `answer`: The answer received from the GPT model.

### cleanResponseText(text: string | undefined): string

This method cleans the response text by removing any `` tags and trimming whitespace.

#### Parameters

- `text`: The text to be cleaned.

### isEmptyResult(result: CreateCompletionResponseChoicesInner[]): boolean

This method checks if the result received from the GPT model is empty.

#### Parameters

- `result`: The result received from the GPT model.

### createPlugin(result: CreateCompletionResponseChoicesInner[], query: string): PluginDto | undefined

This method creates a new `PluginDto` object based on the result received from the GPT model and the query.

#### Parameters

- `result`: The result received from the GPT model.
- `query`: The query that was sent to the GPT model.

### question(content: string, q: string): Promise<PluginDto | undefined>

This method sends a query to the GPT model and creates a new `PluginDto` object based on the response.

#### Parameters

- `content`: The content to be processed by the plugin.
- `q`: The query to be sent to the GPT model.

### addPlugin(plugin: PluginDto): void

This method adds a new `PluginDto` object to the `Document` object.

#### Parameters

- `plugin`: The `PluginDto` object to be added.

### getPluginDtoByName(): PluginDto

This method returns a `PluginDto` object with the same name as the plugin.

### getJsonsFromAnswer(): any[]

This method extracts JSON objects from the answer received from the GPT model.

## Technical Concepts

- `OpenAIRepository`: A class that provides methods for querying the GPT model.
- `Document`: A class that represents a document containing content to be processed by the plugin.
- `PluginDto`: A class that represents the data associated with a plugin.
- `FolderStructure`: A class that represents the folder structure of a project.
- `FileStructure`: A class that represents the file structure of a project.
- `CreateCompletionResponseChoicesInner`: A type representing the inner choices of a completion response from the OpenAI API.
- `CreateChatCompletionResponseChoicesInner`: A type representing the inner choices of a chat completion response from the OpenAI API.