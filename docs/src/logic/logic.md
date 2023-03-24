---
sidebar_label: Logic
sidebar_position: 101
---
# logic

This folder contains the core logic for generating documentation for a given project. It consists of four main files: `DocumentationBuilder`, `DocumentationCache`, `DocumentationGenerator`, and `ProjectLogic`. Each file serves a specific purpose in the documentation generation process.

## [DocumentationBuilder](https://github.com/username/repository/blob/main/logic/DocumentationBuilder.py)

The `DocumentationBuilder` class is responsible for generating documentation for a given project. It uses the OpenAIRepository to query GPT for generating the content of the documentation. The class also utilizes various plugins to process and structure the generated content.

### Key Features

- Generates documentation content using GPT
- Utilizes plugins for processing and structuring content

## [DocumentationCache](https://github.com/username/repository/blob/main/logic/DocumentationCache.py)

The `DocumentationCache` class is a utility class that helps manage a cache of `Document` objects. It provides methods to load, get, set, and retrieve documents by their folder path. The cache is stored in a JSON file located at `.codenarrator\cache.json` in the project path.

### Key Features

- Manages a cache of `Document` objects
- Provides methods for loading, getting, setting, and retrieving documents
- Stores cache in a JSON file

## [DocumentationGenerator](https://github.com/username/repository/blob/main/logic/DocumentationGenerator.py)

The `DocumentationGenerator` class is a utility for generating documentation files in the Docusaurus format. It reads the configuration settings, retrieves the documentation suggestions from the cache, and creates the corresponding markdown files in the specified Docusaurus directory.

### Key Features

- Generates documentation files in Docusaurus format
- Reads configuration settings
- Retrieves documentation suggestions from cache
- Creates markdown files in specified Docusaurus directory

## [ProjectLogic](https://github.com/username/repository/blob/main/logic/ProjectLogic.py)

The `ProjectLogic` class is a utility class that helps in managing the project structure. It provides methods to get the folder structure of a project. This class uses the `ConfigHelper` and `FolderStructure` utility classes to perform its operations.

### Key Features

- Manages project structure
- Provides methods for getting folder structure
- Utilizes `ConfigHelper` and `FolderStructure` utility classes

##### This overview
is for the folder C:\Users\ingig\source\repos\CodeNarrator\src\logic