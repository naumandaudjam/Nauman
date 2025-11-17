import LOCATORS from "../Locators/loginPage_Locators";
import data from "../fixtures/login_data.json";


class LoginPage {
  visitLoginPage() 
  {
    cy.visit("/");
  }
  changeLanguageToEnglish() 
  {
    cy.get(LOCATORS.changeLanguage).click();
  }
 fillLoginForm() {
    const username = Cypress.env("username");
    const password = Cypress.env("password");

    cy.get(LOCATORS.userName).type(username);
    cy.get(LOCATORS.password).type(password);
  }
  submitLogin() 
  {
    cy.get(LOCATORS.loginButton).click();
  }
  assertDashboardLoaded() {
    cy.url().should('not.include', "/Login");
  }
}

export default new LoginPage();
