import WsvDocument from "../whitespacesv/WsvDocument";
import SmlAttribute from "./SmlAttribute";
import SmlDocument from "./SmlDocument";
import SmlElement from "./SmlElement";
import SmlEmptyNode from "./SmlEmptyNode";

export default class SmlSerializer {

    public static serializeDocument(document: SmlDocument): string {
        const wsvDocument: WsvDocument = new WsvDocument();

        SmlSerializer.serialzeEmptyNodes(document.emptyNodesBefore, wsvDocument);
        document.getRoot().toWsvLines(wsvDocument, 0, document.getDefaultIndentation(), document.getEndKeyword());
        SmlSerializer.serialzeEmptyNodes(document.emptyNodesAfter, wsvDocument);

        return wsvDocument.toString();
    }

    public static serializeElement(element: SmlElement): string {
        const wsvDocument: WsvDocument = new WsvDocument();
        element.toWsvLines(wsvDocument, 0, null, "End");
        return wsvDocument.toString();
    }

    public static serializeAttribute(attribute: SmlAttribute): string {
        const wsvDocument: WsvDocument = new WsvDocument();
        attribute.toWsvLines(wsvDocument, 0, null, null);
        return wsvDocument.toString();
    }

    public static serializeAttributeInternal(
        attribute: SmlAttribute, wsvDocument: WsvDocument, level: number, defaultIndentation: string
    ): void {
        const whitespaces: string[] = SmlSerializer.getWhitespaces(
            attribute.getWhitespaces(), level, defaultIndentation
        );
        const combined: string[] = [attribute.name, ...attribute.getValues()];
        wsvDocument.addWsvLineBySet(combined, whitespaces, attribute.getComment());
    }

    public static serializeEmptyNode(emptyNode: SmlEmptyNode): string {
        const wsvDocument: WsvDocument = new WsvDocument();
        emptyNode.toWsvLines(wsvDocument, 0, null, null);
        return wsvDocument.toString();
    }

    public static serializeEmptyNodeInternal(
        emptyNode: SmlEmptyNode, wsvDocument: WsvDocument, level: number, defaultIndentation: string
    ): void {
        const whitespaces: string[] = SmlSerializer.getWhitespaces(
            emptyNode.getWhitespaces(), level, defaultIndentation
        );
        wsvDocument.addWsvLineBySet(null, whitespaces, emptyNode.getComment());
    }

    public static serializeElementInternal(
        element: SmlElement, wsvDocument: WsvDocument,
        level: number, defaultIndentation: string, endKeyword: string
    ): void {
        const childLevel: number = level + 1;
        const whitespaces: string[] = SmlSerializer.getWhitespaces(element.getWhitespaces(), level, defaultIndentation);
        wsvDocument.addWsvLineBySet([element.name], whitespaces, element.getComment());

        for (const child of element.nodes) {
            child.toWsvLines(wsvDocument, childLevel, defaultIndentation, endKeyword);
        }

        const endWhitespaces: string[] = SmlSerializer.getWhitespaces(
            element.getEndWhitespaces(), level, defaultIndentation
        );
        wsvDocument.addWsvLineBySet([endKeyword], endWhitespaces, element.getEndComment());
    }

    private static getWhitespaces(whitespaces: string[], level: number, defaultIndentation: string): string[] {
        if (whitespaces != null && whitespaces.length > 0) {
            return whitespaces;
        }
        if (defaultIndentation == null) {
            const indentChars: string = "\t".repeat(level);
            return [indentChars];
        } else {
            const indentStr: string = defaultIndentation.repeat(level);
            return [indentStr];
        }
    }

    private static serialzeEmptyNodes(emptyNodes: SmlEmptyNode[], wsvDocument: WsvDocument): void {
        for (const emptyNode of emptyNodes) {
            emptyNode.toWsvLines(wsvDocument, 0, null, null);
        }
    }

}
