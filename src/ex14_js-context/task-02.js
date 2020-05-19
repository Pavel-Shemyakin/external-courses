function Hangman() { }

Hangman.prototype.words = ["epam", "programming", "events", "javascript", "header"];

Hangman.prototype.startAgain = function (word) {
    this.word = word.toLowerCase() || this.words[Math.floor(Math.random() * this.words.length)];
    this.lives = 6;
    this.remainigLetters = this.word.length;
    this.newRemainigLetters = this.remainigLetters;
    this.answerArray = [];
    this.wrongSymbols = [];

    for (let i = 0; i < this.word.length; i++) {
        this.answerArray.push("_");
    }
};

Hangman.prototype.guess = function (letter) {
    if (!this.word) {
        this.startAgain();
    }

    if ((this.remainigLetters > 0) && (this.lives !== 0)) {
        let guess = letter;

        if (guess === null) {
            return;
        }

        if (guess.length !== 1) {
            console.log("Please, enter just ONE letter.");
        }

        guess = guess.toLowerCase();

        for (let j = 0; j < this.word.length; j++) {
            if (this.answerArray[j] === guess) {
                console.log("Sorry, this letter is already there... try again :|");
            }

            if (this.word[j] === guess) {
                this.answerArray[j] = guess;
                this.remainigLetters--;
            }
        }

        if (this.remainigLetters === this.newRemainigLetters) {
            this.lives--;
            this.wrongSymbols.push(guess);
            console.log("wrong letter, errors left " + this.lives + " | " + this.wrongSymbols.join(','));
        }

        this.newRemainigLetters = this.remainigLetters;
    }

    if (this.lives === 0) {
        console.log("Game over! The word was: " + this.word);
    }

    if (this.remainigLetters === 0) {
        console.log(this.word + " | You won!");
    }

    console.log(this.answerArray.join(''));
};

Hangman.prototype.getGuessedString = function () {
    return this.answerArray.join('');
};

Hangman.prototype.getErrorsLeft = function () {
    return this.lives;
};

Hangman.prototype.getStatus = function () {
    return this.getGuessedString() + ' | errors left ' + this.lives;
};

Hangman.prototype.getWrongSymbols = function () {
    return this.wrongSymbols;
};

module.exports = new Hangman();