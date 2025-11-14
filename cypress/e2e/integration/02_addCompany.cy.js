import addCompany from "../../PageObjects/addCompanyPage"; 

describe('Add Company Test Suite', () => {
    it('Redirect to Company Form and Create a Company', () => {
        addCompany.loadCompanyForm();
        addCompany.tapAddCompanyBtn();
        addCompany.addCompanyName();
        addCompany.addRUC();
        addCompany.addCity();
        addCompany.addEmail();
        addCompany.addCommunication();
        addCompany.addCountry();
        addCompany.tapCreateCompanyBtn();
        addCompany.assertCompanyCreated();
    });
});