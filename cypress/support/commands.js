Cypress.Commands.add('authUser', () => {
  cy.getCookie("bro-sess").then(($broSess) => {

    if ($broSess == undefined) {
      cy.get(".main-header_main_header__wrapper__1xzDg").within(() => {
        cy.get('.main-header_sign__2Cj4C').click()
      })
      cy.url().should('include', '/authorization/login')
      cy.wait(1000)
      cy.get("input[name=email]")
        .type('')
        .should('have.value', '')
      cy.get("input[name=password]")
        .type("")
        .should('have.value', "")
      //cy.intercept("/api/v1/auth").as("authPost")
      cy.contains('Sign In').click({
        timeout: 25000
      })
      //cy.wait("@authPost").its("response.statusCode").should("eq",200)


    }
  })
})
Cypress.Commands.add('loginDash', () => {
  cy.login({
    root: '',
    realm: 'broker-backoffice',
    username: 'user@user',
    password: 'user',
    client_id: 'qa',
    redirect_uri: ''
  })
})

//require('cypress-keycloak');

Cypress.Commands.add('authUserCY', () => {
  cy.wait(1000)
  cy.getCookie("bro-sess").then(($broSess) => {

    if ($broSess == undefined) {

      cy.get(".auth-menu_register_block__bW8z-").within(() => {
        cy.get('.auth-menu_sign__2SHG2').click()
      })

      cy.url().should('include', '/authorization/login')

      cy.get("input[name=email]")
        .type(Cypress.env("LOGIN_CY"))
        .should('have.value', Cypress.env("LOGIN_CY"))
      cy.get("input[name=password]")
        .type(Cypress.env("PASSWORD_CY"))
        .should('have.value', Cypress.env("PASSWORD_CY"))
      cy.contains('Sign In').click({
        timeout: 25000
      })
    } else {
      cy.setCookie('bro-sess', $broSess["value"])

    }
  })
})

Cypress.Commands.add('RequestApi', async (method, path, parametrs = null, body = null) => {
  const urlBuilder = new URL("")
  urlBuilder.pathname = path
  new URLSearchParams(parametrs).forEach((value, key) => {
    if (value) {
      urlBuilder.searchParams.set(key, value)
    }
  })
  let response
 if( method=== "POST"){
   response =  await fetch ( urlBuilder.toString(),{
    method: method,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Basic bWFzdGVyX2RlYWxlckBkZWZhdWx0OnRlc3Q='
    },
  })}
  else{
     response =  await fetch ( urlBuilder.toString(),{
      method: method,
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Basic bWFzdGVyX2RlYWxlckBkZWZhdWx0OnRlc3Q='
      },
    })
  }
  let data = {};
  data["body"] = await response.json();
  console.error(data)
  data["status"] =response.status
  return data

})
Cypress.Commands.add('Typeattr', async (responsebody, construcrtor) => {
  if (typeof responsebody.body[0] === "object"){
    for (let i=0; i<responsebody.body.length;i++){
  Object.keys(responsebody.body[i]).forEach((key) => {
   expect(typeof construcrtor[key]).to.be.equal(typeof responsebody.body[i][key])
    
  })
}
}else{Object.keys(responsebody.body).forEach((key) => {
  expect(typeof construcrtor[key]).to.be.equal(typeof responsebody.body[key])
  
})}

})

Cypress.Commands.add('getIframeBody', (element) => {
  //cy.clearCookie("bro-sess")
  //  cy.setCookie('bro-sess','MTY1MzQxOTgwM3xYUXdBV25WaE1qQXhOVE0xTmpNM1gxTldWRjlXUnpWQ2NVcENkRjk1VEcxS2RWWnJXR05vV1RCZk5qTkpOalJEV0VWTFNVdGFRMEZhUVZGRFFrRkJSVlJRV1U5T1V6VlhWa05aV1ZkUVZWUldUek0zVlUxVVNqUkdNa0pXVVE9PXzINMZFQ-cAAtxzaJ6njcW4SOvQGtzD9Llib2FFYAJY5Q==' )
  //  cy.getIframeBody('#tradingTerminalIframe',{ timeout: 10 * 10000 }).find('.gwt-Button.button.button-sell ', { timeout: 10 * 10000 }).should("be.visible").click()
  return cy.get(element, {
    timeout: 10 * 1000
  }).its('0.contentDocument').its('body').then(cy.wrap)
})
Cypress.Commands.add('Times', (time2) => {
  //const date = new Date()
  //const nextDate = date
  //nextDate.setHours(date.getHours() + 1)
  cy.request({
    method: 'POST',
    url: `${Cypress.env("date").toISOString().split('T')[0].replaceAll('-', '.')}/_search&method=POST`,
    headers: {
      "kbn-xsrf": true
    },
    body: {
      "size": 10000,
      "sort": [{
        "startTime": {
          "order": "asc"
        }
      }],
      "query": {
        "bool": {
          "must": [{
              "range": {
                "startTime": {
                  "gte": Cypress.env("date").toISOString(),
                  "lte": time2.toISOString()
                }
              }
            },
            {
              "match": {
                "level.levelStr": "ERROR FATAL INFO" // ERROR, FATAL, INFO
              }
            }
          ]
        }
      }
    }
  }).then((response) => {
    console.error(response.body)
    cy.writeFile('', response.body)
  })
})

