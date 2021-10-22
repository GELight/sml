"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StringUtil_1 = __importDefault(require("../sml/StringUtil"));
const StringBuilder_1 = __importDefault(require("./StringBuilder"));
const WsvParser_1 = __importDefault(require("./WsvParser"));
const WsvSerializer_1 = __importDefault(require("./WsvSerializer"));
const TypeGuard_1 = require("../TypeGuard");
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
        TypeGuard_1.TypeGuard.assureStringArray(whitespaces);
        if (whitespaces !== null) {
            for (const whitespace of whitespaces) {
                if (whitespace !== null && !StringUtil_1.default.isWhitespaceOrEmpty(whitespace)) {
                    throw new Error("Whitespace value contains non whitespace character");
                }
            }
        }
    }
    static validateComment(comment) {
        TypeGuard_1.TypeGuard.assureString(comment, [TypeGuard_1.NULLABLE]);
        if (comment !== null && comment.indexOf("\n") >= 0) {
            throw new Error("Line break in comment is not allowed");
        }
    }
    addValue(value) {
        TypeGuard_1.TypeGuard.assureString(value, [TypeGuard_1.NULLABLE]);
        this.values.push(value);
    }
    getValues() {
        return this.values;
    }
    setValues(...args) {
        TypeGuard_1.TypeGuard.assureStringArray(args, [TypeGuard_1.NULLABLE]);
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
        return this;
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
        WsvSerializer_1.default.serializeLine(sb, this);
        return sb.toString();
    }
}
exports.default = WsvLine;
//# sourceMappingURL=WsvLine.js.map