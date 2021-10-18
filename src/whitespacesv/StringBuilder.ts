import StringUtil from "../sml/StringUtil";

export default class StringBuilder {

    private codePoints: number[] = [];

    constructor() {
        // ...
    }

    public clear(): void {
        this.codePoints = [];
    }

    public toString(): string {
        return StringUtil.codePointsToString(this.codePoints);
    }

    public appendCodePoint(codePoint: number): void {
        this.codePoints.push(codePoint);
    }

    public appendString(str: string): void {
        const codePointsArray: number[] = StringUtil.stringToCodePoints(str);
        this.codePoints = [...this.codePoints, ...codePointsArray];
    }

    public getLength(): number {
        return this.codePoints.length;
    }

}
