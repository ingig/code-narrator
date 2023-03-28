import ConfigHelper from "./utils/ConfigHelper";
import DocumentationBuilder from "./documentation/DocumentationBuilder";
import DocumentationCache from "./documentation/DocumentationCache";
import DocumentationGenerator from "./documentation/DocumentationGenerator";
import config from '../code-narrator.config';

/*
About code-narrator
This application is installed with "npm i code-narrator", and executed either by npm run start or by using cli.
When starting it will load up the configuration and cached documentation.
Then it will go through the project code, reading the file & folder structure
if the file or folder does not exist in the cache or the file has changed since last cached
code-narrator will send the code to GPT and ask for documentation in an .md format.
When it receives the documentation, it writes it to the cache.
When all files and folders have been parsed, then code-narrator creates the documentation from the cache

There are few rules to follow
- Write description about the project in the project file (e.g. package.json)
- If GPT generates wrong documentation, the code is probably not clear for humans either. Try adjusting code or adding one line comment to make code clearer
- You can use :::tip or :::danger in you comments in your code files.
 */
export default class App {
    static repositoryUrl = ''
    static Project : any;
    static StartFile= '';
    public async run() {
        let projects = config.projects;

        for (let i=0;i<projects.length;i++) {
            App.Project = projects[i];

            await ConfigHelper.load(config, projects[i]);
            DocumentationCache.load();

            let builder = new DocumentationBuilder();
            await builder.build(projects[i]);
        }

        let generator = new DocumentationGenerator();
        generator.make();

        console.log('Done generating documents')

    }
}

let app = new App();
app.run();