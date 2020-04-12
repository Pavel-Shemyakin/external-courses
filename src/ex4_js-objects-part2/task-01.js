function checkObject(str, object) {
    if (!object.hasOwnProperty(str)) {
        return object[str]
    }

    return undefined
}

module.exports = checkObject 