---
sidebar_label: tsconfig
sidebar_position: 2
---
# tsconfig

The `tsconfig.json` file is a configuration file for TypeScript projects. It specifies the root files and the compiler options required to compile the project. The file provided has the following properties set:

## compilerOptions

`compilerOptions` is an object that contains various settings to configure the TypeScript compiler.

- `module`: Specifies the module code generation. In this case, it is set to `"CommonJS"`, which is the default module system in Node.js.
- `target`: Specifies the ECMAScript target version. In this case, it is set to `"ES2021"` to use the latest ECMAScript features.
- `moduleResolution`: Determines the strategy used to resolve modules. In this case, it is set to `"Node"` to use Node.js module resolution strategy.
- `esModuleInterop`: Enables emitting additional JavaScript to ease support for importing CommonJS modules in ECMAScript module syntax. In this case, it is set to `true`.
- `sourceMap`: Generates corresponding `.map` files for the compiled JavaScript files. In this case, it is set to `true` to generate source maps.
- `outDir`: Specifies the output directory for the compiled files. In this case, it is set to `"build"`.
- `baseUrl`: Specifies the base directory to resolve non-relative module names. In this case, it is set to `"./"`.
- `emitDecoratorMetadata`: Emit design-type metadata for decorated declarations in the source. In this case, it is set to `true`.
- `experimentalDecorators`: Enables experimental support for ES decorators. In this case, it is set to `true`.
- `strict`: Enables all strict type-checking options. In this case, it is set to `true`.
- `resolveJsonModule`: Allows importing JSON files as modules. In this case, it is set to `true`.
- `isolatedModules`: Ensures that each file can be safely transpiled without relying on other imported files. In this case, it is set to `true`.
- `typeRoots`: Specifies a list of folders that contain type definitions. In this case, it is set to `["node_modules/@types", "types"]`.
- `paths`: Specifies a series of entries that re-map imports to lookup locations relative to the `baseUrl`. In this case, it is set to `{ "*": ["@types/*"] }`.

## exclude

`exclude` is an array of file and folder names that should be excluded from the compilation process. In this case, it is set to `["node_modules"]` to exclude the `node_modules` folder.

## files

`files` is an array of file names to be included in the compilation. In this case, it is set to `["./src/index.ts"]` to include the `index.ts` file in the `src` folder.

## compileOnSave

`compileOnSave` is a boolean that indicates whether the TypeScript files should be compiled automatically when saved. In this case, it is set to `true`.