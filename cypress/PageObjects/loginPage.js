import LOCATORS from "../Locators/loginPage_Locators";
import data from "../fixtures/login_data.json";


class LoginPage {
  visitLoginPage() 
  {
    cy.visit("https://bac-test.xpresspago.com/");
  }
  changeLanguageToEnglish() 
  {
    cy.get(LOCATORS.changeLanguage).click();
  }
 fillLoginForm() {

    cy.get(LOCATORS.userName).type(data.login_username);
    cy.get(LOCATORS.password).type(data.login_password);
  }
  submitLogin() 
  {
    cy.get(LOCATORS.loginButton).click();
  }
  assertDashboardLoaded() {
    cy.visit("https://bac-test.xpresspago.com/Home/Index");
  }
}

export default new LoginPage();
