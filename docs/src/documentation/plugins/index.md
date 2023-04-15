---
nav_order: 30
title: plugins

has_children:true
---

# Documentation: Content of the Folder

This documentation provides an in-depth overview of the content of the folder and its responsibilities within the system. The folder contains files and subfolders that are crucial for generating and rendering documentation for various project structures.

## Table of Contents

- [GenerateOptions.ts](#GenerateOptionsts)
- [builders](#builders)
- [generators](#generators)

## GenerateOptions.ts

### Overview

The `GenerateOptions.ts` file is responsible for handling the options and configurations used during the documentation generation process. This file ensures that the correct settings are applied when generating documentation for different project structures.

[Link to GenerateOptions.ts documentation](GenerateOptions.ts)

## builders

The `builders` folder contains files and subfolders responsible for building and rendering the documentation content. This folder plays a crucial role in creating the final output of the documentation, which can be easily navigated and understood by users.

[Link to builders documentation](builders)

## generators

### Overview

The `generators` folder contains files and subfolders responsible for generating documentation using the provided JSON content. The main components of this folder are:

1. [BaseGenerator.ts](#BaseGeneratorts)
2. [Docusaurus](#Docusaurus)

### BaseGenerator.ts

The `BaseGenerator.ts` file serves as the foundation for all documentation generators within the system. It provides a set of common functionalities and methods that can be extended and customized by other generator classes.

[Link to BaseGenerator.ts documentation](generators/BaseGenerator.ts)

### Docusaurus

The `Docusaurus` folder contains files and subfolders responsible for generating documentation using the Docusaurus framework. This folder ensures that the generated documentation is compatible with the Docusaurus format and can be easily integrated into a Docusaurus project.

[Link to Docusaurus documentation](generators/Docusaurus)

[Link to repository](https://github.com/ingig/code-narrator/src/documentation/plugins)