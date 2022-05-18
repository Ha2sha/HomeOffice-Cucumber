$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("visaconfirmation.feature");
formatter.feature({
  "line": 1,
  "name": "Visa Confirmation Test",
  "description": "As a user I want to check visa confirmation on Homeoffice website",
  "id": "visa-confirmation-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4194839800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "An Australian Coming to UK For Tourism",
  "description": "",
  "id": "visa-confirmation-test;an-australian-coming-to-uk-for-tourism",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on HomeOffice homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on start now button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select nationality \"Australia\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on next step button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select reason for visit \"Tourism or visiting family and friends\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on next step button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I can verify the result \"You will not need a visa to come to the UK\"",
  "keyword": "Then "
});
formatter.match({
  "location": "VisaConfirmationTestSteps.iAmOnHomeOfficeHomepage()"
});
formatter.result({
  "duration": 86117500,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTestSteps.iClickOnStartNowButton()"
});
formatter.result({
  "duration": 258010400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Australia",
      "offset": 22
    }
  ],
  "location": "VisaConfirmationTestSteps.iSelectNationality(String)"
});
formatter.result({
  "duration": 86860700,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTestSteps.iClickOnNextStepButton()"
});
formatter.result({
  "duration": 210099400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tourism or visiting family and friends",
      "offset": 27
    }
  ],
  "location": "VisaConfirmationTestSteps.iSelectReasonForVisit(String)"
});
formatter.result({
  "duration": 80088900,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTestSteps.iClickOnNextStepButton()"
});
formatter.result({
  "duration": 224746800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You will not need a visa to come to the UK",
      "offset": 25
    }
  ],
  "location": "VisaConfirmationTestSteps.iCanVerifyTheResult(String)"
});
formatter.result({
  "duration": 38957400,
  "status": "passed"
});
formatter.after({
  "duration": 771678600,
  "status": "passed"
});
formatter.before({
  "duration": 1941247600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "A Chilean Coming To The UK For Work And Plans On Staying For Longer Than Six Months",
  "description": "",
  "id": "visa-confirmation-test;a-chilean-coming-to-the-uk-for-work-and-plans-on-staying-for-longer-than-six-months",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I am on HomeOffice homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I click on start now button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select nationality \"Chile\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on next step button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select reason for visit \"Work, academic visit or business\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on next step button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select length of stay \"longer than 6 months\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on next step button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select job type \"Health and care professional\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on next step button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I can verify the result \"You need a visa to work in health and care\"",
  "keyword": "Then "
});
formatter.match({
  "location": "VisaConfirmationTestSteps.iAmOnHomeOfficeHomepage()"
});
formatter.result({
  "duration": 34400,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTestSteps.iClickOnStartNowButton()"
});
formatter.result({
  "duration": 261282300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chile",
      "offset": 22
    }
  ],
  "location": "VisaConfirmationTestSteps.iSelectNationality(String)"
});
formatter.result({
  "duration": 78223600,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTestSteps.iClickOnNextStepButton()"
});
formatter.result({
  "duration": 247001600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Work, academic visit or business",
      "offset": 27
    }
  ],
  "location": "VisaConfirmationTestSteps.iSelectReasonForVisit(String)"
});
formatter.result({
  "duration": 102338300,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTestSteps.iClickOnNextStepButton()"
});
formatter.result({
  "duration": 198891700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "longer than 6 months",
      "offset": 25
    }
  ],
  "location": "VisaConfirmationTestSteps.iSelectLengthOfStay(String)"
});
formatter.result({
  "duration": 59589600,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTestSteps.iClickOnNextStepButton()"
});
formatter.result({
  "duration": 205997700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Health and care professional",
      "offset": 19
    }
  ],
  "location": "VisaConfirmationTestSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 81355400,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTestSteps.iClickOnNextStepButton()"
});
formatter.result({
  "duration": 204844300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You need a visa to work in health and care",
      "offset": 25
    }
  ],
  "location": "VisaConfirmationTestSteps.iCanVerifyTheResult(String)"
});
formatter.result({
  "duration": 35616400,
  "status": "passed"
});
formatter.after({
  "duration": 743262000,
  "status": "passed"
});
formatter.before({
  "duration": 2227650000,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "A Columbian National Coming To The UK To Join A Partner For A Long Stay They Do Have An Article10Or20Card",
  "description": "",
  "id": "visa-confirmation-test;a-columbian-national-coming-to-the-uk-to-join-a-partner-for-a-long-stay-they-do-have-an-article10or20card",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I am on HomeOffice homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I click on start now button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select nationality \"Colombia\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on next step button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select reason for visit \"Join partner or family for a long stay\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on next step button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select Immigration Status \"Yes\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on next step button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I can verify the result \"You’ll need a visa to join your family or partner in the UK\"",
  "keyword": "Then "
});
formatter.match({
  "location": "VisaConfirmationTestSteps.iAmOnHomeOfficeHomepage()"
});
formatter.result({
  "duration": 39300,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTestSteps.iClickOnStartNowButton()"
});
formatter.result({
  "duration": 235344100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Colombia",
      "offset": 22
    }
  ],
  "location": "VisaConfirmationTestSteps.iSelectNationality(String)"
});
formatter.result({
  "duration": 76984100,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTestSteps.iClickOnNextStepButton()"
});
formatter.result({
  "duration": 183400200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Join partner or family for a long stay",
      "offset": 27
    }
  ],
  "location": "VisaConfirmationTestSteps.iSelectReasonForVisit(String)"
});
formatter.result({
  "duration": 126297300,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTestSteps.iClickOnNextStepButton()"
});
formatter.result({
  "duration": 207083500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 29
    }
  ],
  "location": "VisaConfirmationTestSteps.iSelectImmigrationStatus(String)"
});
formatter.result({
  "duration": 67326000,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationTestSteps.iClickOnNextStepButton()"
});
formatter.result({
  "duration": 219475500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You’ll need a visa to join your family or partner in the UK",
      "offset": 25
    }
  ],
  "location": "VisaConfirmationTestSteps.iCanVerifyTheResult(String)"
});
formatter.result({
  "duration": 44716900,
  "status": "passed"
});
formatter.after({
  "duration": 799123800,
  "status": "passed"
});
});