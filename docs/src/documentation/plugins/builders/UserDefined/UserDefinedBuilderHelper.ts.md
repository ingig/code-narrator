# UserDefinedBuilderHelper.ts

This is a TypeScript code file that contains the `UserDefinedBuilderHelper` class. This class is responsible for handling various tasks related to user-defined builders, such as extracting paths from content, loading arguments, getting assistant messages, and more.

## Usage

To use the `UserDefinedBuilderHelper` class, you need to import it and create a new instance:

```typescript
import UserDefinedBuilderHelper from "./UserDefinedBuilderHelper";

const userDefinedBuilderHelper = new UserDefinedBuilderHelper();
```

## Methods

### constructor()

The constructor initializes the `aiService` property with the configured AI service.

### extractPathFromContent(input: string): string | null

This method takes an input string and extracts the path from it using a regular expression. If the path is found, it returns the path as a string; otherwise, it returns null.

### loadArgs(build: IBuilder, project_path: string)

This method takes a build object and a project path as arguments. It loads the arguments from the build object and replaces the content of the arguments with the content of the files specified in the arguments.

### getAssistantMessages(builder: IBuilder): Promise<string[]>

This method takes a builder object as an argument and returns a promise that resolves to an array of assistant messages. It retrieves predefined questions, extracts content from files, and processes the content based on the builder's configuration.

### getPredefinedQuestion(type: string): string | undefined

This method takes a type string as an argument and returns a predefined question based on the type. It supports 'howto', 'readme', 'tutorial', and 'faq' types.

### extractContentBetweenHeaders(markdown: string): string

This method takes a markdown string as an argument and extracts the content between headers. It returns the extracted content as a string.

### findFiles(patternString: string): DocumentationCache[]

This method takes a pattern string as an argument and returns an array of `DocumentationCache` objects that match the pattern.

## Example

```typescript
import UserDefinedBuilderHelper from "./UserDefinedBuilderHelper";

const userDefinedBuilderHelper = new UserDefinedBuilderHelper();

const input = "content(path/to/file.txt)";
const extractedPath = userDefinedBuilderHelper.extractPathFromContent(input);
console.log(extractedPath); // Output: "path/to/file.txt"
```

## Technical Concepts

- `IBuilder`: An interface that represents a builder object with properties such as `type`, `args`, and `files`.
- `BuilderType`: An enumeration of possible builder types.
- `FileStructure`: A utility class for handling file structures.
- `ConfigHelper`: A helper class for managing configuration settings.
- `Helper`: A utility class for various helper functions.
- `IGenericeAIService`: An interface for generic AI services.
- `DocumentationCache`: A class for caching documentation data.