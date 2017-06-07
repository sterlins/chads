

var express = require('express')
var app = express();
var bodyParser = require('body-parser');

var router = express.Router();              // get an instance of the express Router

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get('/', function (req, res) {
  res.json({message: 'hello world'})
})

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})









// var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
// var router = express.Router();              // get an instance of the express Router
//
// // test route to make sure everything is working (accessed at GET http://localhost:8080/api)
// router.get('/', function(req, res) {
//     res.json({ message: 'hooray! welcome to our api!' });
// });

// more routes for our API will happen here
