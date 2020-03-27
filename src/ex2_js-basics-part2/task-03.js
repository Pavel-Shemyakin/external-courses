module.exports = function checkNumbers(array) {
    let even = 0, odd = 0, zero = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            zero++
        }
        else if (array[i] % 2 === 0 && typeof array[i] === "number") {
            even++
        }
        else if (array[i] % 2 !== 0 && typeof array[i] === "number") {
            odd++
        }
    }

    return [even, odd, zero]
} 