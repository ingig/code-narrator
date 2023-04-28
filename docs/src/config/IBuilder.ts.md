# IBuilder.ts

This TypeScript file defines the `IBuilder` interface, which is used to represent a builder object in the application. The builder object is responsible for generating documentation pages based on the provided configuration. The file also defines the `BuilderType` type and the `IFile` interface.

## Table of Contents

- [IBuilder Interface](#ibuilder-interface)
- [BuilderType Type](#buildertype-type)
- [IFile Interface](#ifile-interface)
- [Examples](#examples)

## IBuilder Interface

The `IBuilder` interface represents a builder object with the following properties:

- `type`: A `BuilderType` value that specifies the type of the builder.
- `name`: A `string` that represents the unique name of the builder.
- `title?`: An optional `string` that represents the title of the generated documentation page.
- `template`: A `string` that specifies the template file to be used for generating the documentation page.
- `args?`: An optional `any` type that can be used to pass additional arguments to the builder.
- `files?`: An optional array of `IFile` objects that represent the files to be included in the generated documentation page.
- `path?`: An optional `string` that specifies the output path for the generated documentation page.
- `sidebarPosition?`: An optional `number` that determines the position of the generated page in the sidebar.
- `sidebarLabel?`: An optional `string` that specifies the label for the generated page in the sidebar.
- `pages?`: An optional array of `IBuilder` objects that represent the child pages of the generated documentation page.

## BuilderType Type

The `BuilderType` type is a union type that can have one of the following values:

- `'howto'`: Represents a how-to guide.
- `'faq'`: Represents a frequently asked questions (FAQ) page.
- `'tutorial'`: Represents a tutorial.
- `'README'`: Represents a README file.
- `'custom'`: Represents a custom documentation page.

## IFile Interface

The `IFile` interface represents a file object with the following properties:

- `path`: A `string` that specifies the file path.
- `JSONPath?`: An optional array of `string` values that represent the JSON paths to be extracted from the file.
- `extract?`: An optional array of `string` values that specify the sections to be extracted from the file.

## Examples

### Example 1: Creating a How-to Guide Builder

```typescript
const howToBuilder: IBuilder = {
  type: 'howto',
  name: 'installing-dependencies',
  title: 'Installing Dependencies',
  template: 'howto-template.md',
  path: 'guides/installing-dependencies.md',
  sidebarPosition: 1,
  sidebarLabel: 'Installing Dependencies',
};
```

### Example 2: Creating a Tutorial Builder with Child Pages

```typescript
const tutorialBuilder: IBuilder = {
  type: 'tutorial',
  name: 'getting-started',
  title: 'Getting Started',
  template: 'tutorial-template.md',
  path: 'tutorials/getting-started.md',
  sidebarPosition: 2,
  sidebarLabel: 'Getting Started',
  pages: [
    {
      type: 'tutorial',
      name: 'step-1',
      title: 'Step 1: Setting Up the Environment',
      template: 'tutorial-step-template.md',
      path: 'tutorials/getting-started/step-1.md',
    },
    {
      type: 'tutorial',
      name: 'step-2',
      title: 'Step 2: Creating Your First Project',
      template: 'tutorial-step-template.md',
      path: 'tutorials/getting-started/step-2.md',
    },
  ],
};
```