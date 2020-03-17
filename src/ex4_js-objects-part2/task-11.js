function checkElements(initialStr) {
    let str = initialStr.split('')
    let result = {}

    for (let i = 0; i < str.length; ++i) {
        if (result[str[i]] !== undefined) {
            ++result[str[i]]
        } else {
            result[str[i]] = 1;
        }
    }

    for (const key in result) {
        if (result.hasOwnProperty(key)) {
            console.log(key + ": " + result[key])
        }
    }

    return
}

module.exports = checkElements