import StringUtil from "../sml/StringUtil";
import StringBuilder from "./StringBuilder";
import WsvChar from "./WsvChar";
import WsvDocument from "./WsvDocument";
import WsvLine from "./WsvLine";

export default class WsvSerializer {

    public static containsSpecialChars(value: string): boolean {
        const codePoints: number[] = StringUtil.stringToCodePoints(value);
        for (const c of codePoints) {
            if (c === StringUtil.lineBreak ||
                WsvChar.isWhitespace(c) ||
                c === StringUtil.doubleQuote ||
                c === StringUtil.hash) {
                return true;
            }
        }

        return false;
    }

    public static serializeLine(sb: StringBuilder, line: WsvLine): void {
        if (line.getWhitespaces() !== null && line.getWhitespaces().length > 0) {
            WsvSerializer.serializeValuesWithWhitespace(sb, line);
        } else {
            WsvSerializer.serializeValuesWithoutWhitespace(sb, line);
        }

        if (line.getComment() !== null) {
            sb.appendCodePoint(StringUtil.hash);
            sb.appendString(line.getComment());
        }
    }

    public static serializeDocument(document: WsvDocument): string {
        const sb: StringBuilder = new StringBuilder();
        let isFirstLine: boolean = true;

        for (const line of document.getLines()) {
            if (!isFirstLine) {
                sb.appendCodePoint(StringUtil.lineBreak);
            } else {
                isFirstLine = false;
            }
            WsvSerializer.serializeLine(sb, line);
        }
        return sb.toString();
    }

    private static serializeValue(sb: StringBuilder, str: string): void {
        if (str === null) {
            sb.appendString("-");
        } else if (str === "") {
            sb.appendString("\"\"");
        } else if (str === "-") {
            sb.appendString("\"-\"");
        } else if (WsvSerializer.containsSpecialChars(str)) {
            sb.appendCodePoint(StringUtil.doubleQuote);
            const codePoints: number[] = StringUtil.stringToCodePoints(str);
            for (const c of codePoints) {
                if (c === StringUtil.lineBreak) {
                    sb.appendString("\"/\"");
                } else if (c === StringUtil.doubleQuote) {
                    sb.appendString("\"\"");
                } else {
                    sb.appendCodePoint(c);
                }
            }
            sb.appendCodePoint(StringUtil.doubleQuote);
        } else {
            sb.appendString(str);
        }
    }

    private static serializeWhitespace(sb: StringBuilder, whitespace: string, isRequired: boolean): void {
        if (whitespace != null && whitespace.length > 0) {
            sb.appendString(whitespace);
        } else if (isRequired) {
            sb.appendString(" ");
        }
    }

    private static serializeValuesWithWhitespace(sb: StringBuilder, line: WsvLine): void {
        const values = line.getValues();
        const whitespaces = line.getWhitespaces();
        const comment = line.getComment();

        if (values === null) {
            const whitespace: string = whitespaces[0];
            WsvSerializer.serializeWhitespace(sb, whitespace, false);
            return;
        }

        for (let i = 0; i < values.length; i++) {
            let whitespace: string = null;
            if (i < whitespaces.length) {
                whitespace = whitespaces[i];
            }
            if (i === 0) {
                WsvSerializer.serializeWhitespace(sb, whitespace, false);
            } else {
                WsvSerializer.serializeWhitespace(sb, whitespace, true);
            }

            WsvSerializer.serializeValue(sb, values[i]);
        }

        if (whitespaces.length >= values.length + 1) {
            const whitespace: string = whitespaces[values.length];
            WsvSerializer.serializeWhitespace(sb, whitespace, false);
        } else if (comment != null && values.length > 0) {
            sb.appendString(" ");
        }
    }

    private static serializeValuesWithoutWhitespace(sb: StringBuilder, line: WsvLine): void {
        const values = line.getValues();
        const comment = line.getComment();

        if (values === null) {
            return;
        }

        let isFollowingValue: boolean = false;
        for (const value of values) {
            if (isFollowingValue) {
                sb.appendString(" ");
            } else {
                isFollowingValue = true;
            }
            WsvSerializer.serializeValue(sb, value);
        }

        if (comment != null && values.length > 0) {
            sb.appendString(" ");
        }
    }
}
