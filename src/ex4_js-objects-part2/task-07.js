function cutQuantitySymbols(initialStr, num) {
    let str = initialStr

    if (str.length > num) {
        str = str.slice(0, num - 1) + "…"
    }

    return str
}

module.exports = cutQuantitySymbols