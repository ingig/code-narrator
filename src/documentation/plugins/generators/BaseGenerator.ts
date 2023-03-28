import Document from "../../Document";

/*
This is the Base class for Generator plugins. Generator plugins are used to parse the documentation
and modify it for the build tool you are using to build the documentation.

Default plugin with code-narrator is Docusaurus since it fails to build when a function contains
a Promise<> in return. This plugin clear that Promise from the function name so it can build.
It also creates sidebar information.
 */
export default abstract class BaseGenerator {

    abstract process(document : Document) : Document;
}