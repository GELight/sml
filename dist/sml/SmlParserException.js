"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SmlParserException extends Error {
    constructor(message, ...params) {
        super(...params);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, SmlParserException);
        }
        this.name = "SmlParserException";
        this.message = `${message}`;
    }
}
exports.default = SmlParserException;
//# sourceMappingURL=SmlParserException.js.map