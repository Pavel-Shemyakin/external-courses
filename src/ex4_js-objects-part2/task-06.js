function editFirstSymbolsCase(initialStr) {
    let str = initialStr

    str = str[0].toUpperCase() + str.slice(1)

    for (let index = 0; index < str.length; index++) {
        if (str[index] === " ") {
            str = str.slice(0, index + 1) + str[index + 1].toUpperCase() + str.slice(index + 2)
        }
    }

    return str
}

module.exports = editFirstSymbolsCase