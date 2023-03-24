import ProjectLogic from "./logic/ProjectLogic";
import ConfigHelper from "./utils/ConfigHelper";
import DocumentationBuilder from "./logic/DocumentationBuilder";
import DocumentationCache from "./logic/DocumentationCache";
import DocumentationGenerator from "./logic/DocumentationGenerator";
import Document from "./documentation/Document";

/*
About code-narrator
This application is runnned either by npm run start or by using cli.
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
    static StartFile= '';
    public async run() {
        await ConfigHelper.load();
        DocumentationCache.load();

        let builder = new DocumentationBuilder();

        await builder.createGetStarted();
        await builder.createBehaviour();
        await builder.createConfig();
        await builder.createApi();

        let generator = new DocumentationGenerator();
        generator.make();

    }
}

let app = new App();
app.run();