import WsvDocument from "../whitespacesv/WsvDocument";
import WsvLine from "../whitespacesv/WsvLine";

export default class SmlNode {

    private whitespaces: string[] = null;
    private comment: string = null;

    constructor() {
        // ...
    }

    public setWhitespaces(...whitespaces: string[]): void {
        WsvLine.validateWhitespaces(whitespaces);
        this.whitespaces = whitespaces;
    }

    public getWhitespaces(): string[] {
        if (!this.whitespaces) {
            return null;
        }
        return [...this.whitespaces];
    }

    public setComment(comment: string): void {
        WsvLine.validateComment(comment);
        this.comment = comment;
    }

    public getComment(): string {
        return this.comment;
    }

    public setWhitespacesAndComment(whitespaces: string[], comment: string): void {
        this.whitespaces = whitespaces;
        this.comment = comment;
    }

    public toWsvLines(document: WsvDocument, level: number, defaultIndentation: string, endKeyword: string): void {
        // Overwritten from other classes
    }

}
