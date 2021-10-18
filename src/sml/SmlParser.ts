import WsvDocument from "../whitespacesv/WsvDocument";
import WsvDocumentLineIterator from "../whitespacesv/WsvDocumentLineIterator";
import WsvLine from "../whitespacesv/WsvLine";
import WsvLineIterator from "../whitespacesv/WsvLineIterator";

import SmlAttribute from "./SmlAttribute";
import SmlDocument from "./SmlDocument";
import SmlElement from "./SmlElement";
import SmlEmptyNode from "./SmlEmptyNode";
import SmlNode from "./SmlNode";
import SmlParserException from "./SmlParserException";

import StringUtil from "./StringUtil";

export default class SmlParser {

    public static parseDocument(content: string, document: SmlDocument): SmlDocument {
        const wsvDocument: WsvDocument = WsvDocument.parse(content);
        const endKeyword: string = SmlParser.getEndKeyword(wsvDocument);
        const iterator: WsvLineIterator = new WsvDocumentLineIterator(wsvDocument, endKeyword);

        document.setEndKeyword(endKeyword);

        const rootElement: SmlElement = SmlParser.readRootElement(iterator, document.emptyNodesBefore);
        document.setRoot(rootElement);

        SmlParser.readElementContent(iterator, rootElement);

        SmlParser.readEmptyNodes(document.emptyNodesAfter, iterator);
        return document;
    }

    public static readRootElement(iterator: WsvLineIterator, emptyNodesBefore: SmlEmptyNode[]): SmlElement {
        SmlParser.readEmptyNodes(emptyNodesBefore, iterator);

        if (!iterator.hasLine()) {
            throw new SmlParserException("Root element expected");
        }
        const rootStartLine: WsvLine = iterator.getLine();
        if (!rootStartLine.hasValues() || rootStartLine.getValues().length !== 1 ||
            StringUtil.equalsIgnoreCase(rootStartLine.getValues()[0], iterator.getEndKeyword())) {
            throw new SmlParserException("Invalid root element start");
        }
        const rootElementName: string = rootStartLine.getValues()[0];
        const rootElement: SmlElement = new SmlElement(rootElementName);
        rootElement.setWhitespacesAndComment(rootStartLine.getWhitespaces(), rootStartLine.getComment());
        return rootElement;
    }

    public static readNode(iterator: WsvLineIterator, parentElement: SmlElement): SmlNode {
        let node: SmlNode;
        const line: WsvLine = iterator.getLine();
        if (line.hasValues()) {
            const name: string = line.getValues()[0];
            if (StringUtil.equalsIgnoreCase(name, iterator.getEndKeyword())) {
                if (line.getValues().length > 1) {
                    throw new SmlParserException("Attribute with end keyword name is not allowed");
                }
                parentElement.setEndWhitespacesAndComment(line.getWhitespaces(), line.getComment());
                return null;
            }
            if (line.getValues().length === 1) {
                const childElement: SmlElement = new SmlElement(name);
                childElement.setWhitespacesAndComment(line.getWhitespaces(), line.getComment());

                this.readElementContent(iterator, childElement);

                node = childElement;
            } else {
                const values: string[] = line.getValues().slice(1);
                const childAttribute: SmlAttribute = new SmlAttribute(name, values);
                childAttribute.setWhitespacesAndComment(line.getWhitespaces(), line.getComment());

                node = childAttribute;
            }
        } else {
            const emptyNode: SmlEmptyNode = new SmlEmptyNode();
            emptyNode.setWhitespacesAndComment(line.getWhitespaces(), line.getComment());

            node = emptyNode;
        }
        return node;
    }

    private static readElementContent(iterator: WsvLineIterator, element: SmlElement) {
        while (true) {
            if (!iterator.hasLine()) {
                throw new SmlParserException("Element not closed");
            }
            const node: SmlNode = SmlParser.readNode(iterator, element);
            if (node == null) {
                break;
            }
            element.add(node);
        }
    }

    private static readEmptyNodes(nodes: SmlEmptyNode[], iterator: WsvLineIterator): void {
        while (iterator.isEmptyLine()) {
            const emptyNode: SmlEmptyNode = SmlParser.readEmptyNode(iterator);
            nodes.push(emptyNode);
        }
    }

    private static readEmptyNode(iterator: WsvLineIterator): SmlEmptyNode {
        const line: WsvLine = iterator.getLine();
        const emptyNode: SmlEmptyNode = new SmlEmptyNode();
        emptyNode.setWhitespacesAndComment(line.getWhitespaces(), line.getComment());
        return emptyNode;
    }

    private static getEndKeyword(wsvDocument: WsvDocument): string {
        for (let i = wsvDocument.getLines().length - 1; i >= 0; i--) {
            const values: string[] = wsvDocument.getLine(i).getValues();
            if (values !== null) {
                if (values.length === 1) {
                    return values[0];
                } else if (values.length > 1) {
                    break;
                }
            }
        }
        throw new SmlParserException("End keyword could not be detected");
    }

}
