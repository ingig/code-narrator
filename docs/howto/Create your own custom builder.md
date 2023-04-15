---
nav_order: 15
title: Create your own custom builder
parent: How To

permalink: docs/howto/howto_create_custom_builder.md.md
---

# How to Create a Custom Builder Using the Config File

## Introduction

In this guide, we will walk you through the process of creating a custom builder using the config file in a project that uses the Code Narrator system. The Code Narrator system uses the Liquid template engine for template files. We will also provide examples of using args and files properties in the config and explain the difference between the type property, as well as how content() and extract() functions work.

## Prerequisites

Before you begin, make sure you have the following:

1. A project set up with a Code Narrator config file in the root folder.
2. A `.liquid` file added to the `.code-narrator/gpt_questions` directory.

## Step-by-Step Instructions

### Step 1: Add a Custom Builder to the Config File

Open the `code-narrator.config.js` file in your project's root folder and add a new builder object to the `builders` array. The builder object should have the following properties:

- `name`: A unique name for your custom builder.
- `template`: The name of the Liquid template file you created in the `.code-narrator/gpt_questions` directory.
- `args`: An object containing any arguments you want to pass to the template.
- `files`: An array of file objects that specify the files you want to include in the builder.
- `type`: Set this property to "Custom" for a custom builder.

Here's an example of a custom builder configuration:

```javascript
{
  "name": "MyCustomBuilder",
  "template": "my_custom_builder_template",
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

### Step 2: Use Args and Files Properties in the Config

In the `args` property, you can pass any data you want to use in your Liquid template. For example, you can use the `content()` function to read the content of a file:

```javascript
"args": {
  "entryFileContent": "content(./dist/src/cli.js)"
}
```

In the `files` property, you can specify the files you want to include in the builder. You can also use the `JSONPath` property to extract specific data from JSON files:

```javascript
"files": [
  {
    "path": "package.json",
    "jsonPaths": ["$.dependencies", "$.devDependencies", "$.engine"]
  }
]
```

### Step 3: Understand the Difference Between the Type Property

The `type` property in the builder configuration determines the type of builder you are creating. For a custom builder, set the `type` property to "Custom". Other possible values for the `type` property include "README", "howto", etc., depending on the type of documentation you want to generate.

### Step 4: Learn How Content() and Extract() Functions Work

The `content()` function is used to read the content of a file and pass it as an argument to the template. For example:

```javascript
"args": {
  "entryFileContent": "content(./dist/src/cli.js)"
}
```

The `extract()` function is used to extract specific data from a file. For example, you can use it to extract the `builders` array from the `code-narrator.config.js` file:

```javascript
"files": [
  {
    "path": "code-narrator.config.js",
    "extract": "builders"
  }
]
```

Now you know how to create a custom builder using the config file in a Code Narrator project. You can use this knowledge to create custom documentation builders tailored to your specific needs.