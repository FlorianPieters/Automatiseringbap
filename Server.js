var path = require('path');
var express = require('express');
var logger = require('morgan');
var https = require('https');

var qs = require('querystring');




var app = express();

// Log the requests
app.use(logger('dev'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public'))); 

// Route for everything else.
app.get('*', function(req, res){
  res.send('Hello World');
});






// github login
module.exports = {
TOKEN_SECRET: process.env.TOKEN_SECRET ||'your_token',
//oauth 2.0
GITHUB_SECRET: process.env.GITHUB_SECRET || '93ae0ea520085b39e117308d2f856f037ded2659'
};



// Fire it up!
app.listen(3000);
console.log('Listening on port 3000');
//console.log(aToken[0]);

