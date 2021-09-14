const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();
const questions = require('./helper/questionsAPI');

app.use(express.static(path.join(__dirname, '..', 'client/dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Products
// Reviews
// Questions and Answers

// GET Questions
app.get('/qa/questions', (req, res) => {
  // console.log('product id', req.query);
  let id = req.query.product_id;
  questions.getQuestions(id, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// GET Answers
// app.get('/qa/questions/:question_id/answers', (req, res) => {
//   let id = {
//     product: req.query.product_id,
//     question: req.params.question_id,
//   };
//   console.log('product id', req.query);
//   console.log('q id ', req.params.question_id);
//   questions.getAnswers(id, (err, data) => {
//     if (err) {
//       res.status(400).send(err);
//     } else {
//       res.status(200).send(data);
//     }
//   });
// });

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

app.listen(PORT, () => {
  console.log(`Listening at localhost:${PORT}!`);
});
