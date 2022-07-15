describe('Transactions, history', () => {
  before(() => {
    cy.visit('/')
    cy.ErrorWindow()
    cy.authUser()
    cy.wait(10000)
  })

  it('Add_Funds_Button', () => {
   // cy.intercept('/api/v1/transaction/history', { timeout: 25000 }).as('history') //выскакивает Unexpected Error
    cy.get('.index-module_header__EyXvQ').within(()=>{
      cy.get('.index-module_green_button__cGlB1').contains('ADD FUNDS', { timeout: 30000}).click() })  //нажать Add Funds
    //cy.wait('@history').its('response.statusCode').should('eq', 200) //выскакивает Unexpected Error
    cy.get('.account-select-module_coin__bhIw7', {timeout: 30000}).click({ force: true }).then(()=>{ // открыть список аккаунтов
      cy.get('.account-select-module_choose_account__0AKb1').contains('BTC_ua201535637_3', {timeout: 30000}).click() //выбрать нужный аккаунт
    })
    cy.get("input", {timeout: 30000}).type('0.001', {timeout: 30000}).then(()=>{ // ввод размера пополнения счета
    cy.get('.dep-withd-form_transfer_button__2hkRU').contains('Make a Transfer', {timeout: 30000}).click()
  }).then(()=>{
    cy.get('.button-module_button__prUGg', {timeout: 30000}).contains('Go Trade', {timeout: 30000 }).click() // нажать Go Trade
  })})
 
  it('Add_Funds_Element', () => {
    cy.get('.index-module_header__EyXvQ').then(()=>{
      cy.get(".index-module_menu_list__-KvBF", { timeout: 25000 }).eq(1).then(($man) => { cy.wrap($man).trigger('mouseover') })
    })
    cy.get('.index-module_sub_menu_list__schsv').eq(3).click({ force: true }) //Add Funds
    cy.get('.account-select-module_coin__bhIw7', {timeout: 30000}).click({ force: true }).then(()=>{ // открыть список аккаунтов
      cy.get('.account-select-module_choose_account__0AKb1').contains('BTC_ua201535637_3', {timeout: 30000}).click() //выбрать нужный аккаунт
    })
    cy.get("input", {timeout: 30000}).type('0.001', {timeout: 30000}).then(()=>{ // ввод размера пополнения счета
    cy.get('.dep-withd-form_transfer_button__2hkRU').contains('Make a Transfer', {timeout: 30000}).click()
  }).then(()=>{
    cy.get('.button-module_button__prUGg', {timeout: 30000}).contains('Go Trade', {timeout: 30000 }).click() // нажать Go Trade
  })})

  it('Payments_History_1', () => {
    cy.get('.index-module_header__EyXvQ').then(()=>{
      cy.get(".index-module_menu_list__-KvBF", { timeout: 25000 }).eq(1).then(($man) => { cy.wrap($man).trigger('mouseover') })
    })
    cy.get('.index-module_sub_menu_list__schsv').eq(5).contains('Payments History').click({ force: true }) //Payments History
    cy.get(".payment-history_filter_element__2a-Ys", { timeout: 25000 }).eq(0).then(($acc) => { cy.wrap($acc).trigger('mouseover') })
    cy.get('.payment-history_filter_sub_menu__3-GCE').contains('BTC_ua201535637_3', { timeout: 25000 }).click({ force: true }) //выбор счета
    cy.get(".payment-history_filter_element__2a-Ys", { timeout: 25000 }).eq(1).then(($period) => { cy.wrap($period).trigger('mouseover') })
    cy.get('.payment-history_filter_sub_menu__3-GCE').contains('This month', { timeout: 25000 }).click({ force: true }) //выбор периода
    cy.get(".payment-history_filter_element__2a-Ys", { timeout: 25000 }).eq(2).then(($dir) => { cy.wrap($dir).trigger('mouseover') })
    cy.get('.payment-history_filter_sub_menu__3-GCE').contains('IN', { timeout: 25000 }).click({ force: true }) //выбор Direction
     cy.get(".payment-history_filter_element__2a-Ys", { timeout: 25000 }).eq(3).then(($sta) => { cy.wrap($sta).trigger('mouseover') })
    cy.get('.payment-history_filter_sub_menu__3-GCE').contains('Approved', { timeout: 25000 }).click({ force: true }) //выбор Approved

    cy.get('.payment-history_filter_button_apply__3wrQu', { timeout: 25000 }).click().then(()=>{ //нажать галочку
    cy.get('.trans-table-module_transaction_table__kF-Ju tbody').eq(0).within(()=>{
      cy.get('.trans-table-module_info_table__UB33q').each(($value)=>{
        cy.get($value).children("td").eq(3).contains('BTC_ua201535637_3')
        cy.get($value).children("td").eq(5).contains('approved')
        cy.get($value).children("td").children(".trans-table-module_direction__KO403").contains('IN')
      })
    })
  })
  cy.get('.payment-history_close_block__1fVvk').click()
  })

  it('Payments_History_2', () => {
    cy.get('.index-module_header__EyXvQ').then(()=>{
      cy.get(".index-module_menu_list__-KvBF", { timeout: 25000 }).eq(1).then(($man) => { cy.wrap($man).trigger('mouseover') })
    })
    cy.get('.index-module_sub_menu_list__schsv').eq(5).contains('Payments History').click({ force: true }) //Payments History
    cy.get(".payment-history_filter_element__2a-Ys", { timeout: 25000 }).eq(0).then(($acc) => { cy.wrap($acc).trigger('mouseover') })
    cy.get('.payment-history_filter_sub_menu__3-GCE').contains('BTC_ua201535637_6', { timeout: 25000 }).click({ force: true }) //выбор счета
    cy.get(".payment-history_filter_element__2a-Ys", { timeout: 25000 }).eq(1).then(($period) => { cy.wrap($period).trigger('mouseover') })
    cy.get('.payment-history_filter_sub_menu__3-GCE').contains('All', { timeout: 25000 }).click({ force: true }) //выбор периода
    cy.get(".payment-history_filter_element__2a-Ys", { timeout: 25000 }).eq(2).then(($dir) => { cy.wrap($dir).trigger('mouseover') })
    cy.get('.payment-history_filter_sub_menu__3-GCE').contains('IN', { timeout: 25000 }).click({ force: true }) //выбор Direction
     cy.get(".payment-history_filter_element__2a-Ys", { timeout: 25000 }).eq(3).then(($sta) => { cy.wrap($sta).trigger('mouseover') })
    cy.get('.payment-history_filter_sub_menu__3-GCE').contains('Pending', { timeout: 25000 }).click({ force: true }) //выбор Approved

    cy.get('.payment-history_filter_button_apply__3wrQu', { timeout: 25000 }).click().then(()=>{ //нажать галочку
      cy.get('.trans-table-module_transaction_table__kF-Ju tbody').eq(0).within(()=>{
        cy.get('.trans-table-module_info_table__UB33q').each(($value)=>{
          cy.get($value).children("td").eq(3).contains('BTC_ua201535637_6')
          cy.get($value).children("td").eq(5).contains('pending')
          cy.get($value).children("td").children(".trans-table-module_direction__KO403").contains('IN')
        })
  })})
  cy.get('.payment-history_close_block__1fVvk').click()
})
    

  it('Payments_History_3', () => {
    cy.get('.index-module_header__EyXvQ').then(()=>{
      cy.get(".index-module_menu_list__-KvBF", { timeout: 25000 }).eq(1).then(($man) => { cy.wrap($man).trigger('mouseover') })
    })
    cy.get('.index-module_sub_menu_list__schsv').eq(5).contains('Payments History').click({ force: true }) //Payments History
    cy.get(".payment-history_filter_element__2a-Ys", { timeout: 25000 }).eq(0).then(($acc) => { cy.wrap($acc).trigger('mouseover') })
    cy.get('.payment-history_filter_sub_menu__3-GCE').contains('BTC_ua201535637_3', { timeout: 25000 }).click({ force: true }) //выбор счета
    cy.get(".payment-history_filter_element__2a-Ys", { timeout: 25000 }).eq(1).then(($period) => { cy.wrap($period).trigger('mouseover') })
    cy.get('.payment-history_filter_sub_menu__3-GCE').contains('All', { timeout: 25000 }).click({ force: true }) //выбор периода
    cy.get(".payment-history_filter_element__2a-Ys", { timeout: 25000 }).eq(2).then(($dir) => { cy.wrap($dir).trigger('mouseover') })
    cy.get('.payment-history_filter_sub_menu__3-GCE').contains('OUT', { timeout: 25000 }).click({ force: true }) //выбор Direction
     cy.get(".payment-history_filter_element__2a-Ys", { timeout: 25000 }).eq(3).then(($sta) => { cy.wrap($sta).trigger('mouseover') })
    cy.get('.payment-history_filter_sub_menu__3-GCE').contains('Rejected', { timeout: 25000 }).click({ force: true }) //выбор Approved

    cy.get('.payment-history_filter_button_apply__3wrQu', { timeout: 25000 }).click().then(()=>{ //нажать галочку
      cy.get('.trans-table-module_transaction_table__kF-Ju tbody').eq(0).within(()=>{
        cy.get('.trans-table-module_info_table__UB33q').each(($value)=>{
          cy.get($value).children("td").eq(3).contains('BTC_ua201535637_3')
          cy.get($value).children("td").eq(5).contains('rejected')
          cy.get($value).children("td").children(".trans-table-module_direction__KO403").contains('OUT')
        })
  })}) 
  cy.get('.payment-history_close_block__1fVvk').click()
})

  it('Percent_Withdrawal_Funds', () => {
    cy.get('.index-module_header__EyXvQ').then(()=>{
      cy.get(".index-module_menu_list__-KvBF", { timeout: 25000 }).eq(1).then(($man) => { cy.wrap($man).trigger('mouseover') })
    })   //наведение мыши на список Manage Funds
    cy.get('.index-module_sub_menu_list__schsv', { timeout: 25000 }).eq(4).click({ force: true })   //нажать withdrawal Funds
    cy.get(' div.interest_interest_block__TF0kN > div:nth-child(4)', { timeout: 25000 }).click() // нажать 100%
    let balance = 0;
    cy.get("[name='actionAmount']").invoke('attr', 'value').should('not.contain', ' 0 ').then((text) => {
      balance = text;
      const balance_75 = (balance * 0.75);
      cy.get('.interest_amount_percent__1wXTX').contains("75%").click();//поиск элемента в котором  значением 75%
      cy.wait(3000)
      cy.get("[name='actionAmount']").should('have.value', (parseInt(balance_75 * 100000000)) / 100000000)//.then((text) => {
      balance = text;//новое значение после клика на 75%
      cy.log(balance)
      cy.log(balance_75)

      const balance_50 = (balance * 0.5);
      cy.get('.interest_amount_percent__1wXTX').contains("50%").click();//поиск элемента в котором  значением 50%
      cy.wait(3000)
      cy.get("[name='actionAmount']").should('have.value', (parseInt(balance_50 * 100000000)) / 100000000)//.then((text) => {
      balance = text;//новое значение после клика на 50%
      cy.log(balance)
      cy.log(balance_50)

      const balance_25 = (balance * 0.25);
      cy.get('.interest_amount_percent__1wXTX').contains("25%").click();//поиск элемента в котором  значением 25%
      cy.wait(3000)
      cy.get("[name='actionAmount']").should('have.value', (parseInt(balance_25 * 100000000)) / 100000000)//.then((text) => {
      balance = text;//новое значение после клика на 25%
      cy.log(balance)
      cy.log(balance_25)
    })
    console.error(balance)
    cy.get('.withdrawal_close_block__YSF8g').click()
  })

  it('Withdrawal_Funds', () => {
    cy.get('.index-module_header__EyXvQ').then(()=>{
      cy.get(".index-module_menu_list__-KvBF", { timeout: 25000 }).eq(1).then(($man) => { cy.wrap($man).trigger('mouseover') })
    })   //наведение мыши на список Manage Funds
    cy.get('.index-module_sub_menu_list__schsv', { timeout: 25000 }).eq(4).click({ force: true })   //нажать withdrawal Funds
    cy.get("input", { timeout: 25000 }).type('0.001', { timeout: 25000 })  // ввод размера пополнения счета
    cy.get('.withdrawal_choose_font__2ieQ1').within(()=>{
      cy.get('.dep-withd-form_transfer_button__2hkRU').contains('Make a Transfer').click({force: true})
  }).then(()=>{
  cy.get('.success_account_font__vqLn6', { timeout: 25000 }).then(()=>{
    cy.get('.button-module_button__prUGg').click() // нажать крестик
  })})
    // cy.get("#__next > header > nav > ul > li:nth-child(2)", { timeout: 25000 }).trigger('mouseover', { timeout: 25000 })  //наведение мыши на список Manage Funds
    // cy.get('#__next > header > nav > ul > li:nth-child(2) > ul > li:nth-child(2) > div', { timeout: 25000 }).click({ force: true })   //нажать withdrawal Funds
    // cy.get('#__next > div.pop-up-login_background__HVI0K > div.recent-transactions_transaction_block__1FqbK > table > tbody > tr:nth-child(1) > td:nth-child(2)', { timeout: 25000 }).should('exist', { timeout: 25000 }) //проверить наличие даты транзакции
    // cy.get('#__next > div.pop-up-login_background__HVI0K > div.recent-transactions_transaction_block__1FqbK > table > tbody > tr:nth-child(1) > td:nth-child(6)', { timeout: 25000 }).should('exist', { timeout: 25000 }) //проверить наличие статуса approved
    // cy.get('#__next > div.pop-up-login_background__HVI0K > div.recent-transactions_transaction_block__1FqbK > div.recent-transactions_all_transactions__2dOdt', { timeout: 25000 }).click({force: true})   //нажать see all transactions
    // cy.get('#__next > div.pop-up-login_background__HVI0K > div.payment-history_transaction_block__3nQxT > div.payment-history_caption__1Z4-p', { timeout: 25000 }).should('exist', { timeout: 25000 }) //проверить наличие payment history
  })
})