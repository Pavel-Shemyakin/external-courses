const calculator = {
    result: 0,

    add(value) {
        if (Number(value) === value) {
            calculator.result += value;
        }

        return calculator.add;
    },

    subtract(value) {
        if (Number(value) === value) {
            calculator.result -= value;
        }

        return calculator.subtract;
    },

    divide(value) {
        if (Number(value) === value) {
            if (calculator.result === 0) {
                calculator.result = 1
            }
            calculator.result /= value;
        }

        return calculator.divide;
    },

    multiply(value) {
        if (Number(value) === value) {
            if (calculator.result === 0) {
                calculator.result = 1
            }
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