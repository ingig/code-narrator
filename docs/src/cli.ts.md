# cli.ts

The `cli.ts` file is an entry point for a command-line interface (CLI) application. It is responsible for parsing command-line arguments, loading configuration files, and running the main application logic.

## Table of Contents

- [Usage](#usage)
- [Methods](#methods)
  - [getArgv](#getargv)
  - [getConfig](#getconfig)
- [Code Example](#code-example)

## Usage

To use the CLI application, run the following command:

```bash
./cli.ts [options]
```

Replace `[options]` with the desired command-line arguments.

## Methods

### getArgv

The `getArgv` method is responsible for parsing command-line arguments using the `yargs` library. It returns an object containing the parsed arguments.

**Parameters**: None

### getConfig

The `getConfig` method is responsible for loading the user configuration file. It takes the parsed command-line arguments as input and returns an object implementing the `ICodeNarratorConfig` interface.

**Parameters**:

- `argv`: An object containing the parsed command-line arguments.

## Code Example

Here's an example of how the `cli.ts` file is used:

```javascript
(async () => {
    let cliHelper = new CliHelper()
    const argv = await cliHelper.getArgv();
    let userConfig = await cliHelper.getConfig(argv);

    console.log('Starting code-narrator')

    let app = new App();
    await app.run(userConfig);
})().catch((e: any) => {
    console.error(e);
});
```

In this example, the `CliHelper` class is instantiated, and the command-line arguments are parsed using the `getArgv` method. The user configuration is then loaded using the `getConfig` method. Finally, the main application logic is executed by creating an instance of the `App` class and running its `run` method with the user configuration as input. If any errors occur during the execution, they are caught and logged to the console.