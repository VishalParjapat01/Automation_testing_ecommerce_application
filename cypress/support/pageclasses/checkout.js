class checkoutpage{
    checkoutFirstWay(){
        cy.get('[title="Checkout"]').click()

        // Step 2: Billing Details 
        // cy.get('[name="firstname"]').type('user')
        // cy.get('[name="lastname"]').type('user')
        // cy.get('[name="company"]').type('Abc private Lmt.')
        // cy.get('[name="address_1"]').type('sector-22, jansi')
        // cy.get('[name="address_2"]').type('MP')
        // cy.get('[name="city"]').type('jansi')
        // cy.get('[name="postcode"]').type('124514')
        // cy.get('[name="country_id"]').select('India')
        // cy.get('[name="zone_id"]').select('Madhya Pradesh')

        // --------------first way-------------------
        cy.get('[id="button-payment-address"]').click()


        cy.get('#button-shipping-address[value="Continue"]').click()

        cy.get('[name="comment"]').type('Please delivered as soon as possible')
        cy.get('[id="button-shipping-method"]').click()
        
        cy.get('[type="checkbox"]').click()
        cy.get('[id="button-payment-method"]').click('')

        cy.get('[id="button-confirm"]').click()

        // successfully message print

        cy.xpath('//h1[.="Your order has been placed!"]').should('be.visible','Your order has been placed!')

        cy.xpath('//p[.="Your order has been successfully processed!"]').should('be.visible','Your order has been successfully processed!')
        // continue button
        cy.get('[class="btn btn-primary"]').click()

    }

    //--------------------------Checkout - Using shoping alert click--------------------------
    checkoutSecondWay(){
        // click on shopping cart
        cy.get('[class="alert alert-success alert-dismissible"]').should('be.visible','Success: You have added HP LP3065 to your ')
        cy.xpath('//a[.="shopping cart"]').click()

        //click on continue button
        cy.xpath('(//a[.="Checkout"])[2]').click()

        // //its optinal to remove un stock item
        // cy.get(':nth-child(1) > :nth-child(4) > .input-group > .input-group-btn > .btn-danger > .fa').click()

        // cy.get(':nth-child(1) > :nth-child(4) > .input-group > .input-group-btn > .btn-danger > .fa').click()

        // 3 continue button
        cy.get('[id="button-payment-address"]').click()


        cy.get('#button-shipping-address[value="Continue"]').click()

        cy.get('[name="comment"]').type('Please delivered as soon as possible')
        cy.get('[id="button-shipping-method"]').click()
        
        cy.get('[type="checkbox"]').click()
        cy.get('[id="button-payment-method"]').click('')

        cy.get('[id="button-confirm"]').click()

        // successfully message print

        cy.xpath('//h1[.="Your order has been placed!"]').should('be.visible','Your order has been placed!')

        cy.xpath('//p[.="Your order has been successfully processed!"]').should('be.visible','Your order has been successfully processed!')
        // continue button
        cy.get('[class="btn btn-primary"]').click()


    }
      // ------------------------checkout without add to cart---------------
    checkoutWithoutAddtoCart(){

        cy.get(':nth-child(5) > a > .fa').click()
        cy.title('Shopping Cart')
        cy.get('#content > p').should('be.visible','Your shopping cart is empty!')
        cy.get('.pull-right > .btn').click()
    }
    // -----------------------------for out of stock item------------------------
    checkoutForOutOfStockItem(){
         //clikc on checkout button
         cy.get('.pull-right > .btn').click()

         // alert
         cy.get('.alert').should('be.visible','Products marked with *** are not available in the desired quantity or not in stock!')

         // click on home page
         cy.get('h1 > a').click()
         

    }
    usingRadioButton(){

        //billing details chose another radio button
        cy.xpath('(//input[@type="radio"])[1]').click()
        cy.get('[name="firstname"]').type('user')
        cy.get('[name="lastname"]').type('user')
        cy.get('[name="company"]').type('Abc private Lmt.')
        cy.get('[name="address_1"]').type('sector-22, jansi')
        cy.get('[name="address_2"]').type('MP')
        cy.get('[name="city"]').type('jansi')
        cy.get('[name="postcode"]').type('124514')
        cy.get('[name="country_id"]').select('India')
        cy.get('[name="zone_id"]').select('Madhya Pradesh')


    }
}
export default checkoutpage;