---
sidebar_position: 3
sidebar_label: gpt_question.liquid
---

# gpt_question.liquid

The `gpt_question.liquid` file is a template file that provides a structured format for displaying information about app-specific configuration files, their content, and other related configuration files in a project.

## Variables used in the template file

The following variables are used in the `gpt_question.liquid` template file:

1. `projectName`: The name of the project for which the app-specific configuration files are being described.
2. `appSpecificConfigFiles`: A list of app-specific configuration files used in the project.
3. `appSpecificConfigContent`: The content of the app-specific configuration files.
4. `configFiles`: A list of other configuration files that may be related to the project.

## Template file display

```
###
This is (or are) the app-specific config file(s) for {{ projectName }}.
Give me a detailed description, and what their purpose is in the application if you can decide.
Give an example of usage for the app-specific configs
###
{{appSpecificConfigFiles}}
###

Here is the content of the app specific config file(s)
###
{{appSpecificConfigContent}}
###

These are other configuration files, give short general information about each of them, but only if you recognize them.
If you do not recognize them, then don't mention the config
###
{{configFiles}}
###
```

## Example usage

Suppose we have a project named "MyApp" with the following app-specific configuration files and content:

- `app_config.json`: Contains settings related to the app's behavior and appearance.
- `database_config.yaml`: Contains settings related to the app's database connection and schema.

The `gpt_question.liquid` template file can be used to generate the following documentation:

```
###
This is (or are) the app-specific config file(s) for MyApp.
Give me a detailed description, and what their purpose is in the application if you can decide.
Give an example of usage for the app-specific configs
###
- app_config.json
- database_config.yaml
###

Here is the content of the app specific config file(s)
###
{
  "app_name": "MyApp",
  "theme_color": "#123456",
  "api_key": "*****"
}
---
db:
  host: "localhost"
  port: 5432
  user: "myapp_user"
  password: "*****"
  database: "myapp_db"
###
```

In this example, the `app_config.json` file contains settings related to the app's behavior and appearance, such as the app's name, theme color, and API key. The `database_config.yaml` file contains settings related to the app's database connection and schema, such as the host, port, user, password, and database name. Note that sensitive information like API keys and passwords are replaced with asterisks (*****).