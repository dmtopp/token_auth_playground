// require our dependencies
require('dotenv').config();
var express    = require('express'),
    bodyParser = require('body-parser'),
    exphbs     = require('express-handlebars'),
    app        = express();

// require the db
require('./db/database.js');

// set public and views folders
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');

// set up handlebars
app.engine('hbs', exphbs({
  defaultLayout: 'index',
  extname: 'hbs'
}));
app.set('view engine', 'hbs');

// configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// map controllers
app.use('/', require('./controllers/root_controller'));
app.use('/users', require('./controllers/users_controller'));

// start the server
var server = app.listen(3000, function(){
  console.log('The server is listening on port ' + server.address().port);
})
