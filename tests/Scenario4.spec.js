// Load Playwright
const { test, expect }= require('@playwright/test');

// Write Test
test('Make a GET request to the endpoint with an invalid competition name', async({request})=>{

  const endpoint = '/wc-poll-data/container/sport-standings?urn=urn:bbc:sportsdata:rugby-union:tournament:invalid';

  // Send GET request with required headers
  const getApiResponse = await request.get(endpoint, {
    headers: { 'x-test-harness': 'true' },
  });

  const responseBody = await getApiResponse.json()
  console.log(responseBody);

  expect(getApiResponse.ok()).toBeFalsy();
  expect(getApiResponse.status()).toBe(404);
  
  expect(responseBody).toHaveProperty('error');
  expect(responseBody.error).not.toBeNull();
})
