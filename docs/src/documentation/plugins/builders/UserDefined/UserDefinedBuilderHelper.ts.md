# UserDefinedBuilderHelper.ts

This TypeScript file contains the `UserDefinedBuilderHelper` class, which is responsible for handling various tasks related to building user-defined content. The class provides methods for extracting paths from content, loading arguments, getting assistant messages, and more.

## Class: UserDefinedBuilderHelper

### Constructor

The constructor initializes the `openAIRepository` property with a new instance of the `OpenAIRepository` class.

### Method: extractPathFromContent(input: string): string | null

This method takes an input string and returns the extracted path from the content if it exists, otherwise, it returns null.

**Parameters:**

- `input`: A string containing the content to extract the path from.

### Method: loadArgs(build: IBuilder, project_path: string)

This method loads the arguments for a given build and project path.

**Parameters:**

- `build`: An IBuilder object containing the build configuration.
- `project_path`: A string representing the project path.

### Method: getAssistantMessages(build: IBuilder)

This method returns an array of assistant messages for a given build.

**Parameters:**

- `build`: An IBuilder object containing the build configuration.

### Method: getPredefinedQuestion(type: string)

This method returns a predefined question based on the given type.

**Parameters:**

- `type`: A string representing the type of question.

### Method: extractContentBetweenHeaders(markdown: string): string

This method extracts the content between headers in a markdown string and returns it.

**Parameters:**

- `markdown`: A string containing the markdown content.

### Method: findFiles(patternString: string)

This method finds files based on a given pattern string and returns an array of matched files.

**Parameters:**

- `patternString`: A string representing the pattern to search for files.

## Usage Examples

```typescript
import UserDefinedBuilderHelper from "./UserDefinedBuilderHelper";

const userDefinedBuilderHelper = new UserDefinedBuilderHelper();

// Extract path from content
const input = "content(/path/to/file.txt)";
const extractedPath = userDefinedBuilderHelper.extractPathFromContent(input);
console.log(extractedPath); // Output: "/path/to/file.txt"

// Load arguments for a build
const build = {
  args: {
    key: "content(/path/to/file.txt)",
  },
};
const project_path = "/project";
userDefinedBuilderHelper.loadArgs(build, project_path);

// Get assistant messages for a build
const assistantMessages = await userDefinedBuilderHelper.getAssistantMessages(build);
console.log(assistantMessages);

// Get predefined question for a type
const type = "howto";
const predefinedQuestion = userDefinedBuilderHelper.getPredefinedQuestion(type);
console.log(predefinedQuestion);

// Extract content between headers in a markdown string
const markdown = "# Header\nThis is some content.\n## Subheader";
const extractedContent = userDefinedBuilderHelper.extractContentBetweenHeaders(markdown);
console.log(extractedContent);

// Find files based on a pattern string
const patternString = "docs/*.md";
const foundFiles = userDefinedBuilderHelper.findFiles(patternString);
console.log(foundFiles);
```

## Technical Concepts

- `jsonpath`: A library used to query JSON objects using a path-like syntax.
- `OpenAIRepository`: A class responsible for interacting with the OpenAI API.
- `DocumentationCache`: A class responsible for caching documentation files.