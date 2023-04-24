import fs from "fs";
import path from "path";
import process from "process";
import ICodeNarratorConfig from "./ICodeNarratorConfig";

export default class ConfigFileSerializer {

    public async serialize(config : ICodeNarratorConfig) {

        const configContent = `
const ConfigurationBuilder = require("code-narrator/dist/src/documentation/plugins/builders/Configuration/ConfigurationBuilder");
const FilesBuilder = require("code-narrator/dist/src/documentation/plugins/builders/Files/FilesBuilder");
const FoldersBuilder = require("code-narrator/dist/src/documentation/plugins/builders/Folders/FoldersBuilder");
const UserDefinedBuilder = require("code-narrator/dist/src/documentation/plugins/builders/UserDefined/UserDefinedBuilder");
        
/**
 * You can find the documentation about code-narrator.config.js at
 * https://github.com/ingig/code-narrator/blob/master/docs/Configuration/code-narrator.config.js.md
 *
 * @type {ICodeNarratorConfig}
 */
const config = {
    ${this.generateConfigString(config)}
}
module.exports = config;
`;
        fs.writeFileSync(path.join(process.cwd(), 'code-narrator.config.js'), configContent)

        if (!fs.existsSync(path.join(process.cwd(), '.code-narrator'))) {
            fs.mkdirSync(path.join(process.cwd(), '.code-narrator'))
        }
        if (!fs.existsSync(path.join(process.cwd(), '.code-narrator/gpt_questions'))) {
            fs.mkdirSync(path.join(process.cwd(), '.code-narrator/gpt_questions'))
        }
        fs.copyFileSync(path.join(__dirname, 'README.liquid'), path.join(process.cwd(), '.code-narrator/gpt_questions/README.liquid'))
        fs.copyFileSync(path.join(__dirname, 'overview_readme.liquid'), path.join(process.cwd(), '.code-narrator/gpt_questions/overview_readme.liquid'))
        fs.copyFileSync(path.join(__dirname, 'howto_create_howto.liquid'), path.join(process.cwd(), '.code-narrator/gpt_questions/howto_create_howto.liquid'))

    }


    public generateConfigString(configObject : any, indentLevel = 1) {
        let indent = '  '.repeat(indentLevel);
        let configString = '';

        for (const [key, value] of Object.entries(configObject)) {
            if (typeof value === 'object' && !Array.isArray(value)) {
                configString += this.getCommentByKey(key, indent);
                configString += `${indent}${key}: {\n`;
                configString += this.generateConfigString(value, indentLevel + 1);
                configString += `${indent}},\n`;
            } else if (Array.isArray(value)) {
                configString += this.getCommentByKey(key, indent);
                configString += `${indent}${key}: [\n`;
                configString += value
                    .map((item) => {
                        if (typeof item === 'object') {
                            return (
                                `${indent}  {\n` +
                                this.generateConfigString(item, indentLevel + 2) +
                                `${indent}  },`
                            );
                        } else if (typeof item === 'function') {
                            return `${indent} ${item.name},`
                        } else {
                            return `${indent}  ${JSON.stringify(item)},`;
                        }
                    })
                    .join('\n');
                configString += `\n${indent}],\n`;
            } else {
                configString += this.getCommentByKey(key, indent);
                configString += `${indent}${key}: ${JSON.stringify(value)},\n`;
            }
        }

        return configString;
    }

    map = new Map([
        ['config_files', 'App specific configuration files. This could be something like project_name.json'],
        ['repository_url', 'Url to the repository, code-narrator tries to extract this from project file'],
        ['builderPlugins', 'These are the plugins used when building documentation. You can create your own plugin. Checkout the code-narrator docs HowTo create a builder plugin'],
        ['gptSystemCommands', 'These are system commends send to GPT with every query'],
        ['readmeRoot', 'Indicates if the documentation should create a README file in root of project'],
        ['builders', 'Array of user defined documentations. See code-narrator How to create a user defined builder']
    ])
    private getCommentByKey(key: string, indent: string) {
        let value = this.map.get(key);
        if (!value) return '';
        return `${indent}// ${value}\n`;
    }
}