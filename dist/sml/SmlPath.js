"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SmlPath {
    constructor(root) {
        console.info("Attention: 'sPath' is an experimental feature!");
        this.currentElement = root;
    }
    // Allgemeine Gedanken:
    // - sPath sollte sich an xPath "orientieren" (nicht nachbauen, da viel weniger Möglichkeiten benötigt werden),
    //      da die Pfad-Beschreibung erst einmal nichts mit den Elementen, Attrbuten oder SML allgemein zu tun hat,
    //      sondern lediglich einen Pfad beschreibt
    // https://de.wikipedia.org/wiki/XPath#:~:text=Die%20XML%20Path%20Language%20(XPath,der%20Version%203.1%20vom%2021.
    get(path, index = 0) {
        const nextPartName = path.split(" ")[index];
        if (this.isAttribute(nextPartName)) {
            return this.currentElement.getAttributes(this.normalizeAttributePartName(nextPartName));
        }
        else if (this.currentElement.hasElement(nextPartName)) {
            const currentElements = this.currentElement.getElements(nextPartName);
            if (currentElements.length > 1) {
                return currentElements;
            }
            this.currentElement = currentElements.shift();
            const nextIndex = index + 1;
            return this.get(path, nextIndex);
        }
        else {
            throw Error(`${nextPartName} not found in '${path}'`);
        }
        return null;
    }
    isAttribute(part) {
        return part.charAt(0) === "@";
    }
    normalizeAttributePartName(part) {
        return part.substr(1);
    }
}
exports.default = SmlPath;
//# sourceMappingURL=SmlPath.js.map