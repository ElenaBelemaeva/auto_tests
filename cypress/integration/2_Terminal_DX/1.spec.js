describe('Terminal', () => {
  before(() => {
    cy.visit("/")
    cy.ErrorWindow()
    cy.authUser()
    cy.get(".index-module_live_button__6PiIa", { timeout: 25000 }).then(($test) => { cy.wrap($test).trigger('mouseover') })// навести курсор на выпадающий список Account
    cy.get(".index-module_accounts_list__C0-4d").eq(0).click({ force: true, timeout: 15000 })
    cy.wait(10000)
  })
  it('allbuttonsSell', () => {
    cy.getIframeBody('#tradingTerminalIframe', { timeout: 10 * 10000 }).within(() => {
      cy.get('.gwt-Button.button.button-sell ', { timeout: 10 * 10000 }).should("be.visible").click()

      cy.get(".popup--window").within(() => {
        cy.get(".checkBox--label").eq(0).click()
        cy.get(".checkBox").eq(1).click()
        cy.get(".checkBox").eq(2).click()
        cy.get(".numericStepper--input >input").eq(0).clear().type(0.02)  //ввести размер лота
        cy.get(".form--fieldset").within(() => {
          cy.get(".form--row").eq(1).within(() => {
            cy.get(".control--wrap").eq(0).click()
          })
        })
      })
      cy.get(".dropDown--list").within(() => { //нажать на список выбора типа ордера
        cy.get(".dropDown--option").contains("Market").click() // выбрать тип ордера
      })
      cy.get(".popup--window").within(() => {
        cy.get(".selectBox-symbol").click()
      })
      cy.get(".scrollable--content").within(() => { //нажимаем на список выбора валютной пары
        cy.get('[value="BTC/EUR"]').click()   //выбираем пару BTC/EUR
      })
      cy.get(".popup--window").within(() => {
        cy.get(".button > span").contains("Send Order").click() //нажимаем кнопку Send order
      })
      cy.get(".popup--window").within(() => {
        cy.get(".button-primary > span").contains("Confirm").click() //нажать Confirm
      }).then(() => {
        cy.get('.ElementPlaceholder__container').eq(4).within(() => {
          cy.get('.scrollable--container.messages').should('be.visible', { timeout: 25000 }) //проверка наличия блока с сообщениями
          cy.get('.message.messages--message.message-trading').eq(0).contains('PLACED') //проверка наличия сообщения 
        })
      })
    })
  })

  it('allbuttonsBuy', () => { //сделала 
    cy.getIframeBody('#tradingTerminalIframe', { timeout: 10 * 10000 }).within(() => {
      cy.get('.gwt-Button.button.button-buy ', { timeout: 10 * 10000 }).should("be.visible").click()
      cy.get(".popup--window").within(() => {
        cy.get(".checkBox--label").eq(0).click()
        cy.get(".checkBox").eq(1).click()
        cy.get(".checkBox").eq(2).click()
        cy.get(".numericStepper--input >input").eq(0).clear().type(0.02)  //ввести размер лота
        cy.get(".form--fieldset").within(() => {
          cy.get(".form--row").eq(1).within(() => {
            cy.get(".control--wrap").eq(0).click()
          })
        })
      })
      cy.get(".dropDown--list").within(() => { //нажать на список выбора типа ордера
        cy.get(".dropDown--option").contains("OCO").click() // выбрать тип ордера
      })
      cy.get(".popup--window").within(() => {
        cy.get(".selectBox-symbol").click()
      })
      cy.get(".scrollable--content").within(() => { //нажимаем на список выбора валютной пары
        cy.get('[value="BTC/USD"]').click()   //выбираем пару BTC/USD
      })
      cy.get(".popup--window").within(() => {
        cy.get(".button > span").contains("Send Order").click({ force: true }) //нажимаем кнопку Send order
      })
      cy.get(".popup--window").within(() => {
        cy.get(".button-primary > span").contains("Confirm").click() //нажать Confirm
      }).then(() => {
        cy.get('.ElementPlaceholder__container').eq(4).within(() => {
          cy.get('.scrollable--container.messages').should('be.visible', { timeout: 25000 }) //проверка наличия блока с сообщениями
          cy.get('.message.messages--message.message-trading').eq(0).contains('PLACED') //проверка наличия сообщения 
        })
      })
    })
  })

  it('Candle bars', () => { //сделала 
    cy.getIframeBody('#tradingTerminalIframe', { timeout: 10 * 10000 }).within(() => {
      cy.get('.chartArea--toolbar').should('be.visible').within(() => {
        cy.get('.selectBox--inner').eq(2).click({ force: true }).then(() => {
          cy.get('[data-icon=icon-bars-chart]').contains('Bar').click({ force: true })
          cy.get('.selectBox--inner').eq(2).click({ force: true })
          cy.get('[data-icon=icon-candles-chart]').contains('Candle').click({ force: true })
          cy.get('.selectBox--inner').eq(2).click({ force: true })
          cy.get('[data-icon=icon-line-chart]').contains('Line').click({ force: true })
        })
      })
    })
  })


  it('chooseChartPeriod', () => { //сделала 
    cy.getIframeBody('#tradingTerminalIframe', { timeout: 10 * 10000 }).within(() => {
      cy.get('.selectBox--inner').eq(4).click() //нажать на Chart периода
      cy.wait(1000)
      cy.get('.dropDown--option-', { timeout: 25000 }).eq(5).click({ force: true }, { timeout: 25000 }) //выбрать нужный Chart
      cy.wait(1000)
      cy.get('.selectBox--inner').eq(4).click().then(() => { //нажать на Chart периода
        cy.get('.dropDown--option-', { timeout: 25000 }).each(($period) => {
          cy.get($period).should('be.visible') // проверить наличие всех временных периодов
        })
      })
    })
  })

  it('Drawing Tools', () => { //сделала
    cy.getIframeBody('#tradingTerminalIframe', { timeout: 10 * 10000 }).within(() => {
      cy.get('.selectBox--inner').eq(8).click({ force: true }).then(() => { // нажать на кнопку drawing tools
        cy.get('.dropDown--list').within(() => {
          cy.get('.dropDown--optionText').should('have.length', 10)
          cy.get('.dropDown--optionText', { timeout: 25000 }).should('be.visible').each(($draw) => {
            cy.get($draw, { timeout: 25000 }).should('be.visible')
          })
        })
      })
    })
  })

  it('chooseFlask', () => { //сделала
    cy.getIframeBody('#tradingTerminalIframe', { timeout: 10 * 10000 }).within(() => {
      cy.get('.button-studies').click({ force: true }).then(() => { // нажать на кнопку c колбой
        cy.get('.popup--buttons').should('be.visible').within(() => {
          cy.get('.button-secondary').contains('Cancel')
        }).then(() => {
          cy.get('.popup--buttons').within(() => {
            cy.get('.button.button-primary', { timeout: 25000 }).contains('Done').click({ force: true })
          })
        })
      })
    })
  })

  it('settingsButton', () => { //сделала
    cy.getIframeBody('#tradingTerminalIframe', { timeout: 10 * 10000 }).within(() => {
      cy.get('.button-setting').click({ force: true }).then(() => { // нажать кнопку с шестеренкой
        cy.get('.tabPanel-primary').should('be.visible').then(() => {
          cy.get('.link-pseudo').eq(0).contains('Appearance')
          cy.get('.link-pseudo').eq(2).contains('Paddings').click({ force: true }).then(() => {
            cy.get('.popup--buttons').should('be.visible').within(() => {
              cy.get('.button.button-primary', { timeout: 25000 }).contains('Ok').click({ force: true })
            })
          })
        })
      })
    })
  })

  it('Pair', () => { //сделала
    cy.getIframeBody('#tradingTerminalIframe', { timeout: 10 * 10000 }).within(() => {
      cy.get('.widgetNew__headerContent', { timeout: 10 * 10000 }).then(() => {//нажимаем на список выбора валютной пары
        cy.get('.selectBox--inner').eq(2).click({ force: true }).then(() => {
          cy.get('.dropDown--option-').eq(1).click({ force: true })
        }) //выбираем пару BTC/EUR
      })
      cy.get('.selectBox--inner').eq(2).click({ force: true }).then(() => {
        cy.get('.dropDown--option-').eq(0).click({ force: true })
      }) //выбираем пару BTC/USD
    })
  })

  it('columns selector Orders', () => { //сделала
    cy.getIframeBody('#tradingTerminalIframe', { timeout: 10 * 10000 }).within(() => {
      cy.get('.widgetGroupControls__switches').within(() => {
        cy.get('.button').eq(2).click({ force: true })//нажимаем на orders
      })
      cy.get('.widgetNew__buttonContextMenu').eq(1).click().then(() => { //нажимаем на burger menu
        cy.get('.contextMenu--item.contextMenu--item-icon', { timeout: 25000 }).click({ force: true })
      }).then(() => { //нажимаем на меню столбцов
        cy.contains('Available Columns', { timeout: 25000 }).should('exist', { timeout: 25000 }).then(() => { //проверить открылось ли окно
          cy.get('.popup--buttons').within(() => {
            cy.get('.button.button-primary.button-button-bid').eq(1).click({ force: true }) //нажимаем Apply
          })
        })
      })
    })
  })

  it('columns selector Position history', () => { //сделала
    cy.getIframeBody('#tradingTerminalIframe', { timeout: 10 * 10000 }).within(() => {
      cy.get('.widgetGroupControls__switches').within(() => {
        cy.get('.button').eq(1).click({ force: true }) //нажимаем на вкладку Position history
      })
      cy.get('.widgetNew__buttonContextMenu').eq(1).click({ force: true }).then(() => { //нажимаем на burger menu
        cy.get('.contextMenu--item.contextMenu--item-icon', { timeout: 25000 }).click({ force: true })
      }).then(() => { //нажимаем на меню столбцов
        cy.contains('Available Columns', { timeout: 25000 }).should('exist', { timeout: 25000 }).then(() => { //проверить открылось ли окно
          cy.get('.popup--buttons').within(() => {
            cy.get('.button.button-primary.button-button-bid').eq(1).click({ force: true }) //нажимаем Apply
          })
        })
      })
    })
  })

  it('Filters Orders', () => { // сделала
    cy.getIframeBody('#tradingTerminalIframe', { timeout: 10 * 10000 }).within(() => {
      cy.get('.widgetGroupControls__switches').within(() => {
        cy.get('.button').eq(2).click({ force: true })
      })
      cy.get('.grid--head').eq(2).click({ force: true }).find('.icon-filter').each(($el) => {
        cy.get($el).click({ force: true }).then(() => { //нажать на выбор фильтра
          cy.get('.filter-description').contains('Filter not applied', { timeout: 25000 })
        })
      })
    })
  })

  it('Orders history', () => { //сделала
    cy.getIframeBody('#tradingTerminalIframe', { timeout: 10 * 10000 }).within(() => {
      cy.get('.widgetGroupControls__switches').within(() => {
        cy.get('.button').eq(3).click({ force: true })
      })
      cy.get('.grid--head').eq(3).click({ force: true }).find('.icon-filter').each(($el) => {
        cy.get($el).click({ force: true }).then(() => { //нажать на выбор фильтра
          cy.get('.filter-description').contains('Filter not applied', { timeout: 25000 })
        })
      })
      cy.get('.widgetNew__buttonContextMenu').eq(1).click().then(() => { //нажимаем на burger menu
        cy.get('.contextMenu--item.contextMenu--item-icon', { timeout: 25000 }).click({ force: true })
      }).then(() => { //нажимаем на меню столбцов
        cy.contains('Available Columns', { timeout: 25000 }).should('exist', { timeout: 25000 }).then(() => { //проверить открылось ли окно
          cy.get('.popup--buttons').within(() => {
            cy.get('.button.button-primary.button-button-bid').eq(1).click({ force: true }) //нажимаем Apply
          })
        })
      })
    })
  })

  it('PositionColumn', () => { //сделала
    cy.getIframeBody('#tradingTerminalIframe', { timeout: 10 * 10000 }).within(() => {
      cy.get('.widgetGroupControls__switches').within(() => {
        cy.get('.button').eq(0).click({ force: true })//нажимаем на position
      })
      cy.get('.grid--head').eq(0).click({ force: true }).find('.icon-filter').each(($el) => {
        cy.get($el).click({ force: true }).then(() => { //нажать на выбор фильтра
          cy.get('.filter-description').contains('Filter not applied', { timeout: 25000 }) //проверить открылось ли окно фильтра
        })
      })
    })
  })
  it('Filters Position history', () => { // сделала
    cy.getIframeBody('#tradingTerminalIframe', { timeout: 10 * 10000 }).within(() => {
      cy.get('.widgetGroupControls__switches').within(() => {
        cy.get('.button').eq(1).click({ force: true })//нажимаем на position history
      })
      cy.get('.grid--head').eq(1).click({ force: true }).find('.icon-filter').each(($el) => {
        cy.get($el).click({ force: true }).then(() => { //нажать на выбор фильтра
          cy.get('.filter-description').contains('Filter not applied', { timeout: 25000 }) //проверить открылось ли окно фильтра
        })
      })
      cy.get('[type="checkbox"]').check({ force: true }).then(() => { //нажать чек-бокс Net Aggregation
        cy.get('.table--row.position.position-open').should('be.visible')
        cy.get('[type="checkbox"]').uncheck({ force: true })  //отжать чек-бокс Net Aggregation
      })
    })
  })


  it('Graphic settings', () => { //сделала
    cy.getIframeBody('#tradingTerminalIframe', { timeout: 10 * 10000 }).within(() => {
      cy.get('.widgetNew__headerActions').eq(0).click().then(() => { //нажимаем на burger menu
        cy.get('.contextMenu-chartSettings').within(() => {
          cy.get('.contextMenu--item-title.contextMenu--item-icon').eq(0).should('be.visible').contains('Appearance')
          cy.get('.contextMenu--item-title.contextMenu--item-icon').eq(1).should('be.visible').contains('Studies')
          cy.get('.contextMenu--item-title.contextMenu--item-icon').eq(2).should('be.visible').contains('Add drawing')
        })
      })
    })
  })



  it('WatchlistWidgets', () => { //сделала
    cy.getIframeBody('#tradingTerminalIframe', { timeout: 10 * 10000 }).within(() => {
      cy.get('.WidgetWatchlist__widgetWatchlistHeaderContent').within(() => {
        cy.get('.button-linking', { timeout: 25000 }).click({ force: true })// нажать на разъединить виджет
      })
      cy.get('.instrument--symbol.symbolSpacing', { timeout: 25000 }).eq(1).contains('BTC/EUR').click({ force: true }, { timeout: 25000 }) //нажать на  выбор пар BTC/EUR
      cy.get('.widgetNew__headerContent').eq(3).within(() => {
        cy.get('.selectBox--label').contains('BTC/USD') //проверить что в Order book осталась выбрана пара BTC/USD
      })
      cy.get('.WidgetWatchlist__widgetWatchlistHeaderContent').within(() => {
        cy.get('.button-linking', { timeout: 25000 }).click({ force: true })
      })// нажать на соединить виджет
    })
  })

  it('WatchlistFilters', () => { //сделала
    cy.getIframeBody('#tradingTerminalIframe', { timeout: 10 * 10000 }).within(() => {
      cy.get('.grid--head', { timeout: 25000 }).eq(4).click({ force: true }).find('.icon-filter').each(($el) => {
        cy.get($el).click({ force: true }).then(() => { //нажать на выбор фильтра в Watchlist
          cy.get('.filter-description').contains('Filter not applied', { timeout: 25000 }) //проверить открылось ли окно фильтра
        })
      })
      cy.get('.widgetGroupControls__wrapper').then(() => {
        cy.get('.widgetNew__buttonContextMenu').eq(1).click().then(() => { //нажимаем на burger menu
          cy.get('.contextMenu--item.contextMenu--item-icon', { timeout: 25000 }).click({ force: true })
        }).then(() => { //нажимаем на меню столбцов
          cy.contains('Available Columns', { timeout: 25000 }).should('exist', { timeout: 25000 }).then(() => { //проверить открылось ли окно
            cy.get('.popup--buttons').within(() => {
              cy.get('.button.button-primary.button-button-bid').contains('Apply').click({ force: true }) //нажимаем Apply
            })
          })
        })
      })
    })
  })

  it('OrderBookPairs', () => { //сделала
    cy.getIframeBody('#tradingTerminalIframe', { timeout: 10 * 10000 }).within(() => {
      cy.get('.widgetNew__headerContent').eq(3).within(() => {
        cy.get('.button-linking', { timeout: 25000 }).click({ force: true })// нажать на разъединить виджет
      })
      cy.get('.ElementPlaceholder__container').eq(3).within(() => {
        cy.get('.selectBox--label').click({ force: true })
      }).then(() => { // нажать на cписок пар
        cy.get('.dropDown--option.dropDown--option-').contains('BTC/EUR').click({ force: true })
      })
      cy.get('.widgetNew__headerContent').eq(0).within(() => {
        cy.get('.selectBox--label').should('be.visible').contains('BTC/USD') //проверить что в Сhart осталась выбрана пара BTC/USD
      })
      cy.get('.widgetNew__headerContent').eq(3).within(() => {
        cy.get('.button-linking', { timeout: 25000 }).click({ force: true })// нажать на coединить виджет
      })
    })
  })
  it.skip('WatchlistSell/Buy', () => { // не сделала
    cy.getIframeBody('#tradingTerminalIframe', { timeout: 10 * 10000 }).within(() => {
      cy.get(".instrumentInfo--panel .plate--actions ", { timeout: 10 * 1000 }).within(() => {
        cy.get(".instrument--sell.instrument-up", { timeout: 10 * 1000 }).click()
      })
      cy.wait(1000)
      cy.get(".button-button-bid").click({ force: true })
      cy.get(".popup--buttons").within(() => {
        cy.get(".button-primary").eq(0).click({ force: true })
      })

        // cy.get('.button.button-sell.button-price.button-dashboard', { timeout: 25000 }).click({ force: true })  //нажать кнопку SELL
        // cy.get(".popup--footer").within(() => {
        //   cy.wait(1000)
        //   cy.get(".button.button-primary.button-button-bid").click({force: true}) //нажимаем кнопку Send order
        // })
        // cy.get(".popup--window").within(() => {
        //   cy.wait(1000)
        //   cy.get(".button-primary > span").contains("Confirm").click() //нажать Confirm
        // })
        .then(() => {
          cy.get('.scrollable--container.messages').should('be.visible', { timeout: 25000 }) //проверка наличия блока с сообщениями
          cy.get('.message.messages--message.message-trading').eq(0).contains('PLACED') //проверка наличия сообщения 
        })
      cy.wait(1000)
      cy.get('.price.instrument--price', { timeout: 25000 }).eq(1).click({ force: true }).then(() => {  //нажать кнопку  BUY
        cy.wait(1000)
        cy.get(".popup--header", { timeout: 25000 }).within(() => {
          cy.get(".button.button-icon.popup--close", { timeout: 25000 }).click({ force: true }) //нажимаем кнопку закрыть
        })
      })
    })
  })

  it('PositionsClose', () => { //cделала
    cy.getIframeBody('#tradingTerminalIframe', { timeout: 10 * 10000 }).within(() => {
      cy.get('.widgetGroupControls__switches').within(() => {
        cy.get('.button').eq(0).click({ force: true })//нажимаем на position
      }).then(() => {
        cy.get('.button-closePosition.button-table--highlighter').eq(0).click().then(() => {////нажать Close Position
          cy.wait(1000)
          cy.get('.button.button-primary.button-button-bid', { timeout: 25000 }).contains('Close Position').click({ force: true }, { timeout: 25000 }) // нажать Close Position
          cy.get('.button.button-primary').contains('Confirm').click({ force: true }, { timeout: 25000 }) // нажать Confirm
        })
      })
    })
  })

  it('PositionSettings', () => { // сделала
    cy.getIframeBody('#tradingTerminalIframe', { timeout: 10 * 10000 }).within(() => {
      cy.get('.widgetGroupControls__switches').within(() => {
        cy.get('.button').eq(0).click({ force: true })//нажимаем на position
      })
      cy.get('.table--body').eq(0).within(() => {
        cy.get('.position--symbol').eq(2).dblclick() // нажать на пару двойным кликом
      }).then(() => {
        cy.get('.form--legend').contains('Protection Orders') //проверить наличие Protection Orders
        cy.get('.popup--header').within(() => {
          cy.wait(2000)
          cy.get('.button.button-icon.popup--close', { timeout: 25000 }).eq(2).click({ force: true })
        })// закрыть окно
        cy.get('[type="checkbox"]').check({ force: true }).then(() => { //нажать чек-бокс Net Aggregation
          cy.get('.table--row.position.position-open').should('be.visible')
          cy.get('[type="checkbox"]').uncheck({ force: true })  //отжать чек-бокс Net Aggregation
        })
      })
    })
  })
})

