---
sidebar_position: 0
sidebar_label: ConfigurationBuilder.ts
---

# ConfigurationBuilder.ts

The `ConfigurationBuilder.ts` file is a TypeScript class that is responsible for generating documentation for configuration files in a project. It extends the `BaseBuilder` class and provides methods to generate documentation for both app-specific and general configuration files. The class also handles caching and updating the documentation when changes are detected in the configuration files.

## Table of Contents

- [Class: ConfigurationBuilder](#class-configurationbuilder)
  - [Constructor](#constructor)
  - [Methods](#methods)
    - [generate](#generate)
    - [prepareSummary](#preparesummary)
    - [generateSummary](#generatesummary)
    - [haveConfigFilesChanged](#haveconfigfileschanged)
    - [generateAppConfigFiles](#generateappconfigfiles)
    - [generateGeneralConfigFiles](#generategeneralconfigfiles)
    - [render](#render)

## Class: ConfigurationBuilder

### Constructor

The constructor takes a single parameter:

- `project`: The project object for which the documentation is being generated.

### Methods

#### generate

This async method generates the documentation for the configuration files. It calls the following methods in sequence:

1. `prepareSummary`
2. `generateAppConfigFiles`
3. `generateGeneralConfigFiles`
4. `generateSummary`

#### prepareSummary

This private async method prepares the summary of the configuration files by fetching the existing documentation from the cache and checking if any changes have been made to the configuration files. If changes are detected, it sets the `updateSummary` flag to `true`.

#### generateSummary

This private async method generates the summary of the configuration files if the `updateSummary` flag is set to `true`. It creates the documentation content for app-specific and general configuration files and saves it to the cache.

#### haveConfigFilesChanged

This private method checks if any changes have been made to the app-specific or general configuration files by comparing the cached documentation with the current file content. It returns `true` if changes are detected, otherwise `false`.

#### generateAppConfigFiles

This private async method generates the documentation for app-specific configuration files. It iterates through the list of app-specific configuration files, checks if any changes have been made, and generates the documentation using the `generateDocumentationAndCache` method from the `BaseBuilder` class.

#### generateGeneralConfigFiles

This private async method generates the documentation for general configuration files. It iterates through the list of general configuration files, checks if any changes have been made, and generates the documentation using the `generateDocumentationAndCache` method from the `BaseBuilder` class.

#### render

This async method takes a `Document` object as a parameter and returns the documentation content as a string.