"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StringUtil_1 = __importDefault(require("../sml/StringUtil"));
const SmlNode_1 = __importDefault(require("./SmlNode"));
class SmlNamedNode extends SmlNode_1.default {
    constructor(name) {
        super();
        this.name = name;
    }
    hasName(name) {
        return StringUtil_1.default.equalsIgnoreCase(this.name, name);
    }
}
exports.default = SmlNamedNode;
//# sourceMappingURL=SmlNamedNode.js.map