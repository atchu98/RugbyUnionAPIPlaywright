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

1. Navigate to it:

2. Initialize a new Node.js project:

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

1. Create a `playwright.config.js` file:

   ```js
   import { defineConfig } from '@playwright/test';

   export default defineConfig({
     use: {
       baseURL: 'https://jsonplaceholder.typicode.com',
     },
   });
   ```

2. Run all tests using:

   ```sh
   npx playwright test
   ```

## Conclusion

You have successfully set up and executed an API test using Playwright in JavaScript!
