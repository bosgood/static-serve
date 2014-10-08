#!/usr/bin/env node
//
// serve.coffee
// short and sweet static asset server for a local directory
// brad osgood 09-13-13
//

var express = require('express');
var path = require('path');
var app = express();
console.log(process.argv);
var port = parseInt(process.env.PORT || process.argv[2] || 3000, 10);
app.set('port', port);
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
var servePath = process.argv[3] || '';
app.use(express.static(servePath));

app.listen(port, function() {
  console.log("static server listening on " + port);
  console.log("serving " + __dirname + " from " + servePath);
});
