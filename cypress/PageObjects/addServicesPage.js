import LOCATORS from "../Locators/addServices_Locators";
import {
  baseUrl_Product_Utilities,
  baseUrl_addServices_Utilities,
  baseUrl_addServices_Utilities_Success,
  serviceName_Utilities,
} from "../support/utilities";

class addServicesPage {
    tapMenuServices()
    {
        cy.visit("/Product/Index");
    }
    tapOnAddServices()
    {
        cy.get(LOCATORS.addServiceBtn).click();
    }
    addServiceFromVisibility_Assertion()
    {
        cy.url().should('include', baseUrl_addServices_Utilities);
    }
    addProductName()
    {
        cy.get(LOCATORS.addProductName).type(serviceName_Utilities);
    }
    addCurrency()
    {
        cy.get(LOCATORS.dropDown_Currency).select("US Dollar - USD");
    }
    addAmount()
    {
        cy.get(LOCATORS.addAmount).clear().type('5000');
    }
    createService()
    {
        cy.get(LOCATORS.createServices).click();        
    }
    assertCompanyCreated()
    {
        cy.url().should('include', baseUrl_addServices_Utilities_Success);
    }
}

export default new addServicesPage();
