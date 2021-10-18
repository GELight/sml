"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WsvChar_1 = __importDefault(require("../whitespacesv/WsvChar"));
const TypeGuard_1 = require("../TypeGuard");
class StringUtil {
    static isWhitespaceOrEmpty(str) {
        const codePoints = StringUtil.stringToCodePoints(str);
        for (const c of codePoints) {
            if (!WsvChar_1.default.isWhitespace(c)) {
                return false;
            }
        }
        return true;
    }
    static getSubstr(chars, startIndex, len) {
        TypeGuard_1.TypeGuard.assureNumberArray(chars);
        TypeGuard_1.TypeGuard.assureNumber(startIndex);
        TypeGuard_1.TypeGuard.assureNumber(len);
        const sub = chars.slice(startIndex, (startIndex + len));
        return sub.map((char) => {
            return String.fromCodePoint(char);
        }).join("");
    }
    static stringToCodePoints(text) {
        TypeGuard_1.TypeGuard.assureString(text);
        const chars = [];
        if (text) {
            for (const codePoint of text) {
                chars.push(codePoint.codePointAt(0));
            }
        }
        return chars;
    }
    static codePointsToString(codePoints) {
        TypeGuard_1.TypeGuard.assureNumberArray(codePoints);
        const chars = codePoints.map((codePoint) => {
            return String.fromCodePoint(codePoint);
        });
        return chars.join("");
    }
    static equalsIgnoreCase(str1, str2) {
        TypeGuard_1.TypeGuard.assureString(str1);
        TypeGuard_1.TypeGuard.assureString(str2);
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