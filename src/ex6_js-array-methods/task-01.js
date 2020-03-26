function slice(array, start, end) {
    const result = [];
    let checkedStart = start || 0
    let checkedEnd = end || array.length

    if (start < 0) {
        checkedStart = array.length + start
    }

    if (end < 0) {
        checkedEnd = array.length + end
    }


    for (let i = checkedStart; i < checkedEnd; i++) {
        result.push(array[i]);
    }

    return result;
}

module.exports = slice()