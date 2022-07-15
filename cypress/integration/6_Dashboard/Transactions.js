describe('Transactions', () => {
    beforeEach(() => {
    cy.loginDash()
    cy.visit('')
  })
  it('Transactions_status_new', () => {
   cy.get('.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12').within(()=>{
     cy.get('.MuiButtonGroup-root').within(()=>{
       cy.get('.MuiButton-outlinedPrimary', { timeout: 25000 }).eq(0).contains('new').click({ force: true }) //нажать NEW
       })
     }).then(()=>{
     cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-outlinedPrimary').eq(6).contains('Apply').click({ force: true }).then(()=>{ //нажать APPLY
  cy.get('.MuiTableRow-root.MuiTableRow-hover').each(($status)=>{
  cy.get($status).contains('new')
})})
  })})

  it('Transactions_status_await_funding', () => {
  cy.get('.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12').within(()=>{
    cy.get('.MuiButtonGroup-root').within(()=>{
      cy.get('.MuiButton-outlinedPrimary', { timeout: 25000 }).eq(1).contains('await_funding').click({ force: true }) //нажать AWAIT_FUNDING
      })
    }).then(()=>{
    cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-outlinedPrimary').eq(6).contains('Apply').click({ force: true }).then(()=>{ //нажать APPLY
 cy.get('.MuiTableRow-root.MuiTableRow-hover').each(($status)=>{
 cy.get($status).contains('await_funding')
})})
 })
})

it('Transactions_status_funded', () => {
  cy.get('.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12').within(()=>{
    cy.get('.MuiButtonGroup-root').within(()=>{
      cy.get('.MuiButton-outlinedPrimary', { timeout: 25000 }).eq(2).contains('funded').click({ force: true }) //нажать Funded
      })
    }).then(()=>{
    cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-outlinedPrimary').eq(6).contains('Apply').click({ force: true }).then(()=>{ //нажать APPLY
 cy.get('.MuiTableRow-root.MuiTableRow-hover').each(($status)=>{
 cy.get($status).contains('funded')
})})
 })
})

it('Transactions_status_await_approval', () => {
  cy.get('.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12').within(()=>{
    cy.get('.MuiButtonGroup-root').within(()=>{
      cy.get('.MuiButton-outlinedPrimary', { timeout: 25000 }).eq(3).contains('await_approval').click({ force: true }) //нажать AWAIT_APPROVAL
      })
    }).then(()=>{
    cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-outlinedPrimary').eq(6).contains('Apply').click({ force: true }).then(()=>{ //нажать APPLY
 cy.get('.MuiTableRow-root.MuiTableRow-hover').each(($status)=>{
 cy.get($status).contains('await_approval')
})})
 })
})

it('Transactions_status_await_rejection', () => {
  cy.get('.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12').within(()=>{
    cy.get('.MuiButtonGroup-root').within(()=>{
      cy.get('.MuiButton-outlinedPrimary', { timeout: 25000 }).eq(4).contains('await_rejection').click({ force: true }) //нажать AWAIT_REJECTION
      })
    }).then(()=>{
    cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-outlinedPrimary').eq(6).contains('Apply').click({ force: true }).then(()=>{ //нажать APPLY
 cy.get('.user-balance_no_result__2JfMQ').contains('No result')
})
 })
})

it('Transactions_status_approved', () => {
  cy.get('.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12').within(()=>{
    cy.get('.MuiButtonGroup-root').within(()=>{
      cy.get('.MuiButton-outlinedPrimary', { timeout: 25000 }).eq(5).contains('approved').click({ force: true }) //нажать APPROVED
      })
    }).then(()=>{
    cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-outlinedPrimary').eq(6).contains('Apply').click({ force: true }).then(()=>{ //нажать APPLY
 cy.get('.MuiTableRow-root.MuiTableRow-hover').each(($status)=>{
 cy.get($status).contains('approved')
})})
 })
})

it('Transactions_status_rejected', () => {
  cy.get('.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12').within(()=>{
    cy.get('.MuiButtonGroup-root').within(()=>{
      cy.get('.MuiButton-outlinedPrimary', { timeout: 25000 }).eq(6).contains('rejected').click({ force: true }) //нажать REJECTED
      })
    }).then(()=>{
    cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-outlinedPrimary').eq(6).contains('Apply').click({ force: true }).then(()=>{ //нажать APPLY
 cy.get('.MuiTableRow-root.MuiTableRow-hover').each(($status)=>{
 cy.get($status).contains('rejected')
})})
 })
})

it('Transactions_status_new_await_funding', () => {
  cy.get('.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12').within(()=>{
    cy.get('.MuiButtonGroup-root').within(()=>{
      cy.get('.MuiButton-outlinedPrimary', { timeout: 25000 }).contains('new').click({ force: true }) //нажать NEW
      cy.get('.MuiButton-outlinedPrimary', { timeout: 25000 }).contains('await_funding').click({ force: true }) //нажать AWAIT_FUNDING
      })
    }).then(()=>{
    cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-outlinedPrimary').contains('Apply').click({ force: true }).then(()=>{ //нажать APPLY
 cy.get('.MuiTableRow-root.MuiTableRow-hover').each(($status)=>{
 cy.get($status).contains(/new|await_funding/)
})})
 })})


 it('Transactions_status_funded_await_approval', () => {
  cy.get('.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12').within(()=>{
    cy.get('.MuiButtonGroup-root').within(()=>{
      cy.get('.MuiButton-outlinedPrimary', { timeout: 25000 }).contains('funded').click({ force: true }) //нажать NEW
      cy.get('.MuiButton-outlinedPrimary', { timeout: 25000 }).contains('await_approval').click({ force: true }) //нажать AWAIT_FUNDING
      })
    }).then(()=>{
    cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-outlinedPrimary').contains('Apply').click({ force: true }).then(()=>{ //нажать APPLY
 cy.get('.MuiTableRow-root.MuiTableRow-hover').each(($status)=>{
 cy.get($status).contains(/funded|await_approval/)
})})
 })})
 
 it('Transactions_status_approved_rejected', () => {
  cy.get('.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12').within(()=>{
    cy.get('.MuiButtonGroup-root').within(()=>{
      cy.get('.MuiButton-outlinedPrimary', { timeout: 25000 }).contains('approved').click({ force: true }) //нажать NEW
      cy.get('.MuiButton-outlinedPrimary', { timeout: 25000 }).contains('rejected').click({ force: true }) //нажать AWAIT_FUNDING
      })
    }).then(()=>{
    cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-outlinedPrimary').contains('Apply').click({ force: true }).then(()=>{ //нажать APPLY
 cy.get('.MuiTableRow-root.MuiTableRow-hover').each(($status)=>{
 cy.get($status).contains(/approved|rejected/)
})})
 })})


})

