const express = require('express');
const app = express();
const compression = require('compression');
const axios = require('axios');

const carouselEP = 'http://34.233.106.94/api/images/';
const reviewsEP = 'http://ec2-18-223-135-118.us-east-2.compute.amazonaws.com/api/reviews/'
const checkoutEP = 'http://ec2-18-223-214-235.us-east-2.compute.amazonaws.com/api/checkout/'

app.use(compression());
app.use('/:id',express.static(__dirname + '/../public/'));

app.get('/api/images/:id', function (req, res) {
  let id = req.params.id;
  axios.get(carouselEP + id).then((result) => {
    res.send(result.data)
  }).catch((err) => {
    console.log("Error getting images", err)
  })
});

app.get('/api/checkout/:id', function (req, res) {
  let id = req.params.id;
  axios.get(checkoutEP + id).then((result) => {
    res.send(result.data)
  }).catch((err) => {
    console.log("Error getting images", err)
  })
});

app.get('/api/reviews/:id', function (req, res) {
  let id = req.params.id;
  axios.get(reviewsEP + id).then((result) => {
    res.send(result.data)
  }).catch((err) => {
    console.log("Error getting reviews", err)
  })
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('proxy listening on port 3000');
});