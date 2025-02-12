// Load Playwright
const { test, expect }= require('@playwright/test');

// Write Test
test('Make a GET request to the endpoint including the header x-test-harness set to true', async({request})=>{

  const endpoint = '/wc-poll-data/container/sport-standings?urn=urn:bbc:sportsdata:rugby-union:tournament:six-nations';

  // Send GET request with required headers
  const getApiResponse = await request.get(endpoint, {
    headers: { 'x-test-harness': 'true'},
  });

  // Parse response headers
  const responseHeaders = await getApiResponse.headers();

  const responseBody = await getApiResponse.json()
  console.log(responseBody);
  console.log('Response Status:', getApiResponse.status());
  console.log('Response Headers:', responseHeaders);

  // Assertions
  expect(getApiResponse.ok()).toBeTruthy(); 

  ///// The below responseheader assertions return as failed as the (Received path: []), the received path is undefined, 
  /////I attempted this in postman and received the same result

   expect(responseHeaders).toHaveProperty('x-test-harness');
   expect(responseHeaders['x-test-harness']).toBe('true'); 

})
