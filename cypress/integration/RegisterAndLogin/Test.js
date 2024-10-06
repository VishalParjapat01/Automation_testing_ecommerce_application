import Registerpage from "../../support/pageclasses/Register";
import logout from "../../support/pageclasses/Logout";
import Login from "../../support/pageclasses/Login";
import HomeAndSearch from "../../support/pageclasses/HomePage&search";
import checkoutpage from "../../support/pageclasses/checkout";

describe('Qafox', () => {

    // object making
    const objRegister = new Registerpage();
    const objlogout = new logout();
    const objLogin = new Login();
    const objHomeAndSearch = new HomeAndSearch();
    const objchecheckout = new checkoutpage();

    //fixture file
    before(() => {
        
        cy.fixture('logindData').then((vari)=>{
            globalThis.vari=vari;
        })
    });
    before(() => {
        
        cy.fixture('Productsearch').then((productV)=>{
            globalThis.productV=productV;
        })
    });
    before(() => {
        
        cy.fixture('RegisterData').then((RegisterV)=>{
            globalThis.RegisterV=RegisterV;
        })
    });
    
    // --------------------------checkout without add to cart-----------------------
    it('checkout without add to cart', () => {
        // Nevigate to the web
        objRegister.Enterurl();

         // // To go to the register page
        // objRegister.NevigateToRegisterpage();

        // // Register page verify
        
        // objRegister.Registerpageverify();

        // //Register data
        // objRegister.RegisterData(RegisterV.firstname,RegisterV.lastname,RegisterV.email,RegisterV.telephone,RegisterV.password,RegisterV.Pconfirm);

        // login
        objLogin.Login(vari.Email,vari.password);

        objchecheckout.checkoutWithoutAddtoCart()
        // logout
        objlogout.logout();

        
    });

    //-----------------------------direct way to check out------------------------------
    it('direct way to check out', () => {
        // Nevigate to the web
        objRegister.Enterurl();

        // // To go to the register page
        // objRegister.NevigateToRegisterpage();

        // // Register page verify
        
        // objRegister.Registerpageverify();

        // //Register data
        // objRegister.RegisterData(RegisterV.firstname,RegisterV.lastname,RegisterV.email,RegisterV.telephone,RegisterV.password,RegisterV.Pconfirm);

        // login
        objLogin.Login(vari.Email,vari.password);
        // Home and Search 
        objHomeAndSearch.HomeAndSearch(productV.productName); 
        //checkout 1st way
        objchecheckout.checkoutFirstWay();
         // logout
         objlogout.logout(); 

        
    });
     //-------------------------------Checkout - Using shoping alert click--------------------------done
     it('Checkout - Using shoping alert click ', () => {
        // Nevigate to the web
        objRegister.Enterurl();

        // // To go to the register page
        // objRegister.NevigateToRegisterpage();

        // // Register page verify
        
        // objRegister.Registerpageverify();

        // //Register data
        // objRegister.RegisterData(RegisterV.firstname,RegisterV.lastname,RegisterV.email,RegisterV.telephone,RegisterV.password,RegisterV.Pconfirm);

        // login
        objLogin.Login(vari.Email,vari.password);
          // Home and Search 
        objHomeAndSearch.HomeAndSearch(productV.productName);
        //checkout 2nd way
        objchecheckout.checkoutSecondWay()
        // logout
        objlogout.logout();


    });

    //-------------------------------Checkout - Using shoping alert click--------------------------done
    it('Checkout - Using shoping alert click ', () => {
        // Nevigate to the web
        objRegister.Enterurl();

          // // To go to the register page
        // objRegister.NevigateToRegisterpage();

        // // Register page verify
        
        // objRegister.Registerpageverify();

        // //Register data
        // objRegister.RegisterData(RegisterV.firstname,RegisterV.lastname,RegisterV.email,RegisterV.telephone,RegisterV.password,RegisterV.Pconfirm);

        // login
        objLogin.Login(vari.Email,vari.password);
          // Home and Search 
        objHomeAndSearch.HomeAndSearch(productV.productName);
        //checkout 2nd way
        objchecheckout.checkoutSecondWay()
        // logout
        objlogout.logout();


    });

    //-------------------------------Product is out of stock------------------------done
    it('Product is out of stock', () => {
        // Nevigate to the web
        objRegister.Enterurl();

          // // To go to the register page
        // objRegister.NevigateToRegisterpage();

        // // Register page verify
        
        // objRegister.Registerpageverify();

        // //Register data
        // objRegister.RegisterData(RegisterV.firstname,RegisterV.lastname,RegisterV.email,RegisterV.telephone,RegisterV.password,RegisterV.Pconfirm);

         // login
         objLogin.Login(vari.Email,vari.password);
          // Home and Search 
        objHomeAndSearch.HomeAndSearch2(productV.productName2);
        //checkout when item is out of stock
        objchecheckout.checkoutForOutOfStockItem();
        // logout
        objlogout.logout();
    });
});

