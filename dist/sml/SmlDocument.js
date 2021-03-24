"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SmlParser_1 = __importDefault(require("./SmlParser"));
const SmlSerializer_1 = __importDefault(require("./SmlSerializer"));
const StringUtil_1 = __importDefault(require("./StringUtil"));
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
        if (!StringUtil_1.default.isWhitespaceOrEmpty(defaultIndentation)) {
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
    spath(path, index = 0) {
        // const line = new WsvLine();
        // line.set(path.split(" "), [], "");
        let part = null;
        if (!index) {
            part = this.getRoot();
        }
        // const nextPart = part.
        // part = this.spath(path, index++);
        return part;
    }
}
exports.default = SmlDocument;
//# sourceMappingURL=SmlDocument.js.map