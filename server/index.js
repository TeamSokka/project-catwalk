const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();

const axios = require('axios');
const config = require('../config.js');

const products = require('./helper/productsAPI.js');
const ratings = require('./helper/ratingsAPI');
const questions = require('./helper/questionsAPI');
const interactions = require('./helper/interactionsAPI');

app.use(express.static(path.join(__dirname, '..', 'client/dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Products
app.get('/products', (req, res) => {
  products.getProducts((err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  })
})

app.get('/products/:product_id', (req, res) => {
  products.getProductById(req.params.product_id, (err, data) => {
    if (err) {
      // console.log(req.params);
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  })
})

app.get('/products/:product_id/styles', (req, res) => {
  products.getStyles(req.params.product_id, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/products/:product_id/related', (req, res) => {
  products.getRelated(req.params.product_id, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

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

// GET Questions
app.get('/qa/questions', (req, res) => {
  // console.log('product id', req.query);
  let id = req.query.product_id || 40344;
  questions.getQuestions(id, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// GET Answers
app.get('/qa/questions/:question_id/answers', (req, res) => {
  // let id = {
  //   product: req.query.product_id || 40344,
  //   question: req.params.question_id,
  // };
  console.log('product id', req.query);
  console.log('q id ', req.params.question_id);
  questions.getAnswers(req.params.question_id, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// POST Questions
app.post('/qa/questions', (req, res) => {
  res.status(201).send('Post Qs from Server!');
});

// POST Answers
app.post('/qa/questions/:question_id/answers', (req, res) => {
  res.status(201).send('POST As from Server!');
});

// PUT Helpful Qs
app.put('/qa/questions/:question_id/helpful', (req, res) => {
  res.status(204).send('PUT helpful');
});

// PUT Report Qs
app.put('/qa/questions/:question_id/report', (req, res) => {
  res.status(204).send('PUT report');
});

// PUT Helpful As
app.put('/qa/answers/:answer_id/helpful', (req, res) => {
  res.status(204);
});

// PUT Report As
app.put('/qa/answers/:answer_id/report', (req, res) => {
  res.status(204);
});

// Interactions

//POST Interactions
app.post('/interactions', (req, res) => {
  interactions.postInteractions(something, (err, data) => {
    if (err) {
      console.log('Failed to Post interactions', err);
      res.send(422);
    } else {
      res.send(201).send(data);
    }
  })
})

app.listen(PORT, () => {
  console.log(`Listening at localhost:${PORT}!`);
});
