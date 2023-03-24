---
sidebar_label: DocumentationBuilder
sidebar_position: 0
---
# DocumentationBuilder

The `DocumentationBuilder` class is responsible for generating documentation for a given project. It uses the OpenAIRepository to query GPT for generating the content of the documentation. The class also utilizes various plugins to process and structure the generated content.

## Usage Examples

```javascript
import DocumentationBuilder from "./DocumentationBuilder";

const documentationBuilder = new DocumentationBuilder();

// Create GetStarted documentation
await documentationBuilder.createGetStarted();

// Create Behaviour documentation
await documentationBuilder.createBehaviour();

// Create API documentation
await documentationBuilder.createApi();
```

## Methods

### constructor()

The constructor initializes the `openAIRepository` and `projectPath` properties.

### createGetStarted()

This method creates the "GetStarted" documentation. It first checks if the document already exists in the cache. If not, it creates a new `Document` instance and queries GPT for the project description using the `GetStartedSummary` plugin. The generated content is then processed and added to the `DocumentationCache`.

### createBehaviour()

This method creates the "Behaviour" documentation. Similar to `createGetStarted()`, it checks if the document already exists in the cache. If not, it creates a new `Document` instance and queries GPT for the project description using the `BehaviourSummary` plugin. The generated content is then processed and added to the `DocumentationCache`.

### createConfig()

This method is currently empty and can be implemented to create configuration documentation.

### createApi()

This method creates the API documentation. It first retrieves the project's folder structure and then queries GPT for each folder using the `queryForFolder()` method.

### queryForFolder(folder: FolderStructure)

This method takes a `FolderStructure` object as a parameter and generates documentation for each file in the folder. It checks if the documentation already exists in the cache and if the file has been modified since the last update. If not, it creates a new `Document` instance and processes the file using the available plugins. The generated content is then added to the `DocumentationCache`.

### processPlugins(document: Document, pluginProcessors: any[], file: FileStructure, folder: FolderStructure)

This method takes a `Document` object, an array of plugin processors, a `FileStructure` object, and a `FolderStructure` object as parameters. It processes the document using the provided plugins and updates the document with the generated content.

### summariesFolder(folder: FolderStructure, counter: number)

This method takes a `FolderStructure` object and a counter as parameters. It generates a summary for the folder using the available plugins and adds the generated content to the `DocumentationCache`.

### getPluginByName(pluginName: string, suggestion: Document)

This method takes a plugin name and a `Document` object as parameters. It returns a new instance of the plugin with the given name if it exists in the `DocumentPlugins.FolderPlugins` array.

## Technical Concepts

### FolderStructure and FileStructure

`FolderStructure` and `FileStructure` are utility classes that represent the structure of a project's folders and files. They are used to traverse the project and generate documentation for each file and folder.

### Document and DocumentationCache

`Document` is a class that represents a single documentation file. `DocumentationCache` is a utility class that stores and manages the generated documentation.

### DocumentPlugins

`DocumentPlugins` is a collection of plugins