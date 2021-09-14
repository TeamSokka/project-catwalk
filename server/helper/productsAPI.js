const axios = require('axios');
const config = ('../../config.js');

const api = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

// const options = {
//   url: api,
//   headers: {
//     'User-Agent': 'request',
//     Authorization: `${config.TOKEN}`
//   }
// };

getProducts = (callback) => {
  axios
    .get(`${api}/products`, {
      headers: {
        'User-Agent': 'request',
        Authorization: `${config.TOKEN}`
      }
    })
    .then((res) => {
      consle.log('"GET all" processed. Response data:', res.data);
      callback(null, res.data);
    })
    .catch((err) => {
      console.error(err);
    });
};

getProductById = (id, callback) => {
  axios
    .get(`${api}/products/${id}`, {
      headers: {
        'User-Agent': 'request',
        Authorization: `${config.TOKEN}`
      }
    })
    .then((res) => {
      console.log('GET product processed. Response data:': res.data);
      callback(null, res.data);
    })
    .catch((err) => {
      console.error(err);
    })
}

getStyles = (id, callback) => {
  axios
    .get(`${api}/products/${id}/styles`, {
      headers: {
        'User-Agent': 'request',
        Authorization: `${config.TOKEN}`
      }
    })
    .then((res) => {
      console.log('GET style processed. Response data:', res.data);
      callback(null, res.data);
    })
    .catch((err) => {
      console.error(err);
    });
}
