import { TypeGuard, NULLABLE, NULLABLE_VALUE } from "../src/TypeGuard";
import TypeException from "../src/TypeException";

class TestClass1 {
    constructor() {}
}
class TestClass2 {
    constructor() {}
}
class TestClass3 extends TestClass2 {
    constructor() {
        super();
    }
}

describe("TypeGuard", () => {

    /* ===== Boolean ===== */

    it.each`
        param       | options
        ${true}     | ${[]}
        ${false}    | ${[]}
        ${null}     | ${[NULLABLE]}
    `(`TypeGuard.assumeBoolean($param, $options) - boolean parameter check is correct`, ({ param, options }) => {
        let result;
        expect(() => {
            result = TypeGuard.assureBoolean(param, options);
        }).not.toThrow(TypeException);
        expect(result).toEqual(param);
    }); 

    it.each`
        param           | options
        ${"abc"}        | ${[]}
        ${1}            | ${[]}
        ${1.2}          | ${[]}
        ${null}         | ${[]}
        ${undefined}    | ${[]}
        ${[]}           | ${[]}
        ${{}}           | ${[]}
    `(`TypeGuard.assumeBoolean($param, $options) - boolean parameter check failed`, ({ param, options }) => {
        let result;
        expect(() => {
            result = TypeGuard.assureBoolean(param, options);
        }).toThrow(TypeException);
        expect(result).toEqual(undefined);
    });

    /* ===== String ===== */

    it.each`
        param       | options
        ${""}       | ${[]}
        ${"abc"}    | ${[]}
        ${"abc"}    | ${[NULLABLE]}
        ${null}     | ${[NULLABLE]}
    `(`TypeGuard.assumeString($param, $options) - string parameter check is correct`, ({ param, options }) => {
        let result;
        expect(() => {
            result = TypeGuard.assureString(param, options);
        }).not.toThrow(TypeException);
        expect(result).toEqual(param);
    });
    
    it.each`
        param           | options
        ${1}            | ${[]}
        ${1.2}          | ${[]}
        ${null}         | ${[]}
        ${undefined}    | ${[]}
        ${[]}           | ${[]}
        ${{}}           | ${[]}
    `(`TypeGuard.assumeString($param) - string parameter check failes`, ({ param, options }) => {
        let result;
        expect(() => {
            result = TypeGuard.assureString(param, options);
        }).toThrow(TypeException);
        expect(result).toEqual(undefined);
    });

    /* ===== Number ===== */

    it.each`
        param       | options
        ${1}        | ${[]}
        ${99999999} | ${[]}
        ${-1111}    | ${[]}
        ${null}     | ${[NULLABLE]}
    `(`TypeGuard.assureNumber($param, $options) - number parameter check is correct`, ({ param, options }) => {
        let result;
        expect(() => {
            result = TypeGuard.assureNumber(param, options);
        }).not.toThrow(TypeException);
        expect(result).toEqual(param);
    });
    
    it.each`
        param           | options
        ${"1"}          | ${[]}
        ${"1.2"}        | ${[]}
        ${1.2}          | ${[]}
        ${-1.5}         | ${[]}
        ${null}         | ${[]}
        ${undefined}    | ${[]}
        ${[]}           | ${[]}
        ${{}}           | ${[]}
    `(`TypeGuard.assureNumber($param) - number parameter check failed`, ({ param, options }) => {
        let result;
        expect(() => {
            result = TypeGuard.assureNumber(param, options);
        }).toThrow(TypeException);
        expect(result).toEqual(undefined);
    });

    /* ===== Array ===== */

    it.each`
        param       | options       | expected
        ${[]}       | ${[]}         | ${[]}
        ${null}     | ${[NULLABLE]} | ${null}
    `(`TypeGuard.assureArray($param, $options) - array parameter check is correct`, ({ param, options, expected }) => {
        let result;
        expect(() => {
            result = TypeGuard.assureArray(param, options);
        }).not.toThrow(TypeException);
        expect(result).toEqual(expected);
    });
    
    it.each`
        param           | options       | expected
        ${""}           | ${[]}         | ${undefined}
        ${"abc"}        | ${[]}         | ${undefined}
        ${"1,2,3"}      | ${[]}         | ${undefined}
        ${1.2}          | ${[]}         | ${undefined}
        ${-1.5}         | ${[]}         | ${undefined}
        ${null}         | ${[]}         | ${undefined}
        ${undefined}    | ${[]}         | ${undefined}
        ${{}}           | ${[]}         | ${undefined}
        ${true}         | ${[]}         | ${undefined}
        ${false}        | ${[]}         | ${undefined}
    `(`TypeGuard.assureArray($param) - array parameter check failed`, ({ param, options, expected }) => {
        let result;
        expect(() => {
            result = TypeGuard.assureArray(param, options);
        }).toThrow(TypeException);
        expect(result).toEqual(expected);
    });

    /* ===== String Array ===== */

    it.each`
        param               | options               | expected
        ${[]}               | ${[]}                 | ${[]}
        ${null}             | ${[NULLABLE]}         | ${null}
        ${["a", "b", "c"]}  | ${[]}                 | ${["a", "b", "c"]}
        ${["a", null, "c"]} | ${[NULLABLE_VALUE]}   | ${["a", null, "c"]}
    `(`TypeGuard.assureStringArray($param, $options) - string array parameter check is correct`, ({ param, options, expected }) => {
        let result;
        expect(() => {
            result = TypeGuard.assureStringArray(param, options);
        }).not.toThrow(TypeException);
        expect(result).toEqual(expected);
    });
    
    it.each`
        param               | options
        ${"1"}              | ${[]}
        ${1}                | ${[]}
        ${1.2}              | ${[]}
        ${null}             | ${[]}
        ${true}             | ${[]}
        ${false}            | ${[]}
        ${undefined}        | ${[]}
        ${{}}               | ${[]}
        ${[1,"a"]}          | ${[]}
        ${["a",null]}       | ${[]}
        ${[1,{}]}           | ${[]}
        ${[1,1.2]}          | ${[]}
        ${["a", null, "c"]} | ${[]}
    `(`TypeGuard.assureStringArray($param, $options) - string array parameter check failed`, ({ param, options }) => {
        let result;
        expect(() => {
            result = TypeGuard.assureStringArray(param, options);
        }).toThrow(TypeException);
        expect(result).toEqual(undefined);
    });

    /* ===== Number Array ===== */

    it.each`
        param           | options               | expected
        ${[]}           | ${[]}                 | ${[]}
        ${null}         | ${[NULLABLE]}         | ${null}
        ${[1,2,3]}      | ${[]}                 | ${[1,2,3]}
        ${[1, null, 3]} | ${[NULLABLE_VALUE]}   | ${[1, null, 3]}
    `(`TypeGuard.assureNumberArray($param) - number array parameter check is correct`, ({ param, options, expected }) => {
        let result;
        expect(() => {
            result = TypeGuard.assureNumberArray(param, options);
        }).not.toThrow(TypeException);
        expect(result).toEqual(expected);
    });
    
    it.each`
        param           | options
        ${"1"}          | ${[]}
        ${1}            | ${[]}
        ${1.2}          | ${[]}
        ${null}         | ${[]}
        ${undefined}    | ${[]}
        ${true}         | ${[]}
        ${false}        | ${[]}
        ${{}}           | ${[]}
        ${[1, "a"]}     | ${[]}
        ${[1, {}]}      | ${[]}
        ${[1, 1.2]}     | ${[]}
        ${[1, null, 3]} | ${[]}
    `(`TypeGuard.assureNumberArray($param, $options) - number array parameter check failed`, ({ param, options }) => {
        let result;
        expect(() => {
            result = TypeGuard.assureNumberArray(param, options);
        }).toThrow(TypeException);
        expect(result).toEqual(undefined);
    });


    /* ===== InstanceOf ===== */

    it(`TypeGuard.assureInstanceOf(inst, obj) - parameter instance check works correct`, () => {
        
        const InstanceOfClass1 = new TestClass1();
        const InstanceOfClass2 = new TestClass2();
        const InstanceOfClass3 = new TestClass3(); // Extends TestClass2
        
        // InstanceOfClass1 | TestClass1 | []
        let result = undefined;
        expect(() => {
            result = TypeGuard.assureInstanceOf(InstanceOfClass1, TestClass1, []);
        }).not.toThrow(TypeException);
        expect(result).toBeInstanceOf(TestClass1);

        // InstanceOfClass1 | TestClass2 | []
        result = undefined;
        expect(() => {
            result = TypeGuard.assureInstanceOf(InstanceOfClass1, TestClass2, []);
        }).toThrow(TypeException);
        expect(result).toBe(undefined);

        // InstanceOfClass3 | TestClass2 | []
        result = undefined;
        expect(() => {
            result = TypeGuard.assureInstanceOf(InstanceOfClass3, TestClass2, []);
        }).not.toThrow(TypeException);
        expect(result).toBeInstanceOf(TestClass2);

        // InstanceOfClass3 | TestClass2 | [NULLABLE]
        result = undefined;
        expect(() => {
            result = TypeGuard.assureInstanceOf(null, TestClass2, [NULLABLE]);
        }).not.toThrow(TypeException);
        expect(result).toBe(null);

    });

    /* ===== ArrayOf Instance ===== */

    it(`TypeGuard.assureArrayOfInstance(param, obj) - parameter is an array of instance`, () => {
        // given
        const list1_ok = [
            new TestClass1(),
            new TestClass1()
        ];
        const list2_ok = [
            new TestClass2(),
            new TestClass2()
        ];
        const list2_failed = [
            new TestClass1(),
            new TestClass2()
        ];
        const list3_failed = [
            new TestClass1(),
            "some string",
            new TestClass1()
        ];
        const list4_ok = [
            new TestClass3(),
            new TestClass3()
        ];
        
        // then
        let result = undefined;
        expect(() => {
            result = TypeGuard.assureArrayOfInstance(list1_ok, TestClass1);
        }).not.toThrow(TypeException);
        expect(result).toBeInstanceOf(Array);
        
        // and
        result = undefined;
        expect(() => {
            result = TypeGuard.assureArrayOfInstance(null, TestClass1, [NULLABLE]);
        }).not.toThrow(TypeException);
        expect(result).toBe(null);

        // and
        result = undefined;
        expect(() => {
            result = TypeGuard.assureArrayOfInstance(list1_ok, TestClass1, [NULLABLE]);
        }).not.toThrow(TypeException);
        expect(result).toBeInstanceOf(Array);
        
        // and
        result = undefined;
        expect(() => {
            result = TypeGuard.assureArrayOfInstance(list2_ok, TestClass2);
        }).not.toThrow(TypeException);
        expect(result).toBeInstanceOf(Array);
        
        // and
        result = undefined;
        expect(() => {
            result = TypeGuard.assureArrayOfInstance(list2_failed, TestClass2);
        }).toThrow(TypeException);
        expect(result).toEqual(undefined);
        
        // and
        result = undefined;
        expect(() => {
            result = TypeGuard.assureArrayOfInstance(list3_failed, TestClass2);
        }).toThrow(TypeException);
        expect(result).toEqual(undefined);
        
        // and
        result = undefined;
        expect(() => {
            result = TypeGuard.assureArrayOfInstance(list4_ok, TestClass2);
        }).not.toThrow(TypeException);
        expect(result).toBeInstanceOf(Array);

    });

});
