class HomeAndSearch{

    HomeAndSearch(productName){
        // Nevigate to the Home page
        cy.xpath('//a[.="Qafox.com"]').should('be.visible','Qafox.com')
        cy.xpath('//a[.="Qafox.com"]').click()

        // search 
        cy.get('[name="search"]').type(productName)
        cy.get('[class="btn btn-default btn-lg"]').click()

        // title verify
        cy.title('Search - hp')

        // Add to cart
        cy.get(`[onclick="cart.add('47', '1');"]`).click()

        // add quantity
        cy.get('#input-quantity').clear().type('2')
        cy.get('[id="button-cart"]').click()

      
    }

    // for unable item in stock
    HomeAndSearch2(productName2){
        // Nevigate to the Home page
        cy.xpath('//a[.="Qafox.com"]').should('be.visible','Qafox.com')
        cy.xpath('//a[.="Qafox.com"]').click()

        // search 
        cy.get('[name="search"]').type(productName2)
        cy.get('[class="btn btn-default btn-lg"]').click()

        // title verify
        cy.title('Search - mac')

        // Add to cart
        cy.get(`[onclick="cart.add('41', '1');"] > .fa`).click();

        // click on shopping button
        cy.get('.alert > [href="https://tutorialsninja.com/demo/index.php?route=checkout/cart"]').click();

       
        
        

      
    }
}
export default HomeAndSearch;