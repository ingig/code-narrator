# UserDefinedBuilderHelper.ts

This TypeScript file contains the `UserDefinedBuilderHelper` class, which is responsible for handling various tasks related to user-defined builders in a software project. The class provides methods for extracting paths from content, loading arguments, getting assistant messages, and more.

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

The constructor initializes the `aiService` property with the AI service configured in the `ConfigHelper`.

```typescript
constructor() {
    this.aiService = ConfigHelper.config.aiService;
}
```

### Methods

#### extractPathFromContent

This method takes an input string and extracts the path from the content using a regular expression.

```typescript
public extractPathFromContent(input: string): string | null
```

#### loadArgs

This method loads the arguments for a given builder and project path. It iterates through the argument keys and extracts the file path from the content. If the file path is found, it reads the content of the file and assigns it to the corresponding argument key.

```typescript
public loadArgs(build: IBuilder, project_path: string)
```

#### getAssistantMessages

This method retrieves assistant messages for a given builder. It first gets the predefined questions for the builder type and then iterates through the files associated with the builder. It extracts the content and additional information from the files and appends them to the assistant messages.

```typescript
public async getAssistantMessages(builder: IBuilder)
```

#### getPredefinedQuestion

This method returns a predefined question based on the input builder type. The supported types are 'howto', 'readme', 'tutorial', and 'faq'.

```typescript
private getPredefinedQuestion(type: string)
```

#### extractContentBetweenHeaders

This method extracts the content between headers in a markdown string. It returns the first non-empty line or a substring of the markdown if the length is less than 350 characters.

```typescript
public extractContentBetweenHeaders(markdown: string): string
```

#### findFiles

This method finds files based on a given pattern string. It uses the `DocumentationCache` to get the files by folder path.

```typescript
public findFiles(patternString: string)
```

## Usage

To use the `UserDefinedBuilderHelper` class, first import it and create a new instance:

```typescript
import UserDefinedBuilderHelper from "./UserDefinedBuilderHelper";

const helper = new UserDefinedBuilderHelper();
```

Then, you can call the available methods on the instance:

```typescript
const extractedPath = helper.extractPathFromContent("content(/path/to/file.txt)");
helper.loadArgs(builder, project_path);
const assistantMessages = await helper.getAssistantMessages(builder);
```