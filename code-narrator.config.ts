// code-narrator.config.ts
import ConfigurationBuilder from "./src/documentation/plugins/builders/Configuration/ConfigurationBuilder";
import FilesBuilder from "./src/documentation/plugins/builders/Files/FilesBuilder";
import FoldersBuilder from "./src/documentation/plugins/builders/Folders/FoldersBuilder";
import ReadMeBuilder from "./src/documentation/plugins/builders/ReadMe/ReadMeBuilder";
import BehaviourBuilder from "./src/documentation/plugins/builders/Behaviour/BehaviourBuilder";
import DocusaurusGenerator from "./src/documentation/plugins/generators/Docusaurus/DocusaurusGenerator";
import PrerequisitesBuilder from "./src/documentation/plugins/builders/Prerequisites/PrerequisitesBuilder";
import UsageBuilder from "./src/documentation/plugins/builders/Usage/UsageBuilder";

export default {
    projects : [{
        project_file: "package.json",
        config_file: "code-narrator.config.ts", //if you have specific app config file, e.g. for code-narrator, "code-narrator.config.ts" is the app config file
        entry_file: "./src/App.ts",
        cli_file:"./src/cli.ts",
        project_path: "./",
        source_path: "./src",
        documentation_path: "./docs",
        test_path: "./test",
        exclude : ['ReadMe.md', '/node_modules', '/docs', '/test', '/__test__/**', '.env', '/.idea', '/.git',
            '.gitignore', '/.code-narrator', '/classic', '/build', 'package-lock.json'],
        readmeRoot : true
    }],
    //Order of plugins matter, ConfigurationGenerator runs first to get overview of the project.
    builderPlugins : [
        ConfigurationBuilder, PrerequisitesBuilder, UsageBuilder, FilesBuilder, FoldersBuilder, ReadMeBuilder, BehaviourBuilder
    ],
    generatorPlugin : [
        DocusaurusGenerator
    ],
    gptSystemCommands : [
        'If there is :::note, :::info, :::caution, :::tip, :::danger in the text, extract that from its location and format it correctly',
        `Return your answer in {DocumentationType} format`,
        `If you notice any secret information, replace it with ***** in your response`
    ],
    documentation_type: 'md', //What format should be generated, e.g. md, sphinx
    document_file_extension: ".md",
    cache_file : '.code-narrator/cache.json' //location of the cache file. :::warning '.code-narrator/cache.json' should be committed into git.
};
