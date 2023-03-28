---
sidebar_position: 1
sidebar_label: gpt_question.liquid
---

# gpt_question.liquid

This is a template file that generates in-depth documentation about the content of a folder. The template uses variables and JSON data to create a structured and detailed description of the folder's purpose and its contents.

## Variables used in the template file

- `mdFileName`: The name of the Markdown file that will be generated.
- `fileAndFolderInfo`: JSON data containing information about the files and folders in the directory.
- `repositoryUrl`: The URL of the repository where the folder is located.
- `path`: The path to the folder within the repository.

## Template file content

```
###
Act as a documentation expert. Write in-depth documentation about the content of this folder.

Header of the file should be "{{ mdFileName }}".
After the header, use the json content provided to generate a description of what this folder is responsible for doing in the system
Divide the document into sections with clear headings and subheadings.

List each file and folder into its own section.
Write high level information in each section, DO NOT generate code examples.
Link each section to its own documentation. The format of the link is simply the name of the folder or file.

At the end of the file add a link to the repository, the url is {{ repositoryUrl }}/{{ path }}

Here is the json of the data you need
###
{{ fileAndFolderInfo }}
###
```

This template file will generate a Markdown file with the specified `mdFileName` as its header. It will then use the provided JSON data (`fileAndFolderInfo`) to create a description of the folder's purpose and responsibilities within the system.

The template will divide the document into sections with clear headings and subheadings, listing each file and folder in its own section. High-level information will be provided for each section, without generating code examples.

Each section will be linked to its own documentation, using the folder or file name as the link format. Finally, a link to the repository will be added at the end of the file, using the `repositoryUrl` and `path` variables.