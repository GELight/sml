import WsvLine from "../../src/whitespacesv/WsvLine";
import TypeException from "../../src/TypeException";

describe("WsvLine", () => {

    const line = '"My Value" "My ""Value""" "MyValue#1" "Line1 " "-" - MyValue # My comment with ### hashes and "doublequotes"';

    it(`WsvLine.parse() and toString()`, () => {
        // given
        const wsvLine = WsvLine.parse(line);
        // then
        expect(wsvLine.toString()).toBe('"My Value" "My ""Value""" "MyValue#1" "Line1 " "-" - MyValue # My comment with ### hashes and "doublequotes"');
    });

    it(`WsvLine.constructor() - Set values by per constructor`, () => {
        // given
        const wsvLine = new WsvLine("My Value", 'My "Value"', "MyValue#1", "Line1 ", "-", "MyValue");
        // when
        expect(wsvLine).toBeInstanceOf(WsvLine);
        // then
        expect(wsvLine.getValues()).toEqual([ 'My Value', 'My "Value"', 'MyValue#1', 'Line1 ', '-', 'MyValue' ]);
    });

    it.each`
        whitespaces
        ${[]}
        ${[""]}
    `(`WsvLine.validateWhitespaces($whitespaces) - Whitespace validation do not throw an error`, ({ whitespaces }) => {
        expect(() => {
            WsvLine.validateWhitespaces(whitespaces);
        }).not.toThrow();
    });

    it.each`
        whitespaces
        ${[null]}
        ${[1]}
        ${null}
        ${undefined}
        ${1}
        ${1.2}
    `(`WsvLine.validateWhitespaces($whitespaces) - Whitespace validation throws an error`, ({ whitespaces }) => {
        expect(() => {
            WsvLine.validateWhitespaces(whitespaces);
        }).toThrow(TypeException);
    });

    it.each`
        comment
        ${null}
        ${undefined}
        ${[null]}
        ${[1]}
        ${1}
        ${1.2}
    `(`WsvLine.validateComment($comment) - Whitespace validation throws a TypeException`, ({ comment }) => {
        expect(() => {
            WsvLine.validateComment(comment);
        }).toThrow(TypeException);
    });

    it(`WsvLine.validateComment($comment) - Line break in comment is not allowed`, () => {
        expect(() => {
            WsvLine.validateComment("Any comment with a line break\n");
        }).toThrow("Line break in comment is not allowed");
    });

    it.each`
        value
        ${null}
        ${undefined}
        ${[1]}
        ${1}
        ${1.2}
        ${[]}
        ${[null]}
        ${[""]}
    `(`WsvLine.setValues($value) - Set value failes with TypeException`, ({ value }) => {
        // given
        const wsvLine = new WsvLine();
        // when
        expect(() => {
            wsvLine.setValues(value);
        }).toThrow(TypeException);
    });

    it.each`
        value
        ${undefined}
        ${[1]}
        ${1}
        ${1.2}
        ${[]}
        ${[null]}
        ${[""]}
    `(`WsvLine.addValue($value) - Set value failes with TypeException`, ({ value }) => {
        // given
        const wsvLine = new WsvLine();
        // when
        expect(() => {
            wsvLine.addValue(value);
        }).toThrow(TypeException);
    });

    it.each`
        value
        ${null}
        ${""}
        ${"abc"}
    `(`WsvLine.addValue($value) - Set value is successful`, ({ value }) => {
        // given
        const wsvLine = new WsvLine();
        // when
        expect(() => {
            wsvLine.addValue(value);
        }).not.toThrow(TypeException);
    });

    it(`WsvLine.getValues() - Get all values from a wsv line is successful`, () => {
        // given
        const wsvLine = new WsvLine();
        // when
        expect(wsvLine.getValues().length).toBe(0);
        expect(wsvLine.getValues()).toEqual([]);
        // and
        wsvLine.addValue("Value 1");
        wsvLine.addValue("Value 2");
        wsvLine.addValue("Value 3");
        // then
        expect(wsvLine.getValues().length).toBe(3);
        expect(wsvLine.getValues()[0]).toBe("Value 1");
        expect(wsvLine.getValues()[1]).toBe("Value 2");
        expect(wsvLine.getValues()[2]).toBe("Value 3");
    });

    it(`WsvLine.hasValues() - Returns true or false whether a line has values or not`, () => {
        // given
        const wsvLine = new WsvLine();
        // when
        expect(wsvLine.hasValues()).toBe(false);
        // and
        wsvLine.addValue("Value");
        // then
        expect(wsvLine.hasValues()).toBe(true);
        // and
        wsvLine.addValue("Value");
        wsvLine.addValue("Value");
        wsvLine.addValue("Value");
        // then
        expect(wsvLine.hasValues()).toBe(true);
    });

    it.each`
        whitespaces         | count
        ${[]}               | ${0}
        ${[""]}             | ${1}
        ${[" "]}            | ${1}
        ${[" ", "", " "]}   | ${3}
    `(`WsvLine.setWhitespaces($whitespaces) - Whitespaces will set successful`, ({ whitespaces, count }) => {
        // given
        const wsvLine = new WsvLine();
        // when
        wsvLine.setWhitespaces(whitespaces);
        // then
        expect(wsvLine.getWhitespaces().length).toBe(count);
    });
    
});
