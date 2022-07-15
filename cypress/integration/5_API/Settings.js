let responses
describe('Settings API', () => {
  before(() => {
    cy.visit('/')
  
    cy.authUser()
    cy.wait(10000)
    const headersData = {
      cookie: 'broSess'
    };
    cy.request({
      method: "POST",
      url: Cypress.env("BASE_URL_SVT")+"/api/v1/broker/settings",
      headers: headersData,
    }).then(($response) => { responses = $response 
      console.error(responses)})
  })
  it("END",()=>{
    let elem2 = new Date()
    cy.Times(elem2)
   })
  it('brokerId', () => {
    expect(responses.body.data).to.have.property('brokerId').to.be.a('string')
  });
  it('isActive', () => {
    expect(responses.body.data).to.have.property('isActive').to.be.a('boolean')
  });
  it('isMaintenance', () => {
    expect(responses.body.data).to.have.property('isMaintenance').to.be.a('boolean')
  });
  it('status', () => {
    expect(responses).to.have.property('status').to.equal(200)
  });
  
});

