---
sidebar_label: Document
sidebar_position: 0
---
# Document

The `Document` class is a utility class that represents a document with its metadata and content. It provides methods to manage the document's plugins and their data. This class can be used to create, read, and update documents and their associated plugins.

## Usage

To use the `Document` class, you need to import it and create a new instance by providing the required parameters.

```javascript
import Document from "./Document";

const name = "example";
const path = "/path/to/document";
const folderPath = "/path/to/folder";
const updated = new Date();
const sidebar_position = 1;
const sidebar_label = "Example Document";

const document = new Document(name, path, folderPath, updated, sidebar_position, sidebar_label);
```

## Methods

### constructor

The constructor initializes a new instance of the `Document` class with the provided parameters.

```javascript
constructor(name: string, path: string, folderPath : string, updated : Date, sidebar_position? : number, sidebar_label? : string)
```

#### Parameters

- `name`: The name of the document.
- `path`: The path to the document file.
- `folderPath`: The path to the folder containing the document.
- `updated`: The date when the document was last updated.
- `sidebar_position` (optional): The position of the document in the sidebar.
- `sidebar_label` (optional): The label for the document in the sidebar. If not provided, it defaults to the capitalized first letter of the document name.

### getId

This static method returns a unique identifier for a document based on its name and path.

```javascript
public static getId(name : string, path : string): string
```

#### Parameters

- `name`: The name of the document.
- `path`: The path to the document file.

### getPluginDto

This method returns the `PluginDto` object for the specified plugin type. If the plugin is not found, it returns a new `PluginDto` object with the specified type.

```javascript
getPluginDto(type: string): PluginDto
```

#### Parameters

- `type`: The type of the plugin to retrieve.

### getPluginIdx

This method returns the index of the specified plugin type in the `pluginDtos` array. If the plugin is not found, it returns -1.

```javascript
getPluginIdx(type: string): number
```

#### Parameters

- `type`: The type of the plugin to find.

### upsertPlugin

This method updates the existing plugin with the provided `PluginDto` object or inserts it if it does not exist.

```javascript
public upsertPlugin(plugin : PluginDto): void
```

#### Parameters

- `plugin`: The `PluginDto` object containing the plugin data to update or insert.

## Properties

- `id`: A unique identifier for the document.
- `name`: The name of the document.
- `path`: The path to the document file.
- `folderPath`: The path to the folder containing the document.
- `fileContent`: The content of the document file.
- `pluginDtos`: An array of `PluginDto` objects representing the plugins associated with the document.
- `isFolder`: A boolean indicating whether the document is a folder or not.
- `updated`: The date when the document was last updated.
- `sidebar_position`: The position of the document in the sidebar.
- `sidebar_label`: The label for the document in the sidebar.
- `init`: A boolean indicating whether the document has been initialized or not.
- `postInit`: A boolean indicating whether the document has been post-initialized or not.