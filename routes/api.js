var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var axios = require('axios');
var async = require('async');
var cheerio = require('cheerio');

var Dataset = require('../models/dataset');

router.get('/get_all', function(req, res) {
  Dataset.find({}, null, {sort: {name: 1}}, function(err, datasetInfos) {
    if (err) res.send(err);
    res.json(datasetInfos);
  });
});

router.get('/backup_all', function(req, res) {
  axios.get('https://www.gov.ph/data/search/type/dataset').then(
    function(axiosResponse) {
      Dataset.collection.drop();
      var $ = cheerio.load(axiosResponse.data);
      var count = $('.view-header').text().match(/(\d+) results/)[1];
      var numPages = Math.floor((Number(count) + 9) / 10);
      console.log(numPages);
      saveAllDatasets(numPages, function() {
        res.send('hello');
      });
    }
  ).catch(function(err) {
    console.error(err);
    res.status(404);
    res.send('404 cannot access data.gov.ph');
  });
})

var saveAllDatasets = function(numPages, callback) {
  var range = Array.apply(null, Array(numPages)).map(function (_, i) {return i;});
  async.map(range, saveDatasetInfoPage, callback);
}

var saveDatasetInfoPage = function(i, callback) {
  console.log("saving for page: " + i);
  axios.get('https://www.gov.ph/data/search/type/dataset', {
    params: {
      query: '',
      sort_by: 'changed',
      sort_order: 'ASC',
      q: 'search/type/dataset',
      page: '0,' + i
    }
  }).then(function(axiosResponse) {
    var $ = cheerio.load(axiosResponse.data);
    var datasetInfos = $('.node-title').map(function() {
      return {
        name: $(this).text(),
        link: "https://www.gov.ph" + $(this).html().match(/href="(.*)" title/)[1]
      };
    }).toArray();
    async.map(datasetInfos, saveDatasetInfo, callback);
  }).catch(function(err) {
    console.error(err);
  });
}

var saveDatasetInfo = function(obj, cb) {
  var datasetEntry = new Dataset(obj);
  datasetEntry.save(function(err, saveResult) {
    if (err) console.error(err);
    console.log(obj.name);
    cb(null, obj.name);
  });
}

module.exports = router;
