import ConfigHelper from "../utils/ConfigHelper";
import FolderStructure from "../utils/FolderStructure";

export default class ProjectStructure {
    public async getStructure() {
        let projectPath = ConfigHelper.get('project_path')!;
        let folderStructure = new FolderStructure(projectPath);

        return folderStructure;
    }

}