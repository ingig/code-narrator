# ConfigQuestion.ts

This is a TypeScript code file that defines the `ConfigQuestion` class. The class is responsible for extracting project setup and project details from the given folder structure and project file. It uses an AI service to process the information and return the required data in JSON format.

## Table of Contents

- [Class: ConfigQuestion](#class-configquestion)
  - [Constructor](#constructor)
  - [Methods](#methods)
    - [getProjectSetup](#getprojectsetup)
    - [getProjectDetails](#getprojectdetails)

## Class: ConfigQuestion

The `ConfigQuestion` class is responsible for extracting project setup and project details from the given folder structure and project file.

### Constructor

The constructor takes a single parameter:

- `config: ICodeNarratorConfig` - The configuration object that contains the AI service to be used.

### Methods

#### getProjectSetup

This method is responsible for extracting the project setup information from the folder and file structure.

**Parameters**: None

**Returns**: A JSON object containing the project setup information.

**Example**:

```typescript
const configQuestion = new ConfigQuestion(config);
const projectSetup = await configQuestion.getProjectSetup();
```

#### getProjectDetails

This method is responsible for extracting the project details from the given project file and folder structure.

**Parameters**:

- `config: ICodeNarratorConfig` - The configuration object that contains the project file.

**Returns**: A JSON object containing the project details.

**Example**:

```typescript
const configQuestion = new ConfigQuestion(config);
const projectDetails = await configQuestion.getProjectDetails(config);
```

## Usage

To use the `ConfigQuestion` class, you need to import it and create an instance with the required configuration object. Then, you can call the `getProjectSetup` and `getProjectDetails` methods to extract the necessary information.

```typescript
import ConfigQuestion from "./ConfigQuestion";
import ICodeNarratorConfig from "./ICodeNarratorConfig";

const config: ICodeNarratorConfig = {
  // ... your configuration object
};

const configQuestion = new ConfigQuestion(config);
const projectSetup = await configQuestion.getProjectSetup();
const projectDetails = await configQuestion.getProjectDetails(config);
```