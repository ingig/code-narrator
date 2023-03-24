import ConfigHelper from "../utils/ConfigHelper";
import FolderStructure from "../utils/FolderStructure";

export default class ProjectLogic {

    constructor() {
    }


    public async getStructure() {
        let projectPath = await ConfigHelper.get('project_path')!;
        console.log('path', projectPath);
        let folderStructure = new FolderStructure(projectPath);

        return folderStructure;
    }

}