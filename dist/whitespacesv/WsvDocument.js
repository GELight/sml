"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WsvLine_1 = __importDefault(require("./WsvLine"));
const WsvParser_1 = __importDefault(require("./WsvParser"));
const WsvSerializer_1 = __importDefault(require("./WsvSerializer"));
class WsvDocument {
    constructor() {
        this.lines = [];
        // ...
    }
    static parse(content) {
        const document = new WsvDocument();
        return WsvParser_1.default.parseDocument(content, document);
    }
    addWsvLines(...lines) {
        for (const line of lines) {
            this.lines.push(line);
        }
        return this;
    }
    addWsvLineByValues(...values) {
        const line = new WsvLine_1.default();
        for (const value of values) {
            line.addValue(value);
        }
        return this.addWsvLines(line);
    }
    addWsvLineBySet(values, whitespaces, comment) {
        this.addWsvLines(new WsvLine_1.default().set(values, whitespaces, comment));
        return this;
    }
    getLines() {
        return this.lines;
    }
    getLine(index) {
        return this.lines[index];
    }
    toArray() {
        const array = [];
        for (let i = 0; i < this.lines.length; i++) {
            array[i] = this.lines[i].getValues();
        }
        return array;
    }
    toString() {
        return WsvSerializer_1.default.serializeDocument(this);
    }
}
exports.default = WsvDocument;
//# sourceMappingURL=WsvDocument.js.map