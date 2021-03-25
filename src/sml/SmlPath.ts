import SmlAttribute from "./SmlAttribute";
import SmlElement from "./SmlElement";

export default class SmlPath {

    private currentElement: SmlElement;

    constructor(root: SmlElement) {
        console.info("Attention: 'sPath' is an experimental feature!");
        this.currentElement = root;
    }

    public get(path: string, index: number = 0): SmlElement[] | SmlAttribute[] {
        const nextPartName: string = path.split(" ")[index];

        if (this.isAttribute(nextPartName)) {
            return this.currentElement.getAttributes(this.normalizeAttributePartName(nextPartName));
        } else if (this.currentElement.hasElement(nextPartName)) {
            const currentElements: SmlElement[] = this.currentElement.getElements(nextPartName);

            if (currentElements.length > 1) {
                return currentElements;
            }
            this.currentElement = currentElements.shift();
            const nextIndex = index + 1;

            return this.get(path, nextIndex);
        } else {
            throw Error(`${nextPartName} not found in '${path}'`);
        }

        return null;
    }

    private isAttribute(part: string): boolean {
        return part.charAt(0) === "@";
    }

    private normalizeAttributePartName(part: string): string {
        return part.substr(1);
    }
}