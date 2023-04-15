---
nav_order: 14
title: Content to long


---

# How to Edit Long Content in Code Narrator

## Introduction

When using Code Narrator, you may encounter a situation where the content is too long, and the generated documentation is not satisfactory. In such cases, you can manually edit the content to improve the documentation. This guide will walk you through the process of editing long content in Code Narrator using ChatGPT.

## Step-by-Step Instructions

### Step 1: Open the cache.json file

Locate the `.code-narrator/cache.json` file in your project directory and open it with a text editor.

### Step 2: Find the file and copy the requestMessages content

Search for the file with the long content in the `cache.json` file. Once you find it, copy the content of the `requestMessages` property.

### Step 3: Use ChatGPT to generate documentation

Go to ChatGPT and paste the copied content from the `requestMessages` property into the input field. ChatGPT will generate the documentation for you. If the generated content is incomplete, you can ask ChatGPT to continue generating the documentation.

### Step 4: Copy the generated documentation

Once you are satisfied with the generated documentation from ChatGPT, copy it to your clipboard.

### Step 5: Update the .md file

Navigate to the `docs` folder in your project directory and locate the corresponding `.md` file. Open the file with a text editor and replace the existing content with the documentation you copied from ChatGPT.

## Conclusion

By following these steps, you can successfully edit long content in Code Narrator and improve the quality of your documentation. Remember to save your changes in both the `cache.json` and `.md` files to ensure your updates are properly reflected.