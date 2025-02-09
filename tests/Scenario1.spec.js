// Load Playwright
const { test, expect }= require('@playwright/test');

// Write Test
test('Make a GET request to the endpoint', async(request)=>{

  const getApiResponse = await request.get('six-nations')

  console.log(await getApiResponse.json());
})
