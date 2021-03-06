import WsvParserCharIterator from "./WsvParserCharIterator";

export default class WsvParserException extends Error {

    public text: string;
    public index: number;
    public lineIndex: number;
    public linePosition: number;

    constructor(iterator: WsvParserCharIterator, message: string) {
        super(`${message} ${iterator.getLineInfoString()}`);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, WsvParserException);
        }

        const lineInfo: number[] = iterator.getLineInfo();
        this.index = lineInfo[0];
        this.lineIndex = lineInfo[1];
        this.linePosition = lineInfo[2];
        this.text = iterator.getText();
    }
}
