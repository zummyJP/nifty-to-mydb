var NCMB = require('ncmb');

var application_key = process.env.APPLICATION_KEY;
var client_key      = process.env.CLIENT_KEY;
var ncmb = new NCMB(application_key, client_key);

var Heroku = ncmb.DataStore('Heroku');
var heroku = new Heroku;
heroku.set('text', 'Hello, from heroku.');
heroku.save()
  .then(function(o) {
    console.log(o)
  });
