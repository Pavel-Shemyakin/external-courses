function addNewProperty(str, object) {
    if (object.hasOwnProperty(str)) {
        return object
    }
    return Object.assign(object, {[str]: 'new'})
}

module.exports = addNewProperty