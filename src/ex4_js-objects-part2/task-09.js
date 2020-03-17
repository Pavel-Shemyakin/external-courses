function addSubString(initialStr, subStr, position) {
    let str = initialStr

    str = str.split(" ")
    str.splice(position + 1, 0, subStr)

    return str.join(" ")
}

module.exports = addSubString