// server.js
// where your node app starts

// init project
var parser = require('ua-parser-js');
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.route("/api/whoami").get(function(req, res){
  var language = parser(req.headers['accept-language']).ua.split(",")[0];
  var ipAdress = parser(req.headers['x-forwarded-for']).ua.split(",")[0];
  var software = parser(req.headers['user-agent']).os.name + " " + parser(req.headers['user-agent']).os.version;

var ua = {
      "ip:": ipAdress,
      "language: ": language,
      "software: ":software
  
}
 res.end(JSON.stringify(ua, null, '  '));
 
});




// Simple in-memory store for now


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
