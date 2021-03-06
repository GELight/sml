import StringBuilder from "./StringBuilder";
import StringUtil from "./StringUtil";
import WsvChar from "./WsvChar";
import WsvParserException from "./WsvParserException";

export default class WsvParserCharIterator {

    private sb: StringBuilder = new StringBuilder();
    private chars: number[] = [];
    private index: number = 0;

    constructor(text: string) {
        this.chars = StringUtil.stringToCodePoints(text);
    }

    public getText(): string {
        return StringUtil.codePointsToString(this.chars);
    }

    public getLineInfoString(): string {
        const lineInfo: number[] = this.getLineInfo();
        return `(${lineInfo[1] + 1}, ${lineInfo[2] + 1})`;
    }

    public getLineInfo(): number[] {
        let lineIndex: number = 0;
        let linePosition: number = 0;
        for (let i = 0; i < this.index; i++) {
            if (this.chars[i] === StringUtil.lineBreak) {
                lineIndex++;
                linePosition = 0;
            } else {
                linePosition++;
            }
        }
        const a: number[] = [this.index, lineIndex, linePosition];
        return a;
    }

    public isEndOfText(): boolean {
        return this.index >= this.chars.length;
    }

    public isChar(c: number): boolean {
        if (this.isEndOfText()) {
            return false;
        }
        return (this.chars[this.index] === c);
    }

    public tryReadChar(c: number): boolean {
        if (!this.isChar(c)) {
            return false;
        }
        this.index++;
        return true;
    }

    public readCommentText(): string {
        const startIndex: number = this.index;

        while (true) {
            if (this.isEndOfText()) {
                break;
            }
            if (this.chars[this.index] === StringUtil.lineBreak) {
                break;
            }
            this.index++;
        }

        return StringUtil.getSubstr(this.chars, startIndex, (this.index - startIndex));
    }

    public readWhitespaceOrNull(): string {
        const startIndex: number = this.index;
        while (true) {
            if (this.isEndOfText()) {
                break;
            }
            const c: number = this.chars[this.index];
            if (c === StringUtil.lineBreak) {
                break;
            }
            if (!WsvChar.isWhitespace(c)) {
                break;
            }
            this.index++;
        }
        if (this.index === startIndex) {
            return null;
        }

        return StringUtil.getSubstr(this.chars, startIndex, (this.index - startIndex));
    }

    public readString(): string {
        this.sb.clear();

        while (true) {
            if (this.isEndOfText()) {
                throw new WsvParserException(this, "String not closed");
            }
            const c: number = this.chars[this.index];
            if (c === StringUtil.lineBreak) {
                throw new WsvParserException(this, "String not closed in starting line");
            } else if (c === StringUtil.doubleQuote) {
                this.index++;
                if (this.tryReadChar(StringUtil.doubleQuote)) {
                    this.sb.appendCodePoint(StringUtil.doubleQuote);
                } else if (this.tryReadChar(StringUtil.slash)) {
                    if (!this.tryReadChar(StringUtil.doubleQuote)) {
                        throw new WsvParserException(this, "String expected after linebreak slash");
                    }
                    this.sb.appendCodePoint(StringUtil.lineBreak);
                } else {
                    break;
                }
            } else {
                this.sb.appendCodePoint(c);
                this.index++;
            }
        }
        return this.sb.toString();
    }

    public readValue(): string {
        const startIndex: number = this.index;

        while (true) {
            if (this.isEndOfText()) {
                break;
            }
            const c: number = this.chars[this.index];
            if (WsvChar.isWhitespace(c) || c === StringUtil.hash) {
                break;
            }
            if (c === StringUtil.doubleQuote) {
                throw new WsvParserException(this, "String starting in value");
            }
            this.index++;
        }
        if (this.index === startIndex) {
            throw new WsvParserException(this, "Invalid value");
        }

        return StringUtil.getSubstr(this.chars, startIndex, (this.index - startIndex));
    }

}
