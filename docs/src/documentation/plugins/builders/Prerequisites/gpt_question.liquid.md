---
sidebar_position: 0
sidebar_label: gpt_question.liquid
---

# gpt_question.liquid

This is a template file for providing information on prerequisites for a project called `{{ projectName }}`. The template file is written in Liquid, a templating language used in various web frameworks and content management systems.

## Variables

The template file uses the following variables:

- `{{ projectName }}`: The name of the project for which the prerequisites are being provided.
- `{{ projectFile }}`: The content of the project file.

## Template File Content

Below is the content of the `gpt_question.liquid` template file:

```
###
Provide information on Prerequisites for a project called {{ projectName }}.
List any required software, tools, or knowledge needed to work with or understand the project.

This is the project file

###
{{ projectFile }}
###
```

### Usage

To use this template file, you need to replace the `{{ projectName }}` and `{{ projectFile }}` variables with the appropriate values for your specific project. The template will then generate a formatted text with the prerequisites and project file information.

For example, if you have a project called "MyProject" and the content of the project file is "This is a sample project file", you would replace the variables as follows:

```
###
Provide information on Prerequisites for a project called MyProject.
List any required software, tools, or knowledge needed to work with or understand the project.

This is the project file

###
This is a sample project file
###
```

The resulting output would be:

```
Provide information on Prerequisites for a project called MyProject.
List any required software, tools, or knowledge needed to work with or understand the project.

This is the project file

This is a sample project file
```