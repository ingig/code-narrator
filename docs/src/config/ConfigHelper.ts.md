# ConfigHelper.ts

The `ConfigHelper.ts` file is a TypeScript module that provides a helper class for managing the configuration of a Code Narrator project. This class is responsible for loading the project configuration, handling environment variables, and setting default values for various settings.

## Table of Contents

- [Class: ConfigHelper](#class-confighelper)
  - [Static Properties](#static-properties)
  - [Method: load](#method-load)
- [Examples](#examples)

## Class: ConfigHelper

The `ConfigHelper` class is the main class in this module, and it provides several static properties and a `load` method for managing the project configuration.

### Static Properties

- `env`: An object containing the environment variables.
- `OpenAiKey`: A string representing the OpenAI API key.
- `DocumentingProject`: An object representing the project being documented.
- `BuilderPlugins`: An array of builder plugins.
- `DocumentationType`: A string representing the documentation type (default: 'md').
- `DocumentExtension`: A string representing the document file extension (default: '.md').
- `CacheFilePath`: A string representing the cache file path (default: '.code-narrator/cache.json').
- `config`: An instance of the `ICodeNarratorConfig` interface.

### Method: load

The `load` method is an asynchronous static method that takes an optional `projectConfig` parameter of type `Partial<ICodeNarratorConfig>`. This method is responsible for loading the project configuration, handling environment variables, and setting default values for various settings.

#### Parameters

- `projectConfig`: An optional object of type `Partial<ICodeNarratorConfig>` representing the project configuration.

## Examples

Here are some examples of how to use the `ConfigHelper` class:

### Loading the Configuration

```typescript
import ConfigHelper from "./ConfigHelper";

(async () => {
  await ConfigHelper.load();
})();
```

### Accessing the OpenAI API Key

```typescript
import ConfigHelper from "./ConfigHelper";

(async () => {
  await ConfigHelper.load();
  console.log(ConfigHelper.OpenAiKey);
})();
```

### Accessing the Documenting Project

```typescript
import ConfigHelper from "./ConfigHelper";

(async () => {
  await ConfigHelper.load();
  console.log(ConfigHelper.DocumentingProject);
})();
```

### Accessing the Builder Plugins

```typescript
import ConfigHelper from "./ConfigHelper";

(async () => {
  await ConfigHelper.load();
  console.log(ConfigHelper.BuilderPlugins);
})();
```

### Accessing the Documentation Type

```typescript
import ConfigHelper from "./ConfigHelper";

(async () => {
  await ConfigHelper.load();
  console.log(ConfigHelper.DocumentationType);
})();
```

### Accessing the Document Extension

```typescript
import ConfigHelper from "./ConfigHelper";

(async () => {
  await ConfigHelper.load();
  console.log(ConfigHelper.DocumentExtension);
})();
```

### Accessing the Cache File Path

```typescript
import ConfigHelper from "./ConfigHelper";

(async () => {
  await ConfigHelper.load();
  console.log(ConfigHelper.CacheFilePath);
})();
```