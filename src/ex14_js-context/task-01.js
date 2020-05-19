function Calculator() {}

Calculator.state = 0;

Calculator.add = function(num) {
    this.state += num;
    return this;
}

Calculator.subtract = function(num) {
    this.state -= num;
    return this;
}

Calculator.multiply = function(num) {
    this.state *= num;
    return this;
}

Calculator.divide = function(num) {
    this.state /= num;
    return this;
}

Calculator.reset = function(num) {
    this.state = 0;
    return this;
}

Calculator.getResult = function() {
    if (isNaN(this.state)) { return 0 }
    return this.state;
}

Calculator.setState = function(state) {
    this.state = state;
    return this;
}

Calculator.fetchData = function(callback) {
    setTimeout(() => {
        this.state = 500;
        callback(this.state);
    }, 500);
}

module.exports = Calculator;