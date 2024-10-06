class Login{
    // Navigate to login page
    Login(Email,password){
        // Navighate to login page
        cy.get('[class="fa fa-user"]').click()
        cy.get('[class="dropdown-menu dropdown-menu-right"]').contains('Login').click()
        cy.wait(2000)

        //Login
        cy.get('[name="email"]').type(Email)  //type('user100000000@gmail.com')
        cy.get('[name="password"]').type(password)  // .type('password')
        cy.get('[value="Login"]').click()

    }
    
}
export default Login;
