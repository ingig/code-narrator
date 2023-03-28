---
sidebar_position: 1
sidebar_label: jest.config.js
---

# jest.config.js

## Overview

The `jest.config.js` file is a configuration file for the Jest testing framework. It is used to customize the behavior of Jest when running tests in a project. This file is written in JavaScript and exports a configuration object that Jest uses to set up the testing environment and run tests.

In this specific file, we are using the `ts-jest` preset and setting the test environment to `node`. This means that the tests will be run using the TypeScript compiler and in a Node.js environment.

## Configuration Object

The configuration object in this file has the following properties:

### `preset`

```javascript
preset: 'ts-jest'
```

The `preset` property is used to specify a predefined configuration for Jest. In this case, we are using the `ts-jest` preset, which is a TypeScript preprocessor for Jest. This allows us to use TypeScript in our test files and have Jest compile and run them correctly.

### `testEnvironment`

```javascript
testEnvironment: 'node'
```

The `testEnvironment` property is used to specify the environment in which the tests will be run. In this case, we are using the `node` environment, which means that the tests will be run in a Node.js environment.

## Usage

To use this configuration file in your project, you need to have Jest and `ts-jest` installed as dependencies. You can install them using the following commands:

```bash
npm install --save-dev jest ts-jest
```

or

```bash
yarn add --dev jest ts-jest
```

Once you have the dependencies installed, you can create a `jest.config.js` file in your project root with the provided content:

```javascript
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};
```

Now you can run your tests using the Jest command:

```bash
npx jest
```

or

```bash
yarn jest
```

Jest will automatically pick up the configuration from the `jest.config.js` file and run your tests accordingly.

## Additional Resources

- [Jest Configuration Documentation](https://jestjs.io/docs/configuration)
- [ts-jest Documentation](https://kulshekhar.github.io/ts-jest/)
- [Jest Test Environment Documentation](https://jestjs.io/docs/configuration#testenvironment-string)