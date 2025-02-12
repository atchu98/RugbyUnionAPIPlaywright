Feature: Scenarios

Scenario: Validate API response (Scenario 1 & 2)
    Given  the endpoint has a competition name six-nations
    When I make a GET request to the six-nations endpoint
    Then the response status code should be 200
    And the response time should be below 1000ms
    And the id field should not be null or empty
    And the participants array should contain exactly 6 items


Scenario: Validate response data for different competition (Scenario 3)
    Given the endpoint has a different competition name i.e. World Cup
    When I make a GET request to the World Cup endpoint
    Then the response should contain information for World Cup


Scenario: API handles an invalid competition gracefully (Scenario 4)
    Given I data endpoint is invalid
    When I make a GET request for invalid competition
    Then the response should contain status code is 404
    And the response body contains an error message

