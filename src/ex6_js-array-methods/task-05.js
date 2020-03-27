function map(array, callback) {
    let mapped = []

    for (let i = 0; i < array.length; i++) {
        mapped.push(callback(array[i], i, array))
    }

    return mapped
}

module.exports = map