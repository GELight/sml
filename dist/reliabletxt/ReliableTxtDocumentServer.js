"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReliableTxtDocument_1 = __importDefault(require("./ReliableTxtDocument"));
const ReliableTxtEncoding_1 = __importDefault(require("./ReliableTxtEncoding"));
const ReliableTxtFile_1 = __importDefault(require("./ReliableTxtFile"));
class ReliableTxtDocumentServer extends ReliableTxtDocument_1.default {
    constructor(...args) {
        super(...args);
        this.encoding = ReliableTxtEncoding_1.default.UTF8;
        return this;
    }
    static load(filePath) {
        const file = new ReliableTxtFile_1.default().load(filePath);
        const document = new ReliableTxtDocumentServer(file.getContent());
        document.setEncoding(file.getEncoding());
        return document;
    }
    setEncoding(encoding) {
        this.encoding = encoding;
        return this;
    }
    getEncoding() {
        return this.encoding;
    }
    save(filePath) {
        new ReliableTxtFile_1.default(this.encoding).save(filePath, this.text);
        return this;
    }
}
exports.default = ReliableTxtDocumentServer;
//# sourceMappingURL=ReliableTxtDocumentServer.js.map