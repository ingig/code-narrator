# PrepareSummary.ts

This is a TypeScript code file that contains the `PrepareSummary` class. The class is responsible for preparing a summary of configuration files and checking if any changes have occurred in the configuration files.

## Table of Contents

- [Class: PrepareSummary](#class-preparesummary)
  - [Constructor](#constructor)
  - [Methods](#methods)
    - [prepareSummary](#preparesummary)
    - [haveConfigFilesChanged](#haveconfigfileschanged)
    - [appSpecificConfigAndCacheSameSize](#appspecificconfigandcachesamesize)

## Class: PrepareSummary

The `PrepareSummary` class is responsible for preparing a summary of configuration files and checking if any changes have occurred in the configuration files.

### Constructor

The constructor takes a single parameter:

- `configurationBuilder: ConfigurationBuilder`: An instance of the `ConfigurationBuilder` class.

### Methods

#### prepareSummary

This method is responsible for preparing the summary of configuration files. It checks if there is a cached document for the configuration and updates the `ConfigurationBuilder` instance with the appropriate configuration files. If any changes have occurred in the configuration files, it updates the summary.

```typescript
public async prepareSummary(): Promise<void>
```

#### haveConfigFilesChanged

This method checks if any changes have occurred in the configuration files. It returns `true` if any changes have been detected, otherwise, it returns `false`.

```typescript
private haveConfigFilesChanged(): boolean
```

#### appSpecificConfigAndCacheSameSize

This method checks if the size of the app-specific configuration files and the cache is the same. It returns `true` if the sizes are the same, otherwise, it returns `false`.

```typescript
private appSpecificConfigAndCacheSameSize(document: Document): boolean
```

## Usage

To use the `PrepareSummary` class, you need to import it and create an instance by passing a `ConfigurationBuilder` instance to the constructor. Then, you can call the `prepareSummary` method to prepare the summary of configuration files.

```typescript
import PrepareSummary from "./PrepareSummary";
import ConfigurationBuilder from "./ConfigurationBuilder";

const configurationBuilder = new ConfigurationBuilder();
const prepareSummary = new PrepareSummary(configurationBuilder);

await prepareSummary.prepareSummary();
```