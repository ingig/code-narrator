# API

## Table of Contents
1. [Introduction](#introduction)
2. [Files](#files)
  - [App.ts](#appts)
3. [Sub-folders](#subfolders)
  - [Documentation](#documentation)
  - [Logic](#logic)
  - [Repositories](#repositories)
  - [Utils](#utils)

<a name="introduction"></a>

## Introduction
This document provides an in-depth overview of the source folder for the code-narrator application, its files and sub-folders, and their key features. The source folder contains the main entry point of the application, the `App` class, and four sub-folders: `documentation`, `logic`, `repositories`, and `utils`.

## Files

### App.ts
The `App.ts` file contains the `App` class, which is the main entry point of the code-narrator application. The `App` class is responsible for:

1. Loading the configuration and cached documentation
2. Parsing the project code
3. Generating documentation using GPT
4. Writing the generated documentation to the cache
5. Creating the complete documentation from the cache

The `App.ts` file can be found in the original [source on GitHub](https://github.com/repository/path/src/App.ts).

## Sub-folders
### Documentation
The `documentation` folder contains the `Document` class, which is a utility class that represents a document with its metadata and content. It provides methods to manage the document's plugins and their data. The `Document` class can be used to create, read, and update documents and their associated plugins. For more information, refer to the [`documentation`](documentation.md) documentation.

### Logic
The `logic` folder contains the core logic for generating documentation for a given project. It consists of four main files: `DocumentationBuilder`, `DocumentationCache`, `DocumentationGenerator`, and `ProjectLogic`. Each file serves a specific purpose in the documentation generation process. For more information, refer to the [`logic`](logic.md) documentation.

### Repositories
The `repositories` folder contains files responsible for managing data storage and retrieval for the code-narrator application. For more information, refer to the [`repositories`](repositories.md) documentation.

### Utils
The `utils` folder contains utility files that provide various functionalities to manage configuration settings, file and folder structures, and string manipulation. The utility files include [ConfigHelper](#confighelper), [FileStructure](#filestructure), [FolderStructure](#folderstructure), and [Helper](#helper). For more information, refer to the [`utils`](utils.md) documentation.
