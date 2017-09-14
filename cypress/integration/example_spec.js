const getItems = () =>
  cy.get('.todo-list li')

it('adds 1 todo', () => {
  const url = 'http://todomvc.com/examples/vanillajs/'
  cy.visit(url)
  getItems()
    .should('have.length', 0)
  cy.get('.new-todo').type('pass this test').type('{enter}')
  getItems()
    .should('have.length', 1)
})
