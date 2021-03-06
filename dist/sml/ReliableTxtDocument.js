"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StringUtil_1 = __importDefault(require("./StringUtil"));
class ReliableTxtDocument {
    constructor(...args) {
        this.text = "";
        this.text = args.join("\n");
        return this;
    }
    static join(lines) {
        return new ReliableTxtDocument(...lines).toString();
    }
    setText(text) {
        if (text !== null) {
            this.text = text;
        }
    }
    setTextByCodePoints(codePoints) {
        if (codePoints !== null) {
            this.text = StringUtil_1.default.codePointsToString(codePoints);
        }
    }
    getText() {
        return this.text;
    }
    getTextAsCodePoints() {
        return StringUtil_1.default.stringToCodePoints(this.text);
    }
    setLines(...lines) {
        this.text = lines.join("\n");
    }
    getLines() {
        return this.text.split("\n");
    }
    toString() {
        return this.text;
    }
}
exports.default = ReliableTxtDocument;
//# sourceMappingURL=ReliableTxtDocument.js.map