# Prerequisites for Code-Narrator

Before you start working with the Code-Narrator project, make sure you have the following prerequisites:

## Required Software and Tools

1. Node.js (version 14 or higher)
2. npm (version 6 or higher)
3. TypeScript (version 4.9.5 or higher)
4. Gulp (version 4.0.2 or higher)
5. Jest (version 29.4.2 or higher)

## Required Knowledge

1. Familiarity with JavaScript and TypeScript
2. Basic understanding of OpenAI API
3. Experience with command-line interfaces

## Setup

1. Clone the Code-Narrator repository from [https://github.com/ingig/code-narrator](https://github.com/ingig/code-narrator).
2. Install the required dependencies by running `npm install` in the project directory.
3. Create a `.env` file in the project root directory and set the `OPEN_AI` key:

   ```
   OPEN_AI=your_openai_api_key
   ```

   :::danger
   Replace `your_openai_api_key` with your actual OpenAI API key. Do not share your API key with others.
   :::

4. Configure the `code-narrator.config.ts` file according to your project requirements.

Now you are ready to work with the Code-Narrator project.