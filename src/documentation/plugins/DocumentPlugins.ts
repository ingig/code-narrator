import FileSummary from "./summary/FileSummary";
import FolderSummary from "./summary/FolderSummary";
import GetStartedSummary from "./summary/GetStartedSummary";
import BehaviourSummary from "./summary/BehaviourSummary";

export default class DocumentPlugins {

    static InitPlugins = [FileSummary/*, Code*/]
    static PostInitPlugins = [ /*FlowChart, Naming, NewCode*/];
    static FolderPlugins = [FolderSummary]
    static ProjectPlugins = [GetStartedSummary, BehaviourSummary]

}