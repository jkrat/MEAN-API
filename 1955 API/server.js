var express = require("express");
var app = express();

var bodyParser = require('body-parser');
var session = require('express-session')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({
    secret: "dortmund",
    resave: false,
    saveUniitialze:true,
    cookie:{maxAge:600000}
}));
app.use(express.static(__dirname + "/static"));

// ----------- requirements ------------------

require('./server/config/routes.js')(app);
require('./server/config/mongoose.js');

// ---------------------------

