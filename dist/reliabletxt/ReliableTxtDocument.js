"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StringUtil_1 = __importDefault(require("../sml/StringUtil"));
const TypeGuard_1 = require("../TypeGuard");
class ReliableTxtDocument {
    constructor(...args) {
        this.text = "";
        TypeGuard_1.TypeGuard.assureStringArray(args, [TypeGuard_1.NULLABLE]);
        this.text = args.join("\n");
        return this;
    }
    static join(lines) {
        TypeGuard_1.TypeGuard.assureStringArray(lines, [TypeGuard_1.NULLABLE]);
        return new ReliableTxtDocument(...lines).toString();
    }
    setText(text) {
        TypeGuard_1.TypeGuard.assureString(text, [TypeGuard_1.NULLABLE]);
        if (text !== null && text !== undefined) {
            this.text = text;
        }
    }
    setTextByCodePoints(codePoints) {
        TypeGuard_1.TypeGuard.assureNumberArray(codePoints, [TypeGuard_1.NULLABLE]);
        if (codePoints !== null &&
            codePoints !== undefined &&
            Array.isArray(codePoints)) {
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
        TypeGuard_1.TypeGuard.assureStringArray(lines, [TypeGuard_1.NULLABLE]);
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