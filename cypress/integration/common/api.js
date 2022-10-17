import { fakeGetAPI,fakePOSTAPI } from '../apiMethods/api-methods'


And('@api I run fake API',async function(){
    const response =  await fakeGetAPI()
    cy.log(response.data.page)
    cy.log(response.data.data[0].email)
    const postapi = await fakePOSTAPI()
    cy.log(postapi.data.name)
  })