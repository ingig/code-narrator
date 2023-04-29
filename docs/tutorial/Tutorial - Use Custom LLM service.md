# Tutorial: Connecting a Custom LLM to Code-Narrator

## Target Audience
This tutorial is aimed at developers who want to connect their custom Language Learning Model (LLM) to Code-Narrator instead of using OpenAI to generate documentation.

## Learning Objectives
By the end of this tutorial, you will be able to:
1. Implement the IGenericAIService interface
2. Create a custom LLM service called MyLLMService
3. Connect your custom LLM service to Code-Narrator

## Introduction
In this tutorial, we will guide you through the process of connecting your custom LLM to Code-Narrator. You will need to implement the IGenericAIService interface and create a custom service called MyLLMService. We will also show you how to add your custom service to the Code-Narrator configuration.

## Prerequisites and System Requirements
- Basic knowledge of TypeScript and Node.js
- A custom LLM that you want to connect to Code-Narrator
- Code-Narrator package installed in your project

## Step-by-step Instructions

### Step 1: Implement the IGenericAIService Interface
First, you need to implement the IGenericAIService interface in your custom LLM service. This interface is located in the `code-narrator` package and has the following structure:

```typescript
import GenericAIResponse from "../model/GenericAIResponse";

export default interface IGenericAIService {
    query(questions: string[], assistantMessages?: string[]): Promise<GenericAIResponse>;
}
```

### Step 2: Create a Custom LLM Service called MyLLMService
Create a new TypeScript file called `MyLLMService.ts` in a directory of your choice. In this file, implement the IGenericAIService interface and create a class called `MyLLMService`. 

Here's an example of how to implement the `query` method using a simple `fetch()` function. :::info This is a generic example and may not fit your implementation to your LLM service.:::

```typescript
import IGenericAIService from "code-narrator/src/services/IGenericAIService";
import GenericAIResponse from "code-narrator/src/model/GenericAIResponse";

class MyLLMService implements IGenericAIService {
    async query(questions: string[], assistantMessages?: string[]): Promise<GenericAIResponse> {
        // Your custom LLM API call logic here
        const response = await fetch("your-llm-api-url", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                questions,
                assistantMessages
            })
        });

        const data = await response.json();

        return {
            answer: data.answer,
            requestMessages: data.requestMessages
        };
    }
}

export default MyLLMService;
```

### Step 3: Add Your Custom Service to Code-Narrator Configuration
To connect your custom LLM service to Code-Narrator, you need to add it to the `code-narrator.config.js` file. Import your custom service and add it as a property called `aiService` to the `config` object.

```javascript
import MyLLMService from "./path/to/MyLLMService";

const config = {
    // Other configuration properties
    aiService: new MyLLMService()
};

export default config;
```

Now, your custom LLM service is connected to Code-Narrator, and it will use your custom LLM instead of OpenAI to generate documentation.

## Conclusion
In this tutorial, you learned how to connect a custom LLM to Code-Narrator by implementing the IGenericAIService interface, creating a custom LLM service called MyLLMService, and adding it to the Code-Narrator configuration. With this knowledge, you can now use your custom LLM to generate documentation for your projects.