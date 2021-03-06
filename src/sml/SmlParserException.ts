export default class SmlParserException extends Error {

    public lineIndex: number;
    public linePosition: number;

    constructor(message: string, ...params: string[]) {
        super(...params);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, SmlParserException);
        }

        this.name = "SmlParserException";
        this.message = `${message}`;
    }
}
