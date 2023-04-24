# CliHelper.ts

The `CliHelper.ts` file is a TypeScript module that provides a class `CliHelper` to handle command line arguments and configuration for the Code Narrator application. This class is responsible for parsing command line arguments, loading configuration files, and returning the configuration object.

## Usage

To use the `CliHelper` class, you need to import it and create an instance of the class. Then, you can call the `getArgv()` and `getConfig(argv: any)` methods to retrieve the command line arguments and configuration object, respectively.

```typescript
import CliHelper from './CliHelper';

const cliHelper = new CliHelper();
const argv = await cliHelper.getArgv();
const config = await cliHelper.getConfig(argv);
```

## Methods

### getArgv()

This method returns a Promise that resolves to an object containing the parsed command line arguments. It uses the `yargs` library to define and parse the command line options.

#### Options

- `-c, --config`: Path to the configuration file (JSON or JavaScript). Optional.
- `-i, --include`: An array of specific files or folders to include in the documentation process. Optional.
- `-g, --gpt`: GPT model. Default is `gpt-4`. If you do not have access, the next best option is `gpt-3.5-turbo`, but it is not as good. Optional.

### getConfig(argv: any)

This method takes the parsed command line arguments object (`argv`) as input and returns a Promise that resolves to a `Partial<ICodeNarratorConfig>` object containing the user configuration.

#### Parameters

- `argv`: The parsed command line arguments object.

#### Configuration Loading

The method first checks for the existence of a configuration file in the current working directory. It looks for the following files in order:

1. `code-narrator.config.ts`
2. `code-narrator.config.js`
3. `code-narrator.json`

If a configuration file is found, it is loaded and merged with the command line arguments. If no configuration file is found, the method uses the command line arguments as the configuration.

#### Configuration Object

The configuration object returned by this method has the following properties:

- `include`: An array of specific files or folders to include in the documentation process. Optional.
- `gptModel`: The GPT model to use. Default is `gpt-4`. Optional.
- `fromFile`: A boolean indicating whether the configuration was loaded from a file. This property is only present if a configuration file was found and loaded.

## Example Configuration File

Here's an example of a `code-narrator.config.js` file:

```javascript
module.exports = {
  include: ['src', 'lib'],
  gptModel: 'gpt-3.5-turbo',
};
```

And an example of a `code-narrator.json` file:

```json
{
  "include": ["src", "lib"],
  "gptModel": "gpt-3.5-turbo"
}
```