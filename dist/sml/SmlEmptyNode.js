"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SmlNode_1 = __importDefault(require("./SmlNode"));
const SmlSerializer_1 = __importDefault(require("./SmlSerializer"));
class SmlEmptyNode extends SmlNode_1.default {
    constructor() {
        super();
    }
    toString() {
        return SmlSerializer_1.default.serializeEmptyNode(this);
    }
    toWsvLines(document, level, defaultIndentation, endKeyword) {
        SmlSerializer_1.default.serializeEmptyNodeInternal(this, document, level, defaultIndentation);
    }
}
exports.default = SmlEmptyNode;
//# sourceMappingURL=SmlEmptyNode.js.map