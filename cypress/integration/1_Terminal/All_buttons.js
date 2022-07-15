describe('All_buttons', () => {
  before(() => {
    cy.visit('/')
    cy.ErrorWindow()
    cy.wait(1000)
    cy.authUser()
    cy.wait(10000)
  })

  it('Metrics', () => {
    cy.get('.index-module_account_block__yJOP-').should('be.visible').within(()=>{
    cy.get('.index-module_info_block__KcMIk').eq(0).should('be.visible', { timeout: 25000 }).contains('Balance') //проверка наличии метрика Баланс
    cy.get('.index-module_info_block__KcMIk').eq(1).should('be.visible', { timeout: 25000 }).contains('Equity') //проверка наличии метрика Equity
    cy.get('.index-module_info_block__KcMIk').eq(2).should('be.visible', { timeout: 25000 }).contains('FPL') //проверка наличии метрика FPL
    cy.get('.index-module_info_block__KcMIk').eq(3).should('be.visible', { timeout: 25000 }).contains('Used Margin') //проверка наличии метрика Used Margin
    cy.get('.index-module_info_block__KcMIk').eq(4).should('be.visible', { timeout: 25000 }).contains('Usable Margin') //проверка наличии метрика Usable Margin
    cy.get('.index-module_info_block__KcMIk').eq(5).should('be.visible', { timeout: 25000 }).contains('Usable Margin %') //проверка наличии метрика Usable Margin%
    cy.get('.index-module_info_block__KcMIk').eq(6).should('be.visible', { timeout: 25000 }).contains('Margin Level %') //проверка наличии метрика Margin Level
  })
  })

  it.skip('Fee_schedule', () => {
    cy.get('.index-module_user_block__BNeOQ').should('be.visible', { timeout: 25000 }).contains('ua201535637').trigger('mousedown', 'topRight', { timeout: 25000 }).then(()=>{  // навести курсор на списко ua...
    cy.get('.index-module_sub_menu_list_user__6HMUV').eq(0).contains('Fee Schedule', { timeout: 25000 }).click({ force: true }).then(()=>{ // нажать Fee Schedule
    cy.get('.crypto-switcher_active__3Ay7J').should('be.visible', { timeout: 25000 }).contains('Cryptocurrencies')
  }) 
    })
    // cy.intercept('POST','/api/v1/broker/fee-schedule', { timeout: 25000 }).as('fee-schedule')
    // cy.wait('@fee-schedule').its('response.statusCode').should('eq', 200)
  })

  it('Help', () => {
    cy.get(".index-module_help_block__0QDmI", { timeout: 25000 }).then(($help) => { cy.wrap($help).trigger('mouseover') })  //наведение мыши на список Help
    cy.get('.index-module_sub_help_element__Ew2mE').eq(0).click({ force: true })
    cy.get('.index-module_sub_help_element__Ew2mE').eq(1).click({ force: true })
    cy.get('.index-module_sub_help_element__Ew2mE').eq(2).click({ force: true })
    cy.get(".index-module_user_block__BNeOQ", { timeout: 25000 }).then(($akk) => { cy.wrap($akk).trigger('mouseover') })  // навести курсор на списко ua...
    cy.get('.index-module_sub_menu_list_user__6HMUV').eq(2).click({ force: true })
  })
  
  it('Language_terminal', () => { 
    cy.get('[data-testid="main-header__lang-menu"]', { timeout: 30000 }).trigger('mouseover', { timeout: 25000 }).then(() =>{   //наведение мыши на язык En
      cy.get('.index-module_sub_menu_list_language__70296', { timeout: 25000 }).eq(1).click({ force: true })
      cy.get('.index-module_header__EyXvQ', { timeout: 25000 }).should('be.visible').contains('Торговля')
      cy.get('[data-testid="main-header__lang-menu"]', { timeout: 30000 }).trigger('mouseover', { timeout: 25000 }) //наведение мыши на язык En
      cy.get('.index-module_sub_menu_list_language__70296', { timeout: 25000 }).eq(0).click({ force: true })
      cy.get('.index-module_header__EyXvQ', { timeout: 25000 }).should('be.visible').contains('Trade')
    }) 
  })

  it('Statements_From_To', () => {
    cy.get('.index-module_user_block__BNeOQ').contains("ua201535637", { timeout: 25000 }).trigger('mouseover', { timeout: 25000 }) //наведение мыши на список действий аккаунта
    cy.get('.index-module_sub_menu_list_user__6HMUV').eq(1).contains('Statements', { timeout: 25000 }).click({ force: true }, { timeout: 25000 }) // открыть Statement
    cy.get('.statements_account_font__CRRPy', { timeout: 25000 }).within(()=>{  //поставить ридиобатон From:
      cy.get('.statements_check_block__2f3fE').eq(1).click()
      cy.get('.statements_calendar_icon_active__1f35z').eq(0).click().then(()=>{ //поставить дату From:
      cy.get('.DayPicker-NavButton.DayPicker-NavButton--prev').eq(0).click({ force: true })
      cy.get('.DayPicker-Day').eq(10).click()
      })
      cy.get('.statements_calendar_icon_active__1f35z').eq(1).click().then(()=>{  //поставить дату To:
        cy.get('.DayPicker-NavButton.DayPicker-NavButton--prev').eq(0).click({ force: true })
        cy.get('.DayPicker-Day').eq(16).click()})
        cy.wait(1000)
    cy.get('.statements_generate_button__3A1iv').should('be.visible').contains('GENERATE').click()
  })
  cy.get('.statements_close_block__15IOl').click({ force: true }) //нажать кнопку закрыть
})

  it('Statements_Period', () => {
    cy.get('.index-module_user_block__BNeOQ').contains("ua201535637", { timeout: 25000 }).trigger('mouseover', { timeout: 25000 }) //наведение мыши на список действий аккаунта
    cy.get('.index-module_sub_menu_list_user__6HMUV').eq(1).contains('Statements', { timeout: 25000 }).click({ force: true }, { timeout: 25000 }) // открыть Statemen
        cy.get('.statements_check_info__1_OQe', {timeout: 25000}).eq(0).trigger('mouseover', { timeout: 25000 }).then(()=>{
        cy.get('.statements_filter_list__39yIf',{ timeout: 25000 }).eq(0).contains('Today').click({ force: true })
        cy.get('.statements_generate_button__3A1iv').should('be.visible').contains('GENERATE').click() })  //нажать кнопку Generate
    cy.get('.statements_close_block__15IOl').click({ force: true }) //нажать кнопку закрыть
  })

  it('Trade_terminal', () => {
    cy.get('.index-module_header__EyXvQ').then(()=>{
      cy.get('.index-module_menu_list__-KvBF', { timeout: 25000 }).eq(0).trigger('mouseover', { force: true }, { timeout: 25000 })
    })
    cy.get('.index-module_sub_menu_list__schsv').eq(0).contains('Margin Trading', { timeout: 25000 }).click({ force: true }, { timeout: 25000 })   // Margin Trading
    cy.get('.index-module_sub_menu_list__schsv').eq(1).contains('Spot Trading', { timeout: 25000 }).click({ force: true }, { timeout: 25000 })  // Spot Trading
    cy.get('.index-module_sub_menu_list__schsv').eq(2).contains('Staking', { timeout: 25000 }).click({ force: true }, { timeout: 25000 })  // Staking
    })
   
  it('Add_New_Account', () => {
    cy.get(".index-module_live_button__6PiIa", { timeout: 25000 }).then(($test) => { cy.wrap($test).trigger('mouseover') }) // навести курсор на выпадающий список Account
    cy.get('.index-module_green_button__hs8Ma').contains('Add new account', { timeout: 25000 }).click({ force: true }, { timeout: 25000 }).then(()=>{   //нажать Add new Account
    cy.get('[data-testid="create-account__choose-button"]', { timeout: 25000 }).click()//открытие списка выбора валюты
    cy.get('.create-account_choose_currency__3p3hQ').each(($el)=>{
    cy.get($el).should('be.visible')
    })
    cy.contains('BTC', { timeout: 25000 }).click({ timeout: 25000 }) })
    cy.get('.create-account_type__3Npmp').each(($ele)=>{
      cy.get($ele).click()
      cy.get($ele).should('be.visible')})
    cy.get('.create-account_close_block__11e6K').click()
  })
  
  it('Sign_Out', () => {
    cy.get(".index-module_user_block__BNeOQ", { timeout: 25000 }).then(($akk) => { cy.wrap($akk).trigger('mouseover') })
    cy.get('[data-testid="header__sign-out"]', { timeout: 25000 }).click({ force: true }, { timeout: 25000 }) // нажать Sign out
  })
})