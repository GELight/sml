"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WsvChar {
    static isWhitespace(c) {
        return (c >= 0x09 && c <= 0x0D) ||
            c === 0x20 ||
            c === 0x85 ||
            c === 0xA0 ||
            c === 0x1680 ||
            (c >= 0x2000 && c <= 0x200A) ||
            (c >= 0x2028 && c <= 0x2029) ||
            c === 0x202F ||
            c === 0x205F ||
            c === 0x3000;
    }
}
exports.default = WsvChar;
//# sourceMappingURL=WsvChar.js.map