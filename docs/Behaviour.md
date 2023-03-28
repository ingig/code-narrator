---
sidebar_position: 2
sidebar_label: Behaviour
---

# Behavior

Code-narrator is an application that helps generate documentation for your project in a markdown format. It is installed using `npm i code-narrator` and can be executed either by running `npm run start` or using the command-line interface (CLI).

When the application starts, it loads the configuration and cached documentation. It then goes through the project code, reading the file and folder structure. If a file or folder does not exist in the cache or has changed since it was last cached, code-narrator sends the code to GPT and requests documentation in a markdown format. Once the documentation is received, it is written to the cache. When all files and folders have been parsed, code-narrator creates the documentation from the cache.

There are a few rules to follow when using code-narrator:

1. Write a description of the project in the project file (e.g., `package.json`).
2. If GPT generates incorrect documentation, the code is probably not clear for humans either. Try adjusting the code or adding a one-line comment to make the code clearer.
3. You can use `:::tip` or `:::danger` in your comments in your code files.

When the application finishes generating the documentation, it will display a "Done generating documents" message in the console.