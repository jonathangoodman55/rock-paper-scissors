import { Game } from '../src/js/Game';

describe('Game', () => {
  describe('When player 1 uses as action that beats player 2', () => {
    it('Should say player 1 wins', () => {
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

      const game = new Game(actionSpec);
      game.play('rock', 'scissors');


      expect(game.result).toBe('Player 1 wins');
    })
  });
});
