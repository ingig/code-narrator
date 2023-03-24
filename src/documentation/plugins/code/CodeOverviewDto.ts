export interface Method {
    name: string;
    description: string;
    src: string;
    complexity:number;
    conditions: number;
    number_of_lines: number;
    loops: number;
    called_functions: number;
    flow? : string;
    naming? : string;
    new_code_suggestion? : string;
    queries : any;
}

export interface CodeOverview {
    name: string;
    description: string;
    methods: Method[];
}



