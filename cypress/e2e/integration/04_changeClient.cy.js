import changeClient from "../../PageObjects/changeClient";

describe("Change Client", () => {
  it("Change Client", () => {
    changeClient.visitDashboard();
    changeClient.tapChangeClient();
    changeClient.searchCompany();
    changeClient.selectCompany();
  });
});
