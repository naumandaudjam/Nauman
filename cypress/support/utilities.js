const baseUrl_Client_Utilities = "https://bac-test.xpresspago.com/Client/Index";

const randomNum_Utilities = String(Math.floor(Math.random() * 1000)).padStart(3, "0");
const randomEmail_Utilities = `user${randomNum_Utilities}@yopmail.com`;
const companyName_Utilities = `NaumanAutomationCompany${randomNum_Utilities}`;

export {
  baseUrl_Client_Utilities,
  randomEmail_Utilities,
  companyName_Utilities,
};
