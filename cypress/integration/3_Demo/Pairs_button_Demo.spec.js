describe('Pairs button Demo', () => {
  it('Gets, types and asserts', () => {
    cy.clearCookies()
    cy.visit('/')
  
    cy.ErrorWindow() 
    
    cy.get('div.table_body_block__1wjkw:nth-child(2) > div:nth-child(8) > div:nth-child(1) > div:nth-child(1)', { timeout: 25000 }).click()//нажатие на кнопку  Demo рядом с парой BTC/USD

    cy.get('.auth-menu_help_block__zUL2K', { timeout: 25000 }).should('exist', { timeout: 25000 })

    cy.visit('/', { timeout: 25000 })

    cy.get('div.table_body_block__1wjkw:nth-child(3) > div:nth-child(8) > div:nth-child(1) > div:nth-child(1)', { timeout: 25000 }).click()//нажатие на кнопку  Demo рядом с парой BTC/EUR

    cy.get('.auth-menu_help_block__zUL2K', { timeout: 25000 }).should('exist', { timeout: 25000 })

    cy.visit('/', { timeout: 25000 })

    cy.get('div.table_body_block__1wjkw:nth-child(4) > div:nth-child(8) > div:nth-child(1) > div:nth-child(1)', { timeout: 25000 }).click()//нажатие на кнопку  Demo рядом с парой ETH/USD

    cy.get('.auth-menu_help_block__zUL2K', { timeout: 25000 }).should('exist', { timeout: 25000 })

  })
})