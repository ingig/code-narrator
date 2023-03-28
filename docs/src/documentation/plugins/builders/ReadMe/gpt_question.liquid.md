---
sidebar_position: 0
sidebar_label: gpt_question.liquid
---

# gpt_question.liquid

This is a template file used to generate a "ReadMe" guide for a project. The template file uses variables to customize the content based on the specific project details.

## Variables used in the template file

- `projectName`: The name of the project.
- `repositoryUrl`: The URL of the project's repository.
- `entryFileContent`: The content of the project's entry file.
- `configFile`: The content of the project's configuration file.
- `projectFile`: The content of the project's main file.

## Template file content

```
Create a "ReadMe" guide for the project, named "{{ projectName }}".
From the description of the project file describe the purpose of the project and the idea of it.
Show current version.
Show how to install the project.
Show how to configure the project from the config file, if there is any configuration
Show how to run the project.
Show how to run tests for the project
Show where to post bugs, what the homepage of the project is and link to repository ({{ repositoryUrl }}), if available. Do not repeat the same url.
List the dependencies at the end of file.

This is the entry file:
###
{{ entryFileContent }}
###

This is the config file:
###
{{ configFile }}
###

This is the project file:
###
{{ projectFile }}
###
```

The template file will generate a "ReadMe" guide for the project with the following sections:

1. Project name and description
2. Current version
3. Installation instructions
4. Configuration instructions (if applicable)
5. Running the project
6. Running tests
7. Bug reporting, project homepage, and repository URL
8. Dependencies
9. Entry file content
10. Configuration file content
11. Project file content