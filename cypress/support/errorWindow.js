Cypress.Commands.add('ErrorWindow', () => {
  cy.getCookie("bro-sess").as('broSess').then((broSess) => {
    if (!broSess) {
      cy.get('#__next > header > div > div > div.main-header_main_header__content__2bx_x > div > div.main-header_logo_wrapper__J_Dgi > img').should('exist')
    }
  })
  cy.contains('Unexpected error').should('not.exist')
  cy.contains('Something went wrong').should('not.exist')
  cy.contains('Что-то пошло не так').should('not.exist')
  cy.contains('Please try again').should('not.exist')
})