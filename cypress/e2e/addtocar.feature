Feature: validate the purchase of items

Background:
    Given An user is at the saucelabs login page

Scenario: successful purchase
    When add two producto to the buy car 
    Then will complete the purchase successfully
