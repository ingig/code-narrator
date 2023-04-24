# ConfigQuestion.ts

This is a TypeScript code file that contains the `ConfigQuestion` class. The class is responsible for interacting with the OpenAIRepository and retrieving project setup and project details based on the folder and file structure of the project.

## Usage

To use the `ConfigQuestion` class, you need to import it and create a new instance:

```typescript
import ConfigQuestion from "./ConfigQuestion";

const configQuestion = new ConfigQuestion();
```

Then, you can call the `getProjectSetup` and `getProjectDetails` methods to retrieve the project setup and project details, respectively.

## Class: ConfigQuestion

### Constructor

The constructor initializes the `openAiRepository` property with a new instance of the `OpenAIRepository` class.

### Methods

#### getProjectSetup(): Promise<object>

This method retrieves the project setup based on the folder and file structure of the project. It returns a JSON object with the following properties:

- `project_file`: string
- `source_path`: string
- `documentation_path`: string
- `test_path`: string

##### Example

```typescript
const projectSetup = await configQuestion.getProjectSetup();
console.log(projectSetup);
```

#### getProjectDetails(config: ICodeNarratorConfig): Promise<object>

This method retrieves the project details based on the project file and folder structure. It takes an `ICodeNarratorConfig` object as a parameter and returns a JSON object with the following properties:

- `project_name`: string
- `entry_file`: string
- `cli_file`: string
- `config_files`: string[]
- `repository_url`: string

##### Parameters

- `config`: ICodeNarratorConfig - The configuration object containing the project file.

##### Example

```typescript
const config = { project_file: "package.json" };
const projectDetails = await configQuestion.getProjectDetails(config);
console.log(projectDetails);
```

## Technical Concepts

### OpenAIRepository

The `OpenAIRepository` class is used to interact with the OpenAI API to query questions and retrieve answers. It is used in both `getProjectSetup` and `getProjectDetails` methods to get the required information.

### Helper

The `Helper` class is a utility class that provides helper functions, such as `getJsons`, which is used in this code file to extract JSON objects from the OpenAI API response.

### ICodeNarratorConfig

The `ICodeNarratorConfig` is an interface that defines the structure of the configuration object required by the `getProjectDetails` method. It contains the `project_file` property, which is a string representing the project file's path.