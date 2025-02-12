# Setting Up and Running a Playwright API Test in JavaScript

This guide explains how to set up and run an API test using Playwright in JavaScript.

## Prerequisites

- Install [Node.js](https://nodejs.org/) (includes npm)
- Basic knowledge of JavaScript

## Step 1: Install Node.js and npm

1. Download and install [Node.js](https://nodejs.org/) from the official website.
2. Verify installation by running:

   ```sh
   node -v  # Check Node.js version
   npm -v   # Check npm version
   ```

## Step 2: Set Up a New Node.js Project

1. Navigate to it

2. Initialize a Node.js project:

   ```sh
   npm init -y
   ```

   This generates a `package.json` file.

## Step 3: Install Playwright and Dependencies

1. Install Playwright:

   ```sh
   npm install -D @playwright/test
   ```

2. Install browsers required for Playwright:

   ```sh
   npx playwright install
   ```

## Step 4: Run the API Test

Execute the test using:

```sh
npx playwright test api.test.js
```

## Step 5: View Test Results

- If the test passes, Playwright will indicate success.
- If the test fails, error details will be displayed.

## Step 6: Optional - Use Playwright Test Runner

To configure Playwright for multiple tests:

1.  Run all tests using:

   ```sh
   npx playwright test
   ```

## Conclusion

You have successfully set up and executed an API test using Playwright in JavaScript!


## Manual Testing
```gherkin
Scenario: Validate API response (Scenario 1 & 2)

    Given  the endpoint has a competition name six-nations

    When I make a GET request to the six-nations endpoint

    Then the response status code should be 200

    And the response time should be below 1000ms

    And the id field should not be null or empty

    And the participants array should contain exactly 6 items
```
- Open Postman
- Send a **GET request** to the API endpoint.
  - https://web-cdn.api.bbci.co.uk/wc-poll-data/container/sport-standings?urn=urn:bbc:sportsdata:rugby-union:tournament:six-nations
- In the JSON response, verify that:
  -   Check the **status code** in the response. It should be `200 OK`.
  -  Measure the **response time** (should be < 1000ms).
  -   Each team has a valid `"id"` (not `null` or `""`).
  -   The `"participants"` array contains exactly 6 teams.
```gherkin
Scenario: Validate response data for different competition (Scenario 3)

    Given the endpoint has a different competition name i.e. World Cup

    When I make a GET request to the World Cup endpoint

    Then the response should contain information for World Cup
```
- Open Postman
- Send a **GET request** to the API endpoint.
  - https://web-cdn.api.bbci.co.uk/wc-poll-data/container/sport-standings?urn=urn:bbc:sportsdata:rugby-union:tournament:world-cup
- In the JSON response, verify that:
  -   Check the **status code** in the response. It should be `200 OK`.
  -   The `"name"` is not Six-Nations
  -   Check the Name is World Cup

```gherkin
Scenario: API handles an invalid competition gracefully (Scenario 4)

    Given I data endpoint is invalid

    When I make a GET request for invalid competition

    Then the response should contain status code is 404

    And the response body contains an error message
```
- Open Postman
- Send a **GET request** with an invalid competition name, such as:
-   `https://web-cdn.api.bbci.co.uk/wc-poll-data/container/sport-standings?urn=urn:bbc:sportsdata:rugby-union:tournament:invalid-competition`
-   Verify that the **status code** is `404 Not Found`.-   Check the response body for an appropriate **error message**.
