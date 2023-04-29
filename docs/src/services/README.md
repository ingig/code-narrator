# Documentation

This folder contains the source code for the services used in the system. The services are responsible for handling various tasks, such as interacting with AI APIs and processing user input. The folder is divided into sections, each containing a file or folder with its own specific purpose.

## Table of Contents

- [IGenericAIService.ts](#igenericaiservicets)
- [OpenAIService.ts](#openaiservicets)

## IGenericAIService.ts

IGenericAIService.ts is a TypeScript interface file that defines the structure for a generic AI service. This interface is designed to be implemented by various AI services, providing a consistent way to interact with different AI implementations.

[Read the full documentation for IGenericAIService.ts](IGenericAIService.ts)

## OpenAIService.ts

This TypeScript file defines the `OpenAIService` class, which is responsible for interacting with the OpenAI API to generate responses based on user input. The class implements the `IGenericAIService` interface.

[Read the full documentation for OpenAIService.ts](OpenAIService.ts)

---

[View the repository on GitHub](https://github.com/ingig/code-narrator/src/services)