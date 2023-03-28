---
sidebar_position: 30
sidebar_label: plugins
---

# plugins

This folder is responsible for managing the documentation generation process for various files and folders within the system. The content is divided into sections with clear headings and subheadings, providing high-level information about each file and folder.

## [GenerateOptions.ts](GenerateOptions.ts)

### Overview

## [builders](builders)

This folder is responsible for managing the documentation generation process for various files and folders within the system. The content is divided into sections with clear headings and subheadings, providing high-level information about each file and folder.

### Sections

## [generators](generators)

This folder is responsible for managing the generator plugins used to parse the documentation and modify it for the build tool you are using to build the documentation. The default plugin with code-narrator is Docusaurus since it fails to build when a function contains a `Promise<>` in return. This plugin clears that Promise from the function name so it can build. It also creates sidebar information.

### [BaseGenerator.ts](BaseGenerator.ts)

[Repository](https://github.com/ingig/code-narrator/src/documentation/plugins)