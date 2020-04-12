function deleteWhitespace(initialStr) {
    let str = initialStr

    if (str[str.length - 1] === " ") {
        str = str.slice(0, str.length - 1)
    }
    if (str[0] === " ") {
        str = str.slice(1, str.length)
    }

    return str
}

module.exports = deleteWhitespace