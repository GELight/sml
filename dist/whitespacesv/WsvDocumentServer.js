"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReliableTxtDocumentServer_1 = __importDefault(require("../reliabletxt/ReliableTxtDocumentServer"));
const ReliableTxtEncoding_1 = __importDefault(require("../reliabletxt/ReliableTxtEncoding"));
const WsvDocument_1 = __importDefault(require("./WsvDocument"));
const WsvParser_1 = __importDefault(require("./WsvParser"));
class WsvDocumentServer extends WsvDocument_1.default {
    constructor() {
        super();
        this.encoding = ReliableTxtEncoding_1.default.UTF8;
        return this;
    }
    static parse(content) {
        const document = new WsvDocumentServer();
        return WsvParser_1.default.parseDocument(content, document);
    }
    static load(filePath) {
        const document = ReliableTxtDocumentServer_1.default.load(filePath);
        const result = WsvDocumentServer.parse(document.getText());
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
exports.default = WsvDocumentServer;
//# sourceMappingURL=WsvDocumentServer.js.map