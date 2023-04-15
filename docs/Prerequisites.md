---
nav_order: 10
title: Prerequisites
---

Prerequisites for the code-narrator project:

1. Knowledge of JavaScript and TypeScript.
2. Familiarity with Node.js and npm (Node Package Manager).
3. Basic understanding of OpenAI API.

Required software and tools:

1. Node.js (version 14 or higher) - Download and install from [Node.js official website](https://nodejs.org/).
2. npm (version 6 or higher) - It comes bundled with Node.js.

To work with or understand the project, you should have the following dependencies installed:

1. Install the code-narrator package using `npm i code-narrator -D`.
2. Install other required dependencies by running `npm install` in the project directory.

The project uses the following main dependencies:

- axios: ^0.26.1
- dotenv: ^16.0.3
- fast-glob: ^3.2.12
- form-data: ^4.0.0
- fs-extra: ^11.1.1
- jsonpath: ^1.1.1
- liquidjs: ^10.7.0
- openai: ^3.1.0
- yargs: ^17.7.1

And the following development dependencies:

- @babel/preset-typescript: ^7.21.0
- @jest/globals: ^29.5.0
- @types/jest: ^29.4.0
- @types/node: ^18.11.19
- gulp: ^4.0.2
- gulp-copy: ^4.0.1
- gulp-typescript: ^6.0.0-alpha.1
- jest: ^29.4.2
- ts-jest: ^29.0.5
- ts-node: ^10.9.1
- typescript: ^4.9.5

:::note
Make sure to have a valid OpenAI API key and set it in the `.env` file as `OPENAI_API_KEY=your_api_key`. Replace `your_api_key` with your actual API key.
:::