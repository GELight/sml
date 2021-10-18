import WsvLine from "./WsvLine";

export default class WsvLineIterator {

    constructor() {
        // ...
    }

    public hasLine(): boolean {
        return false;
    }

    public isEmptyLine(): boolean {
        return false;
    }

    public getLine(): WsvLine {
        return null;
    }

    public getEndKeyword(): string {
        return null;
    }

}
