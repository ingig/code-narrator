---
sidebar_position: 3
sidebar_label: tsconfig.json
---

# tsconfig.json

The `tsconfig.json` file is a configuration file for TypeScript projects. It specifies the root files and the compiler options required to compile the project. This file is used by the TypeScript compiler (`tsc`) to guide the compilation process and generate the desired JavaScript output.

## Compiler Options

The `compilerOptions` object contains various properties that configure the TypeScript compiler. Here's a description of each property in the given file:

### module

```json
"module": "CommonJS"
```

The `module` property specifies the module system to be used. In this case, it is set to `CommonJS`, which is the default module system for Node.js.

### target

```json
"target": "ES2021"
```

The `target` property sets the ECMAScript target version for the compiled JavaScript output. In this case, it is set to `ES2021`.

### moduleResolution

```json
"moduleResolution": "Node"
```

The `moduleResolution` property determines the strategy used for resolving module imports. In this case, it is set to `Node`, which follows the Node.js module resolution algorithm.

### esModuleInterop

```json
"esModuleInterop": true
```

The `esModuleInterop` property enables compatibility between CommonJS and ES modules. When set to `true`, it allows using default imports with CommonJS modules.

### sourceMap

```json
"sourceMap": true
```

The `sourceMap` property, when set to `true`, generates source map files alongside the compiled JavaScript files. These files help in debugging the TypeScript code.

### outDir

```json
"outDir": "build"
```

The `outDir` property specifies the output directory for the compiled JavaScript files. In this case, it is set to the `build` folder.

### baseUrl

```json
"baseUrl": "./"
```

The `baseUrl` property sets the base URL for resolving non-relative module imports. In this case, it is set to the current directory.

### emitDecoratorMetadata

```json
"emitDecoratorMetadata": true
```

The `emitDecoratorMetadata` property, when set to `true`, emits metadata for decorators in the compiled JavaScript output.

### experimentalDecorators

```json
"experimentalDecorators": true
```

The `experimentalDecorators` property enables support for experimental decorators, a proposed extension to the ECMAScript standard.

### strict

```json
"strict": true
```

The `strict` property enables all strict type-checking options in the TypeScript compiler.

### resolveJsonModule

```json
"resolveJsonModule": true
```

The `resolveJsonModule` property allows importing JSON files as modules.

### isolatedModules

```json
"isolatedModules": true
```

The `isolatedModules` property ensures that each file is treated as a separate module, preventing global scope pollution.

### typeRoots

```json
"typeRoots": ["node_modules/@types", "types"]
```

The `typeRoots` property specifies the folders containing type declaration files.

### paths

```json
"paths": {
  "*": ["@types/*"]
}
```

The `paths` property maps module import paths to their corresponding locations.

## Exclude

```json
"exclude": [
  "node_modules"
]
```

The `exclude` property lists the folders or files that should be excluded from the compilation process. In this case, the `node_modules` folder is excluded.

## Files

```json
"files": [
  "./src/index.ts"
]
```

The `files` property lists the root files to be included in the compilation process. In this case, the `./src/index.ts` file is included.

## compileOnSave

```json
"compileOnSave": true
```

The `compileOnSave` property, when set to `true`, triggers the TypeScript compiler to compile the project whenever a file is saved.