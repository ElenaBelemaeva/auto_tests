describe('Unverified', () => {
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

    cy.wait(30000)
    
    cy.get('#__next > div.pop-up-login_background__HVI0K > div > div.verification_account_font__1Jx3S > div.verification_line__lcQ_p > div > div.verification_backDemo__l1tDI').contains('Back to demo').click() // Back to Demo
    cy.contains("Manage Funds", { timeout: 25000 }).trigger('mouseover', { timeout: 25000 })   //наведение мыши на список Manage Funds
    cy.contains('Add Funds', { timeout: 25000 }).click({ force: true }, { timeout: 25000 })   //нажать Add Funds
    cy.get('#__next > div.pop-up-login_background__HVI0K > div > div.verification_account_font__1Jx3S > div.verification_line__lcQ_p > div > div.verification_backDemo__l1tDI').contains('Back to demo').click() // Back to Demo
    cy.contains("Manage Funds", { timeout: 25000 }).trigger('mouseover', { timeout: 25000 })   //наведение мыши на список Manage Funds
    cy.contains('Withdraw Funds', { timeout: 25000 }).click({ force: true }, { timeout: 25000 })   //нажать Withdraw Funds
    cy.get('#__next > div.pop-up-login_background__HVI0K > div > div.verification_account_font__1Jx3S > div.verification_line__lcQ_p > div > div.verification_backDemo__l1tDI').contains('Back to demo').click() // Back to Demo

    cy.wait(3000)
    cy.contains("ua201536638_CY", { timeout: 25000 }).trigger('mouseover', { timeout: 25000 }) //наведение мыши на список действий аккаунта
    cy.contains('Statements', { timeout: 25000 }).click({ force: true }, { timeout: 25000 }) // открыть Statement
    cy.wait(2000)
    cy.contains('GENERATE', { timeout: 25000 }).click()//нажать кнопку Generate
    cy.get('#__next > div.pop-up-login_background__HVI0K > div > div.verification_account_font__1Jx3S > div.verification_line__lcQ_p > div > div.verification_backDemo__l1tDI').contains('Back to demo').click() // Back to Demo
    cy.wait(3000)
    cy.get('#__next > div.pop-up-login_background__HVI0K > div > div.statements_close_block__15IOl').click() 
    
    cy.visit('')
    cy.wait(5000)
    cy.get('#main > div > div > div.Layout__fixedContainer___lib-dx-ui-src-components-Layout- > div > div.Scrollable__wrapper___lib-dx-ui-src-components-Scrollable- > div.Scrollable__container___lib-dx-ui-src-components-Scrollable- > div > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(1) > div > div.ElementPlaceholder__body.widgetNew__body > div > div > div.chartArea--header > div > button.gwt-Button.button.button-sell').click({ force: true })  //нажать кнопку SELL
    cy.get('#app_element > section > div > footer > div.popup--buttons > button.button.button-primary.button-button-bid > span').click() //нажать кнопку  Send Order
    cy.get('#app_element > section.popup.popup-confirmation.popup-confirmationMessage.popup-modal.popup-draggable.popup-visible > div > footer > div.popup--buttons > button.button.button-primary > span').click() // нажать кнопку  Confirm
    cy.get('.scrollable--container.messages').should('exist', { timeout: 25000 }) ////проверка наличия блока с сообщениям
    cy.get('.scrollable--container.messages').contains('REJECTED') //проверка наличия сообщения 
    
    cy.get('#main > div > div > div.Layout__fixedContainer___lib-dx-ui-src-components-Layout- > div > div.Scrollable__wrapper___lib-dx-ui-src-components-Scrollable- > div.Scrollable__container___lib-dx-ui-src-components-Scrollable- > div > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(1) > div > div.ElementPlaceholder__body.widgetNew__body > div > div > div.chartArea--header > div > button.gwt-Button.button.button-buy').click({ force: true })  //нажать кнопку BUY
    cy.get('#app_element > section > div > footer > div.popup--buttons > button.button.button-primary.button-button-bid > span').click() //нажать кнопку  Send Order
    cy.get('#app_element > section.popup.popup-confirmation.popup-confirmationMessage.popup-modal.popup-draggable.popup-visible > div > footer > div.popup--buttons > button.button.button-primary > span').click() // нажать кнопку  Confirm
    cy.get('.scrollable--container.messages').should('exist', { timeout: 25000 }) ////проверка наличия блока с сообщениями
    cy.get('.scrollable--container.messages').contains('REJECTED') //проверка наличия сообщения 

  })

})