# UserDefinedBuilderHelper.ts

This TypeScript file contains the `UserDefinedBuilderHelper` class, which is responsible for handling user-defined builders in a software project. The class provides methods for extracting paths from content, loading arguments, getting assistant messages, and more.

## Table of Contents

- [Class: UserDefinedBuilderHelper](#class-userdefinedbuilderhelper)
  - [Constructor](#constructor)
  - [Methods](#methods)
    - [extractPathFromContent](#extractpathfromcontent)
    - [loadArgs](#loadargs)
    - [getAssistantMessages](#getassistantmessages)
    - [getPredefinedQuestion](#getpredefinedquestion)
    - [extractContentBetweenHeaders](#extractcontentbetweenheaders)
    - [findFiles](#findfiles)

## Class: UserDefinedBuilderHelper

### Constructor

The constructor initializes the `openAIRepository` property with a new instance of the `OpenAIRepository` class.

### Methods

#### extractPathFromContent

```typescript
public extractPathFromContent(input: string): string | null
```

This method takes an input string and returns the extracted path from the content using a regular expression. If no path is found, it returns `null`.

#### loadArgs

```typescript
public loadArgs(build: IBuilder, project_path: string): void
```

This method takes an `IBuilder` object and a project path as parameters. It loads the arguments from the `build.args` property and replaces the content with the actual file content if a file path is found.

#### getAssistantMessages

```typescript
public async getAssistantMessages(builder: IBuilder): Promise<string[]>
```

This asynchronous method takes an `IBuilder` object as a parameter and returns an array of assistant messages. It processes the builder's files and extracts relevant information to generate the assistant messages.

#### getPredefinedQuestion

```typescript
private getPredefinedQuestion(type: string): string | undefined
```

This private method takes a string representing the builder type and returns a predefined question based on the type. If the type is not recognized, it returns `undefined`.

#### extractContentBetweenHeaders

```typescript
public extractContentBetweenHeaders(markdown: string): string
```

This method takes a markdown string as input and returns the content between the headers. If the content is shorter than 350 characters, it returns the entire content. Otherwise, it returns the first 350 characters followed by an ellipsis.

#### findFiles

```typescript
public findFiles(patternString: string): DocumentationCache[]
```

This method takes a pattern string as input and returns an array of `DocumentationCache` objects that match the given pattern. It searches for files in the specified directory and returns the matching files.