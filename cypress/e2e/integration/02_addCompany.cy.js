import addCompany from "../../PageObjects/addCompanyPage";
import LOCATORS from "../../Locators/addCompany_Locators";

describe("Add Company Test Suite", () => {

  beforeEach(() => {
    addCompany.loadCompanyForm();
  });


  it("Go to Company Section and Find Add Button", () => {
    cy.get(LOCATORS.addCompanyButton).should("be.visible").and("not.be.disabled");
  });

  it("Tap on Add Company button and Validate with all fields visible", () => {
    addCompany.tapAddCompanyBtn();
    addCompany.validateAddCompanyForm();
    addCompany.assertModalVisible();
    cy.get(LOCATORS.addCompanyName).should("be.visible");
    cy.get(LOCATORS.addRUC).should("be.visible");
    cy.get(LOCATORS.addCity).should("be.visible");
    cy.get(LOCATORS.addEmail).should("be.visible");
    cy.get(LOCATORS.addPreferredCommunication).should("be.visible");
    cy.get(LOCATORS.addCountry).should("be.visible");
    cy.get(LOCATORS.addSaveBtn).should("be.visible");
  });

  it("Redirects to the form and successfully creates a company", () => {
    addCompany.tapAddCompanyBtn();
    addCompany.addCompanyName();
    addCompany.addRUC();
    addCompany.addCity();
    addCompany.addEmail();
    addCompany.addCommunication();
    addCompany.addCountry();
    addCompany.tapCreateCompanyBtn();
    addCompany.assertCompanyCreated();
  });
  
});
