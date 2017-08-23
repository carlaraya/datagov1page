var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var axios = require('axios');
var async = require('async');

var Dataset = require('../models/dataset');

router.get('/all', function(req, res) {
  axios.get('https://www.gov.ph/data/search/type/dataset', {
    params: {
      query: '',
      sort_by: 'changed',
      sort_order: 'ASC',
      q: 'search/type/dataset',
      page: '0,1'
    }
  }).then(function(axiosResponse) {
    res.send(axiosResponse.data);
  }).catch(function(err) {
    console.error(err);
    res.status(404);
    res.send('404 cannot access data.gov.ph');
  });
})

module.exports = router;
