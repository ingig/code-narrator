
import path from "path";
import fs from "fs";
import FileStructure from "../../src/utils/FileStructure";

jest.mock("fs");

describe("FileStructure", () => {
    const testEntry: any = { name: "test.txt" };
    const testDir = path.resolve(process.cwd(), "testDir");
    const testDepth = 2;

    afterEach(() => {
        jest.resetAllMocks();
    });

    test("constructor", () => {
        const fileStructure = new FileStructure(testDir, testEntry, testDepth);

        expect(fileStructure.name).toEqual(testEntry.name);
        expect(fileStructure.path).toEqual(path.relative(process.cwd(), path.resolve(testDir, testEntry.name)));
        expect(fileStructure.entry).toEqual(testEntry);
        expect(fileStructure.depth).toEqual(testDepth);
    });

    test("getContent with non-existent file path", () => {
        const filePath = "non_existent.txt";
        const consoleWarnSpy = jest.spyOn(console, "warn").mockImplementation(() => {});

        (fs.existsSync as jest.Mock).mockReturnValue(false);

        const content = FileStructure.getContent(filePath);

        expect(fs.existsSync).toHaveBeenCalledWith(filePath);
        expect(consoleWarnSpy).toHaveBeenCalledWith(`path:${filePath} not found, returning empty string`);
        expect(content).toBe("");
    });

    test("getContent with an existing file path", () => {
        const filePath = "test.txt";
        const fileContent = "Hello, world!";

        (fs.existsSync as jest.Mock).mockReturnValue(true);
        (fs.readFileSync as jest.Mock).mockReturnValue(fileContent);

        const content = FileStructure.getContent(filePath);

        expect(fs.existsSync).toHaveBeenCalledWith(filePath);
        expect(fs.readFileSync).toHaveBeenCalledWith(filePath);
        expect(content).toBe(fileContent);
    });

    test("getContent with an existing file path and specific line number", () => {
        const filePath = "test.txt";
        const fileContent = "Hello, world!\nGoodbye, world!\BleBlue";
        const lineNumber = 2;
        const lineContent = "Goodbye, world!\BleBlue";

        (fs.existsSync as jest.Mock).mockReturnValue(true);
        (fs.readFileSync as jest.Mock).mockReturnValue(fileContent);

        const content = FileStructure.getContent(`${filePath}, ${lineNumber}`);

        expect(fs.existsSync).toHaveBeenCalledWith(filePath);
        expect(content).toBe(lineContent);
    });

    test("getContent with an existing file path and range of line numbers", () => {
        const filePath = "test.txt";
        const fileContent = "Line 1\nLine 2\nLine 3\nLine 4";
        const range = "1-3";
        const rangeContent = "Line 1\nLine 2\nLine 3";

        (fs.existsSync as jest.Mock).mockReturnValue(true);
        (fs.readFileSync as jest.Mock).mockReturnValue(fileContent);

        const content = FileStructure.getContent(`${filePath}, ${range}`);

        expect(fs.existsSync).toHaveBeenCalledWith(filePath);
        expect(content).toBe(rangeContent);
    });

    test("readFileFromLine with valid inputs", () => {
        const filePath = "test.txt";
        const fileContent = "Line 1\nLine 2\nLine 3\nLine 4";
        const startLine = 2;
        const endLine = 4;
        const rangeContent = "Line 2\nLine 3\nLine 4";

        (fs.readFileSync as jest.Mock).mockReturnValue(fileContent);

        const content = FileStructure.readFileFromLine(filePath, startLine, endLine);

        expect(fs.readFileSync).toHaveBeenCalledWith(filePath, 'utf-8');
        expect(content).toBe(rangeContent);
    });

    test("readFileFromLine with endLine greater than the total number of lines in the file", () => {
        const filePath = "test.txt";
        const fileContent = "Line 1\nLine 2\nLine 3\nLine 4";
        const startLine = 2;
        const endLine = 10;
        const rangeContent = "Line 2\nLine 3\nLine 4";
        (fs.readFileSync as jest.Mock).mockReturnValue(fileContent);

        const content = FileStructure.readFileFromLine(filePath, startLine, endLine);

        expect(fs.readFileSync).toHaveBeenCalledWith(filePath, 'utf-8');
        expect(content).toBe(rangeContent);
    });

    test("readFileFromLine with invalid input types", () => {
        const filePath = "test.txt";
        const fileContent = "Line 1\nLine 2\nLine 3\nLine 4";
        const invalidStartLine = "2";
        const invalidEndLine = 4.5;
        (fs.readFileSync as jest.Mock).mockReturnValue(fileContent);

       // expect(() => {
         let ble =   FileStructure.readFileFromLine(filePath, invalidStartLine as any, invalidEndLine as any);
        //}).toThrow(TypeError);
    });
});
