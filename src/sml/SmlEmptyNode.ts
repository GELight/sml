import SmlNode from "./SmlNode";
import SmlSerializer from "./SmlSerializer";
import WsvDocument from "./WsvDocument";

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
