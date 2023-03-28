# code-narrator

code-narrator is a self-documenting tool that uses OpenAI to generate documentation on code and tests. It is a friend to the lazy developer and should be a validation of the documentation working, similar to a compiler compiling itself. Use the `code-narrator.config.ts` file to set the configuration for your project, such as project path, doc, documentation type, and more.

## Installation

To install the project, run:

```
npm i code-narrator
```

## Configuration

Configure the project using the `code-narrator.config.ts` file. Here's an example configuration:

```typescript
export default {
    projects : [{
        // ...
    }],
    builderPlugins : [
        // ...
    ],
    generatorPlugin : [
        // ...
    ],
    systemCommands : [
        // ...
    ],
    documentation_type: 'md',
    document_file_extension: ".md",
    cache_file : '.code-narrator/cache.json'
};
```

:::danger
Make sure to commit the `.code-narrator/cache.json` file into git.
:::

## Running the Project

To run the project, execute:

```
npm run start
```

or use the CLI:

```
code-narrator-cli
```

## Running Tests

To run tests for the project, execute:

```
npm test
```

## Support and Repository

- Post bugs and issues on the [GitHub Issues page](https://github.com/ingig/code-narrator/issues).
- Visit the [project homepage](https://github.com/ingig/code-narrator) for more information.
- Access the [repository](https://github.com/ingig/code-narrator).

## Dependencies

- asynckit: ^0.4.0
- axios: ^0.26.1
- combined-stream: ^1.0.8
- delayed-stream: ^1.0.0
- dotenv: ^16.0.3
- extract-json-from-string: ^1.0.1
- follow-redirects: ^1.15.2
- form-data: ^4.0.0
- liquidjs: ^10.7.0
- mime-db: ^1.52.0
- mime-types: ^2.1.35
- openai: ^3.1.0
- @babel/preset-typescript: ^7.21.0
- @jest/globals: ^29.5.0
- @types/jest: ^29.4.0
- @types/node: ^18.11.19
- jest: ^29.4.2
- ts-jest: ^29.0.5
- ts-node: ^10.9.1
- typescript: ^4.9.5