---
sidebar_label: Behaviour
sidebar_position: 2
---
Code-Narrator is an application designed to automatically generate documentation for a given project by analyzing its codebase and leveraging the power of GPT (Generative Pre-trained Transformer) to create human-readable documentation in Markdown format. The application can be run either by using the command "npm run start" or through the command-line interface (CLI).

Upon starting, the application first loads the configuration and any previously cached documentation. It then proceeds to analyze the project's code, examining the file and folder structure. If a file or folder is not present in the cache or has been modified since it was last cached, Code-Narrator sends the code to GPT and requests documentation in the form of a Markdown file. Once the documentation is received, it is written to the cache.

After all files and folders have been parsed, Code-Narrator generates the final documentation using the cached information. The generated documentation is organized into several sections, including "Get Started," "Behavior," "Configuration," and "API."

To ensure the best results, users should follow a few guidelines when working with Code-Narrator:

1. Provide a description of the project in the project file (e.g., package.json).
2. If GPT generates incorrect documentation, it may be an indication that the code is unclear for humans as well. In such cases, consider adjusting the code or adding a one-line comment to make it more understandable.
3. Users can include special annotations like ":::tip" or ":::danger" in their code comments to highlight important information in the generated documentation.

In summary, Code-Narrator is a powerful tool that automates the process of generating documentation for a project by analyzing its codebase and using GPT to create human-readable Markdown files. By following a few simple guidelines, developers can ensure that their code is well-documented and easily understood by others.

##### This overview
is for the folder C:\Users\ingig\source\repos\CodeNarrator