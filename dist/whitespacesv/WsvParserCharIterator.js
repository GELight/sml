"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StringUtil_1 = __importDefault(require("../sml/StringUtil"));
const StringBuilder_1 = __importDefault(require("./StringBuilder"));
const WsvChar_1 = __importDefault(require("./WsvChar"));
const WsvParserException_1 = __importDefault(require("./WsvParserException"));
class WsvParserCharIterator {
    constructor(text) {
        this.sb = new StringBuilder_1.default();
        this.chars = [];
        this.index = 0;
        this.chars = StringUtil_1.default.stringToCodePoints(text);
    }
    getText() {
        return StringUtil_1.default.codePointsToString(this.chars);
    }
    getLineInfoString() {
        const lineInfo = this.getLineInfo();
        return `(${lineInfo[1] + 1}, ${lineInfo[2] + 1})`;
    }
    getLineInfo() {
        let lineIndex = 0;
        let linePosition = 0;
        for (let i = 0; i < this.index; i++) {
            if (this.chars[i] === StringUtil_1.default.lineBreak) {
                lineIndex++;
                linePosition = 0;
            }
            else {
                linePosition++;
            }
        }
        const a = [this.index, lineIndex, linePosition];
        return a;
    }
    isEndOfText() {
        return this.index >= this.chars.length;
    }
    isChar(c) {
        if (this.isEndOfText()) {
            return false;
        }
        return (this.chars[this.index] === c);
    }
    tryReadChar(c) {
        if (!this.isChar(c)) {
            return false;
        }
        this.index++;
        return true;
    }
    readCommentText() {
        const startIndex = this.index;
        const running = true;
        while (running) {
            if (this.isEndOfText()) {
                break;
            }
            if (this.chars[this.index] === StringUtil_1.default.lineBreak) {
                break;
            }
            this.index++;
        }
        return StringUtil_1.default.getSubstr(this.chars, startIndex, (this.index - startIndex));
    }
    readWhitespaceOrNull() {
        const startIndex = this.index;
        const running = true;
        while (running) {
            if (this.isEndOfText()) {
                break;
            }
            const c = this.chars[this.index];
            if (c === StringUtil_1.default.lineBreak) {
                break;
            }
            if (!WsvChar_1.default.isWhitespace(c)) {
                break;
            }
            this.index++;
        }
        if (this.index === startIndex) {
            return null;
        }
        return StringUtil_1.default.getSubstr(this.chars, startIndex, (this.index - startIndex));
    }
    readString() {
        this.sb.clear();
        const running = true;
        while (running) {
            if (this.isEndOfText()) {
                throw new WsvParserException_1.default(this, "String not closed");
            }
            const c = this.chars[this.index];
            if (c === StringUtil_1.default.lineBreak) {
                throw new WsvParserException_1.default(this, "String not closed in starting line");
            }
            else if (c === StringUtil_1.default.doubleQuote) {
                this.index++;
                if (this.tryReadChar(StringUtil_1.default.doubleQuote)) {
                    this.sb.appendCodePoint(StringUtil_1.default.doubleQuote);
                }
                else if (this.tryReadChar(StringUtil_1.default.slash)) {
                    if (!this.tryReadChar(StringUtil_1.default.doubleQuote)) {
                        throw new WsvParserException_1.default(this, "String expected after linebreak slash");
                    }
                    this.sb.appendCodePoint(StringUtil_1.default.lineBreak);
                }
                else {
                    break;
                }
            }
            else {
                this.sb.appendCodePoint(c);
                this.index++;
            }
        }
        return this.sb.toString();
    }
    readValue() {
        const startIndex = this.index;
        const running = true;
        while (running) {
            if (this.isEndOfText()) {
                break;
            }
            const c = this.chars[this.index];
            if (WsvChar_1.default.isWhitespace(c) || c === StringUtil_1.default.hash) {
                break;
            }
            if (c === StringUtil_1.default.doubleQuote) {
                throw new WsvParserException_1.default(this, "String starting in value");
            }
            this.index++;
        }
        if (this.index === startIndex) {
            throw new WsvParserException_1.default(this, "Invalid value");
        }
        return StringUtil_1.default.getSubstr(this.chars, startIndex, (this.index - startIndex));
    }
}
exports.default = WsvParserCharIterator;
//# sourceMappingURL=WsvParserCharIterator.js.map