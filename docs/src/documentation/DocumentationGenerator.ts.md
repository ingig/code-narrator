---
sidebar_position: 3
sidebar_label: DocumentationGenerator.ts
---

# DocumentationGenerator.ts

This is a TypeScript code file that defines a class called `DocumentationGenerator`. The purpose of this class is to generate documentation files based on the contents of a cache and a configuration file. The generated documentation files are saved to a specified path.

## Usage

To use the `DocumentationGenerator` class, you need to create an instance of the class and call the `make()` method.

```typescript
import DocumentationGenerator from './DocumentationGenerator';

const generator = new DocumentationGenerator();
generator.make();
```

## Class: DocumentationGenerator

### Method: make()

This method generates documentation files based on the contents of the `DocumentationCache` and the configuration file `code-narrator.config`. It saves the generated documentation files to the specified path in the configuration file.

#### Parameters

None.

#### Example

```typescript
const generator = new DocumentationGenerator();
generator.make();
```

## Technical Concepts

### ConfigHelper

`ConfigHelper` is a utility class that helps in fetching configuration values from the `code-narrator.config` file.

### DocumentationCache

`DocumentationCache` is a class that stores the documentation data in a cache. It provides methods to get and set documentation data.

### BaseGenerator

`BaseGenerator` is a base class for generator plugins. Generator plugins are used to process the documentation data before saving it to a file.

## File Structure

The file imports the following modules and classes:

- `fs` from the `fs` module
- `ConfigHelper` from `../utils/ConfigHelper`
- `DocumentationCache` from `./DocumentationCache`
- `path` from the `path` module
- `config` from `../../code-narrator.config`
- `BaseGenerator` from `./plugins/generators/BaseGenerator`

The `DocumentationGenerator` class has a single method called `make()`. This method iterates through the projects and documentation data, processes the data using generator plugins, and saves the generated documentation files to the specified path.