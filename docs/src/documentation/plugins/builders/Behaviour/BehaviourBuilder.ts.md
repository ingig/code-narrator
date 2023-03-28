---
sidebar_position: 0
sidebar_label: BehaviourBuilder.ts
---

# BehaviourBuilder.ts

`BehaviourBuilder.ts` is a TypeScript code file that is responsible for generating and rendering documentation for the "Behaviour" section of a project. It extends the `BaseBuilder` class and utilizes the `DocumentationCache` and `ConfigHelper` utilities to manage the documentation generation process.

## Usage

To use the `BehaviourBuilder` class, you need to import it and create a new instance by passing the `project` object to the constructor. Then, you can call the `generate()` and `render()` methods to generate and render the documentation for the "Behaviour" section.

```typescript
import BehaviourBuilder from "./BehaviourBuilder";

const project = { /* project data */ };
const behaviourBuilder = new BehaviourBuilder(project);

await behaviourBuilder.generate();
const document = DocumentationCache.get("Behaviour");
const renderedDocumentation = await behaviourBuilder.render(document);
```

## Class: BehaviourBuilder

### Constructor: `constructor(project: any)`

The constructor takes a single parameter:

- `project`: The project object for which the documentation is being generated.

### Method: `generate()`

This asynchronous method generates the documentation for the "Behaviour" section and caches it using the `DocumentationCache`. It reads the project's entry file and generates the documentation using the `generateDocumentationAndCache()` method from the `BaseBuilder` class.

### Method: `render(document: Document)`

This asynchronous method takes a `Document` object as a parameter and returns the rendered documentation.

- `document`: A `Document` object containing the documentation to be rendered.

## Technical Concepts

### DocumentationCache

`DocumentationCache` is a utility class that helps manage the caching of generated documentation. It provides methods to store and retrieve documentation, ensuring that the documentation generation process is efficient and avoids unnecessary regeneration.

### ConfigHelper

`ConfigHelper` is a utility class that helps manage the configuration settings for the project. It provides methods to get and set configuration values, making it easy to access and modify the project's settings.

### BaseBuilder

`BaseBuilder` is an abstract class that provides the foundation for generating and managing documentation. It includes methods for generating documentation, caching it, and rendering it. The `BehaviourBuilder` class extends `BaseBuilder` to provide specific functionality for the "Behaviour" section of the documentation.