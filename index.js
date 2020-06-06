/**
 * CONSTANTS
 */
const TYPES = {
    OBJECT: "object",
    ARRAY: "array",
    OTHER: "other",
};

/**
 * Checks if a item is a Object
 * @param {any} item
 */
function isObject(item) {
    return item && typeof item === "object" && !Array.isArray(item);
}

/**
 * Check if a item is a array
 * @param {any} item
 */
function isArray(item) {
    return item && typeof item === "object" && Array.isArray(item);
}

/**
 * Returns if a value is "object", "array" or "other"
 * @param {any} value
 * @returns String
 */
function getTypeOf(value) {
    if (isObject(value)) {
        return TYPES.OBJECT;
    }
    if (isArray(value)) {
        return TYPES.ARRAY;
    }
    return TYPES.OTHER;
}

/**
 * Merge deeply two objects
 * @param {OBject} obj1
 * @param {Object} obj2
 */
function deepMerge(obj1, obj2) {

    let result = obj2;

    //copy properties of obj1
    for (let property in obj1) {
        switch (getTypeOf(obj1[property])) {
            case TYPES.OBJECT:
                result[property] = deepMerge(result[property], obj1[property]);
                break;
            case TYPES.ARRAY:
                result[property] = obj1[property].map((value, index) =>
                    deepMerge(
                        result[property] ?
                        result[property][index] :
                        null,
                        value
                    )
                );
                break;
            case TYPES.OTHER:
                result[property] = obj1[property];
                break;
        }
    }

    //copy properties of obj2
    for (let property in obj2) {
        switch (getTypeOf(obj2[property])) {
            case TYPES.OBJECT:
                result[property] = deepMerge(result[property], obj2[property]);
                break;
            case TYPES.ARRAY:
                result[property] = obj2[property].map((value, index) =>
                    deepMerge(
                        result[property] ?
                        result[property][index] :
                        null,
                        value
                    )
                );
                break;
            case TYPES.OTHER:
                result[property] = obj2[property];
                break;
        }
    }

    return result;
}

module.exports = deepMerge;