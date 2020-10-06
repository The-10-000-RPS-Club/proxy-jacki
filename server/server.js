const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../public')));

// routing each service here
// this is where that documentation will be helpful

// Review Service Routes
app.get('/api/products/reviews/:id/:count/:sort', (req, res) => {
  res.redirect(`http://localhost:3005${req.url}`);
});
app.get('/api/products/reviews/avg/:item', (req, res) => {
   res.redirect(`http://localhost:3005${req.url}`);
});
// Display Service Routes
app.get('/api/products/:id', async (req, res) => {
  res.redirect(`http://localhost:3002${req.url}`);
});
// Questyions Service Routes
app.get('/api/products/questions/sort/:sort', (req, res) => {
  res.redirect(`http://localhost:3001${req.url}`);
});

app.get('/api/products/questions/:question_id', (req, res) => {
  res.redirect(`http://localhost:3001${req.url}`);
});

//Realted Items Routes
app.get('/api/products/:id/relatedItems', (req, res) => {
  res.redirect(`http://localhost:3004${req.url}`);
});


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});