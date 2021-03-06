"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StringBuilder_1 = __importDefault(require("./StringBuilder"));
const StringUtil_1 = __importDefault(require("./StringUtil"));
const WsvChar_1 = __importDefault(require("./WsvChar"));
class WsvSerializer {
    static containsSpecialChars(value) {
        const codePoints = StringUtil_1.default.stringToCodePoints(value);
        for (const c of codePoints) {
            if (c === StringUtil_1.default.lineBreak ||
                WsvChar_1.default.isWhitespace(c) ||
                c === StringUtil_1.default.doubleQuote ||
                c === StringUtil_1.default.hash) {
                return true;
            }
        }
        return false;
    }
    static serializeLine(sb, line) {
        if (line.getWhitespaces() !== null && line.getWhitespaces().length > 0) {
            WsvSerializer.serializeValuesWithWhitespace(sb, line);
        }
        else {
            WsvSerializer.serializeValuesWithoutWhitespace(sb, line);
        }
        if (line.getComment() !== null) {
            sb.appendCodePoint(StringUtil_1.default.hash);
            sb.appendString(line.getComment());
        }
    }
    static serializeDocument(document) {
        const sb = new StringBuilder_1.default();
        let isFirstLine = true;
        for (const line of document.getLines()) {
            if (!isFirstLine) {
                sb.appendCodePoint(StringUtil_1.default.lineBreak);
            }
            else {
                isFirstLine = false;
            }
            WsvSerializer.serializeLine(sb, line);
        }
        return sb.toString();
    }
    static serializeValue(sb, str) {
        if (str === null) {
            sb.appendString("-");
        }
        else if (str === "") {
            sb.appendString("\"\"");
        }
        else if (str === "-") {
            sb.appendString("\"-\"");
        }
        else if (WsvSerializer.containsSpecialChars(str)) {
            sb.appendCodePoint(StringUtil_1.default.hash);
            const codePoints = StringUtil_1.default.stringToCodePoints(str);
            for (const c of codePoints) {
                if (c === StringUtil_1.default.lineBreak) {
                    sb.appendString("\"/\"");
                }
                else if (c === StringUtil_1.default.hash) {
                    sb.appendString("\"\"");
                }
                else {
                    sb.appendCodePoint(c);
                }
            }
            sb.appendCodePoint(StringUtil_1.default.hash);
        }
        else {
            sb.appendString(str);
        }
    }
    static serializeWhitespace(sb, whitespace, isRequired) {
        if (whitespace != null && whitespace.length > 0) {
            sb.appendString(whitespace);
        }
        else if (isRequired) {
            sb.appendString(" ");
        }
    }
    static serializeValuesWithWhitespace(sb, line) {
        const values = line.getValues();
        const whitespaces = line.getWhitespaces();
        const comment = line.getComment();
        if (values === null) {
            const whitespace = whitespaces[0];
            WsvSerializer.serializeWhitespace(sb, whitespace, false);
            return;
        }
        for (let i = 0; i < values.length; i++) {
            let whitespace = null;
            if (i < whitespaces.length) {
                whitespace = whitespaces[i];
            }
            if (i === 0) {
                WsvSerializer.serializeWhitespace(sb, whitespace, false);
            }
            else {
                WsvSerializer.serializeWhitespace(sb, whitespace, true);
            }
            WsvSerializer.serializeValue(sb, values[i]);
        }
        if (whitespaces.length >= values.length + 1) {
            const whitespace = whitespaces[values.length];
            WsvSerializer.serializeWhitespace(sb, whitespace, false);
        }
        else if (comment != null && values.length > 0) {
            sb.appendString(" ");
        }
    }
    static serializeValuesWithoutWhitespace(sb, line) {
        const values = line.getValues();
        const comment = line.getComment();
        if (values === null) {
            return;
        }
        let isFollowingValue = false;
        for (const value of values) {
            if (isFollowingValue) {
                sb.appendString(" ");
            }
            else {
                isFollowingValue = true;
            }
            WsvSerializer.serializeValue(sb, value);
        }
        if (comment != null && values.length > 0) {
            sb.appendString(" ");
        }
    }
}
exports.default = WsvSerializer;
//# sourceMappingURL=WsvSerializer.js.map