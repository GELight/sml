"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const ReliableTxtEncoding_1 = __importDefault(require("./ReliableTxtEncoding"));
const ReliableTxtException_1 = __importDefault(require("./ReliableTxtException"));
class ReliableTxtFile {
    constructor(encoding) {
        this.fileContent = "";
        this.encoding = ReliableTxtEncoding_1.default.UTF8;
        this.setEncoding(encoding);
        return this;
    }
    static getEncodingFromBuffer(buffer) {
        if (buffer.length < 2) {
            return null;
        }
        const byte1 = buffer.readInt8(0);
        const byte2 = buffer.readInt8(1);
        if (byte1 === -1 && byte2 === -2) {
            return ReliableTxtEncoding_1.default.UTF16_REVERSED;
        }
        else if (byte1 === -17 && byte2 === -69) {
            if (buffer.length >= 3 && buffer.readInt8(2) === -65) {
                return ReliableTxtEncoding_1.default.UTF8;
            }
        }
        return null;
    }
    save(filePath, content, encoding) {
        this.setEncoding(encoding);
        try {
            fs_1.writeFileSync(filePath, "\ufeff" + content, this.encoding);
        }
        catch (e) {
            console.error(e);
        }
        return this;
    }
    load(filePath) {
        try {
            const fileBuffer = fs_1.readFileSync(filePath, Object.assign({ flag: "r" }));
            const detectedEncoding = ReliableTxtFile.getEncodingFromBuffer(fileBuffer);
            if (detectedEncoding === null) {
                throw new ReliableTxtException_1.default("Document does not have a ReliableTXT preamble");
            }
            this.setEncoding(detectedEncoding);
            const fileContent = fs_1.readFileSync(filePath, Object.assign({ encoding: this.encoding, flag: "r" })).toString();
            this.fileContent = fileContent.slice(1);
            return this;
        }
        catch (e) {
            throw Error(e.message);
            return null;
        }
    }
    getEncoding() {
        return this.encoding;
    }
    getContent() {
        return this.fileContent;
    }
    setEncoding(encoding) {
        if (encoding) {
            this.encoding = encoding;
        }
        return this;
    }
}
exports.default = ReliableTxtFile;
//# sourceMappingURL=ReliableTxtFile.js.map