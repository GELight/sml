"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReliableTxtDocumentServer_1 = __importDefault(require("./ReliableTxtDocumentServer"));
const ReliableTxtEncoding_1 = __importDefault(require("./ReliableTxtEncoding"));
const SmlDocument_1 = __importDefault(require("./SmlDocument"));
const SmlParser_1 = __importDefault(require("./SmlParser"));
class SmlDocumentServer extends SmlDocument_1.default {
    constructor(rootElement) {
        super(rootElement);
        this.encoding = ReliableTxtEncoding_1.default.UTF8;
        return this;
    }
    static parse(content) {
        const document = new SmlDocumentServer();
        return SmlParser_1.default.parseDocument(content, document);
    }
    static load(filePath) {
        const document = ReliableTxtDocumentServer_1.default.load(filePath);
        const result = SmlDocumentServer.parse(document.getText());
        result.setEncoding(document.getEncoding());
        return result;
    }
    setEncoding(encoding) {
        this.encoding = encoding;
        return this;
    }
    getEncoding() {
        return this.encoding;
    }
    save(filePath) {
        new ReliableTxtDocumentServer_1.default(this.toString())
            .setEncoding(this.getEncoding())
            .save(filePath);
        return this;
    }
}
exports.default = SmlDocumentServer;
//# sourceMappingURL=SmlDocumentServer.js.map