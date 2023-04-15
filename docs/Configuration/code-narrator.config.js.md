---
nav_order: 0
title: Code-narrator.config.js
parent: Configuration

permalink: code-narrator.config.js
---

Here's a detailed description of the `code-narrator.config.js` file and its purpose in the application:

The `code-narrator.config.js` file is a configuration file for the Code Narrator application. It contains various settings and configurations that are used by the application to generate documentation for your project. The file exports a `config` object with the following properties:

- `entry_file`: The entry point file for the application (e.g., `./dist/src/App.js`).
- `cli_file`: The command-line interface file for the application (e.g., `./dist/src/cli.js`).
- `project_name`: The name of the project (e.g., `code-narrator`).
- `config_files`: An array of configuration files used by the application (e.g., `["code-narrator.config.js"]`).
- `readmeRoot`: A boolean value indicating whether the README file should be generated at the root level of the project.
- `repository_url`: The URL of the project's repository (e.g., `https://github.com/ingig/code-narrator`).
- `project_file`: The main project file (e.g., `package.json`).
- `source_path`: The path to the source code (e.g., `src`).
- `documentation_path`: The path to the documentation folder (e.g., `docs`).
- `test_path`: The path to the test folder (e.g., `__tests__`).
- `include`: An array of file patterns to include in the documentation generation process.
- `builders`: An array of builder objects that define how the documentation should be generated.
- `generatorPlugin`: An array of generator plugins used by the application (e.g., `[JenkyllGenerator]`).
- `sitemap`: An object containing sitemap configuration settings.
- `rootFileName`: The name of the root file for the generated documentation (e.g., `index.html`).

To retrieve a value from the config file, you can use the following example:

```javascript
const config = require("./code-narrator.config.js");

console.log(config.entry_file); // Output: "./dist/src/App.js"
```

Please note that I have replaced any sensitive information with `*****`.