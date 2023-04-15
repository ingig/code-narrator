---
nav_order: 3
title: IBuilder.ts
parent: config

permalink: src\config\IBuilder.ts.md
---

# IBuilder.ts

This TypeScript file defines the `IBuilder` interface, which is used to represent a builder object in the application. The file also includes the `BuilderType` type definition, and two additional interfaces: `IFile` and `ISitemap`.

## Table of Contents

- [Overview](#overview)
- [IBuilder Interface](#ibuilder-interface)
- [BuilderType Type](#buildertype-type)
- [IFile Interface](#ifile-interface)
- [ISitemap Interface](#isitemap-interface)

## Overview

The `IBuilder` interface is designed to provide a structure for builder objects, which are used to generate documentation or other content based on templates and input data. The `BuilderType` type is used to specify the type of builder, while the `IFile` and `ISitemap` interfaces define the structure of file and sitemap objects, respectively.

## IBuilder Interface

The `IBuilder` interface contains the following properties:

- `type`: The type of the builder, represented by the `BuilderType` type.
- `name`: A unique string identifier for the builder.
- `title`: A human-readable string title for the builder.
- `template`: A string representing the template file used by the builder.
- `args`: An object containing any additional arguments required by the builder.
- `files`: An array of `IFile` objects representing the files associated with the builder.
- `path`: A string representing the output path for the generated content.
- `sidebarPosition`: A number representing the position of the builder in the sidebar.
- `sidebarLabel`: A string representing the label for the builder in the sidebar.

## BuilderType Type

The `BuilderType` type is a union type that can take one of the following values:

- `'howto'`: Represents a how-to guide builder.
- `'README'`: Represents a README file builder.
- `'custom'`: Represents a custom builder.

## IFile Interface

The `IFile` interface contains the following properties:

- `path`: A string representing the file path.
- `JSONPath`: An array of strings representing the JSON path to the data used by the builder.
- `extract`: An array of strings representing the properties to be extracted from the data.

## ISitemap Interface

The `ISitemap` interface contains the following properties:

- `enable`: A boolean value indicating whether the sitemap feature is enabled.
- `url`: A string representing the URL of the sitemap.

### Example Usage

```typescript
import IBuilder, { IFile, ISitemap } from './IBuilder';

const builder: IBuilder = {
  type: 'howto',
  name: 'exampleBuilder',
  title: 'Example Builder',
  template: 'exampleTemplate.html',
  args: { exampleArg: 'value' },
  files: [
    {
      path: 'exampleFile.json',
      JSONPath: ['data', 'example'],
      extract: ['property1', 'property2'],
    },
  ],
  path: 'output/',
  sidebarPosition: 1,
  sidebarLabel: 'Example',
};

const sitemap: ISitemap = {
  enable: true,
  url: 'https://example.com/sitemap.xml',
};
```