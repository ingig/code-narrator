# UserDefinedBuilder.ts

UserDefinedBuilder.ts is a TypeScript code file that defines a class `UserDefinedBuilder` which extends the `BaseBuilder` class. This class is responsible for generating documentation based on user-defined templates and configurations.

## Table of Contents

- [Class: UserDefinedBuilder](#class-userdefinedbuilder)
  - [Constructor](#constructor)
  - [Methods](#methods)
    - [extractPathFromContent](#extractpathfromcontent)
    - [generate](#generate)
    - [generateFromBuilder](#generatefrombuilder)
    - [hasTemplateChanged](#hastemplatechanged)
    - [getAffectedFilePaths](#getaffectedfilepaths)

## Class: UserDefinedBuilder

### Constructor

The constructor initializes the `UserDefinedBuilder` class by calling the `super` constructor with the argument 'UserDefined'.

```typescript
constructor() {
    super('UserDefined');
}
```

### Methods

#### extractPathFromContent

This method takes an input string and extracts the content path using a regular expression.

```typescript
public extractPathFromContent(input: string): string | null
```

**Parameters:**

- `input` (string): The input string to extract the content path from.

**Returns:**

- (string | null): The extracted content path or null if not found.

#### generate

This method generates documentation for each builder in the configuration.

```typescript
public async generate()
```

#### generateFromBuilder

This method generates documentation for a specific builder, saving it to the specified path and position.

```typescript
public async generateFromBuilder(builder : IBuilder, saveToPath : string, position : number, data : any)
```

**Parameters:**

- `builder` (IBuilder): The builder object to generate documentation from.
- `saveToPath` (string): The path to save the generated documentation.
- `position` (number): The position of the generated documentation in the output.
- `data` (any): Additional data to be passed to the documentation generation process.

#### hasTemplateChanged

This method checks if the template has changed since the last time the documentation was generated.

```typescript
private hasTemplateChanged(document: Document | undefined, builder : IBuilder, templatePath: string): boolean
```

**Parameters:**

- `document` (Document | undefined): The document object representing the previously generated documentation.
- `builder` (IBuilder): The builder object to check for template changes.
- `templatePath` (string): The path to the template file.

**Returns:**

- (boolean): True if the template has changed, false otherwise.

#### getAffectedFilePaths

This method retrieves the file paths affected by the builder's arguments and files.

```typescript
private getAffectedFilePaths(builder: IBuilder): string[]
```

**Parameters:**

- `builder` (IBuilder): The builder object to get the affected file paths from.

**Returns:**

- (string[]): An array of affected file paths.