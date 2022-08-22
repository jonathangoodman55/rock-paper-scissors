describe('First Glance', () => {
  it('Displays a page with traditional game actions', () => {
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

    cy.get('section#play').get('h2').should('contain', "Other actions");
    cy
      .get('ul#player-actions')
      .get('button')
      .contains('Computer vs Computer')
      .should('exist')     
  })
});

describe('Play computer vs computer game', () => {
  it('Should pick 2 random actions and display the results to the user', () => {
    cy
      .get('ul#player-actions')
      .get('button')
      .contains('Computer vs Computer')
      .click();

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