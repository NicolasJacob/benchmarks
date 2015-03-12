// Copyright (c) 2015, <your name>. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

import 'dart:io';
import 'dart:convert';
import 'package:args/args.dart';
import 'package:shelf/shelf.dart' as shelf;
import 'package:shelf/shelf_io.dart' as io;
import 'package:shelf_route/shelf_route.dart';
import 'package:mongo_dart/mongo_dart.dart';

main(List<String> args) async {
  var parser = new ArgParser()
      ..addOption('port', abbr: 'p', defaultsTo: '8080')
      ..addOption('db', abbr: 'd', defaultsTo: 'mongodb://127.0.0.1:27017/dev');;

  var result = parser.parse(args);

  var port = int.parse(result['port'], onError: (val) {
    stdout.writeln('Could not parse port value "$val" into a number.');
    exit(1);
  });


  var db =  new Db(result['db']);
  var objectIds = [];
  var testCollection = db.collection("test");

  await db.open();
  print("connect");
  for(var f in ['data1.json', 'data2.json']) {
    var obj = await new File('data/$f')
        .readAsString()
        .then(JSON.decode);
      print("data read");

      obj['_id'] = new ObjectId();
      objectIds.add(obj['_id']);

      await testCollection.insert(obj);
      print("Data inserted.");
  }




  getObject(num) {
     return (shelf.Request request) async {
      var res = await testCollection.findOne({'_id': objectIds[num-1]});
      return new shelf.Response.ok(JSON.encode(res));
     };
   }


  var _router = router();
  for (var i in [1, 2]) {
    _router.add('/mongo$i', ['GET'], getObject(i));
  }

  var handler = const shelf.Pipeline()
      //.addMiddleware(shelf.logRequests())
      .addHandler(_router.handler);

  io.serve(handler, 'localhost', port).then((server) {
    print('Serving at http://${server.address.host}:${server.port}');
  });


}

