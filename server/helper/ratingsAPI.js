// https://app-hrsei-api.herokuapp.com/api/fec2/:CAMPUS_CODE/
// http://example.com/page?parameter=value&also=another
// axios
// config
const axios = require('axios');
const config = require('../config.js');

// GET reviews
// GET metadata

// https://app-hrsei-api.herokuapp.com/api/fec2/:CAMPUS_CODE/
// http://example.com/page?parameter=value&also=another
const getReviews = (body, callback) => {
  axios.get(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=${body.product_id}&page=${body.page}&count=${body.count}&sort=${body.sort}`, {
    headers: {
      'User-Agent': 'request',
      Authorization: config.TOKEN,
    }
  })
    .then((response) => {
      console.log('getReviews API data: ' + response.data);
      callback(null, response.data);
    })
    .catch((error) => {
      console.log('Error getReviews API: ' + error);
      callback(error, null);
    })
}

const getMetaReviews = (body, callback) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta/?product_id=${body.product_id}`, {
    headers: {
      'User-Agent': 'request',
      Authorization: config.TOKEN,
    }
  })
    .then((response) => {
      console.log('getMetaReviews API data: ' + response.data);
      callback(null, response.data);
    })
    .catch((error) => {
      console.log('Error getMetaReviews API: ' + error);
      callback(error, null);
    })
}


// POST reviews
/*
POST /reviews
Response: Status: 201 CREATED
*/
const postReviews = (body, callback) => {
  axios.put('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews', body, {
    headers: {
      Authorization: config.TOKEN,
    }
  })
    .then((response) => {
      console.log('postReviews API data: ' + response.data);
      callback(null, response.data);
    })
    .catch((error) => {
      console.log('Error postReviews API: ' + error);
      callback(error, null);
    })
}


// PUT reviews
/*
PUT /reviews/:review_id/helpful
Response: Status: 204 NO CONTENT
*/

/*
PUT /reviews/:review_id/report
Response: Status: 204 NO CONTENT
*/

const putReviews = (body, callback) => {
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${body.review_id}/${body.type}`, {}, {
    headers: {
      Authorization: config.TOKEN,
    }
  })
    .then((response) => {
      console.log('putReviews API data: ' + response.data);
      callback(null, response.data);
    })
    .catch((error) => {
      console.log('Error putReviews API: ' + error);
      callback(error, null);
    })
}

module.exports = {
  getReviews,
  getMetaReviews,
  postReviews,
  putReviews
}


/*
const axios = require('axios');
const config = require('../config.js');
const request = require('request');

let getReposByUsername = (username, callback) => {

  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  axios.get(options.url, { headers: options.headers })
    .then((response) => {
      callback(null, response.data);
    })
    .catch((error) => {
      console.log(error);
    })
}

module.exports.getReposByUsername = getReposByUsername;
*/
