import SmlAttribute from "./SmlAttribute";
import SmlEmptyNode from "./SmlEmptyNode";
import SmlNamedNode from "./SmlNamedNode";
import SmlNode from "./SmlNode";
import SmlSerializer from "./SmlSerializer";

import WsvDocument from "../whitespacesv/WsvDocument";
import WsvLine from "../whitespacesv/WsvLine";

export default class SmlElement extends SmlNamedNode {

    public nodes: SmlNode[] = [];

    private endWhitespaces: string[];
    private endComment: string = null;

    constructor(name: string) {
        super(name);
    }

    public setEndWhitespaces(...whitespaces): void {
        WsvLine.validateWhitespaces(whitespaces);
        this.endWhitespaces = whitespaces;
    }

    public getEndWhitespaces(): string[] {
        if (!this.endWhitespaces) {
            return null;
        }
        return [...this.endWhitespaces];
    }

    public setEndComment(comment: string): void {
        WsvLine.validateComment(comment);
        this.endComment = comment;
    }

    public getEndComment(): string {
        return this.endComment;
    }

    public setEndWhitespacesAndComment(whitespaces: string[], comment: string): void {
        this.endWhitespaces = whitespaces;
        this.endComment = comment;
    }

    public add(node: SmlNode): SmlNode {
        this.nodes.push(node);
        return node;
    }

    public addAttribute(name: string, values: any[]): SmlAttribute {
        const stringValues = values.map(String) as string[];
        const attribute: SmlAttribute = new SmlAttribute(name, stringValues);
        this.add(attribute);
        return attribute;
    }

    public addElement(name: string): SmlElement {
        const element: SmlElement = new SmlElement(name);
        this.add(element);
        return element;
    }

    public addEmptyNode(): SmlEmptyNode {
        const emptyNode: SmlEmptyNode = new SmlEmptyNode();
        this.add(emptyNode);
        return emptyNode;
    }

    public hasAttribute(name: string): boolean {
        return this.nodes
            .filter((node) => node instanceof SmlAttribute)
            .map((node) => node as SmlAttribute)
            .filter((attribute) => attribute.hasName(name))
            .length > 0;
    }

    public getAttribute(name: string): SmlAttribute {
        const result = this.nodes
            .filter((node) => node instanceof SmlAttribute)
            .map((node) => node as SmlAttribute)
            .filter((attr) => attr.hasName(name))
            .shift();

        if (!result) {
            throw Error(`No attribute with name '${name}'`);
        }
        return result;
    }

    public getAttributes(name?: string): SmlAttribute[] {
        let attributes: SmlAttribute[] = [];
        if (!name) {
            attributes = this.nodes
                .filter((node) => node instanceof SmlAttribute)
                .map((node) => node as SmlAttribute);
        } else {
            attributes = this.nodes
                .filter((node) => node instanceof SmlAttribute)
                .map((node) => node as SmlAttribute)
                .filter((attribute) => attribute.hasName(name));
        }
        return attributes;
    }

    public hasElement(name: string): boolean {
        return this.nodes
            .filter((node) => node instanceof SmlElement)
            .map((node) => node as SmlElement)
            .filter((element) => element.hasName(name))
            .length > 0;
    }

    public getElement(name: string): SmlElement {
        const result = this.nodes
            .filter((node) => node instanceof SmlElement)
            .map((node) => node as SmlElement)
            .filter((attr) => attr.hasName(name))
            .shift();

        if (!result) {
            throw Error(`No element with name '${name}'`);
        }
        return result;
    }

    public getElements(name?: string): SmlElement[] {
        let elements: SmlElement[] = [];
        if (!name) {
            elements = this.nodes
                .filter((node) => node instanceof SmlElement)
                .map((node) => node as SmlElement);
        } else {
            elements = this.nodes
                .filter((node) => node instanceof SmlElement)
                .map((node) => node as SmlElement)
                .filter((attribute) => attribute.hasName(name));
        }
        return elements;
    }

    public getBoolean(attributeName: string): boolean {
        return Boolean(this.getAttribute(attributeName).getString());
    }

    public getNumber(attributeName: string): number {
        return Number(this.getAttribute(attributeName).getString());
    }

    public getString(attributeName: string): string {
        return this.getAttribute(attributeName).getString();
    }

    public getStringValues(attributeName: string): string[] {
        return this.getAttribute(attributeName).getValues();
    }

    public getNumberValues(attributeName: string): number[] {
        return this.getAttribute(attributeName).getNumberValues();
    }

    public toString(): string {
        return SmlSerializer.serializeElement(this);
    }

    public toWsvLines(document: WsvDocument, level: number, defaultIndentation: string, endKeyword: string): void {
        SmlSerializer.serializeElementInternal(this, document, level, defaultIndentation, endKeyword);
    }

}
