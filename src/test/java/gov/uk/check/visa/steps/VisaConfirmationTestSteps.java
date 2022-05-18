package gov.uk.check.visa.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import gov.uk.check.visa.pages.*;

/**
 * Created by HariKrishna
 */
public class VisaConfirmationTestSteps {
    @Given("^I am on HomeOffice homepage$")
    public void iAmOnHomeOfficeHomepage() {
    }

    @And("^I click on start now button$")
    public void iClickOnStartNowButton() {
        new StartPage().clickStartNow();
    }

    @And("^I select nationality \"([^\"]*)\"$")
    public void iSelectNationality(String nationality)   {
       new SelectNationalityPage().selectNationality(nationality);
    }

    @And("^I click on next step button$")
    public void iClickOnNextStepButton() {
        new SelectNationalityPage().clickNextStepButton();
    }

    @And("^I select reason for visit \"([^\"]*)\"$")
    public void iSelectReasonForVisit(String reason)  {
        new ReasonForTravelPage().selectReasonForVisit(reason);
    }


    @Then("^I can verify the result \"([^\"]*)\"$")
    public void iCanVerifyTheResult(String result)  {
     new ResultPage().verifyIfResultMessage(result);
    }

    @And("^I select length of stay \"([^\"]*)\"$")
    public void iSelectLengthOfStay(String length) {
      new DurationOfStayPage().selectLengthOfStay(length);
    }

    @And("^I select job type \"([^\"]*)\"$")
    public void iSelectJobType(String jobType) {
     new WorkTypePage().selectJobType(jobType);
    }

    @And("^I select Immigration Status \"([^\"]*)\"$")
    public void iSelectImmigrationStatus(String status)  {
      new FamilyImmigrationStatusPage().selectImmigrationStatus(status);
    }
}
