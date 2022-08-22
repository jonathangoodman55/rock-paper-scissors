import { Game } from '../src/js/Game';

describe('Game', () => {

  describe('With tradional actions', () => {
    const actionSpec = {
      rock: {
        beats: "scissors",
        display: "Rock 👊🏽",
      },
      paper: {
        beats: "rock",
        display: "Paper ✋🏼",
      },
      scissors: {
        beats: "paper",
        display: "Scissors ✌🏾",
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

    describe('When only 1 action provided (user vs computer)', () => {
      it('Should produce a valid result', () => {
        const game = new Game(actionSpec);
        game.play('rock');
        
        expect([
          'It was a draw 🤷🏼‍♂️',
          'Player 1 won 🎉',
          'Player 2 won 🎉'
        ]).toContain(game.result());
      })
    });

    describe('When no user actions provided (computer vs computer)', () => {
      it('Should produce a valid result', () => {
        const game = new Game(actionSpec);
        game.play();
        
        expect([
          'It was a draw 🤷🏼‍♂️',
          'Player 1 won 🎉',
          'Player 2 won 🎉'
        ]).toContain(game.result());
      })
    });

    describe('When game has been played', () => {
      it('Should give a summary of what player 1 played', () => {
        const game = new Game(actionSpec);
        game.play('rock', 'scissors');
        expect(game.player1Summary()).toBe('Player 1 played Rock 👊🏽');
      });

      it('Should give a summary of what player 2 played', () => {
        const game = new Game(actionSpec);
        game.play('rock', 'scissors');
        expect(game.player2Summary()).toBe('Player 2 played Scissors ✌🏾');
      });
    })

    describe('When no name set for players', () => {
      it('Should call player 1 "Player 1', () => {
        const game = new Game(actionSpec);
        game.play('rock', 'scissors');
        expect(game.result()).toContain('Player 1');
        expect(game.player1Summary()).toContain("Player 1");
      });

      it('Should call player 2 "Player 2', () => {
        const game = new Game(actionSpec);
        game.play('scissors', 'rock');
        expect(game.result()).toContain("Player 2");
        expect(game.player2Summary()).toContain("Player 2");
      });
    });

    describe('When name is set for players', () => {
      it('Should call player 1 "You', () => {
        const game = new Game(actionSpec);
        game.setPlayer1Name("You");
        game.play('rock', 'scissors');
        expect(game.result()).toContain('You');
        expect(game.player1Summary()).toContain("You");
      });

      it('Should call player 2 "Computer 2', () => {
        const game = new Game(actionSpec);
        game.setPlayer2Name("Computer 2");
        game.play('scissors', 'rock');
        expect(game.result()).toContain("Computer 2");
        expect(game.player2Summary()).toContain("Computer 2");
      });
    });
  });
});
