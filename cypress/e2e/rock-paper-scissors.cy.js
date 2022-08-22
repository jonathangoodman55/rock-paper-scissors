describe('When user loads the page', () => {
  it('Displays the traditional game actions', () => {
    cy.visit('http://localhost:8080');
    cy.get('h1').should(
      'contain',
      'Rock Paper Scissors'
    )
    cy.get('section#play').get('h2').should('contain', "Player actions");
    cy
      .get('ul#player-actions')
      .get('button')
      .contains('Rock')
      .should('exist');
    cy
      .get('ul#player-actions')
      .get('button')
      .contains('Paper')
      .should('exist');
    cy
      .get('ul#player-actions')
      .get('button')
      .contains('Scissors')
      .should('exist');
  });

  it('Displays the option to play computer vs computer', () => {
    cy.visit('http://localhost:8080');
    cy.get('section#play').get('h2').should('contain', "Other actions");
    cy
      .get('ul#player-actions')
      .get('button')
      .contains('Computer vs Computer')
      .should('exist')     
  })
});

describe('When user chooses to play computer vs computer', () => {
  it('Should display the result and player summarys to the user', () => {
    cy.visit('http://localhost:8080');

    cy
      .get('ul#player-actions')
      .get('button')
      .contains('Computer vs Computer')
      .click();

    cy
      .get('#play')
      .should('not.exist');

    cy
      .get('#result')
      .get('p#winner')
      .invoke('text')
      .should('match', /Computer 1 won 🎉|Computer 2 won 🎉|It was a draw 🤷🏼‍♂️/)

    cy
      .get('#result')
      .get('p#player-1-summary')
      .invoke('text')
      .should('match', /Computer 1 played/)

    cy
      .get('#result')
      .get('p#player-2-summary')
      .invoke('text')
      .should('match', /Computer 2 played/)
  });
});

describe('When user chooses to play aginst the computer', () => {
  describe('When user selects Rock', () => {
    it('Should display the result and player summarys to the user', () => {
      cy.visit('http://localhost:8080');

      cy
        .get('ul#player-actions')
        .get('button')
        .contains('Rock')
        .click();

      cy
        .get('#result')
        .get('p#winner')
        .invoke('text')
        .should('match', /You won 🎉|Computer won 🎉|It was a draw 🤷🏼‍♂️/)

      cy
        .get('#result')
        .get('p#player-1-summary')
        .invoke('text')
        .should('match', /You played Rock 👊🏽/)

      cy
        .get('#result')
        .get('p#player-2-summary')
        .invoke('text')
        .should('match', /Computer played/)
    });
  })
});

describe('When user plays a game and wants to restart', () => {
  it('Should take the user to a new instance of the game ', () => {
    cy.visit('http://localhost:8080');

    cy
      .get('ul#player-actions')
      .get('button')
      .contains('Rock')
      .click();

    cy
      .get('button')
      .contains('Restart')
      .click();
    
    cy.get('h1').should(
      'contain',
      'Rock Paper Scissors'
    )

    cy.get('section#play').get('h2').should('contain', "Player actions");

    cy
      .get('ul#player-actions')
      .get('button')
      .contains('Rock')
      .should('exist');

    cy
      .get('ul#player-actions')
      .get('button')
      .contains('Paper')
      .should('exist');

    cy
      .get('ul#player-actions')
      .get('button')
      .contains('Scissors')
      .should('exist');

    cy.get('section#play').get('h2').should('contain', "Other actions");
    
    cy
      .get('ul#player-actions')
      .get('button')
      .contains('Computer vs Computer')
      .should('exist');

    cy
      .get('#result')
      .should('not.exist')
  })
});

