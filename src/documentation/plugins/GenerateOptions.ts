import Document from "../Document";

export interface GenerateOptions {
    args?: any
    template?: string;
    name: string;
    pathToFile: string
    folderPath: string
    sidebarPosition?: number
    sidebarLabel?: string
    saveToPath?: string;
    data?: any;
    assistantMessages? : string[]
    prevDocument? : Document;
}