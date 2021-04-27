import { StringUtil } from "@gelight/whitespacesv";
import SmlNode from "./SmlNode";

export default class SmlNamedNode extends SmlNode {

    public name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }

    public hasName(name: string): boolean {
        return StringUtil.equalsIgnoreCase(this.name, name);
    }

}
