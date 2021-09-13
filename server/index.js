const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'client/dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Products
// Reviews
// Questions and Answers
// Interactions

app.listen(PORT, () => {
  console.log(`Listening at localhost:${PORT}!`)
});