const axios = require('axios');
const config = require('../../config');

// GET reviews
const getReviews = (query, callback) => {
  var optionalString = "";
  if (query.page !== undefined) {
    optionalString += `&page=${query.page}`;
  }

  if (query.count !== undefined) {
    optionalString += `&count=${query.count}`;
  }

  if (query.sort !== undefined) {
    optionalString += `&sort=${query.sort}`;
  }

  axios.get(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=${query.product_id}${optionalString}`,
    {
      headers: {
        'User-Agent': 'request',
        'Authorization': config.TOKEN,
      },
    })
    .then((response) => {
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
      callback(null, response.data);
    })
    .catch((error) => {
      console.log('Error getMetaReviews API: ' + error);
      callback(error, null);
    })
}


// POST reviews
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

// PUT reviews
const putReviews = (req, callback) => {
  const { review_id, method } = req.params;

  if (!method) {
    method = 'helpful';
  }

  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${review_id}/${method}`, req.body, {
    headers: {
      Authorization: config.TOKEN,
    }
  })
    .then((response) => {
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
