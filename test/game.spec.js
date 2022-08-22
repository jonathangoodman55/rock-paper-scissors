import { Game } from '../src/js/Game';

describe('Game', () => {

  describe('With tradional actions', () => {
    const actionSpec = {
      rock: {
        beats: "scissors"
      },
      paper: {
        beats: "rock"
      },
      scissors: {
        beats: "paper"
      }
    };

    describe('When player 1 chooses action that beats player 2', () => {
      it('Should say player 1 wins', () => {
        const game = new Game(actionSpec);
        game.play('rock', 'scissors');

        expect(game.result()).toBe('Player 1 won 🎉');
      });
    });

    describe('When player 2 chooses action that beats player 1', () => {
      it('Should say player 1 wins', () => {
        const game = new Game(actionSpec);
        game.play('scissors', 'rock');

        expect(game.result()).toBe('Player 2 won 🎉');
      });
    });

    describe('When both players choose the same action', () => {
      it('Should say that they drew', () => {
        const game = new Game(actionSpec);
        game.play('rock', 'rock');

        expect(game.result()).toBe('It was a draw 🤷🏼‍♂️');
      });
    });
  });
});
