export default interface IBuilder {
    type: BuilderType
    name: string;
    title: string;
    template: string;
    args: any;
    files: IFile[];
    path : string;
    sidebarPosition: number;
    sidebarLabel: string;
}
type BuilderType = 'howto' | 'README' | 'custom';

export interface IFile {
    path: string;
    JSONPath: string[];
    extract : string[];
}