import LOCATORS from "../Locators/addCompany_Locators";
import { baseUrl_Client_Utilities, companyName_Utilities, randomEmail_Utilities } from "../support/utilities.js";

class addCompanyPage {
    loadCompanyForm() 
    {
        cy.visit("/Client/Index");
    }
    tapAddCompanyBtn() 
    {
        cy.get(LOCATORS.addCompanyButton).click();
    }
    validateAddCompanyForm()
    {
        cy.url().should('include', 'https://bac-test.xpresspago.com/Client/Edit/0');
    }
    addCompanyName()
    {
        const companyName = companyName_Utilities;
        cy.get(LOCATORS.addCompanyName).type(companyName);
        cy.writeFile('cypress/fixtures/companyGenerated.json', { companyName });
    }
    addRUC()
    {
        cy.get(LOCATORS.addRUC).type('123')
    }
    addCity()
    {
        cy.get(LOCATORS.addCity).clear().type('islamabad')   
    }
    addEmail()
    {
        cy.get(LOCATORS.addEmail).type(randomEmail_Utilities);
    }
    addCommunication()
    {
        cy.get(LOCATORS.addPreferredCommunication).select('Email')
    }
    addCountry()
    {
        cy.get(LOCATORS.addCountry).select('Pakistan')
    }
    tapCreateCompanyBtn()
    {
        cy.get(LOCATORS.addSaveBtn).click();
    }
    assertCompanyCreated()
    {
        cy.url().should('include', baseUrl_Client_Utilities);
    }
    assertFormVisible()
    {
        cy.url().should('include', LOCATORS.addCompanyFormUrl);
        cy.get(LOCATORS.addCompanyButton).should('be.visible');
    }
    assertModalVisible()
    {
        cy.get(LOCATORS.addCompanyName).should('be.visible');
    }
}

export default new addCompanyPage();
