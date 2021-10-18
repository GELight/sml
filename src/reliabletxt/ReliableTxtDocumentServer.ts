import ReliableTxtDocument from "./ReliableTxtDocument";
import ReliableTxtEncoding from "./ReliableTxtEncoding";
import ReliableTxtFile from "./ReliableTxtFile";

export default class ReliableTxtDocumentServer extends ReliableTxtDocument {

    public static load(filePath: string): ReliableTxtDocumentServer {
        const file: ReliableTxtFile = new ReliableTxtFile().load(filePath);
        const document = new ReliableTxtDocumentServer(file.getContent());
        document.setEncoding(file.getEncoding());
        return document;
    }

    private encoding: ReliableTxtEncoding = ReliableTxtEncoding.UTF8;

    constructor(...args: string[]) {
        super(...args);
        return this;
    }

    public setEncoding(encoding: ReliableTxtEncoding): ReliableTxtDocumentServer {
        this.encoding = encoding;
        return this;
    }

    public getEncoding(): ReliableTxtEncoding {
        return this.encoding;
    }

    public save(filePath: string): ReliableTxtDocumentServer {
        new ReliableTxtFile(this.encoding).save(filePath, this.text);
        return this;
    }
}