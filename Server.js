var path = require('path');
var express = require('express');
var logger = require('morgan');
var firebase = require('firebase');

var app = express();

var config = {
    apiKey: "AIzaSyAaK_3MRFBRGEMgQ6C6ZpjlRTIXo4pQURI",
    authDomain: "automatiseringbap.firebaseapp.com",
    databaseURL: "https://automatiseringbap.firebaseio.com",
    storageBucket: "automatiseringbap.appspot.com",
    messagingSenderId: "402713955204"
  };
firebase.initializeApp(config);

// Log the requests
app.use(logger('dev'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public'))); 

// Route for everything else.
app.get('*', function(req, res){
  res.send('Hello World');
});

// Fire it up!
app.listen(3000);
console.log('Listening on port 3000');