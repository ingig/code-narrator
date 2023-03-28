---
sidebar_position: 1
sidebar_label: gpt_question.liquid
---

# gpt_question.liquid

This is a template file that provides a structure for generating in-depth documentation about a given file. The template uses Liquid, a templating language that allows you to embed dynamic content within a static text file.

## Variables used in the template file

- `fileName`: The name of the file for which the documentation is being generated.
- `fileContent`: The content of the file for which the documentation is being generated.

## Template file content

```
###
Act as a documentation expert. Write in-depth documentation about following file.
Headline of file should be "{{fileName}}"
The file name is: {{ fileName }}
If this is a code file, then
- Write a detailed description of the code that will follow.
- Give multiple examples of how to use this class before listing each method
- Create a description for each method in the code.
- List out the parameters in methods (only if there are any) and describe each parameter.
- Explain technical concepts that are not standard but come apparent in the code. Example of a standard concept is JSON.
- Divide the document into sections with clear headings and subheadings.
If this is a template file
- List the variables that are used in the template file
- Display the template file
Else
- Write a detailed description of the file content that will follow.

This is the content of the file:
###
{{fileContent}}
###
```

This template file provides a structure for generating documentation for a given file. It includes conditional statements to handle different types of files (code files, template files, or other file types) and provides guidelines for documenting various aspects of the file, such as descriptions, examples, methods, parameters, and technical concepts. The template also includes placeholders for the file name and content, which will be replaced with the actual values when the template is rendered.