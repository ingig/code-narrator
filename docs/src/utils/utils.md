---
sidebar_label: Utils
sidebar_position: 103
---
# Utils

This document provides an in-depth overview of the utility files in the `utils` folder. The utility files include [ConfigHelper](#confighelper), [FileStructure](#filestructure), [FolderStructure](#folderstructure), and [Helper](#helper). These files provide various functionalities to manage configuration settings, file and folder structures, and string manipulation.

## ConfigHelper

[**Source File on GitHub**](https://github.com/username/repository/blob/main/utils/ConfigHelper.ts)

ConfigHelper is a utility class that helps in managing configuration settings for your application. It reads configuration settings from environment variables and a JSON file named `code-narrator.json`. This class provides methods to load configuration settings and get the value of a specific setting using its key.

### Key Features

- Load configuration settings from environment variables and a JSON file
- Get the value of a specific setting using its key

## FileStructure

[**Source File on GitHub**](https://github.com/username/repository/blob/main/utils/FileStructure.ts)

The `FileStructure` class is a utility class that represents a file or directory within a file system. It provides a simple way to manage and interact with files and directories, including resolving their paths and checking if a file is a TypeScript code file.

### Key Features

- Manage and interact with files and directories
- Resolve paths of files and directories
- Check if a file is a TypeScript code file

## FolderStructure

[**Source File on GitHub**](https://github.com/username/repository/blob/main/utils/FolderStructure.ts)

The `FolderStructure` class is a utility class that helps in managing the structure of a folder. It provides methods to get the files and folders within a given directory, while ignoring certain files and folders specified in a list. This class can be used to manage the structure of a project, for example, by excluding certain files and folders from being processed or displayed.

### Key Features

- Get files and folders within a given directory
- Ignore specified files and folders
- Manage the structure of a project

## Helper

[**Source File on GitHub**](https://github.com/username/repository/blob/main/utils/Helper.ts)

The `Helper` class is a utility class that provides two static methods for string manipulation. These methods are useful for working with file names and text formatting. The class can be imported and used directly without the need to create an instance of the class.

### Key Features

- Static methods for string manipulation
- Work with file names and text formatting
- Import and use directly without creating an instance

##### This overview
is for the folder C:\Users\ingig\source\repos\CodeNarrator\src\utils