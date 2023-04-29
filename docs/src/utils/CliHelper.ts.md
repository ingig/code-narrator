# CliHelper.ts

This is a TypeScript code file that contains the `CliHelper` class. The `CliHelper` class is responsible for handling command-line arguments and configuration for the Code Narrator application. It uses the `yargs` library to parse command-line arguments and provides methods to retrieve the configuration object.

## Usage

To use the `CliHelper` class, you need to import it and create an instance:

```typescript
import CliHelper from './CliHelper';

const cliHelper = new CliHelper();
```

## Methods

### getArgv()

This method returns a Promise that resolves to an object containing the parsed command-line arguments.

```typescript
const argv = await cliHelper.getArgv();
```

#### Options

- `-c, --config`: Path to configuration file (JSON or JavaScript). Optional.
- `-i, --include`: Array of specific files or folders to include in the documentation process. Optional.
- `-g, --gpt`: GPT model. Default is `gpt-4`. If you do not have access, the next best is `gpt-3.5-turbo`, but it is not as good. Optional.
- `-u, --userDefined`: Runs only update on userDefined builder from config matching template name. Optional.
- `--help, -h`: Show help information.

### getConfig(argv: any): Promise<Partial<ICodeNarratorConfig>>

This method takes the parsed command-line arguments object and returns a Promise that resolves to a partial `ICodeNarratorConfig` object containing the configuration.

```typescript
const config = await cliHelper.getConfig(argv);
```

#### Parameters

- `argv`: The parsed command-line arguments object.

## Technical Concepts

### yargs

`yargs` is a popular library for parsing command-line arguments in Node.js applications. It provides a fluent API for defining options, aliases, and descriptions, making it easy to create self-documenting command-line interfaces.

### ICodeNarratorConfig

`ICodeNarratorConfig` is an interface that defines the shape of the configuration object used by the Code Narrator application. It includes properties for specifying the GPT model, included files or folders, and user-defined templates.

### fs and path

`fs` and `path` are built-in Node.js modules for working with the file system and file paths, respectively. In this code file, they are used to check for the existence of configuration files and to read their contents.

### process.cwd()

`process.cwd()` is a built-in Node.js function that returns the current working directory of the process. It is used in this code file to resolve the paths of configuration files relative to the current working directory.

## Example

```typescript
import CliHelper from './CliHelper';

async function main() {
  const cliHelper = new CliHelper();
  const argv = await cliHelper.getArgv();
  const config = await cliHelper.getConfig(argv);

  console.log('Parsed command-line arguments:', argv);
  console.log('Configuration object:', config);
}

main();
```

This example demonstrates how to use the `CliHelper` class to parse command-line arguments and retrieve the configuration object.