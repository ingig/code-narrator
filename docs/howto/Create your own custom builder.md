# How to Create a Custom Builder Using the Config File

## Introduction

This guide will walk you through the process of creating a custom builder using the config file in a project that uses the Code Narrator documentation system. We will assume that you have already set up your project and have a `code-narrator.config.js` file in your root folder. The system uses the Liquid template engine for template files, and you must add a template file to the `.code-narrator/gpt_questions` directory.

## Prerequisites

Before you begin, ensure that you have the following:

- A project set up with Code Narrator
- A `code-narrator.config.js` file in your project's root folder
- Familiarity with the Liquid template engine

## Step-by-Step Instructions

1. **Create a custom builder configuration**

   In your `code-narrator.config.js` file, add a new builder configuration object to the `builders` array. For example:

   ```javascript
   {
     "name": "CustomBuilder",
     "template": "custom_builder_template",
     "sidebarPosition": 3,
     "args": {
       "entryFileContent": "content(./dist/src/cli.js)",
       "configFile": "content(code-narrator.config.js)"
     },
     "files": [
       {
         "path": "package.json",
         "jsonPaths": ["$.dependencies", "$.devDependencies", "$.engine"]
       }
     ],
     "type": "Custom"
   }
   ```

2. **Create a template file**

   Create a new Liquid template file in the `.code-narrator/gpt_questions` directory. Name the file according to the `template` property in your custom builder configuration (e.g., `custom_builder_template.liquid`).

3. **Using `args` and `files` properties in the config**

   The `args` property allows you to pass arguments to the template. In the example above, we pass the content of `./dist/src/cli.js` and `code-narrator.config.js` as arguments.

   The `files` property allows you to specify files and their JSON paths to be included in the documentation. In the example above, we include the `package.json` file and specify the JSON paths for dependencies, devDependencies, and engine.

4. **Understanding `content()`**

   The `content()` function retrieves the entire content of a file specified in the argument. For example, `content(./dist/src/cli.js)` retrieves the content of the `cli.js` file.

5. **Understanding JSONPath and `extract`**

   JSONPath is a query language for JSON data structures. It allows you to extract specific parts of a JSON file. The `extract` property in the config file uses natural language to extract content from a file. Both JSONPath and `extract` are used to limit the content sent to GPT.

6. **Difference between the `type` property**

   The `type` property in the builder configuration determines the type of builder being used. In our example, we set the `type` to "Custom" to indicate that we are creating a custom builder. Other possible values include "README" and "HowTo" for different types of documentation builders.