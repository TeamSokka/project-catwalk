const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();

const axios = require('axios');
const config = require('../config.js');

const interactions = require('./helper/interactionsAPI');

app.use(express.static(path.join(__dirname, '..', 'client/dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Products
// Reviews
// Questions and Answers
// Interactions

//POST Interactions
app.post('/interactions', (req, res) => {
  interactions.postInteractions(something, (err, data) => {
    if (err) {
      console.log('Failed to Post interactions', err);
      res.send(422);
    } else {
      res.send(201);
    }
  })
})

app.listen(PORT, () => {
  console.log(`Listening at localhost:${PORT}!`)
});