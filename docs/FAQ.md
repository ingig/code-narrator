## FAQ

### 1. What is Code-narrator?

Code-narrator is a tool that uses OpenAI to generate documentation for your source code, as well as easy HowTo guides and other custom pages. It is language and framework neutral.

### 2. How can I install Code-narrator?

You can install Code-narrator using the following command: `npm i code-narrator -D`.

### 3. What is the configuration file for Code-narrator?

The configuration file for Code-narrator is called `code-narrator.config.js`.

### 4. How can I generate documentation in another language?

To generate documentation in another language, add "Give result in {insert language}" in `gptSystemCommands` in the configuration file.

### 5. How can I generate documentation in a different format (e.g., HTML, LaTeX)?

To generate documentation in a different format, change the `documentation_type` in the configuration file.

### 6. What is the main entry point for Code-narrator?

The main entry point for Code-narrator is `./dist/src/App.js`.

### 7. What are the main dependencies of Code-narrator?

Some of the main dependencies of Code-narrator include axios, dotenv, fs-extra, jsonpath, liquidjs, openai, and yargs.

### 8. How can I contribute to Code-narrator?

You can contribute to Code-narrator by visiting its GitHub repository at https://github.com/ingig/code-narrator and submitting issues or pull requests.

### 9. How can I report bugs or request features for Code-narrator?

You can report bugs or request features by visiting the GitHub issues page at https://github.com/ingig/code-narrator/issues.

### 10. What is the license for Code-narrator?

Code-narrator is licensed under the ISC license.

### 11. Who is the author of Code-narrator?

The author of Code-narrator is Ingi Gauti Ragnarsson (@ingig).

### 12. How can I build Code-narrator?

You can build Code-narrator by running the following command: `npm run compile && gulp`.

### 13. How can I start Code-narrator?

You can start Code-narrator by running the following command: `npx ts-node .\src\cli.ts`.

### 14. What is the purpose of the `./docs/ReadMe.md` file?

The `./docs/ReadMe.md` file serves as the main documentation file for Code-narrator.

### 15. What are the development dependencies of Code-narrator?

Some of the development dependencies of Code-narrator include gulp, jest, ts-jest, ts-node, and typescript.