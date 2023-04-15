---
nav_order: 13
title: Use CLI


---

# How to Use Code-Narrator CLI

## Introduction

Code-Narrator is a CLI tool that helps you run the main app using npx. It allows you to use an optional config file, which Code-Narrator can generate for you if not provided. This guide will walk you through the installation and usage of Code-Narrator.

## Step-by-Step Instructions

1. **Install Code-Narrator**: To install Code-Narrator, open your terminal and run the following command:

```bash
npm install code-narrator -D
```

2. **Run Code-Narrator**: To run Code-Narrator, use the following command in your terminal:

```bash
npx code-narrator
```

You can also provide optional parameters when running the command.

3. **Understand the CLI**: The `src/cli.ts` file contains the main logic for the CLI. It imports the necessary modules, sets up the command-line arguments, and runs the main app. Here's a brief overview of the file content:

```typescript
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

4. **Repository**: The Code-Narrator repository can be found on GitHub at the following URL:

[https://github.com/ingig/code-narrator](https://github.com/ingig/code-narrator)

Now you know how to install and use Code-Narrator CLI. Enjoy using this tool to run the main app with ease!