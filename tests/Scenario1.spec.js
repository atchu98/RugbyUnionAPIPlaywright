// Load Playwright
const { test, expect }= require('@playwright/test');

// Write Test
test('Make a GET request to the endpoint', async({request})=>{

  const startTime = Date.now();
  const endpoint = '/wc-poll-data/container/sport-standings?urn=urn:bbc:sportsdata:rugby-union:tournament:six-nations';


  const getApiResponse = await request.get(endpoint);  
  const endTime = Date.now();
  const responseTime = endTime-startTime
  console.log(await getApiResponse.json());
  console.log(responseTime);
  expect(getApiResponse.ok()).toBeTruthy();
  expect(getApiResponse.status()).toBe(200);
  expect(responseTime).toBeLessThan(1000);
  
})
