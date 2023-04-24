# UserDefinedBuilderHelper.ts

This TypeScript file contains the `UserDefinedBuilderHelper` class, which is responsible for handling various tasks related to building user-defined content. The class provides methods for extracting paths from content, loading arguments, getting assistant messages, and more.

## Usage

To use the `UserDefinedBuilderHelper` class, you need to import it and create a new instance:

```typescript
import UserDefinedBuilderHelper from "./UserDefinedBuilderHelper";

const userDefinedBuilderHelper = new UserDefinedBuilderHelper();
```

## Methods

### constructor()

The constructor initializes the `openAIRepository` property with a new instance of the `OpenAIRepository` class.

### extractPathFromContent(input: string): string | null

This method takes an input string and returns the extracted path from the content if it exists, otherwise, it returns null.

#### Parameters

- `input`: A string containing the content to extract the path from.

### loadArgs(build: IBuilder, project_path: string)

This method loads the arguments for the given build and project path.

#### Parameters

- `build`: An object implementing the `IBuilder` interface.
- `project_path`: A string representing the project path.

### getAssistantMessages(builder: IBuilder): Promise<string[]>

This method returns an array of assistant messages for the given builder.

#### Parameters

- `builder`: An object implementing the `IBuilder` interface.

### getPredefinedQuestion(type: string): string | undefined

This method returns a predefined question based on the given type.

#### Parameters

- `type`: A string representing the type of question.

### extractContentBetweenHeaders(markdown: string): string

This method extracts the content between headers in a markdown string.

#### Parameters

- `markdown`: A string containing the markdown content.

### findFiles(patternString: string): DocumentationCache[]

This method finds files based on the given pattern string and returns an array of `DocumentationCache` objects.

#### Parameters

- `patternString`: A string representing the pattern to search for files.

## Example

```typescript
import UserDefinedBuilderHelper from "./UserDefinedBuilderHelper";

const userDefinedBuilderHelper = new UserDefinedBuilderHelper();

const input = "content(path/to/file.txt)";
const extractedPath = userDefinedBuilderHelper.extractPathFromContent(input);
console.log(extractedPath); // Output: "path/to/file.txt"
```

## Technical Concepts

- `OpenAIRepository`: A class responsible for interacting with the OpenAI API.
- `DocumentationCache`: A class responsible for caching documentation files.
- `IBuilder`: An interface that defines the structure of a builder object.
- `FileStructure`: A utility class for handling file structures.
- `ConfigHelper`: A helper class for managing configuration settings.
- `Helper`: A utility class for various helper functions.