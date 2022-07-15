describe('Auth', () => {
    describe('POST /login', () => {
        it('Status 200', () => {
            cy.RequestApi("POST", "dxweb/rest/api/register/account").then(($value) => {
                console.error($value.status)
                expect($value.status).to.be.equal(200)
            })
        });
        
        ['FULL_TRADING', 'CLOSE_ONLY', 'NO_TRADING', 'TERMINATED', 'EXPIRED'].forEach(function (type) {
            it(type, () => {
                cy.RequestApi("GET", "dxweb/rest/api/register/account", {
                    "status": type,
                }).then((value) => {
                    console.debug(value)
                    expect(value.status).to.be.equal(200)
                    cy.Typeattr(value,{
                        "clearingCode": "string",
                        "accountCode": "string",
                        "brokerCode": "string",
                        "type": "CLIENT",
                        "status": "FULL_TRADING",
                        "accountCashType": "MARGIN",
                        "expirationDate": "2022-07-05T12:25:58.594Z",
                        "accountType": "DEMO",
                        "currency": "string",
                        "balance": 0,
                        "categories": [
                          {
                            "category": "string",
                            "value": "string"
                          }
                        ],
                        "exposureLimit":{
                        "exposurePerAccount":{
                            "exposureUnit": "string",
                                "value": 0}
                }})
                })
            })
        })
        {
        ['CLIENT', 'OFFSET','REFERENCE'].forEach(function (type) {
            it(type, () => {
                cy.RequestApi("GET", "dxweb/rest/api/register/account", {
                    "type": type,
                }).then((value) => {
                    console.debug(value)
                    expect(value.status).to.be.equal(200)
                    cy.Typeattr(value,{
                        "clearingCode": "string",
                        "accountCode": "string",
                        "brokerCode": "string",
                        "type": "CLIENT",
                        "status": "FULL_TRADING",
                        "accountCashType": "MARGIN",
                        "expirationDate": "2022-07-05T12:25:58.594Z",
                        "accountType": "DEMO",
                        "currency": "string",
                        "balance": 0,
                        "categories": [
                          {
                            "category": "string",
                            "value": "string"
                          }
                        ],
                        "exposureLimit":{
                        "exposurePerAccount":{
                            "exposureUnit": "string",
                                "value": 0}
                }})
                })
            })
        })
    }
        it('POST /api/register/account ',() => {
            cy.RequestApi("POST", "dxweb/rest/api/register/account", 
                null, {
                    "clearingCode": "default",
                    "accountCode": "OffsetAcc",
                    "brokerCode": "root_broker",
                    "type": "OFFSET",
                    "status": "FULL_TRADING",
                    "accountCashType": "MARGIN",
                    "accountType": "LIVE",
                    "currency": "USD",
                    "balance": -348576.3,
                    "categories": []
                } 
             ).then((value) => {
                expect(value.status).to.be.equal(400)
                cy.Typeattr(value,{
                    "errorCode": 0,
                    "errorMessage": "string"
                  })
            })
        })
     
     });

});