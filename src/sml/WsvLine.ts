import StringBuilder from "./StringBuilder";
import StringUtil from "./StringUtil";
import WsvParser from "./WsvParser";
import WsvSerializer from "./WsvSerializer";

export default class WsvLine {

    public static parse(content: string): WsvLine {
        return WsvParser.parseLine(content);
    }

    public static validateWhitespaces(whitespaces: string[]): void {
        if (whitespaces !== null) {
            for (const whitespace of whitespaces) {
                if (whitespace !== null && !StringUtil.isWhitespaceOrEmpty(whitespace)) {
                    throw new Error("Whitespace value contains non whitespace character");
                }
            }
        }
    }

    public static validateComment(comment: string): void {
        if (comment !== null && comment.indexOf("\n")) {
            throw new Error("Line break in comment is not allowed");
        }
    }

    private values: string[] = [];
    private whitespaces: string[];
    private comment: string = null;

    constructor(...args: string[]) {
        for (const arg of args) {
            this.addValue(arg);
        }

        this.whitespaces = null;
        this.comment = null;

        return this;
    }

    public addValue(value: string) {
        if (this.values === null) {
            this.values = [];
        }
        this.values.push(value);
    }

    public getValues(): string[] {
        return this.values;
    }

    public setValues(...args: string[]): void {
        this.values = args;
    }

    public hasValues(): boolean {
        return (this.values !== null && this.values.length > 0);
    }

    public setWhitespaces(whitespaces: string[]): void {
        WsvLine.validateWhitespaces(whitespaces);
        this.whitespaces = whitespaces;
    }

    public getWhitespaces(): string[] {
        if (this.whitespaces === null) {
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

    public set(values: string[], whitespaces: string[], comment: string): WsvLine {
        this.values = values;
        this.whitespaces = whitespaces;
        this.comment = comment;
        return this;
    }

    public toString(): string {
        const sb: StringBuilder = new StringBuilder();
        const serializedLine = WsvSerializer.serializeLine(sb, this);
        return sb.toString();
    }

}
