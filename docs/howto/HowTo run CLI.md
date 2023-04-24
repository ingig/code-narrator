# How to Install and Use Code-Narrator

## Introduction

Code-Narrator is a powerful tool that helps you generate documentation for your software projects. This guide will walk you through the process of installing Code-Narrator, running it for the first time, and configuring it to suit your needs.

## Step-by-Step Instructions

### Step 1: Install Code-Narrator

To install Code-Narrator, run the following command in your terminal:

```
npm install code-narrator -D
```

### Step 2: Run Code-Narrator

To run Code-Narrator, execute the following command:

```
npx code-narrator
```

### Step 3: Review the Configuration

Upon running Code-Narrator for the first time, a configuration file will be created. Make sure to review and modify the configuration before generating documentation. You can find the documentation for the configuration file at the following link:

[Code-Narrator Configuration Documentation](https://github.com/ingig/code-narrator/blob/master/docs/Configuration/code-narrator.config.js.md)

### Step 4: Customize the Configuration (Optional)

You can customize the configuration by providing specific arguments when running Code-Narrator. Here are some available arguments:

- `-c` or `--config`: Path to the configuration file (JSON or JavaScript)
- `-i` or `--include`: Only include specific files or folders in the documentation process
- `-g` or `--gpt`: GPT model. Default is `gpt-4`. If you do not have access, the next best option is `gpt-3.5-turbo`, but it is not as good.

For example, to run Code-Narrator with a custom configuration file and include only specific files or folders, use the following command:

```
npx code-narrator -c path/to/config.js -i file1.js folder1
```

## Conclusion

By following these steps, you should now have a working installation of Code-Narrator and be able to generate documentation for your software projects. Remember to review and customize the configuration file to ensure the best results for your specific needs.