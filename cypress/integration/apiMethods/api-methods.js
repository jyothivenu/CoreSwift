let axios = require("axios");

const fakeGetAPI=() => {
  return axios({
    method: 'GET',
    url: 'https://reqres.in/api/users?page=2',
    headers: {
         'Content-Type': 'application/json' 
    },
  })
}

const fakePOSTAPI=() => {
    return axios({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      data: '{"name": "morpheus","job": "leader"}',
      headers: {
           'Content-Type': 'application/json' 
      },
    })
  }

export { fakeGetAPI,fakePOSTAPI }