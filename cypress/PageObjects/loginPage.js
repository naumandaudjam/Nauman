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
  fillLoginForm() 
  {
    cy.get(LOCATORS.userName).type(data.login_username);
    cy.get(LOCATORS.password).type(data.login_password);
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
