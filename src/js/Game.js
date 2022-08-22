export class Game {
  constructor(spec) {
    this.spec = spec;
    this.player1Name = 'Player 1';
    this.player2Name = 'Player 2';
  }

  determineWinner() {
    if (!this.player1Selection || !this.player2Selection) {
      throw new Error("Player selection required first");
    }

    if (this.spec[this.player1Selection].beats === this.player2Selection) {
      return 1;
    }

    if (this.spec[this.player2Selection].beats === this.player1Selection) {
      return 2;
    }

    return 0;
  }

  randomSelection() {
    const properties = Object.keys(this.spec);
    const numberOfProperties = properties.length;
    const randomIndex = Math.floor(
      Math.random() * (numberOfProperties - 1 - 0 + 1) + 0
    );
    return properties[randomIndex];
  }

  play(player1Selection, player2Selection) {
    this.player1Selection = player1Selection;
    
    if (player2Selection) {
      this.player2Selection = player2Selection;
    } else {
      this.player2Selection = this.randomSelection();
    }

    this.side = this.determineWinner();
  }

  result() {
    if (this.side === 1) {
      return `${this.player1Name} won 🎉`;
    }

    if (this.side === 2) {
      return `${this.player2Name} won 🎉`;
    }

    return "It was a draw 🤷🏼‍♂️";
  }
}