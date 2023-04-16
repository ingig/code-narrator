# How to Create a New How To

This guide will walk you through the process of creating a new How To using the CLI in the `code-narrator.config.js` file.

## Introduction

The `code-narrator.config.js` file is used to configure the documentation generation process for your project. By adding a new How To, you can provide step-by-step instructions for specific tasks or features in your project.

## Step-by-Step Instructions

1. Open the `code-narrator.config.js` file in your project.

2. Locate the `builders` array in the configuration object. This is where you will add a new How To.

3. Create a new object in the `builders` array with the following properties:

   - `type`: Set this to "howto".
   - `template`: Provide the name of the template file for your How To (e.g., "howto_create_howto").
   - `name`: Give your How To a descriptive name (e.g., "How to create HowTo").
   - `files` (optional): If your How To requires specific files, add an array of objects with the `path` property set to the file path.

4. Save the `code-narrator.config.js` file.

5. Create a new Markdown file in the `howto` directory with the same name as the `template` property you provided in step 3 (e.g., "howto_create_howto.md").

6. Write the content for your How To in the new Markdown file. Use the appropriate Markdown syntax for formatting, such as headings, lists, and code blocks.

7. Save the Markdown file.

8. Run the documentation generation process to include your new How To in the generated documentation.

Here's an example of how to add a new How To in the `builders` array:

```javascript
{
    type: "howto",
    template: "howto_create_howto",
    name: "How to create HowTo",
    files: [
        {
            path: "code-narrator.config.js"
        }
    ]
}
```

:::tip
Remember to create a corresponding Markdown file in the `howto` directory with the same name as the `template` property.
:::