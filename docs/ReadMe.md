---
id: ReadMe
sidebar_label: Read me
sidebar_position: 1
---
# Code Narrator - Get Started Guide

Code Narrator is a self-documenting tool that uses OpenAI to generate documentation on code and tests. It is designed to be a friend to the lazy developer, providing an easy way to create and validate documentation, similar to a compiler compiling itself. To configure the project, use the `code-narrator.json` file to set the project, documentation, and test paths.

## Installation

To install the project, follow these steps:

1. Clone the repository:

```
git clone https://github.com/ingig/code-narrator.git
```

2. Change to the project directory:

```
cd code-narrator
```

3. Install the dependencies:

```
npm install
```

## Configuration

To configure the project, edit the `code-narrator.json` file and set the project, documentation, and test paths. For example:

```json
{
  "projectPath": "./src",
  "documentationPath": "./docs",
  "testPath": "./tests"
}
```

## Running the Project

To run the project, use the following command:

```
npm run start
```

## Running Tests

To run tests for the project, use the following command:

```
npm test
```

## Support and Contributions

- For reporting bugs, please use the [GitHub Issues](https://github.com/ingig/code-narrator/issues) page.
- The homepage of the project is available at [https://github.com/ingig/code-narrator](https://github.com/ingig/code-narrator).

## Dependencies

- asynckit: ^0.4.0
- axios: ^0.26.1
- combined-stream: ^1.0.8
- delayed-stream: ^1.0.0
- dotenv: ^16.0.3
- extract-json-from-string: ^1.0.1
- follow-redirects: ^1.15.2
- form-data: ^4.0.0
- mime-db: ^1.52.0
- mime-types: ^2.1.35
- openai: ^3.1.0

##### This overview
is for the folder C:\Users\ingig\source\repos\CodeNarrator