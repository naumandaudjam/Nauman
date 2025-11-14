import LOCATORS from "../Locators/searchCompany_Locators";
import { baseUrl_Client_Utilities } from "../support/utilities.js";

class search_Company_Page {
    loadSearchCompanyForm() 
    {
        cy.visit("/Client/Index");
    }
    searchCompanyName()
    {
        cy.fixture("companyGenerated.json").then((companyGenerated) => {
            cy.get(LOCATORS.companyName).type(companyGenerated.companyName);
        });
    }
    tapSearchBtn()
    {
        cy.get(LOCATORS.searchBtn).click();
    }
    assertCompanySearch()
    {
        cy.fixture("companyGenerated.json").then((companyGenerated) => {
            cy.get(LOCATORS.searchCompanyResult).should("have.text", companyGenerated.companyName);
        });
    }
}

export default new search_Company_Page();
