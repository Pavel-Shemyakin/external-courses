function invertString(str) {
    let inversed = '';

    for (let i = 0; i < str.length; i++) {
        inversed = str[i] + inversed;
    }

    return inversed
}

module.exports = invertString