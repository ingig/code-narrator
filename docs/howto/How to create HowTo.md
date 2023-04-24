# How to Add a HowTo in the Config File

## Introduction

This guide will walk you through the process of adding a HowTo section in the config file for a software project. The HowTo section will help developers understand how to use specific features and functionalities of the software.

## Prerequisites

Before you begin, make sure you have the following:

1. Access to the project's `code-narrator.config.js` file.
2. Familiarity with Liquid templates and JSONPath.
3. A text editor to edit the config file.

## Step-by-Step Instructions

1. **Create a Liquid template file**: Developers must create a Liquid template file in the `.code-narrator/gpt_questions` directory. This template file will be used to ask GPT questions.

2. **Add a HowTo entry in the config file**: Open the `code-narrator.config.js` file in a text editor and add a new entry for the HowTo section. The entry should look like this:

```json
{
  "type": "howto",
  "template": "howto_create_howto",
  "name": "How to create HowTo",
  "files": [
    {
      "path": "code-narrator.config.js",
      "extract": "builders"
    }
  ]
}
```

3. **Configure the args property**: The `args` property is used to inject properties into the Liquid template. Any property set in `args` can be accessed in the Liquid template. For example:

```json
{
  "type": "howto",
  "template": "howto_run_cli",
  "name": "HowTo run CLI",
  "args": {
    "docUrl": "https://github.com/ingig/code-narrator/blob/master/docs/Configuration/code-narrator.config.js.md"
  },
  "files": [
    {
      "path": "src/utils/CliHelper.ts",
      "extract": "what arguments are available"
    }
  ]
}
```

4. **Use the file property**: The `file` property appends the extracted content of a file to the Liquid template, using JSONPath or the `extract` property that uses LLM to extract content from the file. For example:

```json
{
  "path": "package.json",
  "JSONPath": [
    "$.name",
    "$.description",
    "$.version",
    "$.homepage",
    "$.bugs",
    "$.author",
    "$.repository",
    "$.license"
  ]
}
```

5. **Save the config file**: After adding the HowTo section and configuring the necessary properties, save the `code-narrator.config.js` file.

6. **Review the HowTo section**: Once the config file is saved, the HowTo section should be available in the generated documentation. You can also watch a video demo [here](https://www.youtube.com/watch?v=uJtVCUOTkvw) for more information.

That's it! You have successfully added a HowTo section in the config file.