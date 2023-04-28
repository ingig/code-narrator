# FileStructure.ts

This is a TypeScript code file that defines a `FileStructure` class. The class is designed to handle file structures and read file content based on the given path and line numbers. It uses the `fs` and `path` modules from Node.js to perform file system operations.

## Usage

To use the `FileStructure` class, you need to import it into your project and create a new instance by providing the required parameters.

```typescript
import FileStructure from './FileStructure';

const dir = 'path/to/directory';
const entry = { name: 'example.txt' };
const depth = 1;

const fileStructure = new FileStructure(dir, entry, depth);
```

## Class: FileStructure

### Constructor: FileStructure(dir: string, entry: any, depth: number)

- `dir`: The directory path where the file is located.
- `entry`: An object containing the file's name.
- `depth`: The depth of the file in the directory structure.

### Properties

- `name`: The name of the file.
- `path`: The relative path of the file from the project's root directory.
- `entry`: The entry object containing the file's name.
- `depth`: The depth of the file in the directory structure.

### Static Methods

#### getContent(path: string): string

- `path`: The path of the file to read. It can also include line numbers separated by a comma (e.g., 'path/to/file.txt, 1-5').

Returns the content of the file as a string. If the path includes line numbers, it returns only the specified lines. If the file does not exist or is a directory, it returns an empty string.

#### readFileFromLine(filename: string, startLine: number, endLine: number): string

- `filename`: The path of the file to read.
- `startLine`: The starting line number to read from.
- `endLine`: The ending line number to read until.

Returns the content of the file between the specified line numbers as a string.

## Example

```typescript
import FileStructure from './FileStructure';

const dir = 'path/to/directory';
const entry = { name: 'example.txt' };
const depth = 1;

const fileStructure = new FileStructure(dir, entry, depth);

const content = FileStructure.getContent('path/to/file.txt, 1-5');
console.log(content);

const specificLines = FileStructure.readFileFromLine('path/to/file.txt', 1, 5);
console.log(specificLines);
```

In this example, we create a new `FileStructure` instance and use the `getContent` and `readFileFromLine` static methods to read the content of a file and specific lines, respectively.