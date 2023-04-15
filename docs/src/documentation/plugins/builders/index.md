---
nav_order: 30
title: builders

has_children: true
permalink: src\documentation\plugins\builders.md
---

```
# Documentation: Content of the Folder

This documentation provides an in-depth overview of the content of the folder and its responsibilities within the system. The folder contains files and subfolders that are crucial for generating and rendering documentation for various project structures.

## Table of Contents

- [BaseBuilder.ts](#basebuilderts)
- [Configuration](#configuration)
- [Files](#files)
- [Folders](#folders)
- [Howto](#howto)
- [UserDefined](#userdefined)
- [Repository Link](#repository-link)

## BaseBuilder.ts

The `BaseBuilder.ts` file is a TypeScript code file that defines an abstract class `BaseBuilder`. This class serves as the base class for Builder plugins, which are used to generate questions for GPT, parse the response, and load it into a `Document` object that is later cached.

[Read more about BaseBuilder.ts](BaseBuilder.ts)

## Configuration

This folder is responsible for managing the configuration files in the system. It contains a TypeScript file named `ConfigurationBuilder.ts` that defines a class for generating and managing configuration files.

[Read more about Configuration](Configuration)

## Files

This documentation provides an in-depth overview of the content of the folder and its responsibilities within the system. The folder contains files and subfolders that are crucial for generating and rendering documentation for various project structures.

[Read more about Files](Files)

## Folders

This documentation provides an in-depth overview of the `FoldersBuilder` module, which is responsible for generating documentation for a folder structure in a project. The module is implemented in the `FoldersBuilder.ts` file and extends the `BaseBuilder` class.

[Read more about Folders](Folders)

## Howto

This folder contains the necessary files and classes for generating and rendering documentation for "how-to" guides in the system. The main file in this folder is `HowToBuilder.ts`, which provides a class for extracting and formatting "how-to" content from the given files.

[Read more about Howto](Howto)

## UserDefined

This folder contains the necessary files to generate and render user-defined documentation based on templates and configurations. The main components are the `UserDefinedBuilder.ts` and `UserDefinedBuilderHelper.ts` files.

[Read more about UserDefined](UserDefined)

## Repository Link

[Access the repository here](https://github.com/ingig/code-narrator/src/documentation/plugins/builders)
```