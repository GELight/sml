import StringUtil from "../../src/sml/StringUtil";
import TypeException from "../../src/TypeException";

describe("StringUtil", () => {

    it.each`
        char
        ${null}
        ${undefined}
        ${false}
        ${true}
        ${1}
        ${1.2}
    `(`StringUtil.isWhitespaceOrEmpty - Whitespace check failes with a TypeException`, ({ char }) => {
        expect(() => {
            StringUtil.isWhitespaceOrEmpty(char);
        }).toThrow(TypeException);
    });

    it.each`
        char    | expected
        ${""}   | ${true}
        ${" "}  | ${true}
        ${"1"}  | ${false}
        ${"a"}  | ${false}
    `(`StringUtil.isWhitespaceOrEmpty - Whitespace check is successful`, ({ char, expected}) => {
        expect(StringUtil.isWhitespaceOrEmpty(char)).toBe(expected);
    });

});
