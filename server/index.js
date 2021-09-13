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

// Main
// Helper folder
// divide main into widget components

// REVIEWS WIDGET
// GET /reviews/
app.get('/reviews', (req, res) => {
  ratings.getReviews(req.body, (err, data) => {
    if (err) {
      console.log('Error app.get /reviews/ : ' + err);
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
})

// GET /reviews/meta
app.get('/reviews/meta', (req, res) => {
  ratings.getMetaReviews(req.body, (err, data) => {
    if (err) {
      console.log('Error app.get /reviews/meta : ' + err);
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
})

// POST /reviews
app.post('/reviews', (req, res) => {
  ratings.postReviews((err, data) => {
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
app.put('/reviews/', (req, res) => {
  ratings.putReviews(req.body, (err, data) => {
    if (err) {
      console.log('Error app.post /reviews/ : ' + err);
      res.status(404).send(err);
    } else {
      res.status(204).send(data);
    }
  })
})

// Products
// Reviews
// Questions and Answers
// Interactions

app.listen(PORT, () => {
  console.log(`Listening at localhost:${PORT}!`)
});