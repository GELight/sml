"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const whitespacesv_1 = require("@gelight/whitespacesv");
class SmlSerializer {
    static serializeDocument(document) {
        const wsvDocument = new whitespacesv_1.WsvDocument();
        SmlSerializer.serialzeEmptyNodes(document.emptyNodesBefore, wsvDocument);
        document.getRoot().toWsvLines(wsvDocument, 0, document.getDefaultIndentation(), document.getEndKeyword());
        SmlSerializer.serialzeEmptyNodes(document.emptyNodesAfter, wsvDocument);
        return wsvDocument.toString();
    }
    static serializeElement(element) {
        const wsvDocument = new whitespacesv_1.WsvDocument();
        element.toWsvLines(wsvDocument, 0, null, "End");
        return wsvDocument.toString();
    }
    static serializeAttribute(attribute) {
        const wsvDocument = new whitespacesv_1.WsvDocument();
        attribute.toWsvLines(wsvDocument, 0, null, null);
        return wsvDocument.toString();
    }
    static serializeAttributeInternal(attribute, wsvDocument, level, defaultIndentation) {
        const whitespaces = SmlSerializer.getWhitespaces(attribute.getWhitespaces(), level, defaultIndentation);
        const combined = [attribute.name, ...attribute.getValues()];
        wsvDocument.addWsvLineBySet(combined, whitespaces, attribute.getComment());
    }
    static serializeEmptyNode(emptyNode) {
        const wsvDocument = new whitespacesv_1.WsvDocument();
        emptyNode.toWsvLines(wsvDocument, 0, null, null);
        return wsvDocument.toString();
    }
    static serializeEmptyNodeInternal(emptyNode, wsvDocument, level, defaultIndentation) {
        const whitespaces = SmlSerializer.getWhitespaces(emptyNode.getWhitespaces(), level, defaultIndentation);
        wsvDocument.addWsvLineBySet(null, whitespaces, emptyNode.getComment());
    }
    static serializeElementInternal(element, wsvDocument, level, defaultIndentation, endKeyword) {
        const childLevel = level + 1;
        const whitespaces = SmlSerializer.getWhitespaces(element.getWhitespaces(), level, defaultIndentation);
        wsvDocument.addWsvLineBySet([element.name], whitespaces, element.getComment());
        for (const child of element.nodes) {
            child.toWsvLines(wsvDocument, childLevel, defaultIndentation, endKeyword);
        }
        const endWhitespaces = SmlSerializer.getWhitespaces(element.getEndWhitespaces(), level, defaultIndentation);
        wsvDocument.addWsvLineBySet([endKeyword], endWhitespaces, element.getEndComment());
    }
    static getWhitespaces(whitespaces, level, defaultIndentation) {
        if (whitespaces != null && whitespaces.length > 0) {
            return whitespaces;
        }
        if (defaultIndentation == null) {
            const indentChars = "\t".repeat(level);
            return [indentChars];
        }
        else {
            const indentStr = defaultIndentation.repeat(level);
            return [indentStr];
        }
    }
    static serialzeEmptyNodes(emptyNodes, wsvDocument) {
        for (const emptyNode of emptyNodes) {
            emptyNode.toWsvLines(wsvDocument, 0, null, null);
        }
    }
}
exports.default = SmlSerializer;
//# sourceMappingURL=SmlSerializer.js.map