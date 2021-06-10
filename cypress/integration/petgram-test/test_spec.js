describe('Mi primer test', function(){
    it('para ver si funciona', function(){
        cy.visit('/')
    })
    it('navegamos a una categoria y vemos fotos', function(){
        cy.visit('/pet/1')
        cy.get('nav a').first().click()
        cy.url().should('include','/')
    })
})