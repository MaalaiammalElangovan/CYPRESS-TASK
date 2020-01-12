describe("Sample Cypress Test Automation", () => {
    it("Automate Smartbear application", () =>{
        cy.visit("http://secure.smartbearsoftware.com/samples/testcomplete11/WebOrders/login.aspx")
        cy.get("input#ctl00_MainContent_username.txt").type("Tester")
        cy.get("input#ctl00_MainContent_password.txt").type("test")
        cy.get("input#ctl00_MainContent_login_button.button").click()
        cy.visit("http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Process.aspx")
        cy.get("select#ctl00_MainContent_fmwOrder_ddlProduct").select("FamilyAlbum")    
        cy.get("input#ctl00_MainContent_fmwOrder_txtQuantity").type("10")  
        cy.get("input#ctl00_MainContent_fmwOrder_txtUnitPrice").type("10")  
        cy.get("input#ctl00_MainContent_fmwOrder_txtDiscount").type("10")
        cy.get("input#ctl00_MainContent_fmwOrder_txtTotal").type("10")
        cy.get("input#ctl00_MainContent_fmwOrder_txtName").type("malathy")
        cy.get("input#ctl00_MainContent_fmwOrder_TextBox2").type("1")
        cy.get("input#ctl00_MainContent_fmwOrder_TextBox3").type("1")
        cy.get("input#ctl00_MainContent_fmwOrder_TextBox4").type("1")
        cy.get("input#ctl00_MainContent_fmwOrder_TextBox5").type("1")
        cy.get("input#ctl00_MainContent_fmwOrder_cardList_0").check()
        cy.get("input#ctl00_MainContent_fmwOrder_TextBox6").type("1")
        cy.get("input#ctl00_MainContent_fmwOrder_TextBox1").type("01/01")
        cy.get("a#ctl00_MainContent_fmwOrder_InsertButton").click()
        /*cy.visit("https://www.saucedemo.com/")
        cy.get("input#user-name").type("standard_user")
        cy.get("input#password").type("secret_sauce")
        cy.get("input.btn_action").click()
        cy.get("a#item_4_title_link").click()
        cy.get("input.btn_primary btn_inventory").click()*/
        

    });
    });