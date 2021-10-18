"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TypeException extends TypeError {
    constructor(message) {
        super(message);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, TypeException);
        }
    }
}
exports.default = TypeException;
//# sourceMappingURL=TypeException.js.map