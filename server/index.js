const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();

const axios = require('axios');
const config = require('../config.js');

app.use(express.static(path.join(__dirname, '..', 'client/dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// GET /reviews/
app.get('/reviews/', (req, res) => {
  axios.get(options.url, { headers: options.headers })
    .then((response) => {
      callback(null, response.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    })
})

// GET /reviews/meta

app.listen(PORT, () => {
  console.log(`Listening at localhost:${PORT}!`)
});