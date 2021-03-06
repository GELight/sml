"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SmlNamedNode_1 = __importDefault(require("./SmlNamedNode"));
const SmlSerializer_1 = __importDefault(require("./SmlSerializer"));
class SmlAttribute extends SmlNamedNode_1.default {
    constructor(name, values) {
        super(name);
        this.values = [];
        this.setValues(...values.map(String));
    }
    setValues(...values) {
        if (values === null || values.length === 0) {
            throw new Error("Values must contain at least one value");
        }
        this.values = values.map(String);
    }
    getValues(offset) {
        if (offset) {
            return this.values.slice(offset);
        }
        else {
            return this.values;
        }
    }
    getNumberValues(offset) {
        if (offset) {
            return this.values.slice(offset).map(Number);
        }
        else {
            return this.values.map(Number);
        }
    }
    getString(index) {
        if (index) {
            return this.values[index];
        }
        return this.values[0];
    }
    setString(value) {
        this.values = [value];
    }
    toString() {
        return SmlSerializer_1.default.serializeAttribute(this);
    }
    toWsvLines(document, level, defaultIndentation, endKeyword) {
        SmlSerializer_1.default.serializeAttributeInternal(this, document, level, defaultIndentation);
    }
}
exports.default = SmlAttribute;
//# sourceMappingURL=SmlAttribute.js.map