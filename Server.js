 var path = require('path');
var express = require('express');
var logger = require('morgan');
var https = require('https');

//git
var qs = require('querystring');
var accessToken='';
var apiAccesUrl = 'https://api.github.com/user?access_token=';



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

//
app.post('/auth/github', function(req, res) 
{
  var accessTokenUrl = 'https://github.com/login/oauth/access_token';
  var userApiUrl = 'https://api.github.com/user';
  var params = {
    code: req.body.code,
    client_id: req.body.clientId,
    client_secret: config.GITHUB_SECRET,
    redirect_uri: req.body.redirectUri
  };

  // Step 1. Exchange authorization code for access token.
  request.get({ url: accessTokenUrl, qs: params }, function(err, response/*, accessToken*/) 
  {
    accessToken = qs.parse(accessToken);

    var headers = { 'User-Agent': 'Satellizer' };

    // Step 2. Retrieve profile information about the current user.
    request.get({ url: userApiUrl, qs: accessToken, headers: headers, json: true }, function(err, response, profile) 
    {

      // Step 3a. Link user accounts.
      if (req.header('Authorization')) 
      {
        User.findOne({ github: profile.id }, function(err, existingUser) 
        {
          if (existingUser) {
            return res.status(409).send({ message: 'There is already a GitHub account that belongs to you' });
          }
          var token = req.header('Authorization').split(' ')[1];
         
            user.github = profile.id;
            user.picture = user.picture || profile.avatar_url;
            user.displayName = user.displayName || profile.name;
           
          });
        };
      }); 
      });
    });

apiAccesUrl+=accessToken;

//app.get({ url: apiAccesUrl})

// Fire it up!
app.listen(3000);
console.log('Listening on port 3000');
console.log(accessToken);