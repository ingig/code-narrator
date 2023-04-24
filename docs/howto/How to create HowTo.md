# How to Add a HowTo in the Config File

## Introduction

This guide will walk you through the process of adding a HowTo section in the config file for a software project. The HowTo section will help developers understand how to use the software and its features effectively.

## Step-by-Step Instructions

1. **Create a Liquid Template**: Developers must create a Liquid template in the `.code-narrator/gpt_questions` directory. This template file is used to ask GPT questions.

2. **Add a HowTo Builder**: In the `code-narrator.config.js` file, add a new builder object for the HowTo section. The builder object should have the following properties:

   - `type`: Set the value to "README".
   - `template`: Set the value to the desired template name, such as "overview_readme".
   - `name`: Set the value to "How To".
   - `path`: Set the value to the desired path, such as "howto".
   - `files`: Add an array of file objects with the desired file paths, such as `{"path": "howto/*.md"}`.
   - `pages`: Add an array of page objects with the desired page properties.

3. **Add HowTo Pages**: In the `pages` array, add objects for each HowTo page you want to create. Each object should have the following properties:

   - `type`: Set the value to "howto".
   - `template`: Set the value to the desired template name, such as "howto_create_howto".
   - `name`: Set the value to the desired page name, such as "How to create HowTo".
   - `files`: Add an array of file objects with the desired file paths and extraction properties.

Here's an example of a HowTo builder added to the `code-narrator.config.js` file:

```json
{
  "type": "README",
  "template": "overview_readme",
  "name": "How To",
  "path": "howto",
  "files": [
    {
      "path": "howto/*.md"
    }
  ],
  "pages": [
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
    },
    {
      "type": "howto",
      "template": "howto_use_cli",
      "name": "Use CLI",
      "files": [
        {
          "path": "src/cli.ts"
        },
        {
          "path": "package.json",
          "JSONPath": [
            "$.repository"
          ]
        }
      ]
    }
  ]
}
```

By following these steps, you can successfully add a HowTo section in the config file for your software project. This will help developers understand how to use the software and its features effectively.