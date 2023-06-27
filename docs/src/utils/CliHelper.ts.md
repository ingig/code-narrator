# CliHelper.ts

This is a TypeScript code file that exports a `CliHelper` class. The class is responsible for handling command-line arguments and configuration for the Code Narrator application. It uses the `yargs` library to parse command-line arguments and provides methods to retrieve the configuration object.

## Usage

To use the `CliHelper` class, you can create an instance of the class and call its methods to get the command-line arguments and configuration object.

```typescript
import CliHelper from './CliHelper';

const cliHelper = new CliHelper();
const argv = await cliHelper.getArgv();
const config = await cliHelper.getConfig(argv);
```

## Methods

### getArgv()

This method returns a Promise that resolves to an object containing the parsed command-line arguments. The supported arguments are:

- `-c` or `--config`: Path to the configuration file (JSON or JavaScript). This is an optional argument.
- `-i` or `--include`: An array of specific files or folders to include in the documentation process. This is an optional argument.
- `-g` or `--gpt`: The GPT model to use. Default is `gpt-4`. If you do not have access, the next best option is `gpt-3.5-turbo`. This is an optional argument.
- `-u` or `--userDefined`: Runs only update on userDefined builder from config matching template name. This is an optional argument.

### getConfig(argv: any): Promise<Partial<ICodeNarratorConfig>>

This method takes the parsed command-line arguments object (`argv`) as input and returns a Promise that resolves to a partial `ICodeNarratorConfig` object. The method reads the configuration file specified in the `argv` object and merges it with the command-line arguments to create the final configuration object.

## Technical Concepts

### yargs

`yargs` is a popular command-line arguments parser for Node.js applications. It provides a simple and powerful API to define and parse command-line arguments.

### ICodeNarratorConfig

`ICodeNarratorConfig` is an interface that defines the shape of the configuration object for the Code Narrator application. It includes properties like `include`, `gptModel`, and `userDefined`.

### Partial<T>

`Partial<T>` is a utility type provided by TypeScript that makes all properties of a given type `T` optional. In this case, it is used to create a partial `ICodeNarratorConfig` object that can be merged with the command-line arguments.

### fs and path

`fs` and `path` are built-in Node.js modules that provide file system and path manipulation utilities. They are used in this code to read the configuration file and resolve file paths.

### process.cwd()

`process.cwd()` is a built-in Node.js method that returns the current working directory of the Node.js process. It is used in this code to resolve the configuration file path relative to the current working directory.