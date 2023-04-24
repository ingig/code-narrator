# IBuilder.ts

This TypeScript file defines an interface called `IBuilder` and its related types. The `IBuilder` interface is used to represent a builder object that can be used to generate documentation pages or sections based on the provided configuration.

## Table of Contents

- [IBuilder Interface](#ibuilder-interface)
- [BuilderType Type](#buildertype-type)
- [IFile Interface](#ifile-interface)
- [Examples](#examples)

## IBuilder Interface

The `IBuilder` interface contains the following properties:

- `type`: (BuilderType) The type of the builder, which can be one of the following values: 'howto', 'tutorial', 'README', or 'custom'.
- `name`: (string) The unique name of the builder.
- `title?`: (string, optional) The title of the generated documentation page or section.
- `template`: (string) The template file used to generate the documentation.
- `args?`: (any, optional) Additional arguments that can be passed to the builder.
- `files?`: (IFile[], optional) An array of `IFile` objects representing the files to be included in the documentation.
- `path?`: (string, optional) The path where the generated documentation should be saved.
- `sidebarPosition?`: (number, optional) The position of the generated documentation in the sidebar.
- `sidebarLabel?`: (string, optional) The label of the generated documentation in the sidebar.
- `pages?`: (IBuilder[], optional) An array of `IBuilder` objects representing the child pages or sections of the documentation.

## BuilderType Type

The `BuilderType` type is a union type that can have one of the following values:

- 'howto': Represents a how-to guide.
- 'tutorial': Represents a tutorial.
- 'README': Represents a README file.
- 'custom': Represents a custom documentation type.

## IFile Interface

The `IFile` interface contains the following properties:

- `path`: (string) The path of the file to be included in the documentation.
- `JSONPath?`: (string[], optional) An array of strings representing the JSONPath expressions to extract data from the file.
- `extract?`: (string[], optional) An array of strings representing the properties to extract from the file.

## Examples

### Example 1: Creating a How-to Guide Builder

```typescript
const howToBuilder: IBuilder = {
  type: 'howto',
  name: 'how-to-install',
  title: 'How to Install',
  template: 'how-to-install-template.md',
  files: [
    {
      path: 'installation-guide.md',
    },
  ],
  sidebarPosition: 1,
  sidebarLabel: 'Installation Guide',
};
```

### Example 2: Creating a Tutorial Builder with Child Pages

```typescript
const tutorialBuilder: IBuilder = {
  type: 'tutorial',
  name: 'getting-started',
  title: 'Getting Started',
  template: 'getting-started-template.md',
  files: [
    {
      path: 'introduction.md',
    },
    {
      path: 'prerequisites.md',
    },
  ],
  sidebarPosition: 2,
  sidebarLabel: 'Getting Started',
  pages: [
    {
      type: 'tutorial',
      name: 'step-1',
      title: 'Step 1: Setting Up',
      template: 'step-1-template.md',
      files: [
        {
          path: 'step-1.md',
        },
      ],
    },
    {
      type: 'tutorial',
      name: 'step-2',
      title: 'Step 2: Configuration',
      template: 'step-2-template.md',
      files: [
        {
          path: 'step-2.md',
        },
      ],
    },
  ],
};
```