import SmlNode from "./SmlNode";
import StringUtil from "./StringUtil";

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
