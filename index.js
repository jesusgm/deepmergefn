/**
 * Merge deeply two objects
 * @param {any} target
 * @param {any} source
 */
function deepMerge(target, source) {
    for (var prop in source) {
        if (source.hasOwnProperty(prop)) {
            if (target[prop] && typeof source[prop] === "object") {
                deepMerge(target[prop], source[prop]);
            } else {
                target[prop] = source[prop];
            }
        }
    }

    return target;
}

module.exports = deepMerge;