function toLowerCamelCase(initialStr) {
    let str = initialStr

    str = str.toLowerCase()

    for (let index = 0; index < str.length; index++) {
        if (str[index] === " ") {
            str = str.slice(0, index) + str[index + 1].toUpperCase() + str.slice(index + 2, str.length)
        }
    }

    return str
}
module.exports = toLowerCamelCase