const calculator = {

    result: 0,

    add(sum) {
        if (sum) {
            calculator.result += sum;
        }

        return calculator.add;
    },

    subtract(sub) {
        if (sub) {
            calculator.result -= sub;
        }

        return calculator.subtract;
    },

    divide(div) {
        if (div) {
            calculator.result /= div;
        }

        return calculator.divide;
    },

    multiply(multi) {
        if (multi) {
            calculator.result *= multi;
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