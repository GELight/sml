import StringUtil from "../sml/StringUtil";
import { TypeGuard, NULLABLE } from "../TypeGuard";

export default class ReliableTxtDocument {

    public static join(lines: string[]): string {
        TypeGuard.assureStringArray(lines, [NULLABLE]);

        return new ReliableTxtDocument(...lines).toString();
    }

    public text: string = "";

    constructor(...args: string[]) {
        TypeGuard.assureStringArray(args, [NULLABLE]);

        this.text = args.join("\n");
        return this;
    }

    public setText(text: string): void {
        TypeGuard.assureString(text, [NULLABLE]);

        if (text !== null && text !== undefined) {
            this.text = text;
        }
    }

    public setTextByCodePoints(codePoints: number[]): void {
        TypeGuard.assureNumberArray(codePoints, [NULLABLE]);

        if (codePoints !== null &&
            codePoints !== undefined &&
            Array.isArray(codePoints)) {
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
        TypeGuard.assureStringArray(lines, [NULLABLE]);

        this.text = lines.join("\n");
    }

    public getLines(): string[] {
        return this.text.split("\n");
    }

    public toString(): string {
        return this.text;
    }

}
