const {
    TYPES
} = require("./constants");


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
    if (typeof value === "string") {
        return TYPES.STRING;
    }
    if (typeof value === "number") {
        return TYPES.NUMBER;
    }

    return TYPES.OTHER;
}


module.exports = {
    isObject,
    getTypeOf,
    isArray,
}