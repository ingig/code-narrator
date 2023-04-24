# Creating a Custom Builder Plugin: MyBuilder

This tutorial will guide you through the process of creating your own builder plugin called `MyBuilder`. By following these steps, you will learn how to extend the base class, implement necessary functions, and configure the plugin.

## Target Audience

This tutorial is intended for developers who are familiar with JavaScript/TypeScript and have experience working with plugins.

## Learning Objectives

By the end of this tutorial, you will be able to:

1. Extend the base class for creating a custom builder plugin.
2. Implement required functions for the plugin.
3. Configure the plugin in the `code-narrator.config.js` file.

## Prerequisites

- Basic knowledge of JavaScript/TypeScript
- Familiarity with plugins and their configuration

## Step-by-Step Instructions

### Step 1: Create a new file for MyBuilder

Create a new file called `MyBuilder.ts` in a directory of your choice.

### Step 2: Extend the BaseBuilder class

In `MyBuilder.ts`, import the `BaseBuilder` class and extend it to create your custom builder plugin:

```typescript
import BaseBuilder from "../BaseBuilder";

export default class MyBuilder extends BaseBuilder {
  // Your custom implementation goes here
}
```

### Step 3: Implement the generate function

Implement the `generate` function in the `MyBuilder` class. This function will be responsible for generating the documentation.

```typescript
public async generate() {
  // Your custom implementation goes here
}
```

### Step 4: Call retrieve document cache and generateDocumentationAndCache

In the `generate` function, call `retrieveDocumentCache` and `generateDocumentationAndCache` with the required arguments:

```typescript
import DocumentationCache from "../../../DocumentationCache";

public async generate() {
  // Retrieve the document cache
  const document = DocumentationCache.get("your_file_path");

  // Generate documentation and cache
  await super.generateDocumentationAndCache({
    args: { /* your arguments */ },
    name: "your_name",
    pathToFile: "your_file_path",
    folderPath: "your_folder_path",
    sidebarPosition: 0,
    sidebarLabel: "your_label",
    assistantMessages: [],
    data: { /* your data */ },
    prevDocument: document,
  });
}
```

Replace the placeholders with the appropriate values for your use case.

### Step 5: Add MyBuilder to the code-narrator.config.js file

In the `code-narrator.config.js` file, import your `MyBuilder` plugin and add it to the `builderPlugins` array:

```javascript
import MyBuilder from "./path/to/MyBuilder";

export default {
  // Other configurations...
  builderPlugins: [
    "ConfigurationBuilder",
    "FilesBuilder",
    "FoldersBuilder",
    "UserDefinedBuilder",
    MyBuilder, // Add your custom builder plugin here
  ],
};
```

Make sure to replace `./path/to/MyBuilder` with the actual path to your `MyBuilder.ts` file.

## Conclusion

Congratulations! You have successfully created a custom builder plugin called `MyBuilder`. By following these steps, you have learned how to extend the base class, implement necessary functions, and configure the plugin in the `code-narrator.config.js` file.