let responses
describe('Auth', () => {
  before(() => {
    cy.visit('/')
  
    cy.authUser()
    cy.wait(10000)
    const headersData = {
      cookie: 'broSess'
    };
    cy.request({
      method: "POST",
      url: Cypress.env("BASE_URL_SVT")+"/api/v1/auth",
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