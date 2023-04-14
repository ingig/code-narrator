---
sidebar_position: 1
sidebar_label: cli.ts
---

# cli.ts

`cli.ts` is a command-line interface (CLI) script that serves as the entry point for the Code Narrator application. It handles the parsing of command-line arguments, loading of user configurations, and the execution of the main application logic.

## Table of Contents

- [Usage](#usage)
- [Methods](#methods)
  - [getArgv](#getargv)
  - [getConfig](#getconfig)
- [Code Example](#code-example)

## Usage

To use the CLI, run the following command in your terminal:

```bash
$ code-narrator [options]
```

## Methods

### getArgv

This method is responsible for parsing command-line arguments using the `yargs` library. It returns an object containing the parsed arguments.

### getConfig

This method takes the parsed command-line arguments as input and returns a user configuration object. It reads the configuration file specified by the user, validates it, and merges it with the default configuration.

#### Parameters

- `argv`: An object containing the parsed command-line arguments.

## Code Example

Below is the content of the `cli.ts` file:

```javascript
#!/usr/bin/env node

import App from "./App";
import ICodeNarratorConfig from "./config/ICodeNarratorConfig";
import fs from "fs";
import yargs from "yargs";
import path from "path";
import * as process from "process";
import CliHelper from "./utils/CliHelper";

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

In this file, an instance of `CliHelper` is created, and its `getArgv` and `getConfig` methods are used to obtain the command-line arguments and user configuration, respectively. The main `App` class is then instantiated and executed with the user configuration.