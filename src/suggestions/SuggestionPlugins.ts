import FileSummary from "./summary/FileSummary";
import FolderSummary from "./summary/FolderSummary";
import Code from "./code/Code";
import FlowChart from "./code/FlowChart";
import Naming from "./code/Naming";
import Suggestion from "./Suggestion";
import NewCode from "./code/NewCode";

export default class SuggestionPlugins {

    static InitPlugins = [FileSummary/*, Code*/]
    static PostInitPlugins = [ /*FlowChart, Naming, NewCode*/];
    static FolderPlugins = [FolderSummary]

}