# UserDefinedBuilder.ts

This is a TypeScript code file that defines a `UserDefinedBuilder` class, which extends the `BaseBuilder` class. The `UserDefinedBuilder` class is responsible for generating documentation based on user-defined templates and configurations.

## Table of Contents

- [Class Description](#class-description)
- [Methods](#methods)
  - [extractPathFromContent](#extractpathfromcontent)
  - [generate](#generate)
  - [generateFromBuilder](#generatefrombuilder)
  - [render](#render)
  - [hasTemplateChanged](#hastemplatechanged)

## Class Description

The `UserDefinedBuilder` class is designed to generate documentation based on user-defined templates and configurations. It provides methods to extract paths from content, generate documentation, and render the final output.

## Methods

### extractPathFromContent

```typescript
public extractPathFromContent(input: string): string | null
```

This method takes an input string and returns the extracted path from the content using a regular expression. If no match is found, it returns `null`.

### generate

```typescript
public async generate(): Promise<void>
```

This asynchronous method generates documentation for each builder in the `config.builders` array. It iterates through the builders and calls the `generateFromBuilder` method for each page in the builder's `pages` array.

### generateFromBuilder

```typescript
public async generateFromBuilder(builder: IBuilder, saveToPath: string, position: number, data: any): Promise<void>
```

This asynchronous method generates documentation for a specific builder. It takes the following parameters:

- `builder`: An `IBuilder` object containing the builder configuration.
- `saveToPath`: A string representing the path where the generated documentation should be saved.
- `position`: A number representing the position of the documentation in the sidebar.
- `data`: An object containing additional data for the documentation generation.

The method checks if the template file exists, and if not, it throws an error. It then checks if the template has changed since the last update and generates the documentation if necessary.

### render

```typescript
public async render(document: Document): Promise<string>
```

This asynchronous method takes a `Document` object and returns the rendered documentation as a string.

### hasTemplateChanged

```typescript
private hasTemplateChanged(document: Document | undefined, templatePath: string): boolean
```

This private method checks if the template has changed since the last update. It takes the following parameters:

- `document`: A `Document` object or `undefined` if the document does not exist.
- `templatePath`: A string representing the path to the template file.

The method returns `true` if the template has changed, and `false` otherwise.