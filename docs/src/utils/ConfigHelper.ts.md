---
sidebar_position: 0
sidebar_label: ConfigHelper.ts
---

# ConfigHelper.ts

## Overview

The `ConfigHelper.ts` file is a TypeScript module that provides a utility class, `ConfigHelper`, for managing and accessing configuration settings in a project. This class is responsible for loading configuration settings from various sources, such as environment variables, project configuration files, and cache files. It also provides a method for retrieving configuration values by key.

## Usage

To use the `ConfigHelper` class, first import it into your TypeScript file:

```typescript
import ConfigHelper from "./ConfigHelper";
```

Then, call the `load` method to load the configuration settings:

```typescript
await ConfigHelper.load(config, project);
```

Finally, use the `get` method to retrieve configuration values by key:

```typescript
const value = ConfigHelper.get("key");
```

## Methods

### load(config: any, project: any)

This asynchronous method loads configuration settings from various sources, such as environment variables, project configuration files, and cache files. It takes two parameters:

- `config`: An object containing configuration settings.
- `project`: An object containing project settings.

### get(key: string): any

This method retrieves a configuration value by key. It first checks the environment variables, then the project settings, and finally the project file. If the key is not found in any of these sources, it returns an empty string. It takes one parameter:

- `key`: The key of the configuration value to retrieve.

## Properties

- `env`: An object containing environment variables.
- `cn`: An object containing project settings.
- `projectFile`: An object containing the parsed contents of the project file.
- `BuilderPlugins`: An array of builder plugins.
- `DocumentationType`: A string representing the documentation type (default: 'md').
- `DocumentExtension`: A string representing the document file extension (default: '.md').
- `CacheFilePath`: A string representing the cache file path (default: '.code-narrator/cache.json').

## Technical Concepts

### dotenv

The `dotenv` module is used to load environment variables from a `.env` file into `process.env`. This allows the application to access environment variables in a consistent manner across different environments.

### JSON.parse

The `JSON.parse` method is used to parse the contents of the project file, which is expected to be in JSON format. This method converts the JSON string into a JavaScript object, which can then be accessed and manipulated by the application.