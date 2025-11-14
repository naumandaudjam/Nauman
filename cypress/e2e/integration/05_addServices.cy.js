import changeClient from "../../PageObjects/changeClient";
import addServices from "../../PageObjects/addServicesPage";

describe("Add Services", () => {
  it("Switch to target client before adding services", () => {
    changeClient.switchToTargetClient();
    addServices.tapMenuServices();
    addServices.tapOnAddServices();
    addServices.addProductName();
    addServices.addCurrency();
    addServices.addAmount();
    addServices.createService();
  });
});
