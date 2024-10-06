class Registerpage{
    Enterurl(){
        // To nevigate the  website
        cy.visit('https://tutorialsninja.com/demo/index.php?route=common/home')

    }
    NevigateToRegisterpage(){

         // Nevigate to the Register page 

         cy.get('[class="fa fa-user"]').click()

         cy.get('[class="dropdown-menu dropdown-menu-right"]').contains('Register').click()
         
    }
    Registerpageverify(){
        // To verify page

       cy.url().should('eq','https://tutorialsninja.com/demo/index.php?route=account/register')
       cy.title().should('eq','Register Account')
      
        
    }
    RegisterData(firstname,lastname,email,telephone,password,Pconfirm){
        //Register Asertion
        cy.xpath('//h1[.="Register Account"]').should('be.visible','Register Account')

        //Register Data
        //Your Personal Details
        cy.xpath('//legend[.="Your Personal Details"]').should('be.visible','Your Personal Details')


        cy.get('[name="firstname"]').type(firstname)
        cy.get('[name="lastname"]').type(lastname)
        cy.get('[name="email"]').type(email)
        cy.get('[name="telephone"]').type(telephone)

        //Your Password
        cy.xpath('//legend[.="Your Password"]').should('be.visible','Your Password')
        cy.get('[name="password"]').type(password)
        cy.get('[name="confirm"]').type(Pconfirm)

        // Newsletter
        cy.xpath('//legend[.="Newsletter"]').should('be.visible','Newsletter')
        cy.get('[value="0"]').click()

        //Privacy Policy 
        cy.xpath('//b[.="Privacy Policy"]').should('be.visible','Privacy Policy')
        cy.get('[name="agree"]').click()

        // click on continue button
        cy.get('[type="submit"]').click()

        //succesfully register
        cy.xpath('//h1[.="Your Account Has Been Created!"]').should('be.visible','Your Account Has Been Created!')
        cy.xpath('//p[.="Congratulations! Your new account has been successfully created!"]').should('be.visible','Congratulations! Your new account has been successfully created!')

        //click on continue button
         cy.xpath('//a[.="Continue"]').click()

    }


}
export default Registerpage;