import FolderStructure from "../../src/utils/FolderStructure";
import ConfigHelper from "../../src/config/ConfigHelper";

describe('Test FolderStructure', () => {

    it('test shouldDocument', async () => {
        await ConfigHelper.load({project_file:"package.json"})
        ConfigHelper.config.include = ['src/**/*.ts']
        ConfigHelper.config.exclude = ['.env']

        let pathsObject = [{
            path: 'src/App.ts', isDirectory: false, expectedResult : true
        },{
            path: 'src/config/ConfigGenerator.ts', isDirectory: false, expectedResult : true
        },{
            path: 'src', isDirectory: true, expectedResult : true
        },{
            path: '.env', isDirectory: false, expectedResult : false
        }]

        for (let i=0;i<pathsObject.length;i++) {

            let result = FolderStructure.shouldDocument(pathsObject[i].path, pathsObject[i].isDirectory)
            expect(result).toBe(pathsObject[i].expectedResult)
        }

    })

})