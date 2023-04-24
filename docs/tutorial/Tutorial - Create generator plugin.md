# Introduction

In this tutorial, we will guide you through the process of creating your own generator plugin called `MyGenerator`. This plugin will help you customize the way your documentation is generated.

# Setup

Before we begin, make sure you have a project set up with the necessary dependencies. You can use any directory of your choice for the plugin.

# Code Examples

1. First, create a new file called `MyGenerator.ts` in your desired directory.

2. To create your custom generator plugin, you need to extend the `BaseGenerator` class and implement the `process` function. Here's a basic example:

```typescript
import BaseGenerator from "./BaseGenerator";
import Document from '../../Document';

export default class MyGenerator extends BaseGenerator {
    public process(document: Document) {
        // Your custom processing logic goes here
        return document;
    }
}
```

3. In the `process` function, you can add your custom logic to modify the `document` object as needed.

4. Now, you need to add your custom generator plugin to the `code-narrator.config.js` file. First, import your `MyGenerator` class at the top of the file:

```javascript
import MyGenerator from './path/to/MyGenerator';
```

5. Next, add the `MyGenerator` class to the `generatorPlugins` array in the `code-narrator.config.js` file:

```javascript
export default {
    // ...
    generatorPlugins: [
        // ...
        new MyGenerator(),
    ],
    // ...
};
```

That's it! You have now successfully created and added your custom generator plugin called `MyGenerator`. This plugin will be used to process your documentation according to your custom logic.