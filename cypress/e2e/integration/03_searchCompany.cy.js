import searchCompany from "../../PageObjects/searchCompany";

describe("Search Company", () => {
  it("Visit Search Company Form", () => {
    searchCompany.loadSearchCompanyForm();
    searchCompany.searchCompanyName();
    searchCompany.tapSearchBtn();
    searchCompany.assertCompanySearch();
  });
});
