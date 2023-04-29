# DocumentationBuilder.ts

This is a TypeScript code file that defines the `DocumentationBuilder` class. The class is responsible for generating documentation using various plugins. It imports necessary modules and services, and then iterates through the configured plugins to generate the documentation.

## Table of Contents

- [Class Description](#class-description)
- [Examples](#examples)
- [Methods](#methods)
  - [constructor](#constructor)
  - [build](#build)
- [Parameters](#parameters)

## Class Description

The `DocumentationBuilder` class is responsible for generating documentation using various plugins. It has two properties: `aiService`, which is an instance of `IGenericAIService`, and `projectPath`, which is a string representing the project's directory path.

## Examples

Here's an example of how to use the `DocumentationBuilder` class:

```typescript
import DocumentationBuilder from './DocumentationBuilder';

const docBuilder = new DocumentationBuilder();
docBuilder.build();
```

## Methods

### constructor

The constructor initializes the `aiService` and `projectPath` properties. It sets the `aiService` property to the configured AI service and sets the `projectPath` property to the current directory.

```typescript
constructor() {
    this.aiService = ConfigHelper.config.aiService;
    this.projectPath = __dirname;
}
```

### build

The `build` method is an asynchronous method that iterates through the configured plugins and generates the documentation using each plugin. It checks if the plugin has a default generator, and if not, it uses the plugin's generator. It also checks if the generator is user-defined and skips it if it's not.

```typescript
public async build() {
    let plugins = ConfigHelper.BuilderPlugins;
    for (let i = 0; i < plugins.length; i++) {
        let generator: BaseBuilder;
        if (plugins[i].default) {
            generator = new plugins[i].default() as BaseBuilder;
        } else {
            generator = new plugins[i]() as BaseBuilder;
        }
        let userDefined = (ConfigHelper.config as any)?.userDefined;
        if (userDefined && generator.generator != 'UserDefined') {
            continue;
        }

        await generator.generateUsingPlugin();
    }
}
```

## Parameters

There are no parameters in the `DocumentationBuilder` class methods.