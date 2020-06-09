# deepMerge

<!-- [START badges] -->

![npm](https://img.shields.io/npm/v/deepmergefn)
[![Build Status](https://travis-ci.org/jesusgm/deepmergefn.svg?branch=master)](https://travis-ci.org/jesusgm/deepmergefn)
[![Number of Downloads](https://img.shields.io/npm/dm/deepmergefn.svg)](https://www.npmjs.com/package/deepmergefn)

<!-- [END badges] -->

Mixes two data objects in depth

## Instalation

Install package executing these command:

        npm i deepmergefn

## Usage

```javascript
const deepMerge = require("deepmergefn");

const object1 = {
  name: "John",
  lastname: "Doe",
  list: [
    {
      foo: 2,
    },
    {
      var: "aaa",
    },
  ],
};

const object2 = {
  name: "John",
  age: 30,
  list: [
    {
      foobar: "lastaaa",
    },
  ],
};

const result = deepMerge(object1, object2);
```

Returns

```json
{
  "name": "John",
  "lastname": "Doe",
  "list": [
    {
      "foo": 2,
      "foobar": "lastaaa"
    },
    {
      "var": "aaa"
    }
  ],
  "age": 30
}
```

# License

MIT
