import { readFileSync, writeFileSync } from "fs";
import ReliableTxtEncoding from "./ReliableTxtEncoding";
import ReliableTxtException from "./ReliableTxtException";

export default class ReliableTxtFile {

    private static getEncodingFromBuffer(buffer: Buffer): ReliableTxtEncoding {
        if (buffer.length < 2) {
            return null;
        }
        const byte1: number = buffer.readInt8(0);
        const byte2: number = buffer.readInt8(1);

        if (byte1 === -1 && byte2 === -2) {
            return ReliableTxtEncoding.UTF16_REVERSED;
        } else if (byte1 === -17 && byte2 === -69) {
            if (buffer.length >= 3 && buffer.readInt8(2) === -65) {
                return ReliableTxtEncoding.UTF8;
            }
        }

        return null;
    }

    private fileContent: string = "";

    private encoding: ReliableTxtEncoding = ReliableTxtEncoding.UTF8;

    constructor(encoding?: ReliableTxtEncoding) {
        this.setEncoding(encoding);
        return this;
    }

    public save(filePath: string, content: string, encoding?: ReliableTxtEncoding): ReliableTxtFile {
        this.setEncoding(encoding);
        try {
            writeFileSync(filePath, "\ufeff" + content, this.encoding);
        } catch (e) {
            console.error(e);
        }
        return this;
    }

    public load(filePath: string): ReliableTxtFile {
        try {
            const fileBuffer: Buffer = readFileSync(filePath, Object.assign({ flag: "r" }));
            const detectedEncoding = ReliableTxtFile.getEncodingFromBuffer(fileBuffer);
            if (detectedEncoding === null) {
                throw new ReliableTxtException("Document does not have a ReliableTXT preamble");
            }
            this.setEncoding(detectedEncoding);
            const fileContent: string = readFileSync(filePath,
                Object.assign({ encoding: this.encoding, flag: "r" })
            ).toString();
            this.fileContent = fileContent.slice(1);
            return this;
        } catch (e) {
            throw Error(e.message);
            return null;
        }
    }

    public getEncoding(): ReliableTxtEncoding {
        return this.encoding;
    }

    public getContent(): string {
        return this.fileContent;
    }

    private setEncoding(encoding: ReliableTxtEncoding) {
        if (encoding) {
            this.encoding = encoding;
        }
        return this;
    }

}
