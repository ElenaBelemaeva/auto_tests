describe('WithoutLive', () => {
    it('Gets, types and asserts', () => {
      cy.clearCookie("bro-sess")
      cy.visit(Cypress.env("BASE_URL_CY"))
    
     //cy.ErrorWindow()
     cy.wait(5500)
      cy.get('#__next > header > div > div.auth-menu_register_block__bW8z- > div.auth-menu_sign__2SHG2').click()
  
        cy.url().should('include', '/auth/login')
  
        cy.get("input[name=email]")
          .type('')
          .should('have.value', '')
        cy.get("input[name=password]")
          .type('')
          .should('have.value', '')
        cy.contains('Sign In').click({ timeout: 25000 })
  
      cy.wait(20000)
      cy.get('#__next > div.pop-up-login_background__HVI0K > div > div.verification_account_font__1Jx3S > div.verification_line__lcQ_p > div > div.verification_backDemo__l1tDI').contains('Back to demo').click() // Back to Demo
      cy.get('#__next > header > div.index-module_functional_block__KBaaZ > div.index-module_green_button__cGlB1').contains('START LIVE TRADING') //наличие кнопки START LIVE TRADING
    })
  
  })