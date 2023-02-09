import ProjectLogic from "./logic/ProjectLogic";
import ConfigHelper from "./utils/ConfigHelper";
import SuggestionBuilder from "./logic/SuggestionBuilder";
import SuggestionCache from "./logic/SuggestionCache";
import Generator from "./logic/Generator";


export default class App {

    public async run() {
        await ConfigHelper.load();
        SuggestionCache.load();

        let fileStructureLogic = new ProjectLogic();
        let folder = await fileStructureLogic.getStructure();

        let builder = new SuggestionBuilder();
        let suggestions = await builder.queryForFolder(folder)
        if (!suggestions) {
            console.error('No suggestions to create content for')
            return;
        }

        let generator = new Generator();
        generator.make(suggestions);

    }
}

let app = new App();
app.run();