import LOCATORS from "../Locators/changeClient_Locators";
import {baseUrl_Utilities } from "../support/utilities";

class changeClient {
    visitDashboard()
    {
        cy.visit("/")
    }
    tapChangeClient()
    {
        cy.get(LOCATORS.changeClientBtn).click();
    }
    searchCompany() 
    {
        cy.fixture("companyGenerated.json").then((companyGenerated) => {
            cy.get(LOCATORS.searchCompany).type(companyGenerated.companyName);
        });
    }
    selectCompany()
    {
        cy.get(LOCATORS.selectCompany).click();
    }
    switchToTargetClient()
    {
        this.visitDashboard();
        this.tapChangeClient();
        this.searchCompany();
        this.selectCompany();
    }
}

export default new (changeClient);
