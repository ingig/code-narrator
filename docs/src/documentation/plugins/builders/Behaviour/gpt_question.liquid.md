---
sidebar_position: 1
sidebar_label: gpt_question.liquid
---

# gpt_question.liquid

This is a template file that provides a high-level description of an application's behavior. The template file uses variables to display the entry file and the headline of the file.

## Variables used in the template file

- `entryFile`: The source file for starting the application.

## Template file content

```
###
Give a deep in-depth description of the behavior of the application.
I provide you with high-level description of what the application does
and the source for starting the application
Headline of file should be "Behaviour"
Do not describe the code in this file in your writing, only use it as a reference to help you write about the application's behavior.

File with application description comment:
###
{{entryFile}}
###
###
```

When using this template file, replace the `{{entryFile}}` variable with the appropriate file name or path to display the source file for starting the application. The template will then provide a high-level description of the application's behavior, without delving into the code itself.