const {
    TYPES
} = require("./constants");
const {
    getTypeOf,
    getEmptyValueOf
} = require("./utils");

/**
 * Merge deeply two objects
 * @param {OBject} obj1
 * @param {Object} obj2
 * @param {Object} config
 */
function deepMerge(obj1, obj2, config = {}) {
    const typeObj1 = getTypeOf(obj1);
    const typeObj2 = getTypeOf(obj2);

    if (typeObj1 !== TYPES.OBJECT && typeObj1 !== TYPES.ARRAY &&
        typeObj2 !== TYPES.OBJECT && typeObj2 !== TYPES.ARRAY) {
        return obj2;
    }

    if (typeObj1 === TYPES.ARRAY && typeObj2 === TYPES.ARRAY) {
        return [...obj1, ...obj2];
    }

    let result = {};

    //copy properties of obj1
    for (let property in obj1) {
        switch (getTypeOf(obj1[property])) {
            case TYPES.OBJECT:
                result[property] = deepMerge(result[property], obj1[property], config);
                break;

            case TYPES.ARRAY:
                let resultArr = [];
                obj1[property].forEach((value, index) =>
                    resultArr.push(deepMerge(null, value, config))
                );
                result[property] = resultArr;
                break;

            default:
                result[property] = obj1[property];
                break;
        }
    }

    //copy properties of obj2
    for (let property in obj2) {
        switch (getTypeOf(obj2[property])) {
            case TYPES.OBJECT:
                result[property] = deepMerge(result[property], obj2[property], config);
                break;

            case TYPES.ARRAY:
                let resultArr = [];
                obj2[property].forEach((value, index) =>
                    resultArr.push(deepMerge(result[property][index], value, config))
                );
                result[property] = resultArr;
                break;

            default:
                result[property] = obj2[property];
                break;
        }
    }

    return result;
}

module.exports = deepMerge;