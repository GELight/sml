import SmlDocumentServer from "./SmlDocumentServer";
import SmlElement from "./SmlElement";
import SmlEmptyNode from "./SmlEmptyNode";
import SmlParser from "./SmlParser";
import SmlSerializer from "./SmlSerializer";
import StringUtil from "./StringUtil";

export default class SmlDocument {

    public static parse(content: string): SmlDocument {
        const document: SmlDocument = new SmlDocument();
        return SmlParser.parseDocument(content, document);
    }

    public emptyNodesBefore: SmlEmptyNode[] = [];
    public emptyNodesAfter: SmlEmptyNode[] = [];

    private root: SmlElement;
    private endKeyword: string = "End";
    private defaultIndentation: string = null;

    constructor(rootElement?: SmlElement) {
        if (rootElement) {
            this.root = rootElement;
        }
    }

    public setEndKeyword(endKeyword: string): void {
        this.endKeyword = endKeyword;
    }

    public getEndKeyword(): string {
        return this.endKeyword;
    }

    public setDefaultIndentation(defaultIndentation: string): void {
        if (!StringUtil.isWhitespaceOrEmpty(defaultIndentation)) {
            throw Error("Invalid indentation");
        }
        this.defaultIndentation = defaultIndentation;
    }

    public getDefaultIndentation(): string {
        return this.defaultIndentation;
    }

    public getRoot(): SmlElement {
        return this.root;
    }

    public setRoot(root: SmlElement): void {
        this.root = root;
    }

    public toString(): string {
        return SmlSerializer.serializeDocument(this);
    }

}
