function map(array, callback) {
    let mapped = []

    for (let i = 0; i < array.length; i++) {
        if (mapped[i]) {
            if (callback(array[i], i, array)) {
                mapped + array[i]
            }
        }
    }

    return mapped
}

module.exports = map()