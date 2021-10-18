"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WsvLine_1 = __importDefault(require("../whitespacesv/WsvLine"));
class SmlNode {
    constructor() {
        this.whitespaces = null;
        this.comment = null;
        // ...
    }
    setWhitespaces(...whitespaces) {
        WsvLine_1.default.validateWhitespaces(whitespaces);
        this.whitespaces = whitespaces;
    }
    getWhitespaces() {
        if (!this.whitespaces) {
            return null;
        }
        return [...this.whitespaces];
    }
    setComment(comment) {
        WsvLine_1.default.validateComment(comment);
        this.comment = comment;
    }
    getComment() {
        return this.comment;
    }
    setWhitespacesAndComment(whitespaces, comment) {
        this.whitespaces = whitespaces;
        this.comment = comment;
    }
    toWsvLines(document, level, defaultIndentation, endKeyword) {
        // Overwritten from other classes
    }
}
exports.default = SmlNode;
//# sourceMappingURL=SmlNode.js.map