# Helper.ts

The `Helper.ts` file is a TypeScript module that exports a `Helper` class containing utility methods for string manipulation and JSON extraction. This class can be imported and used in other TypeScript files to perform common operations on strings and JSON data.

## Usage Examples

Here are some examples of how to use the `Helper` class:

```typescript
import Helper from './Helper';

// Remove file extension from a file name
const fileName = 'example.txt';
const nameWithoutExtension = Helper.removeExtension(fileName);
console.log(nameWithoutExtension); // Output: example

// Capitalize the first letter of a string
const lowerCaseName = 'john';
const capitalized = Helper.upperFirstLetter(lowerCaseName);
console.log(capitalized); // Output: John

// Extract JSON objects from a string
const jsonString = '{"key1": "value1"}{"key2": "value2"}';
const jsonObjects = Helper.getJsons(jsonString);
console.log(jsonObjects); // Output: [{ key1: 'value1' }, { key2: 'value2' }]
```

## Methods

### removeExtension(fileName: string)

This method takes a `fileName` string as input and returns the file name without its extension.

#### Parameters

- `fileName`: A string representing the file name with extension.

### upperFirstLetter(name: string)

This method takes a `name` string as input and returns the same string with the first letter capitalized.

#### Parameters

- `name`: A string representing the input name.

### getJsons(content: string)

This method takes a `content` string as input and returns an array of JSON objects extracted from the input string.

#### Parameters

- `content`: A string containing JSON objects.

## Technical Concepts

### JSON Extraction

The `getJsons` method uses the `extract-json-from-string` library to extract JSON objects from a given string. This library is imported at the beginning of the file:

```typescript
const extract = require('extract-json-from-string');
```

The library provides a function that takes a string as input and returns an array of JSON objects found in the input string. This function is used in the `getJsons` method to perform the JSON extraction.