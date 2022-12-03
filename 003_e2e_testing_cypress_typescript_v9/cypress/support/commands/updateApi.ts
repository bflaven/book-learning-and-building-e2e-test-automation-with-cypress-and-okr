// updateApi.ts
// cy.updateApi({ name, id = 0 })
Cypress.Commands.add('updateApi', (name, id) => {
    cy.log(' -- updateApi function --')
    cy.log(name)
    cy.log(id)
});
// cy.addTaskApi({ title, item = 0, listIndex = 0 })
Cypress.Commands.add('addNewApi', (title, item, listIndex) => {
    cy.log(' -- addNewApi function --')
    cy.log(title)
    cy.log(item)
    cy.log(listIndex)
});


