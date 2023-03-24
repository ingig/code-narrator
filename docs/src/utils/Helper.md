---
sidebar_label: Helper
sidebar_position: 3
---
# Helper

The `Helper` class is a utility class that provides two static methods for string manipulation. These methods are useful for working with file names and text formatting. The class can be imported and used directly without the need to create an instance of the class.

## Examples

Here are some examples of how to use the `Helper` class:

```javascript
import Helper from './Helper';

// Remove file extension from a file name
const fileName = 'example.txt';
const nameWithoutExtension = Helper.removeExtension(fileName); // 'example'

// Capitalize the first letter of a string
const text = 'hello world';
const capitalizedText = Helper.upperFirstLetter(text); // 'Hello world'
```

## Methods

### removeExtension

This method removes the file extension from a given file name.

#### Parameters

- `fileName` (string): The file name from which the extension should be removed.

#### Returns

- (string): The file name without the extension.

### upperFirstLetter

This method capitalizes the first letter of a given string.

#### Parameters

- `name` (string): The string whose first letter should be capitalized.

#### Returns

- (string): The input string with the first letter capitalized.

## Technical Concepts

There are no non-standard technical concepts in this code.