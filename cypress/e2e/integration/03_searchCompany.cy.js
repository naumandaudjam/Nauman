import searchCompany from "../../PageObjects/searchCompany";
import LOCATORS from "../../Locators/searchCompany_Locators";

describe("Search Company", () => {
  beforeEach(() => {
    searchCompany.loadSearchCompanyForm();
  });


  it("Displays the Search Company form and required fields", () => {
    cy.get(LOCATORS.companyName).should("be.visible");
    cy.get(LOCATORS.searchBtn).should("be.visible").and("not.be.disabled");
  });
  
  it("Allows entering the generated company name", () => {
    searchCompany.searchCompanyName();

    cy.fixture("companyGenerated.json").then(({ companyName }) => {
      cy.get(LOCATORS.companyName).should("have.value", companyName);
    });
  });
  it("Searches for the company and shows the matching result", () => {
    searchCompany.searchCompanyName();
    searchCompany.tapSearchBtn();

    cy.get(LOCATORS.searchCompanyResult).should("be.visible");
    searchCompany.assertCompanySearch();
  });
});
