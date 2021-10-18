"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WsvParserException extends Error {
    constructor(iterator, message) {
        super(`${message} ${iterator.getLineInfoString()}`);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, WsvParserException);
        }
        const lineInfo = iterator.getLineInfo();
        this.index = lineInfo[0];
        this.lineIndex = lineInfo[1];
        this.linePosition = lineInfo[2];
        this.text = iterator.getText();
    }
}
exports.default = WsvParserException;
//# sourceMappingURL=WsvParserException.js.map