---
sidebar_position: 31
sidebar_label: generators
---

# generators

This folder is responsible for managing the generator plugins used to parse the documentation and modify it for the build tool you are using to build the documentation. The default plugin with code-narrator is Docusaurus since it fails to build when a function contains a `Promise<>` in return. This plugin clears that Promise from the function name so it can build. It also creates sidebar information.

## [BaseGenerator.ts](BaseGenerator.ts)

`BaseGenerator.ts` is a TypeScript code file that defines the base class for Generator plugins. Generator plugins are used to parse the documentation and modify it for the build tool you are using to build the documentation.

### Usage

For more information on how to use `BaseGenerator.ts`, please refer to its [documentation](BaseGenerator.ts).

## [Docusaurus](Docusaurus)

This folder is responsible for generating documentation compatible with Docusaurus, a popular static site generator for documentation websites. The content of this folder includes the following files and folders:

### [DocusaurusGenerator.ts](Docusaurus/DocusaurusGenerator.ts)

For more information on how to use `DocusaurusGenerator.ts`, please refer to its [documentation](Docusaurus/DocusaurusGenerator.ts).

---

[Link to repository](https://github.com/ingig/code-narrator/src/documentation/plugins/generators)