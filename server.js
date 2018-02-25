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

// var ua = parser(req.headers['user-agent']);
    // write the result as response
    res.end(JSON.stringify(parser(req.getResult())));
})


// Simple in-memory store for now


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
