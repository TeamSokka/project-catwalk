const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();

const axios = require('axios');
const config = require('../config.js');

const ratings = require('./helper/ratingsAPI');

app.use(express.static(path.join(__dirname, '..', 'client/dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Products
// Reviews
// REVIEWS WIDGET
// GET /reviews/ - OK: localhost:3000/reviews?product_id=40344&page=1&count=5&sort="helpful"
app.get('/reviews', (req, res) => {
  ratings.getReviews(req.query, (err, data) => {
    if (err) {
      console.log('Error app.get /reviews/ : ' + err);
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
})

// GET /reviews/meta - OK: localhost:3000/reviews/meta?product_id=40344
app.get('/reviews/meta', (req, res) => {
  ratings.getMetaReviews(req.query, (err, data) => {
    if (err) {
      console.log('Error app.get /reviews/meta : ' + err);
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
})

/*
{
    "product_id": "40345",
    "ratings": {
        "2": "1",
        "3": "1",
        "4": "2",
        "5": "8"
    },
    "recommended": {
        "false": "2",
        "true": "10"
    },
    "characteristics": {
        "Quality": {
            "id": 135223,
            "value": "4.2000000000000000"
        }
    }
}
*/


// POST /reviews
app.post('/reviews', (req, res) => {
  console.log(req);
  ratings.postReviews(req.body, (err, data) => {
    if (err) {
      console.log('Error app.post /reviews : ' + err);
      res.status(404).send(err);
    } else {
      res.status(201).send(data);
    }
  })
})


// PUT /reviews/:review_id/helpful
// PUT /reviews/:review_id/report
app.put(`/reviews/:review_id/:method`, (req, res) => {
  ratings.putReviews(req, (err, data) => {
    if (err) {
      console.log('Error app.post /reviews/ : ' + err);
      res.status(404).send(err);
    } else {
      res.status(204).send(data);
    }
  })
})




// Questions and Answers
// Interactions

app.listen(PORT, () => {
  console.log(`Listening at localhost:${PORT}!`)
});