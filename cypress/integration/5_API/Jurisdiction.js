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
      url: Cypress.env("BASE_URL_SVT")+"/api/v1/user/jurisdiction",
      headers: headersData,
    }).then(($response) => { responses = $response 
      console.error(responses)})
  })
  it('isAddressVerified', () => {
    expect(responses.body.jurisdiction).to.have.property('isAddressVerified').to.be.a('boolean')
  });
  it('country', () => {
    expect(responses.body.jurisdiction).to.have.property('country').to.be.a('string')
  });
  it('jurisdiction', () => {
    expect(responses.body.jurisdiction).to.have.property('jurisdiction').to.be.a('string')
  });
  it('status', () => {
    expect(responses).to.have.property('status').to.equal(200)
  });
});

