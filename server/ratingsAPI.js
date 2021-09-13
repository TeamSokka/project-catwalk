// https://app-hrsei-api.herokuapp.com/api/fec2/:CAMPUS_CODE/

// axios
// config
const axios = require('axios');
const config = require('../config.js');

// Come back

// GET reviews

/* GET /reviews/
Parameter	    Type	       Description
page         	integer	     Selects the page of results to return. Default 1.
count       	integer	     Specifies how many results per page to return. Default 5.
sort	        text	       Changes the sort order of reviews to be based on "newest", "helpful", or "relevant"
product_id  	integer	     Specifies the product for which to retrieve reviews.

Response: Status: 200 OK
*/



// GET metadata
/*
GET /reviews/meta
Parameter	    Type     	Description
product_id	  integer	  Required ID of the product for which data should be returned

Response: Status: 200 OK
*/


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
    callback(null, response);
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
