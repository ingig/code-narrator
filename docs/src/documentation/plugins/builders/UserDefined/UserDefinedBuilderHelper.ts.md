# UserDefinedBuilderHelper.ts

This TypeScript file contains the `UserDefinedBuilderHelper` class, which is responsible for handling user-defined builders in a software project. It provides methods to extract paths from content, load arguments, get assistant messages, and more.

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

This method takes an input string and returns the extracted path from the content if it exists, otherwise, it returns null.

#### loadArgs

```typescript
public loadArgs(build: IBuilder, project_path: string): void
```

This method takes a `build` object of type `IBuilder` and a `project_path` string. It loads the arguments for the build object by iterating through the argument keys and extracting the file path from the content.

#### getAssistantMessages

```typescript
public async getAssistantMessages(builder: IBuilder): Promise<string[]>
```

This asynchronous method takes a `builder` object of type `IBuilder` and returns an array of assistant messages. It retrieves predefined questions based on the builder type and processes the files associated with the builder.

#### getPredefinedQuestion

```typescript
private getPredefinedQuestion(type: string): string | undefined
```

This private method takes a `type` string and returns a predefined question based on the type. It supports 'howto', 'readme', 'tutorial', and 'faq' types.

#### extractContentBetweenHeaders

```typescript
public extractContentBetweenHeaders(markdown: string): string
```

This method takes a `markdown` string and returns the content between headers. It uses a regular expression to match the content and returns the first non-empty match. If the markdown length is less than 350 characters, it returns the entire markdown; otherwise, it returns the first 350 characters followed by an ellipsis.

#### findFiles

```typescript
public findFiles(patternString: string): DocumentationCache[]
```

This method takes a `patternString` and returns an array of `DocumentationCache` objects. It finds files based on the provided pattern string by splitting the string and getting the folder path.