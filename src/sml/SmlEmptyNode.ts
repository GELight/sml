import WsvDocument from "../whitespacesv/WsvDocument";
import SmlNode from "./SmlNode";
import SmlSerializer from "./SmlSerializer";

export default class SmlEmptyNode extends SmlNode {

    constructor() {
        super();
    }

    public toString(): string {
        return SmlSerializer.serializeEmptyNode(this);
    }

    public toWsvLines(document: WsvDocument, level: number, defaultIndentation: string, endKeyword: string): void {
        SmlSerializer.serializeEmptyNodeInternal(this, document, level, defaultIndentation);
    }

}
