// https://app-hrsei-api.herokuapp.com/api/fec2/:CAMPUS_CODE/
// http://example.com/page?parameter=value&also=another
// axios
// config
const axios = require('axios');
const config = require('../../config');

// GET reviews
// GET metadata
// 40344 - 40348
// product id - req.query
// https://app-hrsei-api.herokuapp.com/api/fec2/:CAMPUS_CODE/
// http://example.com/page?parameter=value&also=another
// `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=${body.product_id}&page=${body.page}&count=${body.count}&sort=${body.sort}`
const getReviews = (query, callback) => {
  // console.log(q);
  // console.log(q.meta);
  axios.get(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?product_id=${query.product_id}&page=${query.page}&count=${query.count}&sort=${query.sort}`,
    {
      headers: {
        'User-Agent': 'request',
        'Authorization': config.TOKEN,
      },
    })
    .then((response) => {
      console.log('getReviews API data: ' + response);
      callback(null, response.data);
    })
    .catch((error) => {
      console.log('Error getReviews API: ' + error);
      callback(error, null);
    })
};

const getMetaReviews = (query, callback) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta/?product_id=${query.product_id}`, {
    headers: {
      'User-Agent': 'request',
      'Authorization': config.TOKEN,
    }
  })
    .then((response) => {
      console.log('getMetaReviews API data: ' + response);
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
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews', body, {
    headers: {
      'Authorization': config.TOKEN,
    }
  })
    .then((response) => {
      console.log('postReviews API data: ' + response);
      callback(null, response.data);
    })
    .catch((error) => {
      console.log('Error postReviews API: ' + error);
      callback(error, null);
    })
}

// {
//   "product_id": 40344,
//     "rating": 5,
//       "summary": "abc",
//         "body": "zxy",
//           "recommend": true,
//             "name": "user",
//               "email": "@yahoo",
//                 "photos": ["img"],
//                   "characteristics": { "14": 5, "15": 5 }
// }

// PUT reviews
/*
PUT /reviews/:review_id/helpful
Response: Status: 204 NO CONTENT
*/

/*
PUT /reviews/:review_id/report
Response: Status: 204 NO CONTENT
*/

// const putReviews = (body, callback) => {
//   axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${body.review_id}/${body.type}`, {}, {
//     headers: {
//       Authorization: config.TOKEN,
//     }
//   })
//     .then((response) => {
//       console.log('putReviews API data: ' + response.data);
//       callback(null, response.data);
//     })
//     .catch((error) => {
//       console.log('Error putReviews API: ' + error);
//       callback(error, null);
//     })
// }

// localhost:3000/reviews?product_id=40344&page=1&count=5&sort="helpful"
// "review_id": 840797,
// localhost:3000/reviews/840797/helpful

const putReviews = (req, callback) => {
  const { review_id, method } = req.params;
  if (!method) { method = 'helpful'; }
  console.log(req.body);
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${review_id}/${method}`, req.body, {
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
{
    "product_id": 40344,
    "rating": 5,
    "summary": "abc",
    "body": "zxy",
    "recommend": true,
    "name": "user",
    "email": "john6fa@yahoo.com",
    "photos": [],
    "characteristics": { "14": 5, "15": 5 }
}


*/

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
