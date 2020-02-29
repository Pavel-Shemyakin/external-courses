module.exports = function checkPrime(number) {
    let itog = `Число ${number} - простое число`;

    if ((number >= 1) && (number <= 1000)) {
        for (let i = number - 1; i > 1; i--) {
            let temp = number / i;

            if (temp === (temp ^ 0)) {
                itog = `Число ${number} - составное число`;
            }
        }
    } else {
        itog = "Данные неверны"
    }

    return itog;
}