import WsvDocument from "../../src/whitespacesv/WsvDocument";
import WsvLine from "../../src/whitespacesv/WsvLine";

describe("WsvDocument", () => {

    it(`WsvDocument.parse`, () => {
        // when
        const wsvDoc = WsvDocument.parse('"My Value" "My ""Value""" "MyValue#1" "Line1"/"Line2" "" "-" - MyValue # My comment with ### hashes and "doublequotes"');
        // then
        expect(wsvDoc.toString()).toBe('"My Value" "My ""Value""" "MyValue#1" "Line1"/"Line2" "" "-" - MyValue # My comment with ### hashes and "doublequotes"');
    });

    it.each`
        doc | expected
        ${'"My Value" "My ""Value""" "MyValue#1" "Line1"/"Line2" "" "-" - MyValue # My comment with ### hashes and "doublequotes"'}     | ${'"My Value" "My ""Value""" "MyValue#1" "Line1"/"Line2" "" "-" - MyValue # My comment with ### hashes and "doublequotes"'}
        ${"a  b  c  #comment\nd  e  f"} | ${"a  b  c  #comment\nd  e  f"}
    `(`WsvDocument.parse() and toString()`, ({ doc, expected }) => {
        // when
        const wsvDoc = WsvDocument.parse(doc);
        // then
        expect(wsvDoc.toString()).toBe(expected);
    });

    it(`WsvDocument.addWsvLines()`, () => {
        // given
        let wsvDoc = new WsvDocument();
        // when
        wsvDoc.addWsvLines(
            new WsvLine("Line 1 - Value 1", "Line 1 - Value 2"),
            new WsvLine("Line 2 - Value 1").setComment("Another comment")
        );
        // then
        expect(wsvDoc.getLines()).toEqual([
            {
                "comment": null, 
                "values": ["Line 1 - Value 1", "Line 1 - Value 2"], 
                "whitespaces": null
            }, 
            {
                "comment": "Another comment", 
                "values": ["Line 2 - Value 1"], 
                "whitespaces": null
            }
        ]);
    });

    it(`WsvDocument.addWsvLineByValues()`, () => {
        // given
        let wsvDoc = new WsvDocument();
        // when
        wsvDoc.addWsvLineByValues("Value 1", "Value 2");
        // then
        expect(wsvDoc.getLines()).toEqual([
            {
                "comment": null,
                "values": ["Value 1", "Value 2"],
                "whitespaces": null
            }
        ]);
    });

    it(`WsvDocument.getLine()`, () => {
        // given
        let wsvDoc = new WsvDocument();
        // when
        wsvDoc.addWsvLines(
            new WsvLine("Line 1 - Value 1", "Line 1 - Value 2"),
            new WsvLine("Line 2 - Value 1").setComment("Another comment")
        );
        // then
        expect(wsvDoc.getLine(1)).toEqual(
            {
                "comment": "Another comment", 
                "values": ["Line 2 - Value 1"], 
                "whitespaces": null
            }
        );
        expect(wsvDoc.getLine(0)).toEqual(
            {
                "comment": null, 
                "values": ["Line 1 - Value 1", "Line 1 - Value 2"], 
                "whitespaces": null
            }
        );
    });

    it(`WsvDocument.addWsvLineBySet()`, () => {
        // given
        let wsvDoc = new WsvDocument();
        // when
        wsvDoc.addWsvLineBySet(["Value 1", "Value 2"], null, "My comment");
        wsvDoc.addWsvLineBySet(["Value 1"], [], "");
        // then
        expect(wsvDoc.getLines()[0].getValues()).toEqual(["Value 1", "Value 2"]);
        expect(wsvDoc.getLines()[0].getComment()).toBe("My comment");
        expect(wsvDoc.getLines()[0].getWhitespaces()).toEqual(null);
        // and
        expect(wsvDoc.getLines()[1].getValues()).toEqual(["Value 1"]);
        expect(wsvDoc.getLines()[1].getComment()).toBe("");
        expect(wsvDoc.getLines()[1].getWhitespaces()).toEqual([]);
    });

    it(`WsvDocument.toArray()`, () => {
        // given
        const wsvDoc = WsvDocument.parse('"My Value" "My ""Value""" "MyValue#1" "Line1"/"Line2" "" "-" - MyValue # My comment with ### hashes and "doublequotes"');
        // then
        expect(wsvDoc.toArray()).toEqual([
            [
                'My Value',
                'My "Value"',
                'MyValue#1',
                'Line1\nLine2',
                '',
                '-',
                null,
                'MyValue'
            ]
        ]);
    });

});
