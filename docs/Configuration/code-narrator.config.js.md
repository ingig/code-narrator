---
sidebar_position: 0
sidebar_label: Code-narrator.config.js
---

The `code-narrator.config.js` file is a configuration file for the Code Narrator application. It contains various settings and configurations that are required for the application to function correctly. Here's a detailed description of the configuration properties:

1. `entry_file`: The entry point file for the application, e.g., `"./dist/src/App.js"`.

2. `cli_file`: The command-line interface file for the application, e.g., `"./dist/src/cli.js"`.

3. `project_name`: The name of the project, e.g., `"code-narrator"`.

4. `config_files`: An array of configuration files for the project, e.g., `["code-narrator.config.js"]`.

5. `readmeRoot`: A boolean value indicating whether the README file should be generated at the root of the project.

6. `repository_url`: The URL of the project's repository, e.g., `"https://github.com/ingig/code-narrator"`.

7. `project_file`: The project's package.json file, e.g., `"package.json"`.

8. `source_path`: The path to the source code, e.g., `"src"`.

9. `documentation_path`: The path to the documentation, e.g., `"docs"`.

10. `test_path`: The path to the test files, e.g., `"__tests__"`.

11. `include`: An array of file patterns to include in the documentation, e.g., `["code-narrator.config.js", "__tests__/**/**", "src/**/*.ts"]`.

12. `builders`: An array of builder objects that define how the documentation should be generated. Each builder object has properties like `type`, `template`, `name`, `args`, and `files`.

To retrieve a value from the config file, you can use the `require` function in Node.js. For example, to get the `entry_file` value, you can do the following:

```javascript
const config = require('./code-narrator.config.js');
console.log(config.entry_file); // Output: "./dist/src/App.js"
```

Here's the formatted configuration file:

```javascript
const config = {
  entry_file: "./dist/src/App.js",
  cli_file: "./dist/src/cli.js",
  project_name: "code-narrator",
  config_files: ["code-narrator.config.js"],
  readmeRoot: true,
  repository_url: "https://github.com/ingig/code-narrator",
  project_file: "package.json",
  source_path: "src",
  documentation_path: "docs",
  test_path: "__tests__",
  include: ["code-narrator.config.js", "__tests__/**/**", "src/**/*.ts"],
  builders: [
    // ...builder objects...
  ],
};

module.exports = config;
```

Please note that if there is any sensitive information in the configuration file, you should replace it with `*****` to protect it.