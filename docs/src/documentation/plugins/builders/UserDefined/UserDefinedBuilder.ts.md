# UserDefinedBuilder.ts

The `UserDefinedBuilder.ts` file is a TypeScript code file that exports a `UserDefinedBuilder` class, which extends the `BaseBuilder` class. This class is responsible for generating documentation based on user-defined templates and configurations.

## Class: UserDefinedBuilder

### Constructor

The constructor initializes the `UserDefinedBuilder` class with the type 'UserDefined'.

### Method: extractPathFromContent(input: string): string | null

This method takes an input string and extracts the content path using a regular expression. It returns the extracted path or null if no match is found.

### Method: generate()

This method generates documentation for each builder in the configuration. It iterates through the builders and their pages, calling the `generateFromBuilder` method for each page and the builder itself.

### Method: generateFromBuilder(builder: IBuilder, saveToPath: string, position: number, data: any)

This method generates documentation for a specific builder. It takes the following parameters:

- `builder`: The builder object to generate documentation for.
- `saveToPath`: The path where the generated documentation should be saved.
- `position`: The position of the documentation in the sidebar.
- `data`: Additional data to be passed to the documentation generation process.

The method first checks if the template file exists, and if not, throws an error. It then checks if the template has changed since the last documentation generation. If it has, it proceeds to generate the documentation using the `UserDefinedBuilderHelper` class and the `generateDocumentationAndCache` method from the `BaseBuilder` class.

### Method: hasTemplateChanged(document: Document | undefined, templatePath: string)

This method checks if the template has changed since the last documentation generation. It takes the following parameters:

- `document`: The document object representing the previously generated documentation.
- `templatePath`: The path to the template file.

The method returns true if the template has changed, and false otherwise.

## Example Usage

To use the `UserDefinedBuilder` class, you would first import it and create an instance:

```typescript
import UserDefinedBuilder from "./UserDefinedBuilder";

const userDefinedBuilder = new UserDefinedBuilder();
```

Then, you can call the `generate` method to generate documentation based on the user-defined templates and configurations:

```typescript
await userDefinedBuilder.generate();
```

You can also call the `generateFromBuilder` method to generate documentation for a specific builder:

```typescript
await userDefinedBuilder.generateFromBuilder(builder, saveToPath, position, data);
```