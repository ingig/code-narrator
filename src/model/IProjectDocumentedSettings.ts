export default interface IProjectDocumentedSettings {
    project_file: string
    config_file: string
    entry_file: string
    cli_file: string
    project_path: string
    source_path: string
    documentation_path: string
    test_path: string
    exclude : string[]
    readmeRoot : boolean

    name: string
    version: string
    homepage: string
    bugs: string
    repository: string
    language: string
    framework: string
    entry: string
    cli: string
    readme: string
}