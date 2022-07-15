describe('Button try free demo', () => {
  it('Gets, types and asserts', () => {
    cy.clearCookies()
    cy.visit('/')
  
    cy.ErrorWindow() 
    cy.get(' div.header-info_try_demo_button__2y8DH', { timeout: 25000 }).click()// нажатие на кнопку Try Free Demo
    cy.intercept('POST','/api/v1/oauth/authorize/demo', { timeout: 25000 }).as('demo')
    cy.wait('@demo').its('response.statusCode').should('eq', 200)
    cy.get('#__next > header > div.auth-menu_functional_block__7K6f7', { timeout: 25000 }).should('exist', { timeout: 25000 }) // проверка наличия кнопки help


  })
})