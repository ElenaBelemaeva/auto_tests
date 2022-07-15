let responses
describe('Jurisdiction API', () => {
  before(() => {
    cy.visit('/')
  
    cy.authUser()
    cy.wait(10000)
    const headersData = {
      cookie: 'broSess'
    };
    cy.request({
      method: "POST",
      url: Cypress.env("BASE_URL_SVT")+"/api/v1/profile",
      headers: headersData,
    }).then(($response) => { responses = $response 
      console.error(responses)})
  })
  it('userId', () => {
    expect(responses.body.data.settings).to.have.property('userId').to.be.a('string')
  });
  it('profileTradingStatus', () => {
    expect(responses.body.data.settings).to.have.property('profileTradingStatus').to.be.a('string')
  });
  it('brokerId', () => {
    expect(responses.body.data.settings).to.have.property('brokerId').to.be.a('string')
  });
  it('status', () => {
    expect(responses).to.have.property('status').to.equal(200)
  });
});
