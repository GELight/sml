"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ReliableTxtException extends Error {
    constructor(message) {
        super(message);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ReliableTxtException);
        }
    }
}
exports.default = ReliableTxtException;
//# sourceMappingURL=ReliableTxtException.js.map