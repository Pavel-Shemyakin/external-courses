function filter(array, callback) {
    let filtered = []

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            filtered.push(array[i])
        }
    }

    return filtered
}

module.exports = filter