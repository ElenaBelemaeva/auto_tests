describe('Landing', () => {
  before(() => {
    cy.visit('/')
    cy.clearCookies()
    cy.ErrorWindow()
  })

  it('All_Buttons_Footer', () => {
    cy.get('.footer_info__3dxcq > a', { timeout: 25000 }).eq(0).click()  //Terms and Conditions
    
    cy.get('.footer_info__3dxcq > a', { timeout: 25000 }).eq(1).click()  //Privacy Notice
    cy.get('.footer_info__3dxcq > a', { timeout: 25000 }).eq(2).click()  //Risk Disclosure Statement
    cy.get('.footer_info__3dxcq > a', { timeout: 25000 }).eq(3).click() //Knowledge Base
    cy.get('.footer_info__3dxcq > a', { timeout: 25000 }).eq(4).click() //Supported Countries
    cy.get('.footer_info__3dxcq > a', { timeout: 25000 }).eq(5).click() //Fees
    cy.get('.footer_telegram_block__1KL8v', { timeout: 25000 }).eq(0).click()  //ссылка на телеграм на английском языке
    cy.get('.footer_telegram_block__1KL8v', { timeout: 25000 }).eq(1).click() //ссылка на телеграм на русском языке
  })

  it('All_Buttons_Header', () => {
    cy.intercept('POST','/api/v1/broker/tracking', { timeout: 25000 }).as('tracking')
    //cy.wait('@tracking').its('response.statusCode').should('eq', 200) 
    cy.get('.nav-dropdown_wrapper__19pBU', { timeout: 25000 }).eq(0).trigger('mouseover', { timeout: 25000 }).then(() => { 
    cy.get('.nav-list_product_list__I-AjQ').within(()=> {
      cy.get('.nav-product-item_icon__AhA4O').eq(0).click()
      //  Добавить оригин проверку на другой странице
    })
    }) // переход на Spot Trading
    cy.get('.nav-list_nav_item__1mDGH >a', { timeout: 25000 }).eq(0).click().then(() => {
      cy.get('.crypto-switcher_active__3Ay7J', { timeout: 25000 }).should('be.visible')
    })  //открываем Fees
    cy.get('.nav-dropdown_wrapper__19pBU', { timeout: 25000 }).eq(1).trigger('mouseover', { timeout: 25000 }).then(() => { 
      cy.get('.nav-list_nav_item_menu__eBJby').within(()=> { //открываем Company
        cy.get('.nav-list-item_nav_list_item__text__2ZmzK').eq(0).click()    
    })
    cy.get('.button_button__1YMMW', { timeout: 25000 }).should('be.visible')  //переход на About Us и проверка что там есть Start trading

  })
  cy.get('.nav-list_nav_item__1mDGH >a', { timeout: 25000 }).eq(1).click().then(() => {
    cy.get('.crypto-switcher_active__3Ay7J', { timeout: 25000 }).should('be.visible')
  })  //открываем Markets, проверяем что есть кнопка Cryptocurrencies
  
  cy.get('.nav-dropdown_wrapper__19pBU', { timeout: 25000 }).eq(2).trigger('mouseover', { timeout: 25000 }).then(() => { 
    cy.get('.nav-list_nav_item_menu__eBJby').within(()=> { //открываем Knowledge Base
      cy.get('.nav-list-item_nav_list_item__text__2ZmzK').eq(3).click()
  })
})
cy.contains('Single Candlestick Patterns', { timeout: 25000 })  //переход на Candlestick Patterns  и проверка что там есть Single Candlestick Patterns
  })

  it('All_Company', () => {
    cy.intercept('POST','/api/v1/broker/countries', { timeout: 25000 }).as('countries')
   // cy.wait('@countries').its('response.statusCode').should('eq', 200)

    cy.get('.nav-dropdown_wrapper__19pBU', { timeout: 25000 }).eq(1).trigger('mouseover', { timeout: 25000 }).then(() => { 
      cy.get('.nav-list_nav_item_menu__eBJby').within(()=> { //открываем Company
        cy.get('.nav-list-item_nav_list_item__text__2ZmzK').eq(0).click()    
    })
    cy.get('.button_button__1YMMW', { timeout: 25000 }).should('be.visible')  //переход на About Us и проверка что там есть Start trading
    
    cy.get('.nav-dropdown_wrapper__19pBU', { timeout: 25000 }).eq(1).trigger('mouseover', { timeout: 25000 }).then(() => { 
      cy.get('.nav-list_nav_item_menu__eBJby').within(()=> { //открываем Company
        cy.get('.nav-list-item_nav_list_item__text__2ZmzK').eq(1).click()    
    }) //переход на Blog и здесь должна быть проверка ориджин
  })

  cy.get('.nav-dropdown_wrapper__19pBU', { timeout: 25000 }).eq(1).trigger('mouseover', { timeout: 25000 }).then(() => { 
    cy.get('.nav-list_nav_item_menu__eBJby').within(()=> { //открываем Company
      cy.get('.nav-list-item_nav_list_item__text__2ZmzK').eq(2).click()    
  }) //переход на Legal и здесь проверка на наличие Terms and Conditions
})
cy.get('.legal-page_pdf_list_block__HaYmY').eq(0).should('be.visible')   
     })
    })

  it('All_Knowledge_Base', () => {
    cy.get('.nav-dropdown_wrapper__19pBU', { timeout: 25000 }).eq(2).trigger('mouseover', { timeout: 25000 }).then(() => { 
      cy.get('.nav-list_nav_item_menu__eBJby').within(()=> { //открываем Knowledge Base
        cy.get('.nav-list-item_nav_list_item__text__2ZmzK').eq(3).click() //Candlestick Patterns
    })
    })
    cy.get('.trading-tips_broker_info_section__33UoK').eq(0).should('be.visible') //проверка наличия блока  
    cy.get('.nav-dropdown_wrapper__19pBU', { timeout: 25000 }).eq(2).trigger('mouseover', { timeout: 25000 }).then(() => { 
      cy.get('.nav-list_nav_item_menu__eBJby').within(()=> { //открываем Knowledge Base
        cy.get('.nav-list-item_nav_list_item__text__2ZmzK').eq(4).click() //Chart Formations
    })
    })
    cy.get('.four-content_figures_info_section__VmxpY').eq(0).should('be.visible') //проверка наличия блока
    cy.get('.nav-dropdown_wrapper__19pBU', { timeout: 25000 }).eq(2).trigger('mouseover', { timeout: 25000 }).then(() => { 
      cy.get('.nav-list_nav_item_menu__eBJby').within(()=> { //открываем Knowledge Base
        cy.get('.nav-list-item_nav_list_item__text__2ZmzK').eq(5).click() //Knowledge Base еще раз открываем
    })
    })
    //проверка ориджин должна быть
    cy.get('#__next > header > div > div > div.main-header_main_header__content__2bx_x > nav > li:nth-child(5) > ul > li:nth-child(3) > span', { timeout: 25000 }).click()   // Knowledge Base
    })

  it('All_products', () => {
    cy.get('.nav-dropdown_wrapper__19pBU', { timeout: 25000 }).eq(0).trigger('mouseover', { timeout: 25000 }).then(() => { 
      cy.get('.nav-list_nav_item_menu__eBJby').then(()=> { //открываем Products
        cy.get('.nav-product-item_title__3oWkR').each(($el)=>{
          cy.get($el, { timeout: 25000 }).click()})
       }) //открываем Spot Trading добавить ориджин
    })
    cy.get('#__next > header > div > div > div.main-header_main_header__content__2bx_x > div > div.main-header_logo_wrapper__J_Dgi > img').click()
  })
    it('Arrow_Testimonials', () => { 
      cy.get('.slider_slider_btn__31rdc', { timeout: 25000 }).eq(3).click() //стрелка влево 
      cy.get('.slider_slider_btn__31rdc', { timeout: 25000 }).eq(3).click() //стрелка влево 
      cy.get('.slider_slider_btn__31rdc', { timeout: 25000 }).eq(2).dblclick() //стрелка вправо 
    })

  it('Burger_Menu', () => {
    cy.viewport(1090, 1050)
      cy.get('.main-header_btn_menu__1Hiya').click()
      cy.get('.nav-dropdown_container__3B7pr').eq(0).should("be.visible").contains('Products').click().then(()=>{
      cy.get('.nav-list_product_item__1UINZ').eq(0).within(()=>{
      cy.get('.nav-product-item_top__2uwAH').eq(0).should('be.visible').contains('Spot Trading')
      cy.get('.nav-product-item_top__2uwAH').eq(1).should('be.visible').contains('Margin Trading')
      cy.get('.nav-product-item_top__2uwAH').eq(2).should('be.visible').contains('Mobile App')
      cy.get('.nav-product-item_top__2uwAH').eq(3).should('be.visible').contains('Trading API')
      })
      cy.get('.nav-list_product_item__1UINZ').eq(1).within(()=>{
      cy.get('.nav-product-item_top__2uwAH').eq(0).should('be.visible').contains('Instant Buy')
      cy.get('.nav-product-item_top__2uwAH').eq(1).should('be.visible').contains('Earn')
      cy.get('.nav-product-item_top__2uwAH').eq(2).should('be.visible').contains('Loan')
      cy.get('.nav-product-item_top__2uwAH').eq(3).should('be.visible').contains('Wallet')
      cy.get('.nav-product-item_top__2uwAH').eq(5).should('be.visible').contains('Debit Card')
    })
      cy.get('.nav-list_product_item__1UINZ').eq(2).within(()=>{
      cy.get('.nav-product-item_top__2uwAH').eq(0).should('be.visible').contains('Prime')
      cy.get('.nav-product-item_top__2uwAH').eq(1).should('be.visible').contains('Direct')
      })
    })
      cy.get('.nav-dropdown_container__3B7pr').eq(0).click().then(()=>{
        cy.get('.nav-list_nav_item__1mDGH').eq(1).should('be.visible').contains('Fees')
        cy.get('.nav-list_nav_item__1mDGH').eq(4).should('be.visible').contains('Markets')
      })
  
      cy.get('.nav-dropdown_container__3B7pr').eq(1).should('be.visible').contains('Company').click().then(()=>{
        cy.get('.nav-list-item_nav_list_item__3XkVO').eq(0).should('be.visible').contains('About Us')
        cy.get('.nav-list-item_nav_list_item__3XkVO').eq(1).should('be.visible').contains('Blog')
        cy.get('.nav-list-item_nav_list_item__3XkVO').eq(2).should('be.visible').contains('Legal')
      })
      cy.get('.nav-dropdown_container__3B7pr').eq(1).click().then(()=>{
        cy.get('.nav-dropdown_container__3B7pr').eq(2).should('be.visible').contains('Knowledge Base').click().then(()=>{
        cy.get('.nav-list-item_nav_list_item__3XkVO').eq(3).should('be.visible').contains('Candlestick Patterns')
        cy.get('.nav-list-item_nav_list_item__3XkVO').eq(4).should('be.visible').contains('Chart Formations')
        cy.get('.nav-list-item_nav_list_item__3XkVO').eq(5).should('be.visible').contains('Knowledge Base')
        })
        cy.get('.nav-dropdown_container__3B7pr').eq(2).click()
      })
      cy.get('.nav-dropdown_container__3B7pr').eq(3).should('be.visible').contains('Language').click().then(()=>{
        cy.get('.language-item_main__1IrQN').eq(0).should('be.visible').contains('English')
        cy.get('.language-item_main__1IrQN').eq(1).should('be.visible').contains('Русский')
        })
      cy.get('.nav-dropdown_container__3B7pr').eq(3).click()
      /* ==== Generated with Cypress Studio ==== */
      cy.get('.main-header_btn_menu__1Hiya > :nth-child(1) > div > .injected-svg > path').click();
      /* ==== End Cypress Studio ==== */
  })

    it('Button_Open_Account', () => {
     cy.get('.button_small__2NxTH').click().then(() => { 
      cy.get('.button_button__1YMMW', { timeout: 25000 }).eq(0).should('be.visible') // есть кнопка  Sign In и Register
      cy.get('.pop-up-auth_close_block__1R50r').click({ force: true })
    }) 
    })
    
    it('Button_Try_Demo', () => {
    cy.get('.button_button__1YMMW', { timeout: 25000 }).eq(2).click() // нажатие на кнопку Try Demo Account
    cy.get('.auth-menu_functional_block__7K6f7', { timeout: 25000 }).should('exist', { timeout: 25000 }) // проверка наличия кнопки help
    cy.get('.broker-logo_logo__2CkwH').click()
  })

  it('Button_FAQ', () => {
    cy.get('.basic-faq_accordion_block__2NH-w').each(($el)=>{
      cy.get($el).children('.basic-faq_header_block__1uKuc').click()
      cy.get($el).children(".basic-faq_accordion_content__RVipt").should("be.visible")
    })
  })

  it('Joan_Traders_Like_You', () => {
    cy.get('.button_button__1YMMW', { timeout: 25000 }).eq(3).click(()=>{ // нажатие на кнопку Join traders like you
    cy.get('#sign_up_start_individual', { timeout: 25000 }).should('exist', { timeout: 25000 }) // есть кнопка  Create your accountant
  })
  cy.visit('/')
})
it('Language', () => {
  cy.get('.nav-dropdown_wrapper__19pBU', { timeout: 25000 }).eq(3).trigger('mouseover', { timeout: 25000 }).then(() => { 
    cy.get('.language-item_language_item__title__1oKHL').eq(1).click().then(() => { 
      cy.wait(500)
      cy.get('.main-header_sign__2Cj4C',{ timeout: 25000 }).contains('Логин',{ timeout: 25000 }).should('be.visible')
    })
    cy.get('.nav-dropdown_wrapper__19pBU', { timeout: 25000 }).eq(3).trigger('mouseover', { timeout: 25000 }).then(() => { 
    cy.get('.language-item_language_item__title__1oKHL').eq(0).click()})
  })
})
 
    it('Pairs_Button_Live', () => { 
      cy.get('.table_button_live__2taRi').each(($el)=>{
      cy.get($el, { timeout: 25000 }).click()
      cy.get('.pop-up-auth_button_block__2556-').within(()=>{
      cy.get(".button_button__1YMMW ").eq(0).contains('Sign In').should('be.visible')
      cy.get(".button_button__1YMMW ").eq(1).contains('Register').should('be.visible')})
      cy.get(".pop-up-auth_close_block__1R50r").click()
      })
    })

    it.skip('Pairs_Buttons', () => {
      // cy.get('.table_link_item__3Xzss').each(($el)=>{
      //   cy.get($el, { timeout: 25000 }).click()
      //   cy.get('.terminal-view_terminal_section__1hPSJ').within(()=>{
      //   cy.get('.button_button__1YMMW').eq(0).contains('Get Started').should('be.visible')
      //   })
      //   cy.get('.main-header_logo__3q2jR').click()
      // }) 
      cy.get('.false > div:nth-child(2) > div.table_body_item__4MwT5.table_link_item__3Xzss', { timeout: 25000 }).click()//нажатие на пару BTC/USD
      cy.url().should('include', '/pair/btc-usd', { timeout: 25000 })
      cy.visit('/', { timeout: 25000 })
      cy.get('.false > div:nth-child(3) > div.table_body_item__4MwT5.table_link_item__3Xzss', { timeout: 25000 }).click()//нажатие на пару BTC/EUR
      cy.url().should('include', '/pair/bttc-usd', { timeout: 25000 })
      cy.visit('/', { timeout: 25000 })
      cy.get('.false > div:nth-child(4) > div.table_body_item__4MwT5.table_link_item__3Xzss', { timeout: 25000 }).click()//нажатие на пару ETH/USD
      cy.url().should('include', '/pair/btc-eur', { timeout: 25000 })
      cy.get('#__next > header > div > div > div.main-header_main_header__content__2bx_x > div > div.main-header_logo_wrapper__J_Dgi > img').click()
    })

  it('Register_Button', () => {
    cy.get('.main-header_hidden__3u9N6', { timeout: 25000 }).within(()=>{// нажатие на кнопку Register
    cy.get('.main-header_register__3-AKp').click()
      // cy.intercept('POST','/api/v1/oauth', { timeout: 25000 }).as('oauth')
    // cy.wait('@oauth').its('response.statusCode').should('eq', 200)
  })
  cy.get('#sign_up_start_individual', { timeout: 25000 }).contains('Create your account').should('be.visible') // есть кнопка  Create your account
  cy.visit('/')
})

  it('Start_Trading', () => {
    cy.get('.industry_get_started_button__3HR00').click() // нажатие на кнопку Start trading
      cy.get('.pop-up-auth_button_block__2556-').within(()=>{
      cy.get(".button_button__1YMMW ").eq(0).contains('Sign In').should('be.visible') // есть кнопка  Sign In и Register
      cy.get(".button_button__1YMMW ").eq(1).contains('Register').should('be.visible')})
      cy.get(".pop-up-auth_close_block__1R50r").click()
  })

  it('View_All_Markets', () => {
    cy.get('.table_bottom_block__3aM8K').within(()=>{
    cy.get('.table_button_try_demo__12mRQ', { timeout: 25000 }).click()//нажатие на кнопку  View all markets
    })
    cy.url().should('include', '/markets', { timeout: 25000 })
    cy.get('.table_pairs_markets__23riY').within(()=>{
      cy.get('.table_button_try_demo__12mRQ').contains('Try DEMO trading without registration!').should('be.visible')
    })
    cy.get('.main-header_logo__3q2jR').click()
})

})
