---
sidebar_position: 3
sidebar_label: Configuration
---

The app-specific config file you provided is `code-narrator.config.ts`. This configuration file is used to define various settings and options for the Code Narrator application. It includes information about the project structure, paths, plugins, and documentation format.

Here's an example of usage for the app-specific configs:

```typescript
import CodeNarrator from "code-narrator";
import config from "./code-narrator.config.ts";

const codeNarrator = new CodeNarrator(config);
codeNarrator.generateDocumentation();
```

In this example, the `code-narrator.config.ts` file is imported and passed to the Code Narrator instance to generate documentation based on the provided configuration.

Regarding the other configuration files you mentioned:

1. `jest.config.js`: This is a configuration file for Jest, a popular JavaScript testing framework. It contains settings and options related to running tests, such as test environment, test paths, and coverage reporting.

2. `package.json`: This is a standard configuration file for Node.js projects. It contains information about the project, such as its name, version, dependencies, and scripts that can be run using the `npm` or `yarn` command.

3. `tsconfig.json`: This is a configuration file for TypeScript, a typed superset of JavaScript. It contains settings and options related to TypeScript compilation, such as target JavaScript version, module resolution, and type checking options.

:::note
Remember to format the text correctly when using note, info, caution, tip, or danger.
:::