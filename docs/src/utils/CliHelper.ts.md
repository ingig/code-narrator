# CliHelper.ts

This is a TypeScript code file that provides a `CliHelper` class to handle command-line arguments and configuration for the Code Narrator application. The class contains two main methods: `getArgv()` and `getConfig(argv: any)`.

## Usage

To use the `CliHelper` class, first import it:

```typescript
import CliHelper from './CliHelper';
```

Then, create an instance of the class and call its methods:

```typescript
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

### getConfig(argv: any)

This method takes the parsed command-line arguments object (from `getArgv()`) as input and returns a Promise that resolves to a `Partial<ICodeNarratorConfig>` object. The method reads the configuration file specified in the `--config` argument or looks for a default configuration file in the current working directory. It then merges the command-line arguments with the configuration file settings.

The method supports the following configuration file formats:

- `.ts`: TypeScript configuration file
- `.js`: JavaScript configuration file
- `.json`: JSON configuration file

## Configuration

The `ICodeNarratorConfig` interface defines the structure of the configuration object. The supported properties are:

- `include`: An array of specific files or folders to include in the documentation process.
- `gptModel`: The GPT model to use.
- `userDefined`: A property to store the user-defined template name for updating.

## Example

Here's an example of how to use the `CliHelper` class:

```typescript
import CliHelper from './CliHelper';

async function main() {
  const cliHelper = new CliHelper();
  const argv = await cliHelper.getArgv();
  const config = await cliHelper.getConfig(argv);

  console.log('Configuration:', config);
}

main();
```

When running this example with the following command-line arguments:

```
node example.js --config code-narrator.config.js --include src --gpt gpt-3.5-turbo --userDefined myTemplate
```

The output will be:

```
Configuration: {
  include: ['src'],
  gptModel: 'gpt-3.5-turbo',
  userDefined: 'myTemplate',
  fromFile: true
}
```