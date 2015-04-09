
/* globals require, console*/
/* eslint quotes: 0, no-console: 0, no-shadow: 0, dot-notation: 0, global-strict: 0*/
'use strict';
var express = require('express'),
    http = require('http'),
    _ = require('lodash'),
    Chance = require('chance'),
    mongo = require("mongodb");

mongo.connect('mongodb://127.0.0.1:27017/dev', function(err, db) {
  if (err) {
    throw err;
  }
  var chance = new Chance();
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


  var bigList = chance.n(function() { return chance.natural({max: 100});}, 10000);
  bigList[5000] = 101;

  var calc = [ {
    'name': 'firstWhere(list)',
    'func': function(req, res, next) {
        res.send(_.find(bigList, function(e) { return e === 101;}));
      }
    },
    {
    'name': 'make big list',
    'func': function(req, res, next) {
        res.send(chance.n(function() { return chance.natural({max: 100});}, 10000));
      }
    }
  ];

  var app = express();
  var server = http.createServer(app);
  server.listen(1234, 'localhost', function() {
    console.info('IWe core listening on port %s', 1234);
  });
  app.get('/mongo1', getObject(1));
  app.get('/mongo2', getObject(2));
  app.get('/calc1',  calc[0].func);
  app.get('/calc2',  calc[1].func);

});
