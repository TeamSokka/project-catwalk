//https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp55/interactions
const axios = require('axios');
const config = require('../../config.js')

const postInteractions = () => {
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/interactions', body, {
    headers: {
      'Authorization': config.TOKEN,
    }
  })
    .then((response) => {
      // console.log('interactions response' + response.data);
      callback(null, response.data);
    })
    .catch((error) => {
      console.log('Failed Interaction response' + error);
      callback(error, null);
    })
}

module.exports = {
  postInteractions
}