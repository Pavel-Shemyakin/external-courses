module.exports = function findType(value) {
    let result = typeof (value);

    if (isNaN(value) || result !== "string" && result !== "number") {
        return undefined
    }
    
    return result
}