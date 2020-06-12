const deepMerge = require("../index");

describe("deepMerge tests", () => {

    test("Merges two strings", () => {
        const string1 = "John";
        const string2 = "Doe";
        const expected = "John";

        const result = deepMerge(string1, string2);

        expect(result).toBe(expected);
    });

    test("Merges two number", () => {
        const number1 = 1;
        const number2 = 2;
        const expected = 1;

        const result = deepMerge(number1, number2);

        expect(result).toBe(expected);
    });

    test("Merges two plain object", () => {
        const object1 = {
            name: "John",
            lastname: "Doe",
        };

        const object2 = {
            name: "John",
            age: 30,
        };

        const expected = {
            name: "John",
            lastname: "Doe",
            age: 30,
        };

        const result = deepMerge(object1, object2);

        expect(result).toMatchObject(expected);
    });

    test("Merges two simple arrays", () => {
        const array1 = [1, 2, 3];
        const array2 = [4, 5, 6];
        const expected = [4, 5, 6];

        const result = deepMerge(array1, array2);

        expect(result).toMatchObject(expected);
    })

    test("Merges two object width array properties", () => {
        const object1 = {
            name: "John",
            lastname: "Doe",
            list: [1, 2, 3],
        };

        const object2 = {
            name: "John",
            age: 30,
            list: [3, 4, 5],
        };

        const expected = {
            name: "John",
            lastname: "Doe",
            age: 30,
            list: [3, 4, 5],
        };

        const result = deepMerge(object1, object2);

        expect(result).toMatchObject(expected);
    });

    test("Merges two object width complex array properties", () => {
        const object1 = {
            name: "John",
            lastname: "Doe",
            list: [{
                    foo: "foo",
                },
                {
                    bar: "bar"
                },
            ],
        };

        const object2 = {
            name: "John",
            age: 30,
            list: [{
                foobar: "foobar"
            }],
        };

        const expected = {
            name: "John",
            lastname: "Doe",
            age: 30,
            list: [{
                    foo: "foo",
                    foobar: "foobar",
                },
                {
                    bar: "bar"
                },
            ],
        };
        const result = deepMerge(object1, object2);

        expect(result).toMatchObject(expected);
    });

    test("Merges two object width objects of objects", () => {
        const object1 = {
            name: "John",
            lastname: "Doe",
            child: {
                name: "aaa",
                child: {
                    name: "bbb"
                }
            }
        };

        const object2 = {
            name: "John",
            age: 30,
            child: {
                lastname: "aaa",
                child: {
                    lastname: "bbb"
                }
            }
        };

        const expected = {
            name: "John",
            lastname: "Doe",
            age: 30,
            child: {
                name: "aaa",
                lastname: "aaa",
                child: {
                    name: "bbb",
                    lastname: "bbb"
                }
            }
        };
        const result = deepMerge(object1, object2);

        expect(result).toMatchObject(expected);
    });


    test("Merges two array width objects", () => {
        const array1 = [{
                a: 3
            }, {
                a: 7
            },
            {
                c: 7
            }
        ];

        const array2 = [{
            a: 7
        }, {
            b: 3
        }];

        const expected = [{
                a: 7
            }, {
                a: 7,
                b: 3
            },
            {
                c: 7
            }
        ];

        const result = deepMerge(array1, array2);

        expect(result).toMatchObject(expected);
    });
})