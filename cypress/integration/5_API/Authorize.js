let responses
describe('Authorize', () => {
  before(() => {
    cy.visit('/')
  
    cy.authUser()
    cy.wait(10000)
    const headersData = {
      cookie: 'broSess'
    };
    cy.request({
      method: "POST",
      url: Cypress.env("BASE_URL_SVT")+"/api/v1/oauth/authorize",
      headers: headersData,
    }).then(($response) => { responses = $response 
      console.error(responses)})
  })
  it('brokerId', () => {
    expect(responses.body.data).to.have.property('brokerId').to.be.a('string')
  });
  it('userCexId', () => {
    expect(responses.body.data).to.have.property('userCexId').to.be.a('string')
  });
  it('isMaintainer', () => {
    expect(responses.body.data).to.have.property('isMaintainer').to.be.a('boolean')
  });
  it('status', () => {
    expect(responses).to.have.property('status').to.equal(200)
  });
});



// describe('Authorize API', () => {
//     it('successfully loads', () => {
//         cy.visit('/')
//         cy.clearCookies()
//       
//         cy.authUser()
  
//       const headersData = {
//         cookie: 'broSess'
//       };
//       cy.wait(3000)
//       cy.request({
//           method: "POST",
//           url: "/api/v1/oauth/authorize",
//           headers: headersData,
//       }).then((response) => {
//           //expect(response.body.data).to.have.property('brokerId').to.equal("acexbro")
//           expect(response.body.data).to.have.property('userCexId').to.equal("ua201535637")
//           expect(response.body.data).to.have.property('isMaintainer').to.equal(false)
//           expect(response).to.have.property('status').to.equal(200)
//           console.log(response.body);
//       });
     
//     });
// })
