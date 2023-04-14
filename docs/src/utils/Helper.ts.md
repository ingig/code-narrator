---
sidebar_position: 3
sidebar_label: Helper.ts
---

# Helper.ts

The `Helper.ts` file is a TypeScript code file that contains a class named `Helper`. This class provides utility methods to perform common operations such as removing file extensions, capitalizing the first letter of a string, and extracting JSON objects from a string.

## Usage Examples

Here are some examples of how to use the `Helper` class:

```typescript
import Helper from './Helper.ts';

// Remove file extension
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

This method takes a `fileName` as a parameter and returns the file name without its extension.

- `fileName`: A string representing the file name with its extension.

### upperFirstLetter(name: string)

This method takes a `name` as a parameter and returns the same string with the first letter capitalized.

- `name`: A string representing the name to be capitalized.

### getJsons(content: string)

This method takes a `content` string as a parameter and returns an array of JSON objects extracted from the input string.

- `content`: A string containing JSON objects.

## Technical Concepts

The `Helper` class uses the `extract-json-from-string` library to extract JSON objects from a string. This library is not a standard JavaScript or TypeScript library, but it is used in the `getJsons` method to provide the functionality of extracting JSON objects from a string.