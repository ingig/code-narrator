---
nav_order: 0
title: CliHelper.ts
parent: utils

---

# CliHelper.ts

This is a TypeScript code file that contains a class named `CliHelper`. The class is responsible for handling command line arguments and configuration for a tool called Code Narrator. The class has two main methods: `getArgv()` and `getConfig()`.

## Usage

To use the `CliHelper` class, you need to import it and create an instance of the class. Then, you can call the `getArgv()` and `getConfig()` methods to retrieve command line arguments and configuration, respectively.

```typescript
import CliHelper from './CliHelper';

const cliHelper = new CliHelper();
const argv = await cliHelper.getArgv();
const config = await cliHelper.getConfig(argv);
```

## Methods

### getArgv()

This method returns a Promise that resolves to an object containing the parsed command line arguments. It uses the `yargs` library to define and parse the arguments.

#### Options

- `-c, --config`: Path to configuration file (JSON or JavaScript). Optional.
- `-i, --include`: An array of specific files or folders to include in the documentation process. Optional.
- `-g, --gpt`: GPT model. Default is `gpt-4`. If you do not have access, the next best option is `gpt-3.5-turbo`, but it is not as good. Optional.

### getConfig(argv: any): Promise<Partial<ICodeNarratorConfig>>

This method takes the parsed command line arguments as input and returns a Promise that resolves to a `Partial<ICodeNarratorConfig>` object containing the user's configuration.

#### Parameters

- `argv`: The parsed command line arguments.

#### Configuration Resolution

The method first checks for the existence of a configuration file in the current working directory. It looks for the following files in order:

1. `code-narrator.config.ts`
2. `code-narrator.config.js`
3. `code-narrator.json`

If a configuration file is found, it is imported and merged with the command line arguments. If a configuration file is not found, the method uses the command line arguments as the configuration.

## Technical Concepts

### ICodeNarratorConfig

`ICodeNarratorConfig` is an interface that defines the shape of the configuration object for Code Narrator. It includes properties such as `include` (an array of files or folders to include in the documentation process) and `gptModel` (the GPT model to use).

### Partial<T>

`Partial<T>` is a utility type provided by TypeScript that makes all properties of a type `T` optional. In this case, it is used to create a configuration object that may not have all properties defined.