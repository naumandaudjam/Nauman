import addBanks from "../../PageObjects/addBanksPage";
import changeClient from "../../PageObjects/changeClient";

describe("Add Banks", () => {
  it("Switch to target client before adding banks", () => {
    changeClient.switchToTargetClient();
    addBanks.tapMenuBanks();
    addBanks.tapAddBanks();
    addBanks.addBankName();
    addBanks.addBankStatus();
    addBanks.addBankSubDivision();
    addBanks.addAddress()
    addBanks.addBankBtn();
  });
});

