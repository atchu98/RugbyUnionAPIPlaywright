// Load Playwright
const { test, expect }= require('@playwright/test');

// Write Test
test('Make a GET request to a new endpoint, Verify endpoint', async({request})=>{

  const endpoint = '/wc-poll-data/container/sport-standings?urn=urn:bbc:sportsdata:rugby-union:tournament:world-cup';
  const getApiResponse = await request.get(endpoint);


  const responseBody = await getApiResponse.json();
  console.log(responseBody);

  expect(getApiResponse.ok()).toBeTruthy();
  const name = responseBody.tournaments[0].name;
  
  expect(name).not.toBeNull();
  expect(name).not.toBe('');
  expect(name).not.toBe('Six Nations');
  expect(name).toBe('World Cup');
  
})
