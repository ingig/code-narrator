# Tutorial: Connecting a Custom LLM to Code-Narrator

## Target Audience
This tutorial is intended for developers who want to connect their custom Language Learning Model (LLM) to Code-Narrator instead of using OpenAI to generate documentation.

## Learning Objectives
By the end of this tutorial, you will be able to:
1. Implement the `IGenericAIService` interface.
2. Create a custom service called `MyLLMService`.
3. Connect your custom LLM service to Code-Narrator.

## Introduction
In this tutorial, we will guide you through the process of connecting your custom LLM to Code-Narrator. You will need to implement the `IGenericAIService` interface and create a custom service called `MyLLMService`. We will also show you how to add your custom service to the `code-narrator.config.js` file.

## Prerequisites and System Requirements
- Basic knowledge of TypeScript and JavaScript.
- Familiarity with Code-Narrator and its configuration.
- A custom LLM service that you want to connect to Code-Narrator.

## Step-by-Step Instructions

### Step 1: Implement the IGenericAIService Interface
First, you need to implement the `IGenericAIService` interface in your custom LLM service. This interface is located in the `code-narrator` package and has the following structure:

```typescript
import GenericAIResponse from "../model/GenericAIResponse";

export default interface IGenericAIService {
    query(questions : string[], assistantMessages? : string[]): Promise<GenericAIResponse>;
}
```

### Step 2: Create a Custom Service called MyLLMService
Next, create a new TypeScript file called `MyLLMService.ts` in a directory of your choice. In this file, implement the `IGenericAIService` interface and define the `query` method. This method should send parameters to your custom LLM service and return a `GenericAIResponse` object.

Here's a simple example of how to implement the `query` method using the `fetch()` function:

```typescript
import IGenericAIService from "../services/IGenericAIService";
import GenericAIResponse from "../model/GenericAIResponse";

class MyLLMService implements IGenericAIService {
    async query(questions: string[], assistantMessages?: string[]): Promise<GenericAIResponse> {
        // Replace this URL with the endpoint of your custom LLM service
        const url = "https://your-custom-llm-service.com/api/query";

        // Send the request to your custom LLM service
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                questions,
                assistantMessages,
            }),
        });

        // Parse the response and return a GenericAIResponse object
        const data = await response.json();
        return {
            answer: data.answer,
            requestMessages: data.requestMessages,
        };
    }
}

export default MyLLMService;
```

:::info
This is a generic example and may not fit your implementation to your LLM service.
:::

### Step 3: Add Your Custom Service to code-narrator.config.js
Finally, you need to add your custom service as a class name to the `code-narrator.config.js` file. To do this, import your custom service and add a property called `aiService` to the `config` object.

Here's an example of how to add your custom service to the `code-narrator.config.js` file:

```javascript
import MyLLMService from "./path/to/your/MyLLMService";

const config = {
    // Other configuration properties...
    aiService: new MyLLMService(),
};

export default config;
```

Now, Code-Narrator will use your custom LLM service instead of OpenAI to generate documentation.

## Conclusion
In this tutorial, you learned how to connect your custom LLM to Code-Narrator by implementing the `IGenericAIService` interface, creating a custom service called `MyLLMService`, and adding your custom service to the `code-narrator.config.js` file. With these steps, you can now use your custom LLM service to generate documentation with Code-Narrator.