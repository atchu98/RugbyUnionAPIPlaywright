// Load Playwright
const { test, expect }= require('@playwright/test');

// Write Test
test('Make a GET request to the endpoint, Verify endpoint', async({request})=>{

  const endpoint = '/wc-poll-data/container/sport-standings?urn=urn:bbc:sportsdata:rugby-union:tournament:six-nations';
  const getApiResponse = await request.get(endpoint);


  const responseBody = await getApiResponse.json();
  console.log(responseBody);

  expect(getApiResponse.ok()).toBeTruthy();
  const id = responseBody.tournaments[0].id;
  
  expect(id).not.toBeNull();
  expect(id).not.toBe('');
  const participants = responseBody.tournaments[0].stages[0].rounds[0].participants;
  console.log(participants.length)
  expect(participants.length).toBe(6);
  
})
