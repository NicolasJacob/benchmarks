
/* globals require, console*/
/* eslint quotes: 0, no-console: 0, no-shadow: 0, dot-notation: 0, global-strict: 0*/
'use strict';
var express = require('express'),
    http = require('http'),
    mongo = require("mongodb");

mongo.connect('mongodb://127.0.0.1:27017/dev', function(err, db) {
  if (err) {
    throw err;
  }

  var testCollection = db.collection('test');
  var data = [ require('../data/data1.json'), require('../data/data2.json')];
  var objectIds = [];
  var i = 1;
  data.forEach(function(doc) {
    var num = i;
    i++;
    testCollection.insert(doc, function(err, result) {
      if (err) {
        throw err;
      }
      objectIds[num] = result[0]['_id'];
      console.log(num, objectIds[num]);
    });
  });

  function getObject(num) {
    return function(req, res, next) {
      if (err) {
        throw next(err);
      }
      testCollection.findOne({_id: objectIds[num]}, function(err, data) {
        res.send(data);
      });
    };
  }

  var app = express();
  var server = http.createServer(app);
  server.listen(1234, 'localhost', function() {
    console.info('IWe core listening on port %s', 1234);
  });
  app.get('/mongo1', getObject(1));
  app.get('/mongo2', getObject(2));


});
