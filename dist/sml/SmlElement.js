"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const whitespacesv_1 = require("@gelight/whitespacesv");
const SmlAttribute_1 = __importDefault(require("./SmlAttribute"));
const SmlEmptyNode_1 = __importDefault(require("./SmlEmptyNode"));
const SmlNamedNode_1 = __importDefault(require("./SmlNamedNode"));
const SmlSerializer_1 = __importDefault(require("./SmlSerializer"));
class SmlElement extends SmlNamedNode_1.default {
    constructor(name) {
        super(name);
        this.nodes = [];
    }
    setEndWhitespaces(...whitespaces) {
        whitespacesv_1.WsvLine.validateWhitespaces(whitespaces);
        this.endWhitespaces = whitespaces;
    }
    getEndWhitespaces() {
        return [...this.endWhitespaces];
    }
    setEndComment(comment) {
        whitespacesv_1.WsvLine.validateComment(comment);
        this.endComment = comment;
    }
    getEndComment() {
        return this.endComment;
    }
    setEndWhitespacesAndComment(whitespaces, comment) {
        this.endWhitespaces = whitespaces;
        this.endComment = comment;
    }
    add(node) {
        this.nodes.push(node);
        return node;
    }
    addAttribute(name, values) {
        const stringValues = values.map(String);
        const attribute = new SmlAttribute_1.default(name, stringValues);
        this.add(attribute);
        return attribute;
    }
    addElement(name) {
        const element = new SmlElement(name);
        this.add(element);
        return element;
    }
    addEmptyNode() {
        const emptyNode = new SmlEmptyNode_1.default();
        this.add(emptyNode);
        return emptyNode;
    }
    hasAttribute(name) {
        return this.nodes
            .filter((node) => node instanceof SmlAttribute_1.default)
            .map((node) => node)
            .filter((attribute) => attribute.hasName(name))
            .length > 0;
    }
    getAttribute(name) {
        const result = this.nodes
            .filter((node) => node instanceof SmlAttribute_1.default)
            .map((node) => node)
            .filter((attr) => attr.hasName(name))
            .shift();
        if (!result) {
            throw Error(`No attribute with name '${name}'`);
        }
        return result;
    }
    getAttributes(name) {
        let attributes = [];
        if (!name) {
            attributes = this.nodes
                .filter((node) => node instanceof SmlAttribute_1.default)
                .map((node) => node);
        }
        else {
            attributes = this.nodes
                .filter((node) => node instanceof SmlAttribute_1.default)
                .map((node) => node)
                .filter((attribute) => attribute.hasName(name));
        }
        return attributes;
    }
    hasElement(name) {
        return this.nodes
            .filter((node) => node instanceof SmlElement)
            .map((node) => node)
            .filter((element) => element.hasName(name))
            .length > 0;
    }
    getElement(name) {
        const result = this.nodes
            .filter((node) => node instanceof SmlElement)
            .map((node) => node)
            .filter((attr) => attr.hasName(name))
            .shift();
        if (!result) {
            throw Error(`No element with name '${name}'`);
        }
        return result;
    }
    getElements(name) {
        let elements = [];
        if (!name) {
            elements = this.nodes
                .filter((node) => node instanceof SmlElement)
                .map((node) => node);
        }
        else {
            elements = this.nodes
                .filter((node) => node instanceof SmlElement)
                .map((node) => node)
                .filter((attribute) => attribute.hasName(name));
        }
        return elements;
    }
    getBoolean(attributeName) {
        return Boolean(this.getAttribute(attributeName).getString());
    }
    getNumber(attributeName) {
        return Number(this.getAttribute(attributeName).getString());
    }
    getString(attributeName) {
        return this.getAttribute(attributeName).getString();
    }
    getStringValues(attributeName) {
        return this.getAttribute(attributeName).getValues();
    }
    getNumberValues(attributeName) {
        return this.getAttribute(attributeName).getNumberValues();
    }
    toString() {
        return SmlSerializer_1.default.serializeElement(this);
    }
    toWsvLines(document, level, defaultIndentation, endKeyword) {
        SmlSerializer_1.default.serializeElementInternal(this, document, level, defaultIndentation, endKeyword);
    }
}
exports.default = SmlElement;
//# sourceMappingURL=SmlElement.js.map