'use strict';

var app           = require('express')();
var cookieSession = require('cookie-session');
                    require('dotenv').load();

app.use(cookieSession({
  name: 'Cookies2',
  keys: [
    process.env.KEY_1,
    process.env.KEY_2,
    process.env.KEY_3
  ]
}));

app.get('/', function(req, res) {

  if(req.session.views) req.session.views = parseInt(req.session.views, 10) + 1;
  else req.session.views = 1;

  res.end('<html>You\'ve visited this page ' + (req.session.views) + ' times. <br /><button onclick="location.reload();">Refresh</button>&nbsp||&nbsp<a href="./logout">Clear Views</a></html>');
});

app.get('/logout', function(req, res) {

  req.session = null;
  res.end('<a href=\'/\'>Start Again</a>');
});

app.listen(8080);
