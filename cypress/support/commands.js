/// <reference types="cypress" />
import LoginPage from "../PageObjects/loginPage";

const loginPage = LoginPage;
const LOGIN_SESSION_KEY = "default-login-session";

Cypress.Commands.add("loginWithSession", () => {
  return cy.session(
    LOGIN_SESSION_KEY,
    () => {
      loginPage.visitLoginPage();
      loginPage.changeLanguageToEnglish();
      loginPage.fillLoginForm();
      loginPage.submitLogin();
      loginPage.assertDashboardLoaded();
    },
    {
      cacheAcrossSpecs: true,
    }
  );
});

const shouldAutoLogin = () => {
  const specPath = (Cypress.spec?.name || "").toLowerCase();
  if (!specPath) {
    return false;
  }
  const specFile = specPath.split(/[/\\]/).pop() || "";
  return specFile !== "" && !specFile.includes("login");
};

beforeEach(() => {
  if (shouldAutoLogin()) {
    cy.loginWithSession();
  }
});
