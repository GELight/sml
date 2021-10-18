import WsvDocument from "./WsvDocument";
import WsvLine from "./WsvLine";
import WsvLineIterator from "./WsvLineIterator";

export default class WsvDocumentLineIterator extends WsvLineIterator {

    private wsvDocument: WsvDocument;
    private endKeyword: string;
    private index: number = 0;

    constructor(wsvDocument: WsvDocument, endKeyword: string) {
        super();
        if (endKeyword === null) {
            throw Error("Endkeyword cannot be null");
        }
        this.wsvDocument = wsvDocument;
        this.endKeyword = endKeyword;
    }

    public getEndKeyword(): string {
        return this.endKeyword;
    }

    public hasLine(): boolean {
        return this.index < this.wsvDocument.getLines().length;
    }

    public isEmptyLine(): boolean {
        return this.hasLine() && !this.wsvDocument.getLine(this.index).hasValues();
    }

    public getLine(): WsvLine {
        const line: WsvLine = this.wsvDocument.getLine(this.index);
        this.index++;
        return line;
    }

    public toString(): string {
        let result: string = "(" + this.index + "): ";
        if (this.hasLine()) {
            result += this.wsvDocument.getLine(this.index).toString();
        }
        return result;
    }

}
