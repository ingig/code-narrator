---
sidebar_position: 1
sidebar_label: Package.json
---

This is a configuration file for the `code-narrator` package, a self-documenting tool that uses OpenAI to generate documentation on code and tests. It is intended for developers working with the package.

:::info
**Package Information:**
- Name: code-narrator
- Version: 1.0.1
- Description: Uses OpenAI to generate documentation on code and tests. Configure your project using the `code-narrator.config.ts` file, setting project path, doc, documentation type, and more. Install the package using `npm i code-narrator -D`.
- Keywords: documentation, openai, autodoc
- Homepage: [https://github.com/ingig/code-narrator](https://github.com/ingig/code-narrator)
- Bugs: [https://github.com/ingig/code-narrator/issues](https://github.com/ingig/code-narrator/issues)
- Engines: Node >18
- Repository: [https://github.com/ingig/code-narrator](https://github.com/ingig/code-narrator)
:::

:::note
**Scripts:**
- Start: `npx ts-node .\src\App.ts`
:::

:::tip
**Author:** Ingi Gauti Ragnarsson @ingig
**License:** ISC
**Main:** ./src/App.ts
:::

:::caution
**Dependencies:**
- asynckit: ^0.4.0
- axios: ^0.26.1
- combined-stream: ^1.0.8
- delayed-stream: ^1.0.0
- dotenv: ^16.0.3
- extract-json-from-string: ^1.0.1
- follow-redirects: ^1.15.2
- form-data: ^4.0.0
- ignore: ^5.2.4
- liquidjs: ^10.7.0
- mime-db: ^1.52.0
- mime-types: ^2.1.35
- openai: ^3.1.0
:::

:::danger
**Dev Dependencies:**
- @babel/preset-typescript: ^7.21.0
- @jest/globals: ^29.5.0
- @types/jest: ^29.4.0
- @types/node: ^18.11.19
- jest: ^29.4.2
- ts-jest: ^29.0.5
- ts-node: ^10.9.1
- typescript: ^4.9.5
:::