const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const compression = require('compression');
const {display, review, question, related} = require('./url.js');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../public')));


// Review Service Routes
app.get('/api/products/reviews/:id/:count/:sort', (req, res) => {
  // res.redirect(`http://localhost:3005${req.url}`);
  axios.get(`${review}:80${req.url}`)
      .then(({ data }) => res.send(data))
      .catch((err) => (err));
});
app.get('/api/products/reviews/avg/:item', (req, res) => {
  //  res.redirect(`http://localhost:3005${req.url}`);
   axios.get(`${review}:80${req.url}`)
      .then(({ data }) => res.send(data))
      .catch((err) => (err));
});
// Display Service Routes
app.get('/api/products/:id', async (req, res) => {
  // res.redirect(`http://localhost:3002${req.url}`);
  axios.get(`${display}:80${req.url}`)
  .then(({ data }) => res.send(data))
  .catch((err) => (err));
});
// Questyions Service Routes
app.get('/api/products/questions/sort/:sort', (req, res) => {
  // res.redirect(`http://localhost:3001${req.url}`);
  axios.get(`${question}:80${req.url}`)
  .then(({ data }) => res.send(data))
  .catch((err) => (err));
});

app.get('/api/products/questions/:question_id', (req, res) => {
  // res.redirect(`http://localhost:3001${req.url}`);
  axios.get(`${question}:80${req.url}`)
  .then(({ data }) => res.send(data))
  .catch((err) => (err));
});

//Realted Items Routes
app.get('/api/products/:id/relatedItems', (req, res) => {
  //res.redirect(`http://localhost:3004${req.url}`);
  axios.get(`${related}:80${req.url}`)
  .then(({ data }) => res.send(data))
  .catch((err) => (err));
});


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});