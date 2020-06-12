const deepMerge = require("../index");

describe("deepMerge tests", () => {

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

        expect(result.lastname).toBe(expected.lastname);
        expect(result.age).toBe(expected.age);
    });

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

        for (let i = 0; i < result.list.length; i++) {
            expect(result.list[i]).toBe(expected.list[i]);
        }
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

        for (let i = 0; i < result.length; i++) {
            expect(result.list[i]).toBe(expected.list[i]);
        }
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

        expect(result.child.name).toBe(expected.child.name);
        expect(result.child.lastname).toBe(expected.child.lastname);
        expect(result.child.child.name).toBe(expected.child.child.name);
        expect(result.child.child.lastname).toBe(expected.child.child.lastname);
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
                a: 3
            }, {
                a: 7
            },
            {
                c: 7
            }, {
                a: 7
            }, {
                b: 3
            }
        ];

        const result = deepMerge(array1, array2);

        for (let i = 0; i < result.length; i++) {
            expect(result[i]).toMatchObject(expected[i]);
        }
    });
})