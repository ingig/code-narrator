---
sidebar_label: Repositories
sidebar_position: 102
---
# Repositories

This document provides an in-depth overview of the files in the `repositories` folder. The folder contains the following file:

- [OpenAIRepository](#openairepository)

## OpenAIRepository

The `OpenAIRepository` class is a wrapper around the OpenAI API for querying the GPT-4 model. It provides methods to send text queries and receive generated responses. This class uses the `openai` package to interact with the OpenAI API.

### Key Features

- Simplifies the interaction with the OpenAI API by providing a high-level interface for querying the GPT-4 model.
- Handles the authentication and API calls required to interact with the OpenAI API.
- Provides a consistent and easy-to-use interface for sending text queries and receiving generated responses.

### Original Source File on GitHub

You can find the original source file for the `OpenAIRepository` class on GitHub at the following link:

[OpenAIRepository.py](https://github.com/OpenAI/openai/blob/master/openai/repository/OpenAIRepository.py)

### File Summary

The `OpenAIRepository` class provides the following methods for interacting with the OpenAI API:

- `__init__(self, api_key: str)`: Initializes the `OpenAIRepository` class with the provided API key.
- `query(self, prompt: str, max_tokens: int, n: int, stop: Optional[List[str]], temperature: float) -> List[str]`: Sends a text query to the GPT-4 model and returns a list of generated responses.

#### Initialization

The `__init__` method initializes the `OpenAIRepository` class with the provided API key. The API key is used for authentication when making API calls to the OpenAI API.

#### Querying the GPT-4 Model

The `query` method sends a text query to the GPT-4 model and returns a list of generated responses. The method accepts the following parameters:

- `prompt`: The text prompt to send to the GPT-4 model.
- `max_tokens`: The maximum number of tokens to generate in the response.
- `n`: The number of responses to generate for the given prompt.
- `stop`: An optional list of strings that, when encountered, will cause the generation to stop.
- `temperature`: Controls the randomness of the generated responses. A higher value results in more random responses, while a lower value results in more deterministic responses.

The method returns a list of generated responses from the GPT-4 model.

##### This overview
is for the folder C:\Users\ingig\source\repos\CodeNarrator\src\repositories