# ConfigQuestion.ts

This is a TypeScript code file that defines the `ConfigQuestion` class. The class is responsible for obtaining project setup and project details using AI services. It uses various utility classes and interfaces to achieve this functionality.

## Usage

To use the `ConfigQuestion` class, you need to import it and create an instance of the class. Then, you can call its methods to get the project setup and project details.

```typescript
import ConfigQuestion from "./ConfigQuestion";

const configQuestion = new ConfigQuestion();
const projectSetup = await configQuestion.getProjectSetup();
const projectDetails = await configQuestion.getProjectDetails(config);
```

## Class Description

### Constructor

The constructor initializes the `aiService` property with the AI service configured in `ConfigHelper`.

```typescript
constructor() {
    this.aiService = ConfigHelper.config.aiService;
}
```

### Methods

#### getProjectSetup()

This method returns a JSON object containing the project file, source path, documentation path, and test path. It uses the AI service to analyze the folder and file structure of the project.

```typescript
public async getProjectSetup(): Promise<{
    project_file: string;
    source_path: string;
    documentation_path: string;
    test_path: string;
}>
```

#### getProjectDetails(config: ICodeNarratorConfig)

This method takes an `ICodeNarratorConfig` object as a parameter and returns a JSON object containing the project name, entry file, CLI file, repository URL, and an array of app-specific config files. It uses the AI service to analyze the project file and folder structure.

```typescript
public async getProjectDetails(config: ICodeNarratorConfig): Promise<{
    project_name: string;
    entry_file: string;
    cli_file: string;
    config_files: string[];
    repository_url: string;
}>
```

### Parameters

- `config`: An object implementing the `ICodeNarratorConfig` interface. It contains the configuration details for the Code Narrator.

## Technical Concepts

### AI Service

The AI service used in this class is an instance of `IGenericAIService`. It is responsible for querying the AI model to get answers to specific questions related to the project setup and details.

### FolderStructure and FileStructure

`FolderStructure` and `FileStructure` are utility classes that help in obtaining the folder and file structure of the project. They are used to provide the AI service with the necessary information to analyze the project.

### Helper

The `Helper` class is a utility class that provides helper functions, such as extracting JSON objects from the AI service's response.

### ConfigHelper

`ConfigHelper` is a utility class that helps in loading and managing the configuration for the Code Narrator. It is used to obtain the AI service instance configured for the project.