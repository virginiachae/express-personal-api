// require express and other modules
var express = require('express'),
    app = express();



// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/virginiachae/express-personal-api/blob/master/README.md",
    baseUrl: "https://protected-earth-70884.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "My Profile"},
      {method: "GET", path: "/api/cakes", description: "Get list of all cakes"},
      {method: "POST", path: "/api/cakes", description: "Create a new cake. Yum!"}
    ]
  })
});

//displaying my profile on the api endpoint as JSON
app.get('/api/profile', function apiProfile(req, res) {
  db.Profile.find(function(err, profile) {
    res.json(profile);
  })
});

//displaying all cakes
app.get('/api/cakes', function apiCakes (req, res) {
  db.Cake.find(function(err, cake) {
    res.json(cake);
  })
})

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
