const calculator = {
    result: 0,

    add(value) {
        if (value) {
            calculator.result += value;
        }

        return calculator.add;
    },

    subtract(value) {
        if (value) {
            calculator.result -= value;
        }

        return calculator.subtract;
    },

    divide(value) {
        if (value) {
            calculator.result /= value;
        }

        return calculator.divide;
    },

    multiply(value) {
        if (value) {
            calculator.result *= value;
        }

        return calculator.multiply;
    },

    getResult() {
        return calculator.result
    },

    reset() {
        calculator.result = 0;
    }
}


module.exports = calculator