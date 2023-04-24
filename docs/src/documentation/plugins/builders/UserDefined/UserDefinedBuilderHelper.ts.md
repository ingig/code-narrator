# UserDefinedBuilderHelper.ts

This TypeScript file defines the `UserDefinedBuilderHelper` class, which is responsible for handling various tasks related to user-defined builders. The class provides methods for extracting paths from content, loading arguments, getting assistant messages, and more.

## Class: UserDefinedBuilderHelper

### Constructor

The constructor initializes the `openAIRepository` property with a new instance of the `OpenAIRepository` class.

### Method: extractPathFromContent(input: string): string | null

This method takes an input string and returns the extracted path from the content if it exists, otherwise, it returns null.

### Method: loadArgs(build: IBuilder, project_path: string)

This method takes a build object and a project path as arguments. It loads the arguments from the build object and replaces the content of the arguments with the content of the file specified by the file path.

### Method: getAssistantMessages(build: IBuilder): Promise<string[]>

This method takes a build object as an argument and returns a promise that resolves to an array of assistant messages. It retrieves predefined questions and file content to generate the assistant messages.

### Method: getPredefinedQuestion(type: string): string | undefined

This method takes a type string as an argument and returns a predefined question based on the type. If the type is 'howto', it returns a question for creating a detailed How To guide. If the type is 'readme', it returns a question for creating a detailed README file.

### Method: extractContentBetweenHeaders(markdown: string): string

This method takes a markdown string as an argument and returns the content between the headers. If the markdown content is less than 350 characters, it returns the entire content. Otherwise, it returns the first 350 characters followed by an ellipsis.

### Method: findFiles(patternString: string): DocumentationCache[]

This method takes a pattern string as an argument and returns an array of `DocumentationCache` objects that match the given pattern. It searches for files in the specified directory.

## Usage Examples

```typescript
import UserDefinedBuilderHelper from "./UserDefinedBuilderHelper";

const userDefinedBuilderHelper = new UserDefinedBuilderHelper();

// Extract path from content
const input = "content(path/to/file.txt)";
const extractedPath = userDefinedBuilderHelper.extractPathFromContent(input);
console.log(extractedPath); // Output: "path/to/file.txt"

// Load arguments
const build = {
  args: {
    key: "content(path/to/file.txt)",
  },
};
const projectPath = "/path/to/project";
userDefinedBuilderHelper.loadArgs(build, projectPath);

// Get assistant messages
const assistantMessages = await userDefinedBuilderHelper.getAssistantMessages(build);
console.log(assistantMessages);
```

## Technical Concepts

- `jsonpath`: A library used for querying JSON objects using a JSONPath expression.
- `OpenAIRepository`: A class responsible for interacting with the OpenAI API.
- `DocumentationCache`: A class responsible for caching documentation files.