//
// serve.coffee
// short and sweet static asset server for a local directory
// brad osgood 09-13-13
//

var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 3000;
app.set('port', port);
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, '')));

app.listen(port, function() {
    console.log("static server listening on " + port);
});