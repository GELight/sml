import StringUtil from "./StringUtil";

export default class ReliableTxtDocument {

    public static join(lines: string[]): string {
        return new ReliableTxtDocument(...lines).toString();
    }

    public text: string = "";

    constructor(...args: string[]) {
        this.text = args.join("\n");
        return this;
    }

    public setText(text: string): void {
        if (text !== null) {
            this.text = text;
        }
    }

    public setTextByCodePoints(codePoints: number[]): void {
        if (codePoints !== null) {
            this.text = StringUtil.codePointsToString(codePoints);
        }
    }

    public getText(): string {
        return this.text;
    }

    public getTextAsCodePoints(): number[] {
        return StringUtil.stringToCodePoints(this.text);
    }

    public setLines(...lines: string[]): void {
        this.text = lines.join("\n");
    }

    public getLines(): string[] {
        return this.text.split("\n");
    }

    public toString(): string {
        return this.text;
    }

}
