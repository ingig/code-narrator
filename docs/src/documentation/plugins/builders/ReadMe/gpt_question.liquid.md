---
sidebar_position: 0
sidebar_label: gpt_question.liquid
---

# gpt_question.liquid

This is a template file that generates a "ReadMe" guide for a given project. The template uses variables to customize the content based on the project's details.

## Variables used in the template

- `projectName`: The name of the project.
- `repositoryUrl`: The URL of the project's repository.
- `entryFileContent`: The content of the project's entry file.
- `configFile`: The content of the project's configuration file.
- `projectFile`: The content of the project's main file.

## Template file content

```
###
Create a "ReadMe" guide for the project, named "{{ projectName }}".
From the description of the project file describe the purpose of the project and the idea of it.
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
###
```

The template file generates a "ReadMe" guide with the following sections:

1. Introduction: Describes the purpose and idea of the project based on the project file description.
2. Installation: Provides instructions on how to install the project.
3. Configuration: Explains how to configure the project using the config file, if applicable.
4. Running the project: Describes how to run the project.
5. Running tests: Explains how to run tests for the project.
6. Support: Provides information on where to post bugs, the project's homepage, and a link to the repository (if available).
7. Dependencies: Lists the project's dependencies at the end of the file.

Additionally, the template includes the content of the entry file, config file, and project file as separate sections.