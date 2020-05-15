
function Calculator() {
    this.state = 0;
}

Calculator.prototype.add = function add(num) {
    this.state += num;
    return this;
}

Calculator.prototype.subtract = function add(num) {
    this.state -= num;
    return this;
}

Calculator.prototype.multiply = function add(num) {
    this.state *= num;
    return this;
}

Calculator.prototype.divide = function add(num) {
    this.state /= num;
    return this;
}

Calculator.prototype.reset = function add(num) {
    this.state = 0;
    return this;
}

Calculator.prototype.getResult = function add() {
    if (isNaN(this.state)) { return 0 }
    return this.state;
}

Calculator.prototype.setState = function add(state) {
    this.state = state;
    return this;
}

Calculator.prototype.fetchData = function add(callback) {
    let self = this;

    setTimeout(function () {
        self.state = 500;
        callback(self.state);
    }, 500);
}

module.exports = new Calculator;