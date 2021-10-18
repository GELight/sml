"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeGuard = exports.NULLABLE_VALUE = exports.NULLABLE = void 0;
const TypeException_1 = __importDefault(require("./TypeException"));
exports.NULLABLE = "NULLABLE";
exports.NULLABLE_VALUE = "NULLABLE_VALUE";
class TypeGuard {
    static assureBoolean(param, options = []) {
        if (options.includes(exports.NULLABLE) && param === null) {
            return param;
        }
        if (typeof param !== "boolean") {
            throw new TypeException_1.default(`The argument of the type '${typeof param}' must be a 'boolean'`);
        }
        return param;
    }
    static assureString(param, options = []) {
        if (options.includes(exports.NULLABLE) && param === null) {
            return param;
        }
        if (typeof param !== "string") {
            throw new TypeException_1.default(`The argument of the type '${typeof param}' must be an 'string'`);
        }
        return param;
    }
    static assureNumber(param, options = []) {
        if (options.includes(exports.NULLABLE) && param === null) {
            return param;
        }
        if (!Number.isInteger(param)) {
            throw new TypeException_1.default(`The argument of the type '${typeof param}' must be an 'number'`);
        }
        return param;
    }
    static assureArray(param, options = []) {
        if (options.includes(exports.NULLABLE) && param === null) {
            return param;
        }
        if (!Array.isArray(param)) {
            throw new TypeException_1.default(`The argument type must be an 'array'`);
        }
        return param;
    }
    static assureStringArray(param, options = []) {
        if (options.includes(exports.NULLABLE) && param === null) {
            return param;
        }
        if (Array.isArray(param)) {
            for (const item of param) {
                if (options.includes(exports.NULLABLE_VALUE)) {
                    TypeGuard.assureString(item, [exports.NULLABLE]);
                }
                else {
                    TypeGuard.assureString(item);
                }
            }
        }
        else {
            throw new TypeException_1.default(`The argument of the type '${typeof param}' must be an 'string array'`);
        }
        return param;
    }
    static assureNumberArray(param, options = []) {
        if (options.includes(exports.NULLABLE) && param === null) {
            return param;
        }
        if (Array.isArray(param)) {
            for (const item of param) {
                if (options.includes(exports.NULLABLE_VALUE)) {
                    TypeGuard.assureNumber(item, [exports.NULLABLE]);
                }
                else {
                    TypeGuard.assureNumber(item);
                }
            }
        }
        else {
            throw new TypeException_1.default(`The argument of the type '${typeof param}' must be an 'number array'`);
        }
        return param;
    }
    static assureInstanceOf(param, obj, options = []) {
        if (options.includes(exports.NULLABLE) && param === null) {
            return param;
        }
        if (!(param instanceof obj)) {
            throw new TypeException_1.default(`The argument of the type '${typeof param}' must be an array of '${obj}'`);
        }
        return param;
    }
    static assureArrayOfInstance(param, obj, options = []) {
        if (options.includes(exports.NULLABLE) && param === null) {
            return param;
        }
        if (Array.isArray(param)) {
            for (const item of param) {
                if (options.includes(exports.NULLABLE_VALUE)) {
                    TypeGuard.assureInstanceOf(item, obj, [exports.NULLABLE]);
                }
                else {
                    TypeGuard.assureInstanceOf(item, obj);
                }
            }
        }
        else {
            throw new TypeException_1.default(`The argument of the type '${typeof param}' must be an instance of ${obj}`);
        }
        return param;
    }
}
exports.TypeGuard = TypeGuard;
//# sourceMappingURL=TypeGuard.js.map