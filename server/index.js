const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();
const products = require('./helper/productsAPI');

app.use(express.static(path.join(__dirname, '..', 'client/dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Products
// app.get(/products)
// app.get(/products/:product_id)
// app.get(/products/:product_id/styles)
//  app.get(/product/:product_id/related)
// Reviews
// Questions and Answers
// Interactions

app.listen(PORT, () => {
  console.log(`Listening at localhost:${PORT}!`)
});