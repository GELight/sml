import ReliableTxtDocumentServer from "./ReliableTxtDocumentServer";
import ReliableTxtEncoding from "./ReliableTxtEncoding";
import SmlDocument from "./SmlDocument";
import SmlElement from "./SmlElement";
import SmlParser from "./SmlParser";

export default class SmlDocumentServer extends SmlDocument {

    public static parse(content: string): SmlDocument {
        const document: SmlDocumentServer = new SmlDocumentServer();
        return SmlParser.parseDocument(content, document);
    }

    public static load(filePath: string): SmlDocumentServer {
        const document: ReliableTxtDocumentServer = ReliableTxtDocumentServer.load(filePath);
        const result: SmlDocumentServer = SmlDocumentServer.parse(document.getText()) as SmlDocumentServer;
        result.setEncoding(document.getEncoding());
        return result;
    }

    private encoding: ReliableTxtEncoding = ReliableTxtEncoding.UTF8;

    constructor(rootElement?: SmlElement) {
        super(rootElement);
        return this;
    }

    public setEncoding(encoding: ReliableTxtEncoding): SmlDocumentServer {
        this.encoding = encoding;
        return this;
    }

    public getEncoding(): ReliableTxtEncoding {
        return this.encoding;
    }

    public save(filePath: string): SmlDocumentServer {
        new ReliableTxtDocumentServer(this.toString())
            .setEncoding(this.getEncoding())
            .save(filePath);
        return this;
    }
}
