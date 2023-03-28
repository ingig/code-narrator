---
sidebar_position: 0
sidebar_label: gpt_question.liquid
---

# gpt_question.liquid

## Overview

This is a template file that provides instructions for using the code-narrator library in your own project. The template file contains variables that need to be replaced with the appropriate values for your specific project.

## Variables

The following variables are used in the template file:

- `configFile`: The configuration file that the user needs to create and modify to fit their project.

## Template File Content

Below is the content of the gpt_question.liquid template file:

```
###
Provide step-by-step instructions for using the code-narrator library in my own project by installing the package and running it.

To run code-narrator in cli, you run code-narrator-cli

This is the config file the user needs to create (using code-narrator-cli init) and modify to fit his project,
this will include change to config_file, project_file, entry_file, cli_file and any paths that doesn´t match the user project

###
{{ configFile }}
###
###
```

## Usage

To use this template file, replace the `{{ configFile }}` variable with the appropriate configuration file content for your project. Then, follow the step-by-step instructions provided in the template to install and run the code-narrator library in your project.