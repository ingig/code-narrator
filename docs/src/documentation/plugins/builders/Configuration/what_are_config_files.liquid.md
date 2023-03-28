---
sidebar_position: 4
sidebar_label: what_are_config_files.liquid
---

# What Are Config Files

This documentation is about the template file `what_are_config_files.liquid`. The file is designed to help identify and categorize configuration files in a given list of files and folders. The template file uses variables and returns the information in JSON format.

## Variables

The template file uses the following variables:

- `appName`: The name of the app.
- `listOfFilesAndFolders`: A list of files and folders to be analyzed.

## Template File Content

The content of the `what_are_config_files.liquid` file is as follows:

```
###
The name of the app is "{{appName}}", of this list of files and folders, what do you consider as being config files

{{listOfFilesAndFolders}}

Return this information in JSON.
In the json there should be a property, isConfig: true or false.
Find one or more config that is applications specific config file(s) then add property isAppSpecific: true, else false.

This is the json scheme:
[ { "path":""folder/fileName"", "isConfig":bool, "isAppSpecific": bool }, { ... } ]
###
```

The file provides instructions on how to identify and categorize configuration files. The output should be in JSON format, with each file represented as an object containing the following properties:

- `path`: The path of the file or folder.
- `isConfig`: A boolean value indicating whether the file is a configuration file (true) or not (false).
- `isAppSpecific`: A boolean value indicating whether the configuration file is specific to the given app (true) or not (false).

The JSON schema for the output is as follows:

```
[
  {
    "path": "folder/fileName",
    "isConfig": bool,
    "isAppSpecific": bool
  },
  { ... }
]
```

This template file can be used to analyze a list of files and folders, identify configuration files, and categorize them based on their relevance to a specific app.