---
nav_order: 31
title: generators

has_children: true
permalink: docs/src/documentation/plugins/generators/index.md
---

# Documentation: Content of the Folder

This folder contains files and subfolders responsible for generating documentation using the provided JSON content. The main components of this folder are:

1. [BaseGenerator.ts](#BaseGenerator.ts)
2. [Docusaurus](#Docusaurus)

## BaseGenerator.ts

The `BaseGenerator.ts` file is a TypeScript code file that defines the base class for Generator plugins. Generator plugins are used to parse the documentation and modify it for the build tool you are using to build the documentation.

The default plugin with code-narrator is Docusaurus since it fails to build when a function contains a `Promise<>` in return. This plugin clears that Promise from the function name so it can build. It also creates sidebar information.

### Usage

For more information on how to use the BaseGenerator.ts, please refer to the [BaseGenerator.ts documentation](BaseGenerator.ts).

## Docusaurus

This folder contains the implementation of the Docusaurus generator, which is responsible for processing a `Document` object and generating documentation compatible with Docusaurus.

### Table of Contents

For more information on the Docusaurus generator and its components, please refer to the [Docusaurus Generator Documentation](Docusaurus).

---

Link to the repository: [https://github.com/ingig/code-narrator/src/documentation/plugins/generators](https://github.com/ingig/code-narrator/src/documentation/plugins/generators)