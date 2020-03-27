module.exports = function hasEqualElements(array) {
    let test = array[0], output = true;

    for (let i = 0; i < array.length; i++) {

        if (test !== array[i]) {
            output = false
        }
    }

    return output
} 