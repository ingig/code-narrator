import DocumentationBuilder from "../../src/logic/DocumentationBuilder";

describe("Test SuggestionBuilder", () => {


    it("Should create cn.md file with the project description, it uses package.json to get the project name, how to install, and run the module", async () => {
        let builder = new DocumentationBuilder();
        builder.createGetStarted();
    })

})