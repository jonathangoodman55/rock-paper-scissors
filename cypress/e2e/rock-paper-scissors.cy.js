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
     
  })
})