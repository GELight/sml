import StringUtil from "../../src/sml/StringUtil";
import TypeException from "../../src/TypeException";

describe("StringUtil", () => {

    it.each`
        codePoints                                              | startIndex    | len           | expected
        ${[72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]} | ${0}          | ${11}         | ${"Hello World"}
        ${[72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]} | ${0}          | ${5}          | ${"Hello"}
        ${[72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]} | ${6}          | ${5}          | ${"World"}
        ${[72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]} | ${5}          | ${1}          | ${" "}
        ${[228,246,252,223,35,42]}                              | ${0}          | ${6}          | ${"äöüß#*"}
    `(`StringUtil.getSubstr($codePoints, $startIndex, $len) - returned substring from codepoints array is correct`,
        ({ codePoints, startIndex, len, expected }) => {
        // when
        const substr = StringUtil.getSubstr(codePoints, startIndex, len);
        // then
        expect(substr).toEqual(expected);
    });

    it.each`
        codePoints      | startIndex    | len
        ${null}         | ${null}       | ${null}
        ${undefined}    | ${undefined}  | ${undefined}
        ${[]}           | ${[]}         | ${[]}
        ${{}}           | ${{}}         | ${{}}
        ${123}          | ${123}        | ${123}
        ${"abc"}        | ${"abc"}      | ${"abc"}
        ${[72]}         | ${[72]}       | ${[72]}
        ${[72, "a"]}    | ${0}          | ${5}
    `(`StringUtil.getSubstr($codePoints, $startIndex, $len) - TypeException by get substring from codepoints array`,
        ({ codePoints, startIndex, len }) => {
        expect(() => StringUtil.getSubstr(codePoints, startIndex, len)).toThrow(TypeException);
    });

    it.each`
        str                 | expected
        ${"Hello World"}    | ${[72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]}
        ${"Hello"}          | ${[72, 101, 108, 108, 111]}
        ${"World"}          | ${[87, 111, 114, 108, 100]}
        ${" "}              | ${[32]}
        ${"äöüß#*"}         | ${[228,246,252,223,35,42]}
        ${"123"}            | ${[49,50,51]}
    `(`StringUtil.stringToCodePoints($str) - convert string to codepoints is correct`,
        ({ str, expected }) => {
        // when
        const codePoints = StringUtil.stringToCodePoints(str);
        // then
        expect(codePoints).toEqual(expected);
    });

    it.each`
        str
        ${null}
        ${undefined}
        ${123}
        ${[]}
        ${{}}
    `(`StringUtil.stringToCodePoints($str) - TypeException by convert string to codepoints`,
        ({ str }) => {
        expect(() => StringUtil.stringToCodePoints(str)).toThrow(TypeException);
    });

    it.each`
        codePoints                                              | expected
        ${[72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]} | ${"Hello World"}
        ${[72, 101, 108, 108, 111]}                             | ${"Hello"}
        ${[87, 111, 114, 108, 100]}                             | ${"World"}
        ${[32]}                                                 | ${" "}
        ${[228,246,252,223,35,42]}                              | ${"äöüß#*"}
    `(`StringUtil.codePointsToString($codePoints) - convert codepoints to string is correct`,
        ({ codePoints, expected }) => {
        // when
        const str = StringUtil.codePointsToString(codePoints);
        // then
        expect(str).toEqual(expected);
    });

    it.each`
        codePoints
        ${null}
        ${undefined}
        ${123}
        ${{}}
    `(`StringUtil.codePointsToString($codePoints) - TypeException by convert codepoints to string`,
        ({ codePoints }) => {
        expect(() => StringUtil.codePointsToString(codePoints)).toThrow(TypeException);
    });

    it.each`
        str1                | str2              | expected
        ${"Hello"}          | ${"Hello"}        | ${true}
        ${"Hello"}          | ${"hELLO"}        | ${true}
        ${" "}              | ${" "}            | ${true}
        ${"Hello World"}    | ${"HelloWorld"}   | ${false}
        ${"äöü"}            | ${"ÄÖÜ"}          | ${true}
    `(`StringUtil.equalsIgnoreCase($str1, $str2) - check is '$expected'`,
        ({ str1, str2, expected }) => {
        // when
        const check = StringUtil.equalsIgnoreCase(str1, str2);
        // then
        expect(check).toEqual(expected);
    });

    it.each`
        str1            | str2
        ${null}         | ${null}
        ${undefined}    | ${undefined}
        ${123}          | ${123}
        ${{}}           | ${{}}
        ${[]}           | ${[]}
    `(`StringUtil.equalsIgnoreCase($str1, $str2) - check failes through wrong parameter types`,
        ({ str1, str2 }) => {
        expect(() => StringUtil.equalsIgnoreCase(str1, str2)).toThrow(TypeException);
    });

});
