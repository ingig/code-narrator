---
sidebar_label: DocumentPlugins
sidebar_position: 1
---
# DocumentPlugins

The `DocumentPlugins` class is a collection of plugins that are used to generate documentation for various types of files and folders. These plugins are organized into different categories based on their purpose and usage. This document will provide a detailed description of the `DocumentPlugins` class, its methods, and examples of how to use it.

## Table of Contents

- [Examples](#examples)
- [Methods](#methods)
  - [InitPlugins](#initplugins)
  - [PostInitPlugins](#postinitplugins)
  - [FolderPlugins](#folderplugins)
  - [ProjectPlugins](#projectplugins)

## Examples

Before diving into the methods of the `DocumentPlugins` class, let's look at some examples of how to use this class.

```javascript
import DocumentPlugins from "./DocumentPlugins";

// Initialize the plugins
const initPlugins = DocumentPlugins.InitPlugins;

// Use the FileSummary plugin
const fileSummary = new initPlugins[0]();
fileSummary.generateSummary();

// Use the FolderSummary plugin
const folderPlugins = DocumentPlugins.FolderPlugins;
const folderSummary = new folderPlugins[0]();
folderSummary.generateSummary();

// Use the GetStartedSummary plugin
const projectPlugins = DocumentPlugins.ProjectPlugins;
const getStartedSummary = new projectPlugins[0]();
getStartedSummary.generateSummary();
```

## Methods

The `DocumentPlugins` class contains four static properties that represent different categories of plugins. Each property is an array of plugin classes that can be instantiated and used to generate documentation.

### InitPlugins

`InitPlugins` is an array of plugin classes that are used to initialize the documentation generation process. These plugins are typically used to generate summaries or overviews of files.

Example:

```javascript
const initPlugins = DocumentPlugins.InitPlugins;
const fileSummary = new initPlugins[0]();
fileSummary.generateSummary();
```

### PostInitPlugins

`PostInitPlugins` is an array of plugin classes that are used after the initialization process. These plugins can be used to generate additional documentation, such as flowcharts, naming conventions, or new code examples.

Example:

```javascript
const postInitPlugins = DocumentPlugins.PostInitPlugins;
const flowChart = new postInitPlugins[0]();
flowChart.generateFlowChart();
```

### FolderPlugins

`FolderPlugins` is an array of plugin classes that are used to generate documentation for folders. These plugins can be used to generate summaries or overviews of folders and their contents.

Example:

```javascript
const folderPlugins = DocumentPlugins.FolderPlugins;
const folderSummary = new folderPlugins[0]();
folderSummary.generateSummary();
```

### ProjectPlugins

`ProjectPlugins` is an array of plugin classes that are used to generate documentation for entire projects. These plugins can be used to generate high-level overviews, such as getting started guides or behavior summaries.

Example:

```javascript
const projectPlugins = DocumentPlugins.ProjectPlugins;
const getStartedSummary = new projectPlugins[0]();
getStartedSummary.generateSummary();
```

## Conclusion

The `DocumentPlugins` class provides a convenient way to organize and use various plugins for generating documentation. By categorizing the plugins into different arrays, it's easy to find and use the appropriate plugin for a specific task.