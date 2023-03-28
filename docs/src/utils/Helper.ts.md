---
sidebar_position: 3
sidebar_label: Helper.ts
---

# Helper.ts

This is a TypeScript code file that contains a utility class called `Helper`. The `Helper` class provides various utility methods that can be used throughout your application. These methods include removing file extensions, capitalizing the first letter of a string, and extracting JSON objects from a string.

## Usage

To use the `Helper` class, simply import it into your TypeScript file and call the desired static methods.

```typescript
import Helper from './Helper';

const fileName = 'example.txt';
const noExtension = Helper.removeExtension(fileName);
console.log(noExtension); // Output: example

const name = 'john';
const capitalized = Helper.upperFirstLetter(name);
console.log(capitalized); // Output: John

const jsonString = '{"key": "value"}';
const jsonObjects = Helper.getJsons(jsonString);
console.log(jsonObjects); // Output: [{ key: 'value' }]
```

## Methods

### removeExtension(fileName: string)

This method takes a `fileName` string as a parameter and returns the file name without its extension.

#### Parameters

- `fileName` (string): The file name with its extension.

### upperFirstLetter(name: string)

This method takes a `name` string as a parameter and returns the same string with the first letter capitalized.

#### Parameters

- `name` (string): The string to capitalize the first letter of.

### getJsons(content: string)

This method takes a `content` string as a parameter and returns an array of JSON objects extracted from the string.

#### Parameters

- `content` (string): The string containing JSON objects.

## Technical Concepts

- **TypeScript**: TypeScript is a superset of JavaScript that adds optional static types to the language. It is designed to make it easier to write and maintain large-scale JavaScript applications.

- **Static methods**: Static methods are methods that belong to a class rather than an instance of the class. They can be called directly on the class itself, without needing to create an instance of the class.

- **JSON**: JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. JSON is a text format that is completely language-independent but uses conventions that are familiar to programmers of the C family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others.