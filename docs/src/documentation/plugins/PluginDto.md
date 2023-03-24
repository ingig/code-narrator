---
sidebar_label: PluginDto
sidebar_position: 2
---
# PluginDto

The `PluginDto` class is a simple data transfer object (DTO) that is used to store and transfer data between different parts of an application. This class is particularly useful when working with plugins, as it provides a standardized way to pass data between the main application and the plugin.

## Usage

To use the `PluginDto` class, you can create a new instance of the class and set its properties as needed. Here are some examples of how to use this class:

### Example 1: Creating a new PluginDto instance

```javascript
import PluginDto from './PluginDto';

const pluginDto = new PluginDto('exampleType');
```

### Example 2: Setting properties on a PluginDto instance

```javascript
pluginDto.query = 'exampleQuery';
pluginDto.finish_reason = 'exampleFinishReason';
pluginDto.renderer = 'exampleRenderer';
pluginDto.answer = { exampleKey: 'exampleValue' };
pluginDto.prev_data = { examplePrevKey: 'examplePrevValue' };
pluginDto.processed = true;
```

## Methods

The `PluginDto` class has only one method, the constructor, which is used to create a new instance of the class.

### constructor(type: string)

The constructor takes a single parameter, `type`, which is a string representing the type of the plugin. This value is used to set the `type` property on the new instance of the class.

#### Parameters

- `type`: A string representing the type of the plugin.

## Properties

The `PluginDto` class has several properties that can be used to store and transfer data between different parts of an application.

### query: string

The `query` property is a string that can be used to store a query or command that the plugin should process.

### type: string

The `type` property is a string representing the type of the plugin. This value is set by the constructor when a new instance of the class is created.

### finish_reason: string

The `finish_reason` property is a string that can be used to store a reason for why the plugin has finished processing the query.

### renderer: string

The `renderer` property is a string that can be used to store the name of the renderer that should be used to display the results of the plugin's processing.

### answer: any

The `answer` property is an object that can be used to store the results of the plugin's processing. This can be any valid JavaScript object.

### prev_data: any

The `prev_data` property is an object that can be used to store any previous data that the plugin may need to reference during its processing. This can be any valid JavaScript object.

### processed: boolean

The `processed` property is a boolean that indicates whether the plugin has finished processing the query. This value is initially set to `false` and should be set to `true` once the plugin has completed its processing.