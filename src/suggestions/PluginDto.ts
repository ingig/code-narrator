export default class PluginDto {
    query: string = '';
    constructor(type : string) {
        this.type = type;
    }
    type = '';
    finish_reason = '';
    renderer = '';
    answer : any = {};
    prev_data : any = null;
    processed : boolean = false;
}