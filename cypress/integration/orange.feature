Feature: Sign up OrangeHRM

        Scenario: Navigating to OrangeHRM website
        Given I navigate to OrangeHRM website page
        When I enter a valid username and password
        When I click the Log in button
        Then I should see the homepage after login