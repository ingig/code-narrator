---
sidebar_label: Configuration
sidebar_position: 3
---
# Configuring the Code Narrator Application
## Introduction
The code-narrator.json file is a JSON configuration file specific to the code-narrator application. It is used to configure various options such as the project file, start file, project path, source path, documentation path, and test path.

## Config File Format
The format of the code-narrator.json file is as follows:

```json
{
"project_file": "package.json",
"start_file": "./src/App.ts",
"project_path": "./",
"source_path": "./src",
"documentation_path": "./docs",
"test_path" : "./test"
}
```

Each option is a key-value pair, where the key is the name of the option, and the value is the value of the option.

## How it is Used
The code-narrator.json file is used in the ConfigHelper class of the code-narrator application. The ConfigHelper class provides a way to load and access configuration options from various sources, including environment variables, the code-narrator.json file, and the project file (package.json).

The code-narrator.json file is loaded using the fs module in Node.js, and its contents are parsed into a JSON object. The project_file option is used to determine the location of the project file (package.json). Once the project file is located, its contents are also parsed into a JSON object.

The ConfigHelper class provides a get method, which can be used to retrieve the value of a configuration option. The get method first looks for the option in the environment variables, then in the code-narrator.json file, and finally in the project file. If the option is not found in any of these sources, an empty string is returned.

Here is an example of how to access the value of the start_file option in the code-narrator.json file:

```javascript
import ConfigHelper from './ConfigHelper';

const startFile = ConfigHelper.get('start_file');
console.log(`Start file: ${startFile}`);
```

## Configuration Options
### project_file
The project_file option is a string that specifies the location of the project file (package.json). The default value is "package.json", which assumes that the project file is located in the same directory as the code-narrator.json file.

### start_file
The start_file option is a string that specifies the location of the start file for the application. The default value is "./src/App.ts", which assumes that the start file is located in the src directory of the project.

### project_path
The project_path option is a string that specifies the root directory of the project. The default value is "./", which assumes that the code-narrator.json file is located in the root directory of the project.

### source_path
The source_path option is a string that specifies the directory containing the source files for the application. The default value is "./src", which assumes that the source files are located in the src directory of the project.

### documentation_path
The documentation_path option is a string that specifies the directory where the documentation for the application will be generated. The default value is "./docs", which assumes that the documentation will be generated in the docs directory of the project.

### test_path
The test_path option is a string that specifies the directory containing the test files for the application. The default value is `"./test"