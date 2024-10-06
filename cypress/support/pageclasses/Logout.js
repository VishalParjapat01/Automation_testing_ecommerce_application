class  logout {
    logout(){
        // logout
        cy.get('[class="fa fa-user"]').click()
        cy.xpath('(//a[.="Logout"])[1]').contains('Logout').click()

        // logout verification
        cy.xpath('//h1[.="Account Logout"]').should('be.visible','Account Logout')
        cy.xpath('//p[.="You have been logged off your account. It is now safe to leave the computer."]').should('be.visible','You have been logged off your account. It is now safe to leave the computer.')

        // Continue button
        cy.get('[class="btn btn-primary"]').click() 
        cy.wait(2000)
    }
    
}
export default logout;