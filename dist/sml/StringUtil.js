"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WsvChar_1 = __importDefault(require("./WsvChar"));
class StringUtil {
    static getSubstr(chars, startIndex, len) {
        const sub = chars.slice(startIndex, (startIndex + len));
        return sub.map((char) => {
            return String.fromCodePoint(char);
        }).join("");
    }
    static stringToCodePoints(text) {
        const chars = [];
        for (const codePoint of text) {
            chars.push(codePoint.codePointAt(0));
        }
        return chars;
    }
    static codePointsToString(codePoints) {
        const chars = codePoints.map((codePoint) => {
            return String.fromCodePoint(codePoint);
        });
        return chars.join("");
    }
    static isWhitespaceOrEmpty(str) {
        const codePoints = StringUtil.stringToCodePoints(str);
        for (const c of codePoints) {
            if (!WsvChar_1.default.isWhitespace(c)) {
                return false;
            }
        }
        return true;
    }
    static equalsIgnoreCase(str1, str2) {
        return typeof str1 === "string" && typeof str2 === "string" ?
            str1.localeCompare(str2, undefined, { sensitivity: "accent" }) === 0
            : str1 === str2;
    }
}
exports.default = StringUtil;
StringUtil.doubleQuote = '"'.codePointAt(0);
StringUtil.lineBreak = "\n".codePointAt(0);
StringUtil.slash = "/".codePointAt(0);
StringUtil.hash = "#".codePointAt(0);
StringUtil.minus = "-".codePointAt(0);
//# sourceMappingURL=StringUtil.js.map