import LOCATORS from "../Locators/addBanks_Locators";

class addBanksPage {
    tapMenuBanks()
    {
        cy.visit("/Bank/Index");
    }
    tapAddBanks()
    {
        cy.get(LOCATORS.addBankBtn).click();
    }
    addBankName()
    {
        cy.get(LOCATORS.addBankName).type("Nauman");
    }
    addBankStatus()
    {
        cy.get(LOCATORS.addBankStatus).select("Integrated");
    }
    addBankSubDivision()
    {
        cy.get(LOCATORS.addBankSubdivision).type("Test");
    }
    tapServicesBar()
    {
        cy.get(LOCATORS.collapBar).click();
    }
    addAddress()
    {
        cy.get(LOCATORS.addAddress).type("Test Test");
    }
    addBankBtn()
    {
        cy.get(LOCATORS.saveBankBtn).click();
    }
}

export default new addBanksPage();
