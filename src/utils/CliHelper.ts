import yargs from "yargs";
import ICodeNarratorConfig from "../config/ICodeNarratorConfig";
import fs from "fs";
import path from "path";
import process from "process";

export default class CliHelper {

    public async getArgv() : Promise<any> {
        return yargs
            .option('c', {
                type: 'string',
                describe: 'Path to configuration file (JSON or JavaScript)',
                alias: 'config',
                demandOption: false,
            })
            .option('i', {
                type: 'array',
                description: 'Only include specific files or folders in the documentation process',
                alias: 'include'
            }).option('g', {
                type: 'string',
                description: `GPT model. Default is gpt-4, if you do not have access, next best is gpt-3.5-turbo, but it isn't not so good`,
                alias: 'gpt'
            })
            .help()
            .alias('help', 'h').argv;
    }

    public async getConfig(argv : any) : Promise<Partial<ICodeNarratorConfig>> {
        let configPath = argv.config as string;
        let userConfig: Partial<ICodeNarratorConfig> = {};
        if (fs.existsSync(path.join(process.cwd(), 'code-narrator.config.ts'))) {
            configPath = path.join(process.cwd(), 'code-narrator.config.ts');
        } else if (fs.existsSync(path.join(process.cwd(), 'code-narrator.config.js'))) {
            configPath = path.join(process.cwd(), 'code-narrator.config.js');
        } else if (fs.existsSync(path.join(process.cwd(), 'code-narrator.json'))) {
            configPath = path.join(process.cwd(), 'code-narrator.json');
        }

        if (argv.include) {
            userConfig.include = argv.include as string[];
        }
        if (argv.gpt) {
            userConfig.gptModel = argv.gpt as string;
        } else {
            userConfig.gptModel = 'gpt-4'
        }

        if (configPath) {
            if (configPath.endsWith('.js') || configPath.endsWith('.ts')) {
                userConfig = await import(configPath);
            } else if (configPath.endsWith('.json')) {
                userConfig = JSON.parse((await fs.readFileSync(configPath)).toString());
            }
            (userConfig as any).fromFile = true;
        }
        return userConfig;
    }
}