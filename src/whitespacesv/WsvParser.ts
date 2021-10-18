import StringUtil from "../sml/StringUtil";
import WsvDocument from "./WsvDocument";
import WsvLine from "./WsvLine";
import WsvParserCharIterator from "./WsvParserCharIterator";
import WsvParserException from "./WsvParserException";

export default class WsvParser {

    public static parseLine(content: string): WsvLine {
        const iterator: WsvParserCharIterator = new WsvParserCharIterator(content);

        const newLine: WsvLine = WsvParser.parseLineWithIterator(iterator);
        if (iterator.tryReadChar(StringUtil.lineBreak)) {
            throw new WsvParserException(iterator, "Multiple WSV lines not allowed");
        } else if (!iterator.isEndOfText()) {
            throw new WsvParserException(iterator, "WSV line not parsed completely");
        }

        return newLine;
    }

    public static parseDocument(content: string, document: WsvDocument): WsvDocument {
        const iterator: WsvParserCharIterator = new WsvParserCharIterator(content);
        const running: boolean = true;
        while (running) {
            const newLine: WsvLine = WsvParser.parseLineWithIterator(iterator);
            document.addWsvLines(newLine);

            if (iterator.isEndOfText()) {
                break;
            } else if (!iterator.tryReadChar(StringUtil.lineBreak)) {
                throw new WsvParserException(iterator, "Invalid WSV document");
            }
        }

        if (!iterator.isEndOfText()) {
            throw new WsvParserException(iterator, "WSV document not parsed completely");
        }

        return document;
    }

    private static parseLineWithIterator(iterator: WsvParserCharIterator): WsvLine {

        const values: string[] = [];
        const whitespaces: string[] = [];

        let whitespace: string = iterator.readWhitespaceOrNull();
        whitespaces.push(whitespace);

        while (!iterator.isChar(StringUtil.lineBreak) && !iterator.isEndOfText()) {
            let value: string = "";
            if (iterator.isChar(StringUtil.hash)) {
                break;
            } else if (iterator.tryReadChar(StringUtil.doubleQuote)) {
                value = iterator.readString();
            } else {
                value = iterator.readValue();
                if (value === "-") {
                    value = null;
                }
            }
            values.push(value);

            whitespace = iterator.readWhitespaceOrNull();
            if (whitespace == null) {
                break;
            }
            whitespaces.push(whitespace);
        }

        let comment: string = null;
        if (iterator.tryReadChar(StringUtil.hash)) {
            comment = iterator.readCommentText();
            if (whitespace == null) {
                whitespaces.push(null);
            }
        }

        const newLine: WsvLine = new WsvLine().set(values, whitespaces, comment);
        return newLine;
    }

}
