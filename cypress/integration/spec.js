describe('page', () => {
  before(() => {
    cy.visit('https://example.cypress.io/commands/querying');
  });

  it('does not work with `should`', () => {
    cy.get('.query-list')
    .within(() => {
      cy.get('li.first');
    })
    // `should` should run assertion against '.query-list'.
    // Instead runs against 'li.first'
    .should('be.visible')
    // `get` should get '#query-btn'
    // Instead tries to get 'li.first #query-btn'
    .get('#query-btn');
  });

  it('works without should', () => {
    cy.get('.query-list')
    .within(() => {
      cy.get('li.first');
    })
    .get('#query-btn');
  });

  it('`within` yields `null`', () => {
    cy.get('.query-list')
    .within(() => {
      cy.log('inside the `within`');
    })
    // Assertion should run against '.query-list' subject
    .should('be.visible')
    .get('#query-btn');
  });
});
