"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const whitespacesv_1 = require("@gelight/whitespacesv");
class SmlNode {
    constructor() {
        this.whitespaces = null;
        this.comment = null;
        // ...
    }
    setWhitespaces(...whitespaces) {
        whitespacesv_1.WsvLine.validateWhitespaces(whitespaces);
        this.whitespaces = whitespaces;
    }
    getWhitespaces() {
        return [...this.whitespaces];
    }
    setComment(comment) {
        whitespacesv_1.WsvLine.validateComment(comment);
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