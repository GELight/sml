import ReliableTxtDocumentServer from "./ReliableTxtDocumentServer";
import ReliableTxtEncoding from "./ReliableTxtEncoding";
import ReliableTxtFile from "./ReliableTxtFile";
import WsvDocument from "./WsvDocument";
import WsvLine from "./WsvLine";
import WsvParser from "./WsvParser";

export default class WsvDocumentServer extends WsvDocument {

    public static parse(content: string): WsvDocument {
        const document: WsvDocumentServer = new WsvDocumentServer();
        return WsvParser.parseDocument(content, document);
    }

    public static load(filePath: string): WsvDocumentServer {
        const document: ReliableTxtDocumentServer = ReliableTxtDocumentServer.load(filePath);
        const result: WsvDocumentServer = WsvDocumentServer.parse(document.getText()) as WsvDocumentServer;
        result.setEncoding(document.getEncoding());
        return result;
    }

    private encoding: ReliableTxtEncoding = ReliableTxtEncoding.UTF8;

    constructor() {
        super();
        return this;
    }

    public setEncoding(encoding: ReliableTxtEncoding): WsvDocument {
        this.encoding = encoding;
        return this;
    }

    public getEncoding(): ReliableTxtEncoding {
        return this.encoding;
    }

    public save(filePath: string): WsvDocumentServer {
        new ReliableTxtDocumentServer(this.toString())
            .setEncoding(this.getEncoding())
            .save(filePath);
        return this;
    }

}
