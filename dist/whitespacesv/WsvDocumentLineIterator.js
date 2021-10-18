"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WsvLineIterator_1 = __importDefault(require("./WsvLineIterator"));
class WsvDocumentLineIterator extends WsvLineIterator_1.default {
    constructor(wsvDocument, endKeyword) {
        super();
        this.index = 0;
        if (endKeyword === null) {
            throw Error("Endkeyword cannot be null");
        }
        this.wsvDocument = wsvDocument;
        this.endKeyword = endKeyword;
    }
    getEndKeyword() {
        return this.endKeyword;
    }
    hasLine() {
        return this.index < this.wsvDocument.getLines().length;
    }
    isEmptyLine() {
        return this.hasLine() && !this.wsvDocument.getLine(this.index).hasValues();
    }
    getLine() {
        const line = this.wsvDocument.getLine(this.index);
        this.index++;
        return line;
    }
    toString() {
        let result = "(" + this.index + "): ";
        if (this.hasLine()) {
            result += this.wsvDocument.getLine(this.index).toString();
        }
        return result;
    }
}
exports.default = WsvDocumentLineIterator;
//# sourceMappingURL=WsvDocumentLineIterator.js.map