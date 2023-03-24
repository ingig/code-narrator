---
sidebar_label: ConfigHelper
sidebar_position: 0
---
# ConfigHelper

ConfigHelper is a utility class that helps in managing configuration settings for your application. It reads configuration settings from environment variables and a JSON file named `code-narrator.json`. This class provides methods to load configuration settings and get the value of a specific setting using its key.

## Usage

Before using the ConfigHelper class, you need to load the configuration settings by calling the `load` method. After loading the settings, you can use the `get` method to retrieve the value of a specific setting using its key.

### Example 1: Load configuration settings

```javascript
import ConfigHelper from "./ConfigHelper";

(async () => {
  await ConfigHelper.load();
})();
```

### Example 2: Get the value of a specific setting

```javascript
import ConfigHelper from "./ConfigHelper";

(async () => {
  await ConfigHelper.load();
  const apiKey = ConfigHelper.get("API_KEY");
  console.log("API Key:", apiKey);
})();
```

## Methods

### load

```javascript
public static async load(): Promise<void>
```

The `load` method is an asynchronous method that reads configuration settings from environment variables and the `code-narrator.json` file. It should be called before using the `get` method to retrieve the value of a specific setting.

### get

```javascript
public static get(key: string): string
```

The `get` method returns the value of a specific setting using its key. It first checks if the key exists in the environment variables. If it does, it returns the value from the environment variables. If not, it checks if the key exists in the `code-narrator.json` file and returns the value from there. If the key is not found in both places, it returns an empty string.

#### Parameters

- `key` (string): The key of the configuration setting whose value you want to retrieve.

## Technical Concepts

### dotenv

The `dotenv` package is used to load environment variables from a `.env` file into `process.env`. In this code, the `dotenv.config()` method is called to load the environment variables.

### fs and path

The `fs` module is used to interact with the file system, and the `path` module is used to manipulate file paths. In this code, the `fs.existsSync` method is used to check if the `code-narrator.json` file exists, and the `fs.readFileSync` method is used to read the content of the file. The `path.join` method is used to create the file path for the `code-narrator.json` file.