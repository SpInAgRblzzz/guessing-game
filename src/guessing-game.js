class GuessingGame {
    constructor() {
        this.min;
        this.max;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.lastGuess = Math.round((this.max + this.min)/2);
        return this.lastGuess;
    }

    lower() {
        this.max = this.lastGuess;
    }

    greater() {
        this.min = this.lastGuess;
    }
}

module.exports = GuessingGame;
