import Login from "../PageObjects/Login_Page";

/// <reference types="cypress" />

const SESSION_KEY = "default-login-session";

Cypress.Commands.add("loginWithSession", () => {
  cy.session(
    SESSION_KEY,
    () => {
      Login.visitLoginPage();
      Login.changeLanguageToEnglish();
      Login.fillLoginForm();
      Login.submitLogin();
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
    cy.changeLanguageToEnglish();

  }
});

