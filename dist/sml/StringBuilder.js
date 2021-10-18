"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StringUtil_1 = __importDefault(require("./StringUtil"));
class StringBuilder {
    constructor() {
        this.codePoints = [];
        // ...
    }
    clear() {
        this.codePoints = [];
    }
    toString() {
        return StringUtil_1.default.codePointsToString(this.codePoints);
    }
    appendCodePoint(codePoint) {
        this.codePoints.push(codePoint);
    }
    appendString(str) {
        const codePointsArray = StringUtil_1.default.stringToCodePoints(str);
        this.codePoints = [...this.codePoints, ...codePointsArray];
    }
    getLength() {
        return this.codePoints.length;
    }
}
exports.default = StringBuilder;
//# sourceMappingURL=StringBuilder.js.map