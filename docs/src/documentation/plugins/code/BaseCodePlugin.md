---
sidebar_label: BaseCodePlugin
sidebar_position: 0
---
# BaseCodePlugin

The `BaseCodePlugin` is an abstract class that extends the `BasePlugin` class. It is designed to provide a base structure for creating code-related plugins. This class contains methods for generating questions for GPT, checking if a file is a code file, and getting a method by its name.

## Usage

To use this class, you need to create a new class that extends the `BaseCodePlugin` and implement the abstract method `getPluginQuestion`. Here's an example:

```javascript
import BaseCodePlugin from "./BaseCodePlugin";
import { FolderStructure, FileStructure } from "../../../utils";

class MyCodePlugin extends BaseCodePlugin {
  constructor(name: string, suggestion: Document) {
    super(name, suggestion);
  }

  public async getPluginQuestion(
    text: string,
    folder: FolderStructure,
    file: FileStructure
  ): Promise<string | undefined> {
    // Implement your logic here
  }
}

const myCodePlugin = new MyCodePlugin("MyCodePlugin", new Document());
```

## Methods

### getPluginQuestion

This is an abstract method that should be implemented in the derived class. It is responsible for generating a question for GPT based on the given text, folder, and file.

**Parameters:**

- `text: string`: The text to generate the question from.
- `folder: FolderStructure`: The folder structure of the project.
- `file: FileStructure`: The file structure of the current file.

**Returns:**

- `Promise<string | undefined>`: A promise that resolves to the generated question or undefined if no question can be generated.

### getQuestion

This method is responsible for getting a question based on the given content, folder, and file. It checks if the file is a code file and if the code plugin is processed. If so, it calls the `getPluginQuestion` method to generate the question.

**Parameters:**

- `content: string`: The content of the file.
- `folder: FolderStructure`: The folder structure of the project.
- `file: FileStructure`: The file structure of the current file.

**Returns:**

- `Promise<string | undefined>`: A promise that resolves to the generated question or undefined if no question can be generated.

### isCodeFile

This method checks if the given file is a code file.

**Parameters:**

- `file: FileStructure`: The file structure of the current file.

**Returns:**

- `boolean`: True if the file is a code file, false otherwise.

### getMethodByName

This method returns a method object by its name. If the method is not found, it creates a new method object with the given name and adds it to the methods array.

**Parameters:**

- `name: string`: The name of the method to find or create.

**Returns:**

- `Method`: The found or created method object.