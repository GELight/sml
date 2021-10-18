"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StringUtil_1 = __importDefault(require("../sml/StringUtil"));
const WsvLine_1 = __importDefault(require("./WsvLine"));
const WsvParserCharIterator_1 = __importDefault(require("./WsvParserCharIterator"));
const WsvParserException_1 = __importDefault(require("./WsvParserException"));
class WsvParser {
    static parseLine(content) {
        const iterator = new WsvParserCharIterator_1.default(content);
        const newLine = WsvParser.parseLineWithIterator(iterator);
        if (iterator.tryReadChar(StringUtil_1.default.lineBreak)) {
            throw new WsvParserException_1.default(iterator, "Multiple WSV lines not allowed");
        }
        else if (!iterator.isEndOfText()) {
            throw new WsvParserException_1.default(iterator, "WSV line not parsed completely");
        }
        return newLine;
    }
    static parseDocument(content, document) {
        const iterator = new WsvParserCharIterator_1.default(content);
        const running = true;
        while (running) {
            const newLine = WsvParser.parseLineWithIterator(iterator);
            document.addWsvLines(newLine);
            if (iterator.isEndOfText()) {
                break;
            }
            else if (!iterator.tryReadChar(StringUtil_1.default.lineBreak)) {
                throw new WsvParserException_1.default(iterator, "Invalid WSV document");
            }
        }
        if (!iterator.isEndOfText()) {
            throw new WsvParserException_1.default(iterator, "WSV document not parsed completely");
        }
        return document;
    }
    static parseLineWithIterator(iterator) {
        const values = [];
        const whitespaces = [];
        let whitespace = iterator.readWhitespaceOrNull();
        whitespaces.push(whitespace);
        while (!iterator.isChar(StringUtil_1.default.lineBreak) && !iterator.isEndOfText()) {
            let value = "";
            if (iterator.isChar(StringUtil_1.default.hash)) {
                break;
            }
            else if (iterator.tryReadChar(StringUtil_1.default.doubleQuote)) {
                value = iterator.readString();
            }
            else {
                value = iterator.readValue();
                if (value === "-") {
                    value = null;
                }
            }
            values.push(value);
            whitespace = iterator.readWhitespaceOrNull();
            if (whitespace == null) {
                break;
            }
            whitespaces.push(whitespace);
        }
        let comment = null;
        if (iterator.tryReadChar(StringUtil_1.default.hash)) {
            comment = iterator.readCommentText();
            if (whitespace == null) {
                whitespaces.push(null);
            }
        }
        const newLine = new WsvLine_1.default().set(values, whitespaces, comment);
        return newLine;
    }
}
exports.default = WsvParser;
//# sourceMappingURL=WsvParser.js.map