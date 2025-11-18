/// <reference types="cypress" />
import LoginPage from "../PageObjects/loginPage"

const loginPage = LoginPage;

const LOGIN_SESSION_KEY = "default-login-session";

Cypress.Commands.add("loginWithSession", () => {
  cy.session(
    LOGIN_SESSION_KEY,
    () => {
      loginPage.visitLoginPage();
      loginPage.changeLanguageToEnglish();
      loginPage.fillLoginForm();
      loginPage.submitLogin();
    },
    {
      cacheAcrossSpecs: true,
    }
  );
});

const shouldAutoLogin = () => {
  const specName = (Cypress.spec?.name || "").toLowerCase();
  return specName !== "" && !specName.includes("login");
};

beforeEach(() => {
  if (shouldAutoLogin()) {
    cy.loginWithSession();
  }
});