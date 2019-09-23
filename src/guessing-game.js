class GuessingGame {
    constructor() {
      this.min = 0;
      this.max = 0;
    }

    setRange(min, max) {
      this.min = min;
      this.max = max;
    }

    guess() {

    }

    lower() {
      this.max = guess();
    }

    greater() {
      this.min = guess();
    }
}

module.exports = GuessingGame;
