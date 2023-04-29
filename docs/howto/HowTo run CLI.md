# How to Use Code-Narrator

## Introduction

Code-Narrator is a powerful tool for generating documentation for your software projects. This guide will walk you through the process of installing, configuring, and running Code-Narrator to generate documentation for your project.

## Step-by-Step Instructions

### Step 1: Install Code-Narrator

To install Code-Narrator, run the following command in your terminal:

```bash
npm install code-narrator -D
```

### Step 2: Run Code-Narrator

To run Code-Narrator, execute the following command:

```bash
npx code-narrator
```

### Step 3: Configure Code-Narrator

On the first run, Code-Narrator will create a configuration file. Make sure to read and edit the configuration file before generating documentation. You can find the documentation for the configuration file at [Code-Narrator Configuration](https://github.com/ingig/code-narrator/blob/master/docs/Configuration/code-narrator.config.js.md).

### Step 4: Use Arguments to Customize the Run

You can use the following arguments when running Code-Narrator to customize the documentation process:

- `--config` or `-c`: Path to the configuration file (JSON or JavaScript)
- `--include` or `-i`: Only include specific files or folders in the documentation process
- `--gpt` or `-g`: GPT model (default is `gpt-4`, if you do not have access, the next best option is `gpt-3.5-turbo`)
- `--userDefined` or `-u`: Runs only update on userDefined builder from config matching template name

For example, to run Code-Narrator with a custom configuration file and include only specific files or folders, use the following command:

```bash
npx code-narrator -c path/to/your/config.js -i path/to/include/folder
```

## Conclusion

By following these steps, you can successfully install, configure, and run Code-Narrator to generate documentation for your software projects. Make sure to review the configuration file and use the available arguments to customize the documentation process as needed.