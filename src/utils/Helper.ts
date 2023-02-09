export default class Helper {

    public static tryParse(content : string | undefined, question : string) {
        if (!content) return '';

        content = content.trim();

        //sometime OpenAI gives period at start of json response
        if (content.indexOf('.') == 0) {
            content = content.substring(1).trim();
        }
        if (this.shouldBeJsonResponse(question)) {
            content = this.tryToFindJson(content)
        }
        if (!this.isJson(content)) return content;

        let jsonContent = content
            .replaceAll('\n', ' ')
            .replaceAll('\r', '')
            .replaceAll('\t', '');
        try {

            return JSON.parse(jsonContent)
        } catch (e : any) {
            try {
                return JSON.parse('[' + jsonContent + ']')
            } catch (e1 : any) {
                console.error('Could not JSON parse content:', content)
            }
            return;
        }

    }

    private static isJson(content: string) {
        if (content.indexOf('{') == 0) return true;
        if (content.indexOf('[') == 0) return true;
        return false;
    }

    private static tryToFindJson(content: string) {
        let idx = (content.indexOf('[') < content.indexOf('{')) ? content.indexOf('[') : content.indexOf('{');
        return content.substring(idx);
    }

    private static shouldBeJsonResponse(question: string) {
        question = question.toLowerCase();
        if(question.indexOf('generate') != -1 && question.indexOf('json') != -1) return true;
        if(question.indexOf('valid json format') != -1) return true;
        if(question.indexOf('json response') != -1) return true;
        return false;
    }
}