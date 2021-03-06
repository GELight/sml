import WsvLine from "./WsvLine";
import WsvParser from "./WsvParser";
import WsvSerializer from "./WsvSerializer";

export default class WsvDocument {

    public static parse(content: string): WsvDocument {
        const document: WsvDocument = new WsvDocument();
        return WsvParser.parseDocument(content, document);
    }

    public lines: WsvLine[] = [];

    constructor() {
        // ...
    }

    public addWsvLines(...lines: WsvLine[]): WsvDocument {
        for (const line of lines) {
            this.lines.push(line);
        }
        return this;
    }

    public addWsvLineByValues(...values: string[]): WsvDocument {
        const line: WsvLine = new WsvLine();
        for (const value of values) {
            line.addValue(value);
        }
        return this.addWsvLines(line);
    }

    public addWsvLineBySet(values: string[], whitespaces: string[], comment: string): WsvDocument {
        this.addWsvLines(new WsvLine().set(values, whitespaces, comment));
        return this;
    }

    public getLines(): WsvLine[] {
        return this.lines;
    }

    public getLine(index: number): WsvLine {
        return this.lines[index];
    }

    public toArray(): string[][] {
        const array: string[][] = [];
        for (let i = 0; i < this.lines.length; i++) {
            array[i] = this.lines[i].getValues();
        }
        return array;
    }

    public toString(): string {
        return WsvSerializer.serializeDocument(this);
    }

}
