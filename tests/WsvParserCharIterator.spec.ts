import StringUtil from "../src/sml/StringUtil";
import WsvParserCharIterator from "../src/sml/WsvParserCharIterator";
import WsvParserException from "../src/sml/WsvParserException";

describe("WsvParserCharIterator", () => {

    it.each([
        ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
        ["Lorem ipsum  dolor sit amet", "Lorem ipsum  dolor sit amet"],
        ["Lorem ipsum     dolor sit amet", "Lorem ipsum     dolor sit amet"],
        ["Lorem ipsum/dolor sit amet", "Lorem ipsum/dolor sit amet"],
        ["Lorem ipsum\ndolor sit amet", "Lorem ipsum\ndolor sit amet"],
        [`Lorem ipsum "dolor sit amet`, `Lorem ipsum "dolor sit amet`]
    ])("WsvParserCharIterator(%p).getText() - returns %p",
        (text, expected) => {
            // when
            const iterator = new WsvParserCharIterator(text);
            // then
            expect(iterator.getText()).toBe(expected);
        });

    it.each([
        ["Lorem ipsum dolor sit amet", "(1, 1)"],
        [`Lorem ipsum\ndolor sit amet`, "(1, 1)"],
        [`Lorem ipsum dolor\n\n\nsit amet`, "(1, 1)"]
    ])("WsvParserCharIterator(%p).getLineInfoString() - returns %p",
        (text, expected) => {
            // when
            const iterator = new WsvParserCharIterator(text);
            // then
            expect(iterator.getLineInfoString()).toBe(expected);
        });

    it.each([
        ["Lorem ipsum\ndolor sit amet", "Lorem ipsum"],
        ["Lorem ipsum # dolor sit amet", "Lorem ipsum # dolor sit amet"],
        ["Lorem ipsum \"dolor sit amet", "Lorem ipsum \"dolor sit amet"]
    ])("WsvParserCharIterator(%p).readCommentText() - returns %p",
        (text, expected) => {
            // when
            const iterator = new WsvParserCharIterator(text);
            // then
            expect(iterator.readCommentText()).toBe(expected);
        });

    it.each([
        ["Lorem ipsum dolor sit amet", [0, 0, 0]],
        ["Lorem ipsum\ndolor sit amet", [0, 0, 0]],
        ["Lorem ipsum\n/\ndolor sit amet", [0, 0, 0]]
    ])("WsvParserCharIterator(%p).getLineInfo() - returns %p",
        (text, expected) => {
            // when
            const iterator = new WsvParserCharIterator(text);
            // then
            expect(iterator.getLineInfo()).toStrictEqual(expected);
        });

    it.each([
        ["\nLorem ipsum dolor sit amet", [6, 1, 5]]
    ])("WsvParserCharIterator(%p).getLineInfo() - returns %p for second line",
        (text, expected) => {
            // when
            const iterator = new WsvParserCharIterator(text);
            iterator.tryReadChar(StringUtil.lineBreak);
            iterator.readValue();
            // then
            expect(iterator.getLineInfo()).toStrictEqual(expected);
        });

    it.each([
        ["", null],
        [" ", " "],
        [" abc", " "],
        [" \n", " "]
    ])("WsvParserCharIterator(%p).readWhitespaceOrNull() - returns %p",
        (text, expected) => {
            // when
            const iterator = new WsvParserCharIterator(text);
            // then
            expect(iterator.readWhitespaceOrNull()).toStrictEqual(expected);
        });

    it.each([
        ["abc\"", "abc"],
        ["abc\"\"\"", `abc"`],
        ["abc\"/\"\"", `abc\n`]
    ])("WsvParserCharIterator(%p).readString() - returns %p",
        (text, expected) => {
            // when
            const iterator = new WsvParserCharIterator(text);
            // then
            expect(iterator.readString()).toBe(expected);
        });

    it(`WsvParserCharIterator("abc ").readString() - throw a WsvParserException "String not closed"`,
        () => {
            // when
            const iterator = new WsvParserCharIterator("abc ");
            // then
            try {
                iterator.readString();
            } catch (e) {
                expect(e.message).toBe("String not closed (1, 5)");
            }
        });

    it(`WsvParserCharIterator("abc\nxyz").readString() - throw a WsvParserException "String not closed in starting line"`,
        () => {
            // when
            const iterator = new WsvParserCharIterator("abc\nxyz");
            // then
            try {
                iterator.readString();
            } catch (e) {
                expect(e.message).toBe("String not closed in starting line (1, 4)");
            }
        });

    it(`WsvParserCharIterator("abc"/a").readString() - throw a WsvParserException "String expected after linebreak slash"`,
        () => {
            // when
            const iterator = new WsvParserCharIterator(`abc"/a`);
            // then
            try {
                iterator.readString();
            } catch (e) {
                expect(e.message).toBe("String expected after linebreak slash (1, 6)");
            }
        });

    it.each([
        ["abc ", "abc"],
        ["a", "a"]
    ])("WsvParserCharIterator(%p).readValue() - returns %p",
        (text, expected) => {
            // when
            const iterator = new WsvParserCharIterator(text);
            // then
            expect(iterator.readValue()).toBe(expected);
        });

    it("WsvParserCharIterator().readValue() - returns %p",
        () => {
            // when
            const iterator = new WsvParserCharIterator("abc\"");
            // then
            try {
                iterator.readValue();
            } catch (e) {
                expect(e.message).toBe("String starting in value (1, 4)");
            }
        });

    it("WsvParserCharIterator().readValue() - returns %p",
        () => {
            // when
            const iterator = new WsvParserCharIterator("");
            // then
            try {
                iterator.readValue();
            } catch (e) {
                expect(e.message).toBe("Invalid value (1, 1)");
            }
        });
});
