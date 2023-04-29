# ConfigQuestion.ts

This is a TypeScript code file that defines a `ConfigQuestion` class. The class is responsible for retrieving project setup and project details using AI services. It uses various utility classes and interfaces to achieve this.

## Table of Contents

- [Class: ConfigQuestion](#class-configquestion)
  - [Constructor](#constructor)
  - [Methods](#methods)
    - [getProjectSetup](#getprojectsetup)
    - [getProjectDetails](#getprojectdetails)
- [Examples](#examples)

## Class: ConfigQuestion

The `ConfigQuestion` class is responsible for retrieving project setup and project details using AI services.

### Constructor

The constructor initializes the `aiService` property with the AI service configured in `ConfigHelper`.

```typescript
constructor() {
    this.aiService = ConfigHelper.config.aiService;
}
```

### Methods

#### getProjectSetup

This method retrieves the project setup by analyzing the folder and file structure of the project. It returns a JSON object containing the project file, source path, documentation path, and test path.

```typescript
public async getProjectSetup(): Promise<any>
```

#### getProjectDetails

This method retrieves the project details by analyzing the project file and folder structure. It takes an `ICodeNarratorConfig` object as a parameter and returns a JSON object containing the project name, entry file, CLI file, config files, and repository URL.

```typescript
public async getProjectDetails(config: ICodeNarratorConfig): Promise<any>
```

##### Parameters

- `config` (ICodeNarratorConfig): The configuration object for the Code Narrator.

### Examples

Here's an example of how to use the `ConfigQuestion` class:

```typescript
import ConfigQuestion from "./ConfigQuestion";
import ConfigHelper from "./ConfigHelper";

(async () => {
  // Load the configuration
  ConfigHelper.load();

  // Create a new instance of ConfigQuestion
  const configQuestion = new ConfigQuestion();

  // Get the project setup
  const projectSetup = await configQuestion.getProjectSetup();
  console.log("Project Setup:", projectSetup);

  // Get the project details
  const projectDetails = await configQuestion.getProjectDetails(ConfigHelper.config);
  console.log("Project Details:", projectDetails);
})();
```

This example demonstrates how to use the `ConfigQuestion` class to retrieve the project setup and project details using AI services.