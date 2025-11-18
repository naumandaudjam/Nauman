import Login from "../../PageObjects/loginPage";

describe("loginSession", () => {

  it("Successfully Login and Verify Dashboard", () => {
    cy.loginWithSession();
  });
});