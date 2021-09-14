const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();
const products = require('./helper/productsAPI.js');

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

app.get('/product/:product_id/related', (req, res) => {
  product.getRelated(req.params.product_id, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// Reviews
// Questions and Answers
// Interactions

app.listen(PORT, () => {
  console.log(`Listening at localhost:${PORT}!`)
});