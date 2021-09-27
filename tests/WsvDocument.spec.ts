import { WsvDocument } from "./../src/index";

describe("WsvDocument", () => {

    it(`WsvDocument.parse`,
        () => {
            // when
            const wsvDoc = WsvDocument.parse('"My Value" "My ""Value""" "MyValue#1" "Line1"/"Line2" "" "-" - MyValue # My comment with ### hashes and "doublequotes"');
            // then
            expect(wsvDoc.toString()).toBe('"My Value" "My ""Value""" "MyValue#1" "Line1"/"Line2" "" "-" - MyValue # My comment with ### hashes and "doublequotes"');
        });

});
