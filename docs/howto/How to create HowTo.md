---
sidebar_position: 12
sidebar_label: How to create HowTo
---

# How to Create a How-To Guide for the CLI

## Introduction

Creating a How-To guide for the CLI involves adding a new entry in the `code-narrator.config.js` file and providing the necessary information for the guide. This includes the type, template, name, and any relevant files or JSON paths.

## Step-by-Step Instructions

1. Open the `code-narrator.config.js` file in your project.

2. Locate the `builders` array in the configuration object.

3. Add a new object to the `builders` array with the following properties:

   - `type`: Set this to "howto".
   - `template`: Provide a unique name for the template, e.g., "howto_cli_guide".
   - `name`: Give a descriptive name for the guide, e.g., "CLI Guide".
   - `files`: (Optional) Add an array of objects with `path` and `JSONPath` properties if you want to include specific files or JSON paths in the guide.

4. Save the `code-narrator.config.js` file.

5. Create a new file in the `.code-narrator/gpt_questions` directory with the same name as the `template` property in the configuration object, e.g., "howto_cli_guide.md".

6. Write the content of the How-To guide in the newly created file using Markdown syntax.

7. Save the file.

Here's an example of a new How-To guide entry in the `code-narrator.config.js` file:

```javascript
{
    type: "howto",
    template: "howto_cli_guide",
    name: "CLI Guide",
    files: [
        {
            path: "src/cli.ts"
        },
        {
            path:"package.json",
            JSONPath: ["$.repository"]
        }
    ]
}
```

After following these steps, the new How-To guide for the CLI will be included in the generated documentation.