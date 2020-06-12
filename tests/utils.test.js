const {
    TYPES
} = require("../constants");
const {
    isObject,
    isArray,
    getTypeOf,
} = require("../utils");

describe("utils test - isObject", () => {
    test("isObject with valid objects", () => {
        const object = {
            name: "John"
        }
        expect(isObject(object)).toBe(true);
        expect(isObject({})).toBe(true);
    })

    test("isObject with non objects", () => {
        const string = "lorem ipsum";
        const number = 1;
        expect(isObject(string)).toBe(false);
        expect(isObject(number)).toBe(false);
    })
})

describe("utils test - isArray", () => {
    test("isObject with valid array", () => {
        const array = [{
            name: "John"
        }]
        expect(isArray(array)).toBe(true);
        expect(isArray([])).toBe(true);
    })

    test("isObject with non array", () => {
        const string = "lorem ipsum";
        const number = 1;
        expect(isArray(string)).toBe(false);
        expect(isArray(number)).toBe(false);
    })
})

describe("utils test - getTypeOf", () => {
    test("getTypeOf with some constants", () => {
        const object = {
            name: "John"
        };
        const array = [1, 2]
        const string = "lorem ipsum";
        const number = 5;

        expect(getTypeOf(object)).toBe(TYPES.OBJECT);
        expect(getTypeOf(array)).toBe(TYPES.ARRAY);
        expect(getTypeOf(string)).toBe(TYPES.STRING);
        expect(getTypeOf(number)).toBe(TYPES.NUMBER);
    })
})