describe('Count Live Demo', () => {
  before(() => {
    cy.visit('/')
    cy.ErrorWindow()
    cy.authUser()
  })
  it('Gets, types and asserts', () => {
    let value
    cy.wait(15000)
    cy.get('#tradingTerminalIframe', { timeout: 10 * 15000 }).should("be.visible")
    cy.get('#tradingTerminalIframe', { timeout: 10 * 1000 }).its('0.contentDocument').its('body').then(cy.wrap).find('.gwt-Button.button.button-sell ', { timeout: 10 * 10000 }).should("be.visible")
    cy.get(".index-module_live_button__6PiIa", { timeout: 25000 }).then(($test) => { cy.wrap($test).trigger('mouseover') })
    cy.get(".index-module_accounts_list__C0-4d").eq(1).then(($value) => {
      cy.wrap($value).invoke("text").then(($el) => {
        value = $el.slice(0,17)
        cy.get(".index-module_accounts_list__C0-4d").eq(1).click({ force: true, timeout: 15000 })
        cy.get(".index-module_use_account__QRHwv",{ timeout: 10 * 15000 }).contains(value).should("be.visible")
      })
    })
  })
})