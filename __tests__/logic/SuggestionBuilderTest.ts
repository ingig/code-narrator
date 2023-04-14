import DocumentationBuilder from "../../src/documentation/DocumentationBuilder";

describe("Test SuggestionBuilder", () => {


    it("Should create .md file with the project description, it uses package.json to get the project name, how to install, and run the module", async () => {
        let builder = new DocumentationBuilder();
        await builder.build();
    })

})