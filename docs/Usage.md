---
sidebar_position: 5
sidebar_label: Usage
---

To use the library in your own project, follow these steps:

1. Install the package:

```bash
npm i code-narrator -D
```

2. Create a configuration file named `code-narrator.config.ts` in your project root directory and paste the following content:

```typescript
import ConfigurationBuilder from "./src/documentation/plugins/builders/Configuration/ConfigurationBuilder";
import FilesBuilder from "./src/documentation/plugins/builders/Files/FilesBuilder";
import FoldersBuilder from "./src/documentation/plugins/builders/Folders/FoldersBuilder";
import ReadMeBuilder from "./src/documentation/plugins/builders/ReadMe/ReadMeBuilder";
import BehaviourBuilder from "./src/documentation/plugins/builders/Behaviour/BehaviourBuilder";
import DocusaurusGenerator from "./src/documentation/plugins/generators/Docusaurus/DocusaurusGenerator";
import PrerequisitesBuilder from "./src/documentation/plugins/builders/Prerequisites/PrerequisitesBuilder";
import UsageBuilder from "./src/documentation/plugins/builders/Usage/UsageBuilder";

export default {
    // ... (copy the content from the provided code-narrator.config.ts file)
};
```

3. Update your `package.json` file to include the following scripts:

```json
"scripts": {
  "test": "echo \\\"Error: no __tests__ specified\\\" && exit 1",
  "start": "npx ts-node .\\src\\App.ts",
  "start:comment": "To start the application run 'npm run start'"
},
```

4. Run the application:

```bash
npm run start
```

:::note
The library will generate documentation in the specified format (e.g., Markdown) based on your configuration settings.
:::

:::info
Make sure to commit the `.code-narrator/cache.json` file to your Git repository to keep track of the cache.
:::