Configuration/' + this.appSpecificConfigFiles[i],
                    folderPath: './Configuration',
                    sidebarPosition: 3,
                    data: data
                }
            )
        }
    }

    private async generateGeneralConfigFiles() {
        for (let i = 0; i < this.configFiles.length; i++) {
            let document = DocumentationCache.get(this.configFiles[i])
            if (!this.hasChanged(document)) {
                continue;
            }
            this.updateSummary = true;
            let content = FileStructure.getContent(this.configFiles[i])
            if (content == '') continue;

            let data : any = {
                parent : 'Configuration'
            }
            let args = {configFile: content, fileName: this.configFiles[i]}
            await super.generateDocumentationAndCache({
                    args: args,
                    template: 'general_config',
                    name: this.configFiles[i],
                    pathToFile: './Configuration/' + this.configFiles[i],
                    folderPath: './Configuration',
                    sidebarPosition: 3,
                    data: data
                }
            )
        }
    }

    private appSpecificConfigAndCacheSameSize(document: Document) {
        return document.data.appSpecificConfigFiles.length == ConfigHelper.config.config_files.length;
    }

    private hasChanged(document: Document) {
        return !document || document.hasChanged();
    }
}
###

:::info
**ConfigurationBuilder.ts**
:::

## Overview

`ConfigurationBuilder.ts` is a TypeScript class that extends the `BaseBuilder` class. It is responsible for generating documentation for configuration files in a project. The class handles both application-specific and general configuration files.

## Usage

To use the `ConfigurationBuilder` class, you need to create an instance of the class and call the `generate()` method.

```typescript
const configurationBuilder = new ConfigurationBuilder();
await configurationBuilder.generate();
```

## Methods

### constructor()

The constructor initializes the `ConfigurationBuilder` instance with the 'Configuration' category.

### generate(): Promise<void>

This asynchronous method generates the documentation for the configuration files. It first prepares the summary, then generates the documentation for application-specific and general configuration files, and finally generates the summary.

### prepareSummary(): Promise<void>

This private asynchronous method prepares the summary of the configuration files. It checks if the configuration files have changed and updates the summary accordingly.

### generateSummary(): Promise<void>

This private asynchronous method generates the summary of the configuration files. It updates the summary only if there are changes in the configuration files.

### haveConfigFilesChanged(): boolean

This private method checks if the configuration files have changed. It returns `true` if there are changes, and `false` otherwise.

### generateAppConfigFiles(): Promise<void>

This private asynchronous method generates the documentation for application-specific configuration files.

### generateGeneralConfigFiles(): Promise<void>

This private asynchronous method generates the documentation for general configuration files.

### appSpecificConfigAndCacheSameSize(document: Document): boolean

This private method checks if the application-specific configuration files and cache have the same size. It returns `true` if they have the same size, and `false` otherwise.

### hasChanged(document: Document): boolean

This private method checks if a document has changed. It returns `true` if the document has changed, and `false` otherwise.