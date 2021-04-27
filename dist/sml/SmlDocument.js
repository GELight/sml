"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const whitespacesv_1 = require("@gelight/whitespacesv");
const SmlParser_1 = __importDefault(require("./SmlParser"));
const SmlSerializer_1 = __importDefault(require("./SmlSerializer"));
class SmlDocument {
    constructor(rootElement) {
        this.emptyNodesBefore = [];
        this.emptyNodesAfter = [];
        this.endKeyword = "End";
        this.defaultIndentation = null;
        if (rootElement) {
            this.root = rootElement;
        }
    }
    static parse(content) {
        const document = new SmlDocument();
        return SmlParser_1.default.parseDocument(content, document);
    }
    setEndKeyword(endKeyword) {
        this.endKeyword = endKeyword;
    }
    getEndKeyword() {
        return this.endKeyword;
    }
    setDefaultIndentation(defaultIndentation) {
        if (!whitespacesv_1.StringUtil.isWhitespaceOrEmpty(defaultIndentation)) {
            throw Error("Invalid indentation");
        }
        this.defaultIndentation = defaultIndentation;
    }
    getDefaultIndentation() {
        return this.defaultIndentation;
    }
    getRoot() {
        return this.root;
    }
    setRoot(root) {
        this.root = root;
    }
    toString() {
        return SmlSerializer_1.default.serializeDocument(this);
    }
}
exports.default = SmlDocument;
//# sourceMappingURL=SmlDocument.js.map