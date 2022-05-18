Feature: Visa Confirmation Test
  As a user I want to check visa confirmation on Homeoffice website

  @Smoke
  Scenario: An Australian Coming to UK For Tourism
    Given   I am on HomeOffice homepage
    And     I click on start now button
    And     I select nationality "Australia"
    And     I click on next step button
    And     I select reason for visit "Tourism or visiting family and friends"
    And     I click on next step button
    Then    I can verify the result "You will not need a visa to come to the UK"

  @Sanity
  Scenario: A Chilean Coming To The UK For Work And Plans On Staying For Longer Than Six Months
    Given   I am on HomeOffice homepage
    And     I click on start now button
    And     I select nationality "Chile"
    And     I click on next step button
    And     I select reason for visit "Work, academic visit or business"
    And     I click on next step button
    And     I select length of stay "longer than 6 months"
    And     I click on next step button
    And     I select job type "Health and care professional"
    And     I click on next step button
    Then    I can verify the result "You need a visa to work in health and care"

  @Regression
  Scenario: A Columbian National Coming To The UK To Join A Partner For A Long Stay They Do Have An Article10Or20Card
    Given   I am on HomeOffice homepage
    And     I click on start now button
    And     I select nationality "Colombia"
    And     I click on next step button
    And     I select reason for visit "Join partner or family for a long stay"
    And     I click on next step button
    And     I select Immigration Status "Yes"
    And     I click on next step button
    Then    I can verify the result "You’ll need a visa to join your family or partner in the UK"

