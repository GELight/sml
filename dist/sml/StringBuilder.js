"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const whitespacesv_1 = require("@gelight/whitespacesv");
class StringBuilder {
    constructor() {
        this.codePoints = [];
        // ...
    }
    clear() {
        this.codePoints = [];
    }
    toString() {
        return whitespacesv_1.StringUtil.codePointsToString(this.codePoints);
    }
    appendCodePoint(codePoint) {
        this.codePoints.push(codePoint);
    }
    appendString(str) {
        const codePointsArray = whitespacesv_1.StringUtil.stringToCodePoints(str);
        this.codePoints = [...this.codePoints, ...codePointsArray];
    }
    getLength() {
        return this.codePoints.length;
    }
}
exports.default = StringBuilder;
//# sourceMappingURL=StringBuilder.js.map