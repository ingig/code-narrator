---
sidebar_label: NewCode
sidebar_position: 5
---
# NewCode

The `NewCode` class is a plugin that extends the `BaseCodePlugin` class. It is used to generate a question for code review and process the answer provided by the user. The main purpose of this class is to get feedback on the readability, efficiency, and performance of the code.

## Usage

To use the `NewCode` class, you need to import it and create an instance by passing a `Document` object as a parameter.

```javascript
import NewCode from "./NewCode";
import Document from "../../Document";

const suggestion = new Document();
const newCode = new NewCode(suggestion);
```

## Methods

### constructor(suggestion: Document)

The constructor method initializes a new instance of the `NewCode` class. It takes a `Document` object as a parameter.

- `suggestion`: A `Document` object that represents the code to be reviewed.

### async getPluginQuestion(text: string, folder: FolderStructure, file: FileStructure)

The `getPluginQuestion` method generates a question for code review based on the provided code. It takes three parameters:

- `text`: A string representing the code to be reviewed.
- `folder`: A `FolderStructure` object representing the folder structure of the code.
- `file`: A `FileStructure` object representing the file structure of the code.

It returns a `Promise` that resolves to a string containing the generated question.

### processPluginAnswer()

The `processPluginAnswer` method processes the answer provided by the user. It updates the `methods` array with the user's suggestions for each method.

## Example

```javascript
import NewCode from "./NewCode";
import Document from "../../Document";
import FolderStructure from "../../../utils/FolderStructure";
import FileStructure from "../../../utils/FileStructure";

const suggestion = new Document();
const newCode = new NewCode(suggestion);

const text = "import FileStructure from \"../../../utils/FileStructure\";\n...";
const folder = new FolderStructure();
const file = new FileStructure();

(async () => {
  const question = await newCode.getPluginQuestion(text, folder, file);
  console.log(question);

  // User provides answer in JSON format
  const answer = '[{"name":"methodName", "description":"descriptionOfChange", "src":"suggestedSourceChange"}]';
  newCode.pluginDto.answer = JSON.parse(answer);
  newCode.processPluginAnswer();
})();
```

In this example, we create an instance of the `NewCode` class and generate a question for code review using the `getPluginQuestion` method. After receiving the user's answer, we process it using the `processPluginAnswer` method.