"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StringBuilder_1 = __importDefault(require("./StringBuilder"));
const StringUtil_1 = __importDefault(require("./StringUtil"));
const WsvParser_1 = __importDefault(require("./WsvParser"));
const WsvSerializer_1 = __importDefault(require("./WsvSerializer"));
class WsvLine {
    constructor(...args) {
        this.values = [];
        this.comment = null;
        for (const arg of args) {
            this.addValue(arg);
        }
        this.whitespaces = null;
        this.comment = null;
        return this;
    }
    static parse(content) {
        return WsvParser_1.default.parseLine(content);
    }
    static validateWhitespaces(whitespaces) {
        if (whitespaces !== null) {
            for (const whitespace of whitespaces) {
                if (whitespace !== null && !StringUtil_1.default.isWhitespaceOrEmpty(whitespace)) {
                    throw new Error("Whitespace value contains non whitespace character");
                }
            }
        }
    }
    static validateComment(comment) {
        if (comment !== null && comment.indexOf("\n")) {
            throw new Error("Line break in comment is not allowed");
        }
    }
    addValue(value) {
        if (this.values === null) {
            this.values = [];
        }
        this.values.push(value);
    }
    getValues() {
        return this.values;
    }
    setValues(...args) {
        this.values = args;
    }
    hasValues() {
        return (this.values !== null && this.values.length > 0);
    }
    setWhitespaces(whitespaces) {
        WsvLine.validateWhitespaces(whitespaces);
        this.whitespaces = whitespaces;
    }
    getWhitespaces() {
        if (this.whitespaces === null) {
            return null;
        }
        return [...this.whitespaces];
    }
    setComment(comment) {
        WsvLine.validateComment(comment);
        this.comment = comment;
    }
    getComment() {
        return this.comment;
    }
    set(values, whitespaces, comment) {
        this.values = values;
        this.whitespaces = whitespaces;
        this.comment = comment;
        return this;
    }
    toString() {
        const sb = new StringBuilder_1.default();
        const serializedLine = WsvSerializer_1.default.serializeLine(sb, this);
        return sb.toString();
    }
}
exports.default = WsvLine;
//# sourceMappingURL=WsvLine.js.map