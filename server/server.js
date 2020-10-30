const express = require('express');
const path = require('path');
const axios = require('axios');
const {display, review, question, related} = require('./url.js');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const app = express();
const PORT = 3011;

app.use('/products/:id', express.static(PUBLIC_DIR))
app.use(express.static(PUBLIC_DIR));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/products/:id', (req, res) => {
  axios.get(`${display}${req.url}`)
  .then(({ data }) => res.send(data))
  .catch((err) => (err));
});
app.get('/api/reviews/:id', (req, res) => {
  axios.get(`${review}${req.url}`)
      .then(({ data }) => res.send(data))
      .catch((err) => (err));
});
app.get('/api/reviews/avg/:item', (req, res) => {
   axios.get(`${review}${req.url}`)
      .then(({ data }) => res.send(data))
      .catch((err) => (err));
});
app.get('/api/questions/:id', (req, res) => {
  axios.get(`${question}${req.url}`)
  .then(({ data }) => res.send(data))
  .catch((err) => (err));
});

app.get('/api/relatedItems/:product_id', (req, res) => {
  axios.get(`${related}${req.url}`)
  .then(({ data }) => res.send(data))
  .catch((err) => (err));
});

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});