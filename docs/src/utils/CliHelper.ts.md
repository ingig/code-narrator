# CliHelper.ts

`CliHelper.ts` is a TypeScript file that provides a class `CliHelper` to handle command line arguments and configuration for a software application. The class contains two main methods: `getArgv()` and `getConfig(argv: any)`.

## Usage

To use the `CliHelper` class, you need to import it and create an instance of the class. Then, you can call the `getArgv()` method to get the command line arguments and the `getConfig(argv: any)` method to get the configuration based on the provided arguments.

```typescript
import CliHelper from './CliHelper';

const cliHelper = new CliHelper();
const argv = await cliHelper.getArgv();
const config = await cliHelper.getConfig(argv);
```

## Methods

### getArgv()

This method returns a `Promise` that resolves to an object containing the parsed command line arguments. The supported arguments are:

- `-c` or `--config`: Path to the configuration file (JSON or JavaScript). This is an optional argument.
- `-i` or `--include`: An array of specific files or folders to include in the documentation process. This is an optional argument.
- `-g` or `--gpt`: GPT model to use. Default is `gpt-4`. If you do not have access, the next best option is `gpt-3.5-turbo`. This is an optional argument.
- `-u` or `--userDefined`: Runs only update on userDefined builder from config matching template name. This is an optional argument.

### getConfig(argv: any)

This method takes the parsed command line arguments as input and returns a `Promise` that resolves to a `Partial<ICodeNarratorConfig>` object containing the configuration based on the provided arguments.

The method first checks for the existence of a configuration file in the current working directory. If a configuration file is found, it imports the configuration and merges it with the command line arguments.

The method supports the following configuration options:

- `include`: An array of specific files or folders to include in the documentation process.
- `gptModel`: The GPT model to use. Default is `gpt-4`.
- `userDefined`: Runs only update on userDefined builder from config matching template name.

## Example

```typescript
import CliHelper from './CliHelper';

(async () => {
  const cliHelper = new CliHelper();
  const argv = await cliHelper.getArgv();
  const config = await cliHelper.getConfig(argv);

  console.log('Configuration:', config);
})();
```

When running the above example with the following command:

```
node example.js -c ./config.json -i src/index.ts -g gpt-3.5-turbo -u myTemplate
```

The output will be:

```
Configuration: {
  include: ['src/index.ts'],
  gptModel: 'gpt-3.5-turbo',
  userDefined: 'myTemplate',
  fromFile: true
}
```