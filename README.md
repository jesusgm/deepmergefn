# deepMerge [![Build Status](https://travis-ci.org/jesusgm/deepmergefn.svg?branch=master)](https://travis-ci.org/jesusgm/deepmergefn)

Mixes two data objects in depth

## Instalation

Install package executing these command:

        npm i deepmergefn

## Usage

```javascript
const deepMerge = require("deepmergejs");

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
      "foobar": "lastaaa"
    }
  ],
  "age": 30
}
```

# License

MIT
