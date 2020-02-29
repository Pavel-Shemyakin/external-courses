module.exports = function checkNumbers(array) {
    let even = 0;
    let odd = 0;
    let zero = 0;

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